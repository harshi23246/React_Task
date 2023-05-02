import './Book.css'
import {useNavigate} from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { addToCart, cartItemType } from '../cart/cartSlice';

function Book(props:any){
    const navigate=useNavigate();
    const dispatch=useAppDispatch();

    console.log(props.item);
    const imgSrc=props.item.thumbnail;
    const title=props.item.title;
    const authors=props.item.author;
    const bookPrice=props.item.price;
    const bookId=props.item.id;

    const path='/'+title+'/'+bookId;

    function buyNow():void{
        const obj:cartItemType={
            title:title,
            price:bookPrice,
            quantity:1,
            author:authors,
            imgSource:imgSrc
        }
        dispatch(addToCart(obj));
        navigate('/cart',{state:props.item});
    }
    
    return <div className="book">
        <div onClick={()=>navigate(path,{state:props.item})} 
            className='book-img-div'>
            <img src={imgSrc} alt="Book.png" className='book-img'/>
        </div>
        <div className='description'>
            <h2>{title}</h2>
            <p>{props.item.description.slice(0,100)}...</p>
            <button className='buy-now' 
                    onClick={()=>buyNow()}>
                Buy Now
            </button>
        </div>
    </div>
}

export default Book;