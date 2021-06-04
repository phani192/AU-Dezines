import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from "./Context";
import "./css/Products.css";

class GirlsPage extends Component {
    static contextType = DataContext;
    render() {
        const { girlsProducts } = this.context;
        return (<div className="product">
            {
                girlsProducts.map(product => (
                    <div className="card" key={product._id}>
                        <Link to={`/girlsPage/${product._id}`}>
                            <img src={product.src} alt="" />
                        </Link>
                        <div className="content">
                            <h3>
                                <Link to={`/girlsPage/${product._id}`}>{product.title}</Link>
                            </h3>
                            <span>SEK {product.price}</span>
                            <p>{product.description}</p>
                            <button onClick={() => this.context.addCartG(product._id)}>Add To Cart</button>
                        </div>

                    </div>))
            }
        </div>);
    }
}

export default GirlsPage;

