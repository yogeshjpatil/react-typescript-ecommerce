import "../../assets/styles/cartbox.css";
import CartEmpty from "../../assets/images/cart/cart-empty.png";

const CartBox = () => {
  return (
    <>
      <div className="position-relative">
        <img src={CartEmpty} className="show" />

        <div className="list-categories">
          <span>Your Cart is Empty</span>
        </div>
      </div>
    </>
  );
};
export default CartBox;
