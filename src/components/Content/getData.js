function GetData(dataName) {
    switch (dataName) {
        case "products":
            const products = [
                {
                    id: "1",
                    name: "Awesome Soft Hat",
                    name_category: "Thời trang nam",
                    code: "1938J-414",
                    image: "https://loremflickr.com/640/480/cats",
                    price: "788.00",
                    old_price: "829.00",
                },
                {
                    id: "2",
                    name: "Elegant Cotton Shirt",
                    name_category: "Thời trang nam",
                    code: "1941A-223",
                    image: "https://loremflickr.com/640/480/fashion",
                    price: "350.00",
                    old_price: "399.00",
                },
                {
                    id: "3",
                    name: "Modern Leather Shoes",
                    name_category: "Thời trang nam",
                    code: "1941A-555",
                    image: "https://loremflickr.com/640/480/shoes",
                    price: "1200.00",
                    old_price: "1350.00",
                },
                {
                    id: "4",
                    name: "Casual Soft Jeans",
                    name_category: "Thời trang nam",
                    code: "1942B-789",
                    image: "https://loremflickr.com/640/480/jeans",
                    price: "450.00",
                    old_price: "499.00",
                },
                {
                    id: "5",
                    name: "Stylish Wool Scarf",
                    name_category: "Thời trang nam",
                    code: "1943C-111",
                    image: "https://loremflickr.com/640/480/scarf",
                    price: "150.00",
                    old_price: "199.00",
                },
                {
                    id: "10",
                    name: "Intelligent Granite Pants",
                    name_category: "Thời trang nam",
                    code: "1541L",
                    image: "https://loremflickr.com/640/480/abstract",
                    price: "13.00",
                    old_price: "729.00",
                },
            ];
            return products;
        default:
            return [];
    }
}

export default GetData;
