class Customer{
    constructor(id,customerNumber){
       this.id=id;
       this.customerNumber=customerNumber;
    }
}
let customer=new Customer(1,"12345");
//prototyping
customer.name="Murat"
console.log(customer.name);

Customer.bisey="Bisey"
console.log(Customer.bisey);

console.log(customer.customerNumber);


class IndividualCustomer extends Customer{
     constructor(firstName,id,customerNumber){
          super(id,customerNumber) //prototyping olusturdum
          this.firstName=firstName;
     }
}
 
class CorporateCustomer extends Customer{
    constructor(companyName,id,customerNumber){
        this.companyName=companyName
    }
}

//--------------------map
let products = [
    {id:1, name:"Acer Leptop", unitPrice:150000},
    {id:2, name:"Asus Leptop", unitPrice:160000},
    {id:3, name:"Hp Leptop", unitPrice:120000},
    {id:4, name:"Dell Leptop", unitPrice:140000},
    {id:5, name:"Casper Leptop", unitPrice:170000},
]
    console.log("<ul>");
    products.map(product=>console.log(`<li>${product.name}</li>`))
    console.log("</ul>");

    products.map(product=>{
        console.log(product);
            console.log(`<li>${product.name}</li>`);
    })

    let filteredProducts = products.filter(product=>product.unitPrice>12000)
    console.log(filteredProducts);
