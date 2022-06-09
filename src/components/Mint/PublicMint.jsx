
import React, { useState } from 'react';
// import { contractAddress, contractAbi } from "../Utils/Constants";
import { loadWeb3 } from '../Api/Api';
import './Minnt.css'
import { toast } from 'react-toastify';
import Modal from 'react-bootstrap/Modal'
import axios from 'axios'


import Web3 from 'web3';
import { wireNftContractAbi, wireNftContractAddress } from '../Utils/constant';
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
    const [showModal, setShowModal] = useState(false)
    
    

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


    const myMintBNB = async () => {
        
        setShowModal(false)
        let acc = await loadWeb3();
       
        if (acc == "No Wallet") {
            toast.error("No Wallet Connected")
        }
        else if (acc == "Wrong Network") {
            toast.error("Wrong Newtwork please connect to test net")
        } else {
            try {


                let res = await axios.get(`https://whenftapi.herokuapp.com/checkuser?id=${inputdatahere}`)

                res = res.data.data;

                if (res == 1) {
                try {


                    setButtonOne("Please Wait While Processing")
                    // console.log("mintFor BNB");
                    const web3 = window.web3;
                    let nftContractOf = new web3.eth.Contract(wireNftContractAbi, wireNftContractAddress);



                    let totalnft = await nftContractOf.methods.MaxLimitPerTransaction().call();

                    console.log("totalnft", totalnft);

                    if (value > totalnft) {
                        toast.error(`Maximum Limit is ${totalnft} `)
                    } else {
                        let maxSupply = await nftContractOf.methods.maxsupply().call();
                        console.log("inputdatahere",inputdatahere);

                        let ttlSupply = await nftContractOf.methods.totalSupply().call();
                        let paused = await nftContractOf.methods.paused().call();
                        let maxLimitprTransaction = await nftContractOf.methods.MaxLimitPerTransaction().call();
                        let mintingbnbPrice = await nftContractOf.methods.MinitngPricein_MATIC().call()
                        // console.log("jjjjj", mintingbnbPrice);
                        mintingbnbPrice = web3.utils.fromWei(mintingbnbPrice);
                        mintingbnbPrice = parseFloat(mintingbnbPrice)
                        setMintPriceBnb(mintingbnbPrice)
                        let totalMintingPriceBNB = value * mintingbnbPrice
                        let getdata = await axios.get("https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT")
                        // console.log("data_chack_here", getdata.data.price);
                        getdata = getdata.data.price
                        // console.log("Minting_totalMintingPriceBNB= ", totalMintingPriceBNB);
                        let usid = totalMintingPriceBNB * getdata
                        // console.log("usid", usid);
                        // console.log("ttlSupply", maxLimitprTransaction);

                        // console.log("mintingbnbPrice", mintingbnbPrice);

                        let llisted_check = await nftContractOf.methods.iswhitelist(acc).call()
                        // console.log("iswhitelist", llisted_check);



                        if (llisted_check == 'true') {
                            if (parseInt(ttlSupply) < parseInt(maxSupply)) {
                                if (paused == false) {
                                    if (value < parseInt(maxLimitprTransaction)) {
                                        // console.log("Minting Value= ", value);

                                        // let usid=


                                        totalMintingPriceBNB = web3.utils.toWei(totalMintingPriceBNB.toString())
                                        let hash = await nftContractOf.methods.mint_with_MATIC(value).send({
                                            from: acc,
                                            value: totalMintingPriceBNB.toString()

                                        })
                                        toast.success("Transaction Confirmed")
                                        setButtonOne("Mint With BNB")
                                        // console.log("hash", hash.transactionHash);
                                        hash = hash.transactionHash
                                        let postapi = await axios.post('https://whenftapi.herokuapp.com/buynfttoken', {
                                            "uid": inputdatahere,
                                            "address": acc,
                                            "nft": value,
                                            "token": mintingbnbPrice,
                                            "txn": hash
                                        })

                                        // console.log("postapi", postapi);
                                        toast.success(postapi.data.data)
                                        setinputdatahere(" ")



                                    } else {
                                        toast.error("No of Minting is Greater than maximum limit Per Transaction")
                                        setButtonOne("Mint With BNB")

                                    }
                                } else {
                                    toast.error("Paused is False")
                                    setButtonOne("Mint With BNB")

                                }

                            } else {
                                toast.error("Max Supply is Greater than total Supply")
                                setButtonOne("Mint With BNB")

                            }
                        }
                        else {
                            let BusdPrice = await nftContractOf.methods.WhitelistMintingPricein_MATIC().call();

                            let hash = await nftContractOf.methods.mint_with_MATIC(value).send({
                                from: acc,
                                value: value * BusdPrice.toString()
                            })
                            // console.log("hash", hash.transactionHash);
                            hash = hash.transactionHash
                            let postapi = await axios.post('https://whenftapi.herokuapp.com/buynfttoken', {
                                "uid": inputdatahere,
                                "address": acc,
                                "nft": value,
                                "token": mintingbnbPrice,
                                "txn": hash
                            })

                            // console.log("postapi", postapi);
                            toast.success(postapi.data.data)
                            setinputdatahere(" ")
                            toast.success("Transaction Confirmed")



                            // toast.error(" Please White Listed Address")
                            setButtonOne("Mint With BNB")


                        }
                    }

                } catch (e) {
                    console.log("Error while minting ", e)
                    toast.error("Transaction failed")
                    setButtonOne("Mint With BNB")

                }
            }
                else{

                    toast.error("User Is Not Exists")
                    setinputdatahere(" ")

                }



            } catch (e) {
                setinputdatahere(" ")
                console.log("Error While Minting", e);

            }

        }
    }



    const Sponser = () => {

        setShowModal(true)
       
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
        // getSupply()
    }, 1000);

    


    return (
        <div>

            <Modal
                show={showModal}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >


                <Modal.Body className='model_bg'>
                    <h3 className='text-white' >Sponser</h3>
                    <p className='text-white'>Please Enter Sponser Id here bnb</p>
                    <input type="text" onChange={(e) => setinputdatahere(e.target.value)} value={inputdatahere} className="form-control" />
                    <button onClick={()=>myMintBNB()} className=" btn modelbtnhere mt-4" >Submit</button>


                </Modal.Body>
                {/* / */}
            </Modal>

            <div className="mainMintdiv">
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
                            onClick={()=>Sponser()}
                            className='btn btn-sm Connectbtn mt-3'>MINT</button>
                    </div>

                    <div className="afterconnecttext">Public Sale Price : 0.2 BNB (+ Gas fee)</div>
                    <div className="afterconnecttext fs-5">Each transaction will be limited to 10 NFTs</div>




                </div>
            </div>

        </div>
    )
}

export default PublicMint
