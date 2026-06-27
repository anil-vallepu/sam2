let cart =[];
function addToCart(name,price){
let item = cart.find(product =>product.name ===name);
if(item){item.quantity++;}
	else{cart.push({
		name:name,
		price:price,
		qty:1});}

