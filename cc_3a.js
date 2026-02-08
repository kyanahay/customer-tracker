// Coding Challenge 03a — Customer Records Tracker


// Create Customer Records
let customers = [
  {
    name: "Aaliyah Joseph",
    email: "aaliyah.joseph@edu.com",
    purchases: ["Notebook", "Pen Set"]
  },
  {
    name: "Devon Charles",
    email: "devon.charles@edu.com",
    purchases: ["Wireless Mouse", "USB-C Cable", "Desk Mat"]
  },
  {
    name: "Kadeem Ramdial",
    email: "kadeem.ramdial@edu.com",
    purchases: ["Coffee Mug"]
  }
];

console.log("Initial customers:", customers);



// Add and Remove Data
customers.push({
  name: "Ria Mohammed",
  email: "ria.mohammed@edu.com",
  purchases: ["Phone Case", "Screen Protector"]
});
console.log("After adding a new customer:", customers);


const removedCustomer = customers.shift();
console.log("Customers after shift():", customers);


// Update the email of one existing customer
customers[0].email = "devon.charles233@edu.com";


// Add a new purchase to a customer's purchases array
customers[1].purchases.push("Gift Card");

console.log("\nAfter updates (email + new purchase):", customers);



// Display Customer Information
console.log("\n--- Customer Summary ---");
customers.forEach((customer) => {
  console.log(
    `${customer.name} | ${customer.email} | Purchases: ${customer.purchases.length}`
  );
});
