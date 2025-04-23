import React, { Component } from "react";
import ShowCard from './ShowCard/ShowCard.js';

// FetchDATA
class RightContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        fetch('https://656ca88ee1e03bfd572e9c16.mockapi.io/products')
            .then(response => response.json())
            .then(data => {
                const filteredData = data.map(item => ({
                    name: item.name,
                    image: item.avatar
                }));
                this.setState({ products: filteredData });
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    render() {
        const { products } = this.state;

        return (
            <div>
                <div id="right-content">
                    <h2>Product : </h2>
                    <div id="products">
                        {
                            products.map((product) => (
                                <ShowCard image={product.image} name={product.name} />
                            ))
                        }
                        <div style={{ clear: 'both' }} />
                    </div>
                    <div style={{ clear: 'both' }} />
                </div>
                <div style={{ clear: 'both' }} />
            </div>
        );
    }
}


export default RightContent;