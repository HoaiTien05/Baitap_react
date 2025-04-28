import React, { Component } from "react";
import getData from "./getData";

class AddProduct extends Component {
    constructor(props) {
        super(props);

        const storedProducts = JSON.parse(sessionStorage.getItem("products"));
        const products = storedProducts || getData("products");

        this.state = {
            id: parseInt(products[products.length - 1]?.id || 0) + 1,
            name: "",
            name_category: "Thời trang nam",
            code: "",
            image: "",
            price: "",
            old_price: "",
            products: products,
            showModal: false, // thêm biến để điều khiển modal
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        let value = event.target.value;

        if (name === "image") {
            const file = document.getElementById("image").files.item(0);
            if (file) {
                value = "images/" + file.name;
            }
        }

        this.setState({ [name]: value });
        event.preventDefault();
    }

    saveProducts(products) {
        sessionStorage.setItem("products", JSON.stringify(products));
    }

    handleSubmit(event) {
        event.preventDefault();
        const newProduct = {
            id: this.state.id,
            name: this.state.name,
            name_category: this.state.name_category,
            code: this.state.code,
            image: this.state.image,
            price: this.state.price,
            old_price: this.state.old_price,
        };
        const updatedProducts = [...this.state.products, newProduct];

        this.saveProducts(updatedProducts);
        this.setState({
            products: updatedProducts,
            id: this.state.id + 1,
            name: "",
            name_category: "Thời trang nam",
            code: "",
            image: "",
            price: "",
            old_price: "",
            showModal: false, // đóng modal sau khi thêm
        });
        alert("Một sản phẩm đã được thêm vào!");
    }

    toggleModal() {
        this.setState({ showModal: !this.state.showModal });
    }
    handleChange(event) {
        const name = event.target.name;
        let value = event.target.value;
    
        if (name === "image") {
            const file = event.target.files[0];
            if (file) {
                value = URL.createObjectURL(file); // Tạo link blob URL cho file hình
            }
        }
    
        this.setState({ [name]: value });
        event.preventDefault();
    }
    
    renderProductsByCategory() {
        const categories = {};

        this.state.products.forEach((product) => {
            if (!categories[product.name_category]) {
                categories[product.name_category] = [];
            }
            categories[product.name_category].push(product);
        });

        return Object.keys(categories).map((category) => (
            <div key={category} style={{ marginBottom: "20px" }}>
                <h4>{category}</h4>
                <div className="row">
                    {categories[category].map((product) => (
                        <div className="col-sm-6 mb-3" key={product.id}>
                            <div className="card">
                                <img
                                    src={product.image}
                                    className="card-img-top"
                                    alt={product.name}
                                    style={{ height: "200px", objectFit: "cover" }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">Code: {product.code}</p>
                                    <p className="card-text">Giá: {product.price} đ</p>
                                    <p className="card-text">
                                        <s>{product.old_price} đ</s>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ));
    }

    render() {
        return (
            <div className="container mt-4">
                <div className="row">
                    <div className="col-sm-12">
                        <button
                            className="btn btn-success mb-3"
                            onClick={this.toggleModal}
                        >
                            + Add Product
                        </button>

                        {/* Modal */}
                        {this.state.showModal && (
                            <div className="modal show fade d-block" tabIndex="-1">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title">Add New Product</h5>
                                            <button
                                                type="button"
                                                className="btn-close"
                                                onClick={this.toggleModal}
                                            ></button>
                                        </div>
                                        <div className="modal-body">
                                            <form id="form" onSubmit={this.handleSubmit}>
                                                <div className="form-group mb-2">
                                                    <label htmlFor="name">Name</label>
                                                    <input
                                                        className="form-control"
                                                        id="name"
                                                        name="name"
                                                        placeholder="Slippers"
                                                        value={this.state.name}
                                                        onChange={this.handleChange}
                                                        required
                                                    />
                                                </div>

                                                <div className="form-group mb-2">
                                                    <label htmlFor="name_category">Category</label>
                                                    <select
                                                        className="form-control"
                                                        id="name_category"
                                                        name="name_category"
                                                        value={this.state.name_category}
                                                        onChange={this.handleChange}
                                                    >
                                                        <option value="Thời trang nam">Men's fashion</option>
                                                        <option value="Thời trang nữ">Women's fashion</option>
                                                    </select>
                                                </div>

                                                <div className="form-group mb-2">
                                                    <label htmlFor="code">Code</label>
                                                    <input
                                                        className="form-control"
                                                        id="code"
                                                        name="code"
                                                        placeholder="XXXXXXX"
                                                        value={this.state.code}
                                                        onChange={this.handleChange}
                                                        required
                                                    />
                                                </div>

                                                <div className="form-group mb-2">
                                                    <label htmlFor="image">Image</label>
                                                    <input
                                                        type="file"
                                                        id="image"
                                                        name="image"
                                                        className="form-control"
                                                        onChange={this.handleChange}
                                                    />
                                                </div>

                                                <div className="form-group mb-2">
                                                    <label htmlFor="price">Price</label>
                                                    <input
                                                        className="form-control"
                                                        id="price"
                                                        name="price"
                                                        placeholder="10000"
                                                        value={this.state.price}
                                                        onChange={this.handleChange}
                                                        required
                                                    />
                                                </div>

                                                <div className="form-group mb-2">
                                                    <label htmlFor="old_price">Old Price</label>
                                                    <input
                                                        className="form-control"
                                                        id="old_price"
                                                        name="old_price"
                                                        placeholder="12000"
                                                        value={this.state.old_price}
                                                        onChange={this.handleChange}
                                                        required
                                                    />
                                                </div>

                                                <button type="submit" className="btn btn-primary mt-3">
                                                    Add Product
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Background tối mờ */}
                        {this.state.showModal && (
                            <div
                                className="modal-backdrop fade show"
                                onClick={this.toggleModal}
                            ></div>
                        )}

                        <h2>Danh sách sản phẩm</h2>
                        {this.renderProductsByCategory()}
                    </div>
                </div>
            </div>
        );
    }
}

export default AddProduct;
