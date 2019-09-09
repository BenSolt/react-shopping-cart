import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

/////
import {ProductContext} from './contexts/ProductContext';
import {CartContext} from './contexts/CartContext';
/////


// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	const removeItem = item => {
	  = item.filter(item => item !== ItemtoRemove)


	return (

		<ProductContext.Provider value={{ products, addItem }}>


		<div className="App">

		<CartContext.Provider value={cart, removeItem } >
			<Navigation cart={cart} />

			{/* Routes */}
			<Route
				exact
				path="/"
				component={Products}
			/>

			<Route
				path="/cart"
				component={ShoppingCart} />
			
			</CartContext.Provider>
		</div>
		
		</ProductContext.Provider>

	);
}

export default App;
