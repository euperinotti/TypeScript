class Product {
    name: string;
    price: number | undefined;

    constructor(name: string, price?: number){
        this.name = name;
        this.price = price;
    }
}

export default Product;