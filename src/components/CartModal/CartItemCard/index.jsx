import { MdDelete } from "react-icons/md";
import styles from "./style.module.scss";

export const CartItemCard = ({ product, removeProductCart}) => {
   return (
      <li className={styles.cartCard}>
         <div>
            <img src={product.img} alt={product.name} />
            <h3 className="heading3 black">{product.name}</h3>
         </div>
         <button className="icon" onClick={() => removeProductCart(product.id) } aria-label="delete" title="Remover item" >
            <MdDelete size={30} color="grey" />
         </button>
      </li>
   );
};
