import React from 'react'
import './Partners.css';
import { useForm } from "react-hook-form";
import {toast} from 'react-toastify'
function Partners() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => toast.success("Request Submited");
    return (
        <div className='partnersContainer' id='Partners' >
            <h1 className='partnersHeading'>BECOME A PARTNER</h1>
            <div className="partnersForm">
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className=" partnersFormRow1" >
                    <div>
                    <input type="text" placeholder='NAME' {...register("name", { required: true })}/>
                    {errors.name && <div style={{color:"red"}}>This field is required</div>}.
                    <br/>

                    </div>
                <div>
                    <input type="email" placeholder='E-MAIL' {...register("email", { required: "email required" },{ pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}/>
                    {errors.email && <div style={{color:"red"}}>This field is required</div>}
                    <br/>
                </div>
                 
                   

                </div>
                <div className="partnersFormRow2">
                    
                    <textarea placeholder='REACH OUT TO US FOR MORE INFORMATION' {...register("discription", { required: true })}></textarea>
                    {errors.discription && <div style={{color:"red"}}>This field is required</div>}

                </div>
                <br />
                <div className='partnerSendBtn'>
                    <div>&nbsp;</div>
                    &nbsp;&nbsp;&nbsp;
                    <button className='btn ' type='submit'>SEND</button>
                    &nbsp;&nbsp;&nbsp;
                    <div></div>

                </div>
        
                </form>
            </div>
        </div>
    )
}

export default Partners
