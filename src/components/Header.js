
import React, { Component, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext, AuthProvider } from "./JSfiles/Authentication";
/* import app from "./firebase.js"; */
import firebase from "firebase"


import Menu from "./svg/bars-solid.svg";
import Close from "./svg/times-solid.svg";
import CartIcon from "./svg/shopping-cart-solid.svg";
import "./css/Header.css";
import { DataContext } from "./Context";
import logo from "./Images/companyLogo.png";




class Header extends Component {

	static contextType = DataContext;

	state = {
		toggle: false

	}
	menuToggle = () => {
		this.setState({ toggle: !this.state.toggle })
	}


	render() {
		const { toggle } = this.state;
		const { cart } = this.context;
		/* const { currentUser } = useContext(AuthContext);
		console.log(currentUser) */


		return (


			<header>
				<div className="menu" onClick={this.menuToggle}>
					<img src={Menu} alt="" width="20px" />
				</div>
				<div className="logo">
					<Link to="/mensPage"><img src={logo} /></Link>
				</div>
				<nav>
					<ul className={toggle ? "toggle" : ""}>
						<li><Link to="/mensPage">MEN</Link></li>
						<li><Link to="/womensPage">WOMEN</Link></li>
						<li><Link to="/boysPage">BOY</Link></li>
						<li><Link to="/girlsPage">GIRL</Link></li>
						<li><Link to="/login">LOGIN/REGISTER</Link></li>




						<li className="close" onClick={this.menuToggle}>
							<img src={Close} alt="" width="20px" />
						</li>


					</ul>

					<div className="nav-cart">
						<span>{cart.length}</span>
						<Link to="/shoppingPage">
							<img src={CartIcon} alt="" width="20px" />
						</Link>
					</div>

					<li><button onClick={() => firebase.auth().signOut()}>Logout!  </button> </li>
					{/* 	 {currentUser ? (
						<div className='option' onClick={() => AuthContext.signOut()}>
							SIGN OUT
						</div>
					) : (
						<Link className='option' to='/signin'>
							SIGN IN
						</Link>
					)}  */}
				</nav>

			</header>
		);
	}
}

export default Header;

