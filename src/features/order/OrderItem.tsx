import './OrderItem.css';

function OrderItem(props:any){

    return <div className="order-item">
        <div className="order-details">
            <p className="left">Order Placed : {new Date().toDateString()}</p>
            <p className="right">Status : Delivered</p>
        </div>
        <div className='order-description'>
            <img src={props.order.imgSource} alt='Book.png'/>
            <div>
                <h1>{props.order.title}</h1>
                <h3>{props.order.author}</h3>
                <h3>Rs. {props.order.price}</h3>
            </div>
        </div>
    </div>
}

export default OrderItem;