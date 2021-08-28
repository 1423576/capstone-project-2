var cartValue = document.getElementById("cart-value");
var cartButton = document.getElementById("cart");

var Laptop1Add = document.getElementById("Laptop1");
var Laptop2Add = document.getElementById("Laptop2");
var Laptop3Add = document.getElementById("Laptop3");
var Laptop4Add = document.getElementById("Laptop4");

var Tab1Add = document.getElementById("Tab1");
var Tab2Add = document.getElementById("Tab2");
var Tab3Add = document.getElementById("Tab3");
var Tab4Add = document.getElementById("Tab4");

var phone1Add = document.getElementById("phone1");
var phone2Add = document.getElementById("phone2");
var phone3Add = document.getElementById("phone3");
var phone4Add = document.getElementById("phone4");

var addButtons = document.getElementsByClassName("button");

console.log(addButtons[0]);
    var Laptop1 = {
    name:"Apple M1 chip with 8‑core CPU, 7‑core GPU",
    quantity: 0,
    rupees:92900,
};
    var Laptop2 = {
    name:"Apple MacBook Pro (16-inch/40.65 cm, 16GB RAM)",
    quantity:0,
    rupees:215990,
    paise:00,
};
   var Laptop3 = {
    name:"Dell XPS 13 Laptop",
    quantity:0,
    rupees:113989,
    paise:99,
   }
    var Laptop4 = {
    name:"HP 15-eg0104TX Pavilion Laptop",
    quantity:0,
    rupees:74999,
    };


var Tab1 = {
    name:"New Apple 11 iPad Pro Wi-Fi 128GB - Space Grey",
    quantity:0,
    rupees:71900,
    paise:00,
};

var Tab2 = {
    name:"Apple Ipad Air 256 Gb 10.5 Inch",
    quantity:0,
    rupees:58900,
    paise:00,
};

var Tab3 = {
    name:"Galaxy Tab A7",
    quantity:0,
    rupees:17999,
    paise:00,
};

var Tab4 = {
    name:"Lenovo Tab M10 FHD Plus 26.16 cm (10.3 inch) Tablet 4 GB",
    quantity:0,
    rupees:20999,
};

var phone1 = {
    name:"Apple iPhone 12 Pro (128 GB, Pacific Blue)",
    quantity:0,
    rupees:119900,
    paise:00,
};

var phone2 = {
    name:"Realme 2 Pro ( 4GB RAM, 64GB Storage)",
    quantity:0,
    rupees:10890,
    paise:00,
};

var phone3 = {
    name:"Redmi Note 10S",
    quantity:0,
    rupees:14999,
};

var phone4 = {
    name:"Galaxy M12",
    quantity:0,
    rupees:10999,
    paise:00,
};

function updateCart(){
    let cart = 0;
    for(index = 0;index<items.lenght;index++){
        cart = cart+items[index].quantity;
    }
    cartValue.innerHTML = cart;
}


function updateCart() {
    cart = Laptop1.quantity+
    Laptop2.quantity+
    Laptop3.quantity+
    Laptop4.quantity+
    Tab1.quantity+
    Tab2.quantity+
    Tab3.quantity+
    Tab4.quantity+
    phone1.quantity+
    phone2.quantity+
    phone3.quantity+
    phone4.quantity;
    cartValue.innerHTML = cart;
}

for(let i=0; i<addButtons.lenght;i++){
    addButtons[i].onclick = (e) => {
        items[i].quantity++;
        updateCart();
    };
}

Laptop1Add.onclick = (e) => {
    Laptop1.quantity++;
    updateCart();
};

Laptop2Add.onclick = (e) => {
    Laptop2.quantity++;
    updateCart();
};

Laptop3Add.onclick = (e) => {
    Laptop3.quantity++;
    updateCart();
};

Laptop4Add.onclick = (e) => {
    Laptop4.quantity++;
    updateCart();
};

Tab1Add.onclick = (e) => {
    Tab1.quantity++;
    updateCart();
};

Tab2Add.onclick = (e) => {
    Tab2.quantity++;
    updateCart();
};

Tab3Add.onclick = (e) => {
    Tab3.quantity++;
    updateCart();
};

Tab4Add.onclick = (e) => {
    Tab4.quantity++;
    updateCart();
};

phone1Add.onclick = (e) => {
    phone1.quantity++;
    updateCart();
};

phone2Add.onclick = (e) => {
    phone2.quantity++;
    updateCart();
};

