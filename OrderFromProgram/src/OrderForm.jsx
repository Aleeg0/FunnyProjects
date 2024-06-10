import { useState } from "react";
import './orderForm.css'

function OrderForm(){

    const [orderName, setOrderName] = useState("guest");
    const [orderCount, setOrderCount] = useState(1);
    const [orderComment, setOrderComment] = useState();
    const [orderPayMethod, setOrderPayMethod] = useState("Not choosed");
    const [orderDeliveryMethod, setOrderDeliveryMethod] = useState("Pick Up");

    const handleOrderNameChange = (event) => {
        setOrderName(event.target.value);
    }

    const handleOrderCountChange = (event) => {
        setOrderCount(event.target.value);
    }

    const handleOrderCommentChange = (event) => {
        setOrderComment(event.target.value);
    }

    const handleOrderPayMethodChange = (event) => {
        setOrderPayMethod(event.target.value);
    }

    const handleOrderDeliveryMethodChange = (event) => {
        setOrderDeliveryMethod(event.target.value);
    }

    return( 
        <div className="orderBox">
            <div className="orderInput">
                <div className="orderName">
                    <h5>Order name</h5>
                    <input type="text" value={orderName} placeholder="Enter your name"
                            onChange={handleOrderNameChange}></input>
                </div>  
                <div className="orderCount">
                    <h5>Order count</h5>
                    <input type="number" value={orderCount}
                            onChange={handleOrderCountChange}></input>
                </div>  
                <div className="orderPayMethod">
                    <h5>Pay method</h5>
                    <select onChange={handleOrderPayMethodChange}>
                        <option value="Not choosed">Select an option</option>
                        <option value="Visa">Visa</option>
                        <option value="MasterCard">MasterCard</option>
                        <option value="GiftCard">GiftCard</option>
                    </select>
                </div> 
                <div className="orderDeliveryMethod">
                    <h5>Delivery method</h5>
                    <div className="deliveryMethods">
                        <label>
                            <input type="radio" name="delivMeth" value="Pick Up"
                                    checked={orderDeliveryMethod === "Pick Up"}
                                    onChange={handleOrderDeliveryMethodChange}></input>
                            Pick Up
                        </label>
                        <label>
                            <input type="radio" name="delivMeth" value="Delivery"
                                checked={orderDeliveryMethod === "Delivery"}
                                onChange={handleOrderDeliveryMethodChange}></input>
                            Delivery
                        </label>
                    </div>
                </div>
                <div className="orderComment">
                    <h5>Comment</h5>
                    <textarea placeholder="Enter comment"
                                onChange={handleOrderCommentChange}></textarea>
                </div>  
            </div>
            <div className="orderInfo">
                <h3>Order Inforamtion:</h3>
                <div className="orderName">
                    <h5>Order name:</h5>
                    <p>{orderName}</p>
                </div> 
                <div className="orderCount">
                    <h5>Order count:</h5>
                    <p>{orderCount}</p>
                </div>   
                <div className="orderPayMethod">
                    <h5>Pay method:</h5>
                    <p>{orderPayMethod}</p>
                </div> 
                <div className="orderDeliveryMethod">
                    <h5>Delivery method:</h5>
                    <p>{orderDeliveryMethod}</p>
                </div>
                <div className="orderComment">
                    <h5>Comment:</h5>
                    <p>{orderComment}</p>
                </div>  
            </div>
        </div>
    )
}

export default OrderForm;