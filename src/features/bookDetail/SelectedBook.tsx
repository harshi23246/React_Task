import { useLocation, useNavigate, useParams } from 'react-router-dom';
import './SelectedBook.css';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { updateTitle } from '../title/titleSlice';
import { addToCart ,cartItemType} from '../cart/cartSlice';
import { useEffect } from 'react';
import { getBookDetailRequest } from '../bookDetail/bookDetailSlice';


function SelectedBook(){

    const {state}=useLocation();
    const params=useParams();
    const navigate=useNavigate();
    const dispatch = useAppDispatch();
    
    let bookId = params.id;

    const bookDetail=useAppSelector(state=>state.bookDetail);
    console.log("Book Detail is",bookDetail);

    useEffect(()=>{
        dispatch(getBookDetailRequest(bookId));
    },[dispatch]);

    console.log("Book Detail is2",bookDetail.books);

    const imgSrc=bookDetail.books[0]?.thumbnail || "";
    const bookTitle=bookDetail.books[0]?.title || "";
    const authors=bookDetail.books[0]?.author || "";
    const bookPrice=bookDetail.books[0]?.price || 0;
    const pageCount=bookDetail.books[0]?.pageCount || 0;
    const bookDescription=bookDetail.books[0]?.description || "";

    dispatch(updateTitle(bookTitle));

    function addToBag() : void{
        const obj:cartItemType={
            title:bookTitle,
            price:bookPrice,
            quantity:1,
            author:authors,
            imgSource:imgSrc
        }
        dispatch(addToCart(obj));
    }

    function buyNow() : void{
        const obj:cartItemType={
            title:bookTitle,
            price:bookPrice,
            quantity:1,
            author:authors,
            imgSource:imgSrc
        }
        dispatch(addToCart(obj));
        navigate('/cart',{state:obj});
    }

    return <div className='book-data'>
        <div className='img-book'>
            <img src={imgSrc} alt='Book.png'/>
        </div>
        <div className='book-info'>
            <h1>{bookTitle}</h1>
            <h3>Rs. {bookPrice}</h3>
            <h3>{authors.toString()}</h3>
            <h3>Pages : {pageCount}</h3>
            <h3>{state.isbn}</h3>
            <div className='btn-group'>
                <button className='default-btn' onClick={()=>addToBag()}>Add to Cart</button>
                <button className='default-btn' onClick={()=>buyNow()}>Buy Now</button>
            </div>
            <div className='abridge'>
            <p>{bookDescription}</p>
            </div>
        </div>
    </div>
}

export default SelectedBook;