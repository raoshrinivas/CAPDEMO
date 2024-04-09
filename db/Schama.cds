namespace myproduct;


entity product {
key id : String;
    name : String;
    stock : Integer;
    price : String(100);
}

entity supplier {
key id : String;
suppliername : String;
address : String;
email : String;
}