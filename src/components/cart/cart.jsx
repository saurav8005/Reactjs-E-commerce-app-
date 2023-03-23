import { useCallback, useContext,  useState } from "react";
import { CartContext } from "../../context/cart-context";
import useRazorpay from "react-razorpay";

const Cart = ()=> {
    const {cartData} = useContext(CartContext);
    let  [total, setTotal] = useState(0);
    const razorpay = useRazorpay();
    const razorpayDisplay = useCallback( async (total)=>{
            const options = {
                key : "rzp_test_hn0P8pNNE8Ypf9",
                amount: total*100,
                currency: "INR",
                name : "10x-Gmaing-site",
                description : "Gaming Transcation",
                handler : (res)=> {
                    console.log(res)
                },
                prefill:{
                    name: "Saurav Chauhan",
                    email: "sauravchauhan8005@gmail.com",
                    contact: "9090909012"
                },
                notes: {
                    address: "work from home"
                },
                theme: {
                    color: "#3399cc",
                },

            }
            const rzp1 = new razorpay(options);
            rzp1.open();
            
 
    },[razorpay])

    return(
          <>
          {cartData.map((cartItem)=> {
               
               return(
                <>
                  <section>
                  <image src="" alt="" />
                  <article>{cartItem.title}</article>
                  <article>{cartItem.price}</article>
                  <button>Remove from Cart</button>
                  </section>

                  
                </>
               )
          })}

           <section>
               Billing Information
               {cartData.map((cart)=>{
                   
                   
                   return <article>
                    <span>{cart.title}</span>
                    <span>{cart.price}</span>
                    
                   </article>
                   
               })}
            
               <section>
               
                Total : {total}
               </section>
               <section>
               <button onClick={()=>{razorpayDisplay(6000)}}>Checkout</button>
               </section>
               
              
               
           </section>
          </>
    )
}

export default Cart;