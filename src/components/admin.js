import React, {Component} from "react";

class Admin extends Component {
	state = {
		orders: []
		products: []
	}

	componentDidMount() {
		this.getProducts();
		this.getOrders();
	}

	handleNewProduct = () => {
		axios.post(whatever address)
			.then ((response) => response.data)
			.catch ((err) => console.log(err));
	}

	getProducts = () => {
		axios.get(some address here)
			.then ((response) => {
				this.setState({
					products: response.data
				})
		}
			.catch ((err) => console.log(err));
	}

	modifyProducts = () => {
		axios.put(id# address)
			.then((response => {
				this.getProducts()
			}
			.catch ((err) => console.log(err));
	}

	deleteProducts = () => {
		axios.delete(id# address)
			.then((response =>{
				this.getProducts()
			}
			.catch ((err) => console.log(err));
	}

	getOrders = () => {
		axios.get(insert address here)
			.then ((response) => {
				this.setState({
					orders: response.data
				})
		}
			.catch ((err) => console.log(err));
	}

	modifyOrder = () => {
		axios.put(id# insert address here)
			.then((res) => {
				this.getOrders()
			}
			.catch ((err) => console.log(err,'my cat says hi');
		}

	deleteOrder = () => {
		axios.delete(id# insert address here)
			.then((res) => {
				this.getOrders()
			}
			.catch ((err) => console.log(err);
	
	return (
		<div>
			<div>
				<h2>List of Orders</h2>
				{this.state.orders.map(variable => {
					return (
						<div key= {variable.id}>
							<button type='button' onClick={() => modifyOrder(id)}>Modify</button>
							<button type='button' onClick={() => deleteOrder(id)}>Delete</button>
							{variable.orderDate}
							{variable.orderCustomer}
							{variable.orderInvoiceAmount}
						</div>
					)
				}
				}
				map through the orders and then display everything
				<button type="button" onClick={modifyOrder}>
					modify order
				</button>
				<button type="button" onClick={deleteOrder}>
					delete order
				</button>
			</div>
			<div>
				<h2>List of Products</h2>
				{this.state.products.map(product => {
					return (
						<div key = {variable.id}>
							<button type='button' onClick={() => modifyProduct(id)}>Modify</button>
							<button type='button' onClick={() => deleteProduct(id)}>Delete</button>
							{product.name}
							{product.description}
							{product.price}
						</div>
					)
				}}
				<button type="button" onClick={handleNewProduct}>
					add product
				</button>
			</div>
		</div>
	)
}
