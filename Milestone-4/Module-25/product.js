const products = [
    {id : 1 , name : "Oppo Phone" , model : "A57", price : 15000},
    {id : 2 , name : "Redmi Phone" , model : "Note 8", price : 15000},
    {id : 3 , name : "Vivo Phone" , model : "Y12", price : 15000},
    {id : 4 , name : "IPhone" , model : "15 pro", price : 145000},
    {id : 5 , name : "Recmagic Phone" , model : "V-2", price : 125000},
    {id : 6 , name : "Lenevo Laptop" , model : "8 pro", price : 100000},
    {id : 7 , name : "Hp Pavalion Laptop" , model : "1200", price : 115000},
    {id : 8 , name : "Mac Air 2" , model : "A57", price : 150000},
    {id : 9 , name : "Qbits" , model : "mini 4", price : 15000}
];

function getPhone (products, search) {
    if (typeof search !=="string") {
        return "Please Enter a valid name"
    }
    let findIt = [];
    for (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            findIt.push(`${product.name} ${product.model}`);
        }
    }
    return findIt.join('\n');
}

let productName = getPhone(products, "phone");
console.log(productName);
