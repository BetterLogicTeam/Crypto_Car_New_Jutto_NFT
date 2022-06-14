
import React, { useState } from 'react';
// import { contractAddress, contractAbi } from "../Utils/Constants";
import { loadWeb3 } from '../Api/Api';
import './Minnt.css'
import { toast } from 'react-toastify';
import Modal from 'react-bootstrap/Modal'
import axios from 'axios'


import Web3 from 'web3';
import { wireNftContractAbi, wireNftContractAddress, wireTokenAbi, wireTokenAddress } from '../Utils/constant';
const webSupply = new Web3('https://rinkeby-light.eth.linkpool.io/');

function PublicMint() {

    //
    let [value, setvalue] = useState(1);
    let [supply, setSupply] = useState();
    let [mintPriceBnb, setMintPriceBnb] = useState(0);
    let [mintPriceBUSD, setMintPriceBUSD] = useState(0);
    let [mintPriceWire, setmintPriceWire] = useState(0);
    let [btnOne, setButtonOne] = useState("Mint With BNB");
    let [btnTwo, setButtonTwo] = useState("Mint With WHE");
    let [btnThree, setButtonThree] = useState("Mint With Busd")
    const [inputdatahere, setinputdatahere] = useState(" ")
    const [showModal2, setShowModal2] = useState(false)

    
    

    const minus = () => {
        if (value >= 2) {
            setvalue(value - 1)

        }
    }
    const plus = () => {
        setvalue(value + 1)

    }
    // const mint = async () => {
    //     try {
    //         const web3 = window.web3;
    //         let myacc = await loadWeb3();

    //         let contractOf = new web3.eth.Contract(contractAbi, contractAddress);
    //         await contractOf.methods.publicMint(value).send({
    //             from: myacc,
    //             value: priceMint * value
    //         })
    //         toast.success("Minting Successed 👍")

    //     } catch (e) {
    //         toast.error("Minting Rejected 👎")

    //     }
    // }

    const myMintWire = async () => {

        setShowModal2(false)



        let acc = await loadWeb3();
        // console.log("ACC=",acc)
        if (acc == "No Wallet") {
            toast.error("No Wallet Connected")
        }
        else if (acc == "Wrong Network") {
            toast.error("Wrong Newtwork please connect to test net")
        } else {
            try {
                // console.log("inputdatahere", inputdatahere);

                let res = await axios.get(`https://whenftapi.herokuapp.com/checkuser?id=${inputdatahere}`)
                // console.log("resdatahere", res.data.data);
                res = res.data.data;
                if (res == 1) {
                    try {
                        setButtonTwo("Please Wait While Processing")
                        // console.log("mintFor Wire");
                        const web3 = window.web3;
                        let nftContractOf = new web3.eth.Contract(wireNftContractAbi, wireNftContractAddress);
                        let wireContractOf = new web3.eth.Contract(wireTokenAbi, wireTokenAddress);
                        let totalnft = await nftContractOf.methods.MaxLimitPerTransaction().call();

                        // console.log("totalnft", totalnft);

                        if (value > totalnft) {
                            toast.error(`Maximum Limit is ${totalnft} `)
                        } else {
                            let userBusdBalance = await wireContractOf.methods.balanceOf(acc).call();
                            // console.log("userBusdBalance",userBusdBalance);
                            // userBusdBalance = web3.utils.fromWei(userBusdBalance)
                            let maxSupply = await nftContractOf.methods.maxsupply().call();
                            let ttlSupply = await nftContractOf.methods.totalSupply().call();
                            let paused = await nftContractOf.methods.paused().call();
                            let maxLimitprTransaction = await nftContractOf.methods.MaxLimitPerTransaction().call();
                            let mintingWirePrice = await nftContractOf.methods.ValueinWHE().call()
                            // mintingWirePrice = mintingWirePrice[1]
                            mintingWirePrice = web3.utils.fromWei(mintingWirePrice);
                            // console.log("mintingWirePrice", mintingWirePrice);
                            mintingWirePrice = parseFloat(mintingWirePrice);
                            let totalMintingPriceWire = value * mintingWirePrice
                            let a=1
                            totalMintingPriceWire=totalMintingPriceWire+(+a)
                            totalMintingPriceWire = web3.utils.toWei(totalMintingPriceWire.toString())
                           
                            console.log("userBusdBalance",userBusdBalance);
                            console.log("totalMintingPriceWire",totalMintingPriceWire);

                            // console.log("totalMintingPriceWire",totalMintingPriceWire);
                            // if (llisted_check == 'true') {

                            if (parseInt(ttlSupply) < parseInt(maxSupply)) {
                                if (paused == false) {
                                    if (value < parseInt(maxLimitprTransaction)) {
                                        if (parseFloat(userBusdBalance) >= totalMintingPriceWire) {
                                            // console.log("Minting Value= ", value);
                                            // console.log("Minting totalMintingPriceWire= ", totalMintingPriceWire);



                                            await wireContractOf.methods.approve(wireNftContractAddress, totalMintingPriceWire).send({
                                                from: acc
                                            })
                                            toast.success("Approve Confirmed")

                                            // console.log("totalMintingPriceWire", totalMintingPriceWire);
                                            // console.log("value", value);
                                            let data_value = value


                                            let hash = await nftContractOf.methods.mint_with_MMX(data_value, totalMintingPriceWire).send({
                                                from: acc,
                                            })
                                            toast.success("Transaction Confirmed")

                                            hash = hash.transactionHash
                                            let postapi = await axios.post('https://whenftapi.herokuapp.com/buynfttoken', {
                                                "uid": inputdatahere,
                                                "address": acc,
                                                "nft": value,
                                                "token": totalMintingPriceWire,
                                                "txn": hash
                                            })

                                            // console.log("postapi", postapi);
                                            // toast.success("Success", postapi.data.data)


                                            setButtonTwo("Mint With WHE")
                                            setinputdatahere(" ")



                                            // let BusdPrice = await nftContractOf.methods.WhitelistMinitngPricein_MMX().call();
                                            // let z = value * BusdPrice;


                                            // await wireContractOf.methods.approve(wireNftContractAddress, z).send({
                                            //     from: acc
                                            // })
                                            // toast.success("Transaction Confirmed")
                                            // setButtonTwo("Please Wait for Second Confirmation")
                                            // let hash = await nftContractOf.methods.mint_with_MMX(value, z.toString()).send({
                                            //     from: acc,
                                            // })
                                            // toast.success("Transaction Succefful")
                                            // setButtonTwo("Mint With WHE")
                                            // // console.log("hash", hash.transactionHash);
                                            // hash = hash.transactionHash
                                            // let postapi = await axios.post('https://whenftapi.herokuapp.com/buynfttoken', {
                                            //     "uid": inputdatahere,
                                            //     "address": acc,
                                            //     "nft": value,
                                            //     "token": z,
                                            //     "txn": hash
                                            // })
                                            // toast.success("Transaction Confirmed")

                                            // // console.log("postapi", postapi);
                                            // toast.success("Success", postapi.data.data)
                                            // setinputdatahere(" ")


                                        } else {
                                            toast.error("Out Of Balance")
                                            setButtonTwo("Mint With WHE")

                                        }

                                    } else {
                                        toast.error("No of Minting is Greater than maximum limit Per Transaction")
                                        setButtonTwo("Mint With WHE")

                                    }
                                } else {
                                    toast.error("Paused is False")
                                    setButtonTwo("Mint With WHE")

                                }

                            } else {
                                toast.error("Max Supply is Greater than total Supply")
                                setButtonTwo("Mint With WHE")

                            }

                            // }
                            // else {




                            // }
                        }



                    } catch (e) {
                        console.log("Error while minting ", e)
                        toast.error("Transaction failed")
                        setButtonTwo("Mint With WHE")

                    }
                } else {
                    toast.error("User Is Not Exists")
                    setinputdatahere(" ")


                }


            } catch (e) {
                console.log("User Is Not Exists", e);
                toast.error("User Is Not Exists")
                setinputdatahere(" ")


            }




        }
    }
    const Sponser2 = () => {

        setShowModal2(true)

    }
const getdata=async()=>{
    try{
        const web3 = window.web3;
        let nftContractOf = new web3.eth.Contract(wireNftContractAbi, wireNftContractAddress);

        let mintingWirePrice = await nftContractOf.methods.ValueinWHE().call()
        mintingWirePrice = web3.utils.fromWei(mintingWirePrice)
        mintingWirePrice = parseFloat(mintingWirePrice).toFixed(1)
        setmintPriceWire(mintingWirePrice);


    }catch(e){
        console.log("Error While Get Price Of CST",e);
    }
}







    // const getSupply = async () => {
    //     try {
    //         // let web3= window.web3;
    //         let contract = new webSupply.eth.Contract(contractAbi, contractAddress);
    //         let sply = await contract.methods.totalSupply().call();
    //         setSupply(sply)
    //     } catch (e) {
    //         console.log("error while supply", e);
    //     }
    // }
    setInterval(() => {
        getdata()
    }, 1000);

    


    return (
        <div>
              <Modal
                show={showModal2}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >


                <Modal.Body className='model_bg'>
                    <h3 className='text-white'>Sponser</h3>
                    <p className='text-white'>Please Enter Sponser Id here wire</p>
                    <input type="text" onChange={(e) => setinputdatahere(e.target.value)} value={inputdatahere} className="form-control" />
                    <button onClick={() => myMintWire()} className=" btn modelbtnhere mt-4" >Submit</button>


                </Modal.Body>

            </Modal>

          

            <div className="mainMintdiv">
            <h1 className='main_heading_here'>Mint NFT</h1>

                <div className="innerMintdiv"><br /><br />
                    <h3 className="Firstdivheading">Public Sale is live</h3><br />
                    {/* <h1 className='ConnectDiv'>{supply}/10,000</h1> */}
                    <p className='ConnectdivPP'>Click mint to mint your NFT.</p>
                    <div className="afterconnecttext fs-4">
                        <button onClick={minus} className='btn btn-sm smbtnplus'><i class="far fa-minus"></i></button>

                        {value}

                        <button onClick={plus} className='btn btn-sm smbtnplus'><i class="far fa-plus"></i></button>

                    </div>
                    <div className="btnconnecthere">

                        <button
                            onClick={()=>Sponser2()}
                            className='btn btn-sm Connectbtn mt-3'>MINT</button>
                    </div>

                    <div className="afterconnecttext">Public Sale Price : {mintPriceWire} CST (+ Gas fee)</div>
                    <div className="afterconnecttext fs-5">Each transaction will be limited to 10 NFTs</div>




                </div>
            </div>

        </div>
    )
}

export default PublicMint
