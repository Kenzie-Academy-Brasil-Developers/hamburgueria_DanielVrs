import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "./style.module.scss";

export const Header = ( {setSearch, setIsOpen, cartList} ) => {
	const [value, setValue] = useState("");
	const countProducts = cartList.length ;
	
	 const submit = (e) => {
		 e.preventDefault();
		 setSearch(value);
		 setValue("");
	 };

   return (
      <header className={styles.headerFlex}>
				<div className="container">
					<div>
         		<img src={Logo} alt="Logo Kenzie Burguer" />
            <button className="icon" onClick={() => setIsOpen(true)}>
                <MdShoppingCart  size={30} color="gray"/>
                <span>{countProducts}</span>
            </button>
					</div>
					<form onSubmit={submit}>
							<input
								placeholder="Digitar Pesquisa"
								required
								type="text"
								value={value}
								onChange={(e) => setValue(e.target.value)}
							/>
							<button className="icon" type="submit">
								<MdSearch  size={25} color="white" />
							</button>
					</form>
				</div>
      </header>
   );
};
