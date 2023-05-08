import './Cart.css';
import React from 'react'
import CartBook from './CartBook';
import { updateTitle } from '../title/titleSlice';
import { useAppDispatch,useAppSelector } from '../../app/hooks';
import { editAddress, saveAddress } from '../address/addressSlice';
import { addOrder } from '../order/orderSlice';
import { clearCart } from './cartSlice';

function Cart(){
   
    const dispatch=useAppDispatch();
    dispatch(updateTitle('Cart'));

    const items=useAppSelector(state=>state.cart.cartItems);
    const disabled=useAppSelector(state=>state.address.diasbled);
    console.log("Cart items",items);
    const [address,setaddress]=React.useState({
   firstName:"",
   lastName:"",
   locality:"",
   pincode:"",
   state:"",
   city:"",
   country:"",
   phone:""

    })
    const totalCost=items.reduce((acc,item)=>{
        return acc + (item.price*item.quantity);
    },0.0);
    
    const totalTax=totalCost*0.18;
    const shippingCharges=items.length > 0 ? 5:0;
    const totalToPay=totalCost + totalTax + shippingCharges;
    //const address1=useAppSelector(state=>state.address);
    const add:any=localStorage.getItem("address") as any
    const address2=JSON.parse(add)  
    
    console.log(address2)
   
    function onChangeField(e:any){
        
        setaddress({...address,[e.target.name]:e.target.value})
    }
    React.useEffect(()=>{
        if(localStorage.getItem("address")){
            const add:any=localStorage.getItem("address") as any
    const address2=JSON.parse(add) 
            setaddress(address2)
        }
    },[])


    return <div className="cart">
        <div className="shipping">
            <h2>Shipping Address</h2>
            <form className='address'>
                <input type="text" placeholder="First Name" value={address.firstName}  name='firstName' onChange={onChangeField} disabled={disabled} required/>
                <input type="text" placeholder="Last Name" value={address.lastName} name='lastName' onChange={onChangeField} disabled={disabled} required/>
                <input type="text" placeholder="Locality" value={address.locality} name='locality' onChange={onChangeField} disabled={disabled} required/>
                <input type="number" placeholder="Pincode" value={address.pincode} name='pincode' onChange={onChangeField} disabled={disabled} required/>
                <input type="text" placeholder="State" name='state' value={address.state} onChange={onChangeField} disabled={disabled} required/>
                <input type="text" placeholder="City" name='city' value={address.city} onChange={onChangeField} disabled={disabled} required/>
                <input type="text" placeholder="Country" name='country'  value={address.country} onChange={onChangeField} disabled={disabled} required/>
                <input type="number" placeholder="Phone Number" name='phone' value={address.phone} onChange={onChangeField} disabled={disabled} required/>
                <button className='default-btn' 
                        onClick={(e)=>{
                            e.preventDefault();
                            dispatch(saveAddress(address));
                            console.log("saveAddress ",address);
                            localStorage.setItem("address",JSON.stringify(address))
                        }}>
                        Save Address</button>
                <button className='default-btn' 
                        onClick={(e)=>{
                            e.preventDefault();
                            dispatch(editAddress());
                        }}>Edit Address</button>
            </form>
        </div>
        <div className='shopping'>
            <div className='selected-books'>
                {
                   items.length >0 ? items.map(function(book,index){
                        return <CartBook key={index} book={book}/>
                    }) : <h1>No Items in Cart. Add Products to checkout the Order.</h1>
                }
            </div>
            <h1>Payment Info</h1>
            <div className='invoice'>
                <span>Item Price</span>
                <span className='right'>${totalCost.toFixed(2)}</span>
            </div>
            <div className='invoice'>
                <span>Tax</span>
                <span className='right'>${totalTax.toFixed(2)}</span>
            </div>
            <div className='invoice'>
                <span>Shipping Charge</span>
                <span className='right'>${shippingCharges.toFixed(2)}</span>
            </div>
            <hr />
            <div className='invoice'>
                <span>Total</span>
                <span className='right'>${totalToPay.toFixed(2)}</span>
            </div>
            <button className='pay-btn' onClick={()=>{
                    if(items.length > 0){
                        items.forEach((item)=>{
                            dispatch(addOrder(item));
                        })
                        dispatch(clearCart());
                    }else{
                        alert("No items to checkout...");
                    }
            }}>Checkout</button>
            <button className='pay-btn' onClick={()=>{
               dispatch(clearCart());
            }}>Cancel</button>
        </div>
    </div>
}

export default Cart;