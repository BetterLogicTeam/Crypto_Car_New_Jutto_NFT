import React, { useEffect, useState } from 'react'
import { loadWeb3 } from '../Api/Api';
import { wireNftContractAbi, wireNftContractAddress } from '../Utils/constant';
import './Collections.css'
import axios from 'axios'
function Collections() {


    let [btnTxt, setBtTxt] = useState("Connect");
    let [imageArray, setImageArray] = useState([]);
    let [initialLimit, setInitialLimit] = useState(0);
    let [finalLimit, setFinalLimit] = useState(12)
    let [mywalletLength, setMyWalletLength] = useState();
    let [pageNumber, setPageNumber] = useState(1)
    let [totalPages, setTotalPages] = useState(1)

    const getAccount = async () => {
        let acc = await loadWeb3();
        console.log("ACC=", acc)
        if (acc == "No Wallet") {
            setBtTxt("No Wallet")
        }
        else if (acc == "Wrong Network") {
            setBtTxt("Wrong Network")
        } else {
            let myAcc = acc?.substring(0, 4) + "..." + acc?.substring(acc?.length - 4);
            setBtTxt(myAcc);

        }
    }

    const loadMore = () => {

        let a = finalLimit + 6
        if (a >= mywalletLength) {
            setInitialLimit(initialLimit + 6)
            if (pageNumber < totalPages) {

                setPageNumber(pageNumber + 1)
            }
            console.log("Loading More Up");
            setFinalLimit(mywalletLength)
        } else {
            console.log("Loading More");
            if (pageNumber < totalPages) {

                setPageNumber(pageNumber + 1)
            }
            setInitialLimit(initialLimit + 6);
            setFinalLimit(finalLimit + 6)
        }
    }

    const loadLess = () => {
        let b = finalLimit - 6

        if (b <= 6) {

            setFinalLimit(6);
            setInitialLimit(0);
            if (pageNumber > 1) {
                setPageNumber(pageNumber - 1)
            }
        } else {
            setInitialLimit(initialLimit - 6);
            setPageNumber(pageNumber - 1)
            setFinalLimit(finalLimit - 6)

        }
    }
    const allImagesNfts = async () => {
        let acc = await loadWeb3();
        if (acc == "No Wallet") {
            console.log("wallet");
            setBtTxt("Connect Wallet")
        }
        else if (acc == "Wrong Network") {
            setBtTxt("Wrong Network")
        } else if (acc == "Connect Wallet") {
            console.log("Connect Wallet");
        }
        else {
            const web3 = window.web3;
            let nftContractOf = new web3.eth.Contract(wireNftContractAbi, wireNftContractAddress);
            let simplleArray = [];
            let walletOfOwner = await nftContractOf.methods.walletOfOwner(acc).call()
            let walletLength = walletOfOwner.length
            setMyWalletLength(walletLength)
            console.log("walletOfOwner", walletLength);
            for (let i = 1; i <= walletLength; i++) {

                try {
                    let res = await axios.get(`https://gateway.pinata.cloud/ipfs/QmWpffiK4RYqSVNaFqMmhkCWUCgqwZDbDTr5G6oiPhnMPN/${i}.png`)
                    // let res = await axios.get(`/config/${walletOfOwner[i]}.json`)
                    let imageUrl = res.config.url;
                    console.log("check", res);
                    let dna = res.data.dna
                    simplleArray = [...simplleArray, { imageUrl: imageUrl, num: i }]
                    setImageArray(simplleArray);
                } catch (e) {
                    console.log("Error while Fetching Api", e)
                }
            }
            let ttlPage = parseInt(walletLength) / 6;
            ttlPage = Math.ceil(ttlPage);
            setTotalPages(ttlPage)
            console.log("Total Pages", ttlPage);
            if (parseInt(walletLength) > 0) {
                {
                    let myImgArry = []
                    let myNameDate = []

                }
            }
        }
    }


    useEffect(() => {
        allImagesNfts()
        getAccount();

    },[]
    )



    return (
        <div className='collectionsContainer' id="Collections">
            <div className='collectionsInner'>
                <div className='container'>
                    <div className='row'>
                        <h1 className='coll'>
                            COLLECTION
                        </h1>
                    </div>
                    <div className='row justify-content-center'>
                        
                        {
                            imageArray.map((items, index) => {
                                return (
                                    <>
                                        <div className='col-sm-6 col-lg-3'>
                                            <div className="single-live-auction home-2">
                                                <div className='auction-thumb home-2'>
                                                    <img src={items.imageUrl} alt="Image" />
                                                </div>


                                                <div className='collection-text home-2 text-center'>
                                                    <a href="#">CST {items.num}</a>
                                                   
                                                </div>
                                            </div>

                                        </div>

                                    </>
                                )
                            })
                        }




                        {/* <div className='col-sm-6 col-lg-3'>
                            <div className="single-live-auction home-2">
                                <div className="auction-thumb home-2">
                                    <img src="s-2.jpg" alt="Image" />
                                </div>


                                <div className="collection-text home-2 text-center">
                                    <a href="#">Trihana Donan</a>
                                    <p className='color'>40% of the part</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-6 col-lg-3'>
                            <div className="single-live-auction home-2">
                                <div className="auction-thumb home-2">
                                    <img src="s-3.jpg" alt="Image" />
                                </div>


                                <div className="collection-text home-2 text-center">
                                    <a href="#">Jisan Donan</a>
                                    <p className='color'>20% of the part</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-6 col-lg-3'>
                            <div className="single-live-auction home-2">
                                <div className="auction-thumb home-2">
                                    <img src="s-5.jpg" alt="Image" />
                                </div>


                                <div className="collection-text home-2 text-center">
                                    <a href="#">Jisan Donan</a>
                                    <p className='color'>20% of the part</p>
                                </div>
                            </div>
                        </div> */}






                    </div>
                </div>
            </div>
        </div>




    )
}
export default Collections