import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import styles from "./style.module.scss";

export const HomePage = () => {

		const localStorageCart = JSON.parse(localStorage.getItem("@CARTLIST"));
		
		const [productList, setProductList] = useState([]);
		const [cartList, setCartList] = useState(localStorageCart ? localStorageCart : []);
		const [search, setSearch] = useState("");
		const [isOpen, setIsOpen] = useState(false);
		

	 	useEffect(() => {
		 const requestProductList = async () => {
			 const response = await api.get("products");
			 const reponseEdit = response.data.map( (res) => ({...res, count: 0}));
			 setProductList(reponseEdit);
			};
			requestProductList();
		}, []);

		const filteredeProduct = productList.filter(product => product.name.toLowerCase().includes(search.toLowerCase()) || product.category.toLowerCase().includes(search.toLowerCase()));

		useEffect(() => {
			localStorage.setItem("@CARTLIST", JSON.stringify(cartList))
		},[cartList]);

		const addProductCart = (addProduct) => {
			if(!cartList.some(product => product.id === addProduct.id)){
				setCartList([...cartList,addProduct]);
				toast.success("Produto adicionado ao carrinho.")
			}else(
				toast.error("produto já esta no carrinho.")
			);
		};

		const removeProductCart = (idProductRemove) => {
			const newListCart = cartList.filter( cart => cart.id !== idProductRemove);
			setCartList(newListCart);
			toast.success("produto removido do carrinho.")

		};

		const removeAllProductCart = () => {
			setCartList([]);
			toast.success("seu carrinho foi esvaziado.")

		};
	
   	return (
      <>
				<Header setSearch={setSearch} setIsOpen={setIsOpen} cartList={cartList}/>
				<main>
					{search !== "" ?  (
						<div className={styles.boxSearchOn}>
							<p className="heading2">Resultados de busca para:  <span>{search}</span> </p>
							<button className="btn" onClick={ ()=> setSearch("")} >Limpar Busca</button>
						</div>): null}
					<ProductList productList={search != "" ? filteredeProduct :  productList} addProductCart={addProductCart} />
					{isOpen ? <CartModal cartList={cartList} removeProductCart={removeProductCart} removeAllProductCart={removeAllProductCart} setIsOpen={setIsOpen}/> : null }
				</main>
      </>
   	);
};
