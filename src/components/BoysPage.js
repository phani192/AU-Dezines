import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from "./Context";
import "./css/Products.css"

class BoysPage extends Component {
    static contextType = DataContext;
    render() {
        const { boysProducts } = this.context;
        return (<div className="product">
            {
                boysProducts.map(product => (
                    <div className="card" key={product._id}>
                        <Link to={`/boysPage/${product._id}`}>
                            <img src={product.src} alt="" />
                        </Link>
                        <div className="content">
                            <h3>
                                <Link to={`/boysPage/${product._id}`}>{product.title}</Link>
                            </h3>
                            <span>SEK {product.price}</span>
                            <p>{product.description}</p>
                            <button onClick={() => this.context.addCartB(product._id)}>Add To Cart</button>
                        </div>

                    </div>))
            }
        </div>);
    }
}

export default BoysPage;