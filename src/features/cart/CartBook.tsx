import './CartBook.css';
import { useAppDispatch } from '../../app/hooks';
import { addToCart,removeBook } from './cartSlice';

function CartBook(props:any){

    const dispatch=useAppDispatch();

    return <div className="cart-book">
        <p>{props.book.title}</p>
        <p>Rs. {props.book.price}</p>
        <button onClick={()=>{
            dispatch(addToCart(props.book))
        }}> + </button>
        <span> {props.book.quantity} </span>
        <button onClick={()=>{
            dispatch(removeBook(props.book))
        }}> - </button>
    </div>
}

export default CartBook;