let product ={
    name: "Tshirt",
    price: 123,
    rating: {
        stars: 4.5,
        noOfReview: 453,
    },

};
// console.log(typeof product);
// let str = JSON.stringify(product);
// console.log(typeof str);
// console.log(str);
// let newProduct = JSON.parse(str);
// console.log(typeof newProduct)
// localStorage.setItem('Name','Kg Coding');
// localStorage.setItem('Price',80);
// console.log(localStorage.getItem('Price'));
localStorage.setItem('product',JSON.stringify(product));
let product2 = JSON.parse(localStorage.getItem('product'));
console.log(product2);
localStorage.removeItem('price');
localStorage.clear();
