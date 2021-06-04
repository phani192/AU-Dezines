import React, { Component } from 'react';
import { DataContext } from './Context';
import { Link } from 'react-router-dom';
import Colors from "./Colors";
import "./css/Details.css";

class BoysDetails extends Component {

    static contextType = DataContext;
    state = {
        product: []
    }

    getProduct = () => {
        if (this.props.match.params.id) {
            const res = this.context.boysProducts;
            console.log(this.state)
            const data = res.filter(item => {
                return item._id === this.props.match.params.id
            })
            console.log(res);
            console.log(data);

            this.setState({ product: data })
        }
    };
    componentDidMount() {
        this.getProduct()
    }
    render() {
        const { product } = this.state;
        const { addCartB } = this.context;
        console.log(product)


        return (<>
            {


                product.map(item => (
                    <div className="detailsCart" key={"item._id"}>
                        <img src={item.src} alt="" className="imgProducts" />
                        <div className="box">
                            <div className="row">
                                <h2>{item.title}</h2>
                                <span>SEK{item.price}</span>
                            </div>
                            <Colors colors={item.colors} />
                            <p>{item.description}</p>
                            <p>{item.content}</p>
                            <Link to="/BoysPage" className="cart" onClick={() => addCartB(item._id)}>Add To Cart</Link>
                        </div>
                    </div>
                ))}
        </>);
    }
}


export default BoysDetails;