phone3Add.onclick = (e) => {
    phone3.quantity++;
    updateCart();
};

phone4Add.onclick = (e) => {
    phone4.quantity++;
    updateCart();
};

var finalRupee = 0;
var finalcents = 0;

function updatePrice() {
    
    var Laptop1CostInPaise = 
    Laptop1.quantity*Laptop1.rupees*100+Laptop1.quantity*Laptop1.paise;
    var Laptop2CostInPaise = 
    Laptop2.quantity*Laptop2.rupees*100+Laptop2.quantity*Laptop2.paise;
    var Laptop3CostInPaise = 
    Laptop3.quantity*Laptop3.rupees*100+Laptop3.quantity*Laptop3.paise;
    var Laptop4CostInPaise = 
    Laptop4.quantity*Laptop4.rupees*100+Laptop4.quantity*Laptop4.paise;

    var Tab1CostInPaise = 
    Tab1.quantity*Tab1.rupees*100+Tab1.quantity*Tab1.paise;
    var Tab2CostInPaise = 
    Tab2.quantity*Tab2.rupees*100+Tab2.quantity*Tab2.paise;
    var Tab3CostInPaise = 
    Tab3.quantity*Tab3.rupees*100+Tab3.quantity*Tab3.paise;
    var Tab4CostInPaise = 
    Tab4.quantity*Tab4.rupees*100+Tab4.quantity*Tab4.paise;

    var phone1CostInPaise = 
    phone1.quantity*phone1.rupees*100+phone1.quantity*phone1.paise;
    var phone2CostInPaise = 
    phone2.quantity*phone2.rupees*100+phone2.quantity*phone2.paise;
    var phone3CostInPaise = 
    phone3.quantity*phone3.rupees*100+phone3.quantity*phone3.paise;
    var phone4CostInPaise = 
    phone4.quantity*phone4.rupees*100+phone4.quantity*phone4.paise;

    totalPriceInPaise = 
    Laptop1CostInPaise+
    Laptop2CostInPaise+
    Laptop3CostInPaise+
    Laptop4CostInPaise+
    Tab1CostInPaise+
    Tab2CostInPaise+
    Tab3CostInPaise+
    Tab4CostInPaise+
    phone1CostInPaise+
    phone2CostInPaise+
    phone3CostInPaise+
    phone4CostInPaise;

    finalRupee=Math.floor(TotalPriceInPaise / 100);
    finalPaise=totalPriceInPaise % 100;
}

var whatsapplink = "https://api.whatsapp.com/send?phone=919000000000&text=Order%20details";

function updateWhatsappLink() {
     if(Laptop1.quantity !=0) {
        whatsappLink+="%0A" + Laptop1.name+"%20"+Laptop1.quantity;
     }
     if(Laptop2.quantity !=0) {
        whatsappLink+="%0A" + Laptop2.name+"%20"+Laptop2.quantity;
     }
     if(Laptop3.quantity !=0) {
        whatsappLink+="%0A" + Laptop3.name+"%20"+Laptop3.quantity;
     }
     if(Laptop4.quantity !=0) {
        whatsappLink+="%0A" + Laptop4.name+"%20"+Laptop4.quantity;
     }
     if(Tab1.quantity !=0) {
        whatsappLink+="%0A" + Tab1.name+"%20"+Tab1.quantity;
     }
     if(Tab2.quantity !=0) {
        whatsappLink+="%0A" + Tab2.name+"%20"+Tab2.quantity;
     }
     if(Tab3.quantity !=0) {
        whatsappLink+="%0A" + Tab3.name+"%20"+Tab3.quantity;
     }
     if(Tab4.quantity !=0) {
        whatsappLink+="%0A" + Tab4.name+"%20"+Tab4.quantity;
     }
     if(phone1.quantity !=0) {
        whatsappLink+="%0A" + phone1.name+"%20"+phone1.quantity;
     }
     if(phone2.quantity !=0) {
        whatsappLink+="%0A" + phone2.name+"%20"+phone2.quantity;
     }
     if(phone3.quantity !=0) {
        whatsappLink+="%0A" + phone3.name+"%20"+phone3.quantity;
     }
     if(phone4.quantity !=0) {
        whatsappLink+="%0A" + phone4.name+"%20"+phone4.quantity;
     }
     whatsappLink+="%0A" + "Total%20Price:%20" + finalRupees+"%20"+finalPaise  + "p";
}

cartButton.onclick = () => {
    updatePrice();
    updateWhatsappLink();
    window.open(whatsappLink,"_blank");
};