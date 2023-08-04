import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import styles from "./style.module.scss";

export const CartModal = ({ cartList, removeProductCart, removeAllProductCart, setIsOpen }) => {
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   return (
      <div className={ styles.overlayBox} role="dialog">
				<div className={ styles.modalBox} >

					<div className={ styles.headerModal} >
						<h2 className="heading3 white">Carrinho de compras</h2>
						<button className="icon" onClick={() => setIsOpen(false)} aria-label="close" title="Fechar">
								<MdClose size={24} color="#FFFFFF80"/>
						</button>
					</div>

						<ul className={styles.cartListBox}>
							{cartList.length > 0 ?
							cartList.map((product) => (
									<CartItemCard key={product.id} product={product} removeProductCart={removeProductCart} />
								)) : <p className="heading3 black">Nenhum produto adicionado ao carrinho.</p> }
						</ul>

					<div className={styles.footerCart}>
						<div>
								<span className="body600 black">Total</span>
								<span className="body600 gray">{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
						</div>
						<button className="btn" onClick={ () => removeAllProductCart() }>Remover todos</button>
					</div>
				</div>
      </div>
   );
};
