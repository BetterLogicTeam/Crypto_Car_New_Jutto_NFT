import React from 'react'
import './Collections.css'
function Collections() {
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
                <div className='col-sm-6 col-lg-3'>
                <div className="single-live-auction home-2">
                        <div className='auction-thumb home-2'>
                            <img src="s-6.jpg" alt="Image"/>
                        </div>

                       
                        <div className='collection-text home-2 text-center'>
                            <a href="#">Jisan Donan</a>
                            <p className='color'>20% of the part</p>
                        </div>
                    </div>

                </div>
                <div className='col-sm-6 col-lg-3'>
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
                </div>

            
    
            


            </div>
            </div>
        </div>
    </div>




    )
}
export default Collections