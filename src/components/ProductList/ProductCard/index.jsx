import styles from "./style.module.scss";

export const ProductCard = ({ product , addProductCart}) => {
    return(
        <li className={styles.card}>
					<div className={styles.imgBox}>
            <img src={product.img} alt={product.name} />
					</div>
					<div className={styles.infoBox}>
							<h3 className="heading3 black">{product.name}</h3>
							<span className="caption gray">{product.category}</span>
							<span className="body600 green">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
							<button className="btn" onClick={ () =>  addProductCart(product) }	 >Adicionar</button>
					</div>
        </li>
    );
};