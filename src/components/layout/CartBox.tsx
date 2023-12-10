import "../../assets/styles/cartbox.css";
import CartEmpty from "../../assets/images/cart/cart-empty.png";

const CartBox = () => {
  return (
    <>
      <div className="cart-box">
        <img src={CartEmpty} className="cart-button" />

        <div className="cart-dropdown">
          <ul>
            <li>Cart item 1</li>
            <li>Cart item 2</li>
            <li>Cart item 3</li>
            <li>Cart item 4</li>
            <li>Cart item 5</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default CartBox;
