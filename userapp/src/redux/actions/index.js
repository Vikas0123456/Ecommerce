// import Product from "../../component/Product";

// import Product from "../../component/Product"

export const addItem = (Product) => {
    return {
        type : "ADDITEM",
        payload : Product
    }
}

export const delItem = (Product) => {
    return {
        type : "DELITEM",
        payload : Product
    }
}