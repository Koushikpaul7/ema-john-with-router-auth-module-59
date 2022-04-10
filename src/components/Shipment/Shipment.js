import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user]=useAuthState(auth);
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[address,setAddress]=useState('');
    const[phone,setPhone]=useState('');
    //const navigate=useNavigate();

    const handleNameBlur=event=>{
        setName(event.target.value);
    }

    const handleAddressBlur=event=>{
        setAddress(event.target.value);
    }
    
    const handlePhoneNumberBlur=event=>{
        setPhone(event.target.value);
    }

   


    const handleCreateUser=(event)=>{
        event.preventDefault();
        const shipping={name,email,address,phone};
        console.log(shipping);
    }



    return (
            <div className='form-container'>
          <div>
          <h2 className='form-title'>Shipment Details</h2>
            <form onClick={handleCreateUser}>
            <div className="input-group">
                <label htmlFor='name'>Name</label>
                <input onBlur={handleNameBlur} type="text" name="name" required  />
            </div>
            <div className="input-group">
                <label htmlFor='email'>E-mail</label>
                <input value={user?.email} readOnly type="email" name="email" id="" required/>
            </div>
            <div className="input-group">
                <label htmlFor="address">Address</label>
                <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
            </div>
            <div className="input-group">
                <label htmlFor="phone"> Phone number</label>
                <input onBlur={handlePhoneNumberBlur} type="text" name="phone" id="" required />
            </div>
            <input className='form-submit' type="submit" value="Add Shipping" />
            </form>
           
          </div>
        </div>
    );
};

export default Shipment;