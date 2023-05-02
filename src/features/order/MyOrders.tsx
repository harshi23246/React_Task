import OrderItem from "./OrderItem";
import './MyOrders.css';
import { useAppDispatch,useAppSelector } from "../../app/hooks";
import { updateTitle } from "../title/titleSlice";

function MyOrders(){

    const dispatch=useAppDispatch();
    dispatch(updateTitle('My Orders'));

    const myOrders=useAppSelector(state=>state.order.orders)
    console.log("My orders are",myOrders);
    
    return <div className="orders">
        {
           myOrders.length >0 ? myOrders.map(function(order,index){
                return <OrderItem key={index} order={order}/>
            }):<h1>
                No Orders placed yet...
            </h1>
        }
    </div>
}

export default MyOrders;