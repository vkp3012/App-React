//for add item to cart

export const addCard = (product) => {
    return{
        type : "ADDITEM",
        payload : product
    }
}

//for delete item from cart

export const delCard = (product) => {
    return{
        type : "DELITEM",
        payload : product
    }
}