



 1️⃣ Creating Objects Using Object Literal 

const student = { name: "Amina", age: 20, course: "Data Science" };
console.log("Student:", student);

const car = { brand: "Toyota", model: "Corolla", year: 2020 };
console.log("Car:", car);

const phone = { company: "Samsung", storage: "128GB", battery: "85%" };
console.log("Phone:", phone);
console.log(""); // blank line

 Creating Objects Using Constructor Function 

function Employee(name, salary, role) {
  this.name = name;
  this.salary = salary;
  this.role = role;
}
const emp1 = new Employee("Khalid", 500, "Manager");
console.log("Employee:", emp1);

function Product(productName, price, inStock) {
  this.productName = productName;
  this.price = price;
  this.inStock = inStock;
}
const prod1 = new Product("Laptop", 1200, true);
console.log("Product:", prod1);

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}
const book1 = new Book("JavaScript Basics", "John Doe", 250);
console.log("Book:", book1);
console.log("");

 Creating Objects Using ES6 Class

class Teacher {
  constructor(name = "Fatima", subject = "Math", experience = 5) {
    this.name = name;
    this.subject = subject;
    this.experience = experience;
  }
}
const teacher1 = new Teacher();
console.log("Teacher:", teacher1);

class BankAccount {
  constructor(accountNumber = "AC12345", ownerName = "Abdirahman", balance = 3000) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = balance;
  }
}
const account1 = new BankAccount();
console.log("BankAccount:", account1);

class Animal {
  constructor(type = "Cat", color = "White", age = 2) {
    this.type = type;
    this.color = color;
    this.age = age;
  }
}
const animal1 = new Animal();
console.log("Animal:", animal1);
console.log("");

 Accessing & Updating Elements

const laptop = { brand: "Dell", ram: "8GB", price: 700 };
console.log("Laptop brand (before):", laptop.brand);
laptop.ram = "16GB";
console.log("Laptop (after update):", laptop);

const userProfile = { username: "Ali2025", email: "ali@example.com", age: 22 };
console.log("Old email:", userProfile.email);
userProfile.email = "ali.new@example.com";
console.log("Updated profile:", userProfile);

const hotelRoom = { roomNumber: 105, price: 50, type: "Single" };
console.log("Old price:", hotelRoom.price);
hotelRoom.price = 40;
console.log("Updated room:", hotelRoom);
console.log("");


const car2 = { brand: "Honda", model: "Civic", year: 2019 };
car2.owner = "Omar"; // dot notation
car2["last-service-date"] = "2025-01-01"; // bracket notation
console.log("Car2:", car2);

const student2 = { name: "Maryam", grade: "A", school: "Afbaro Academy" };
student2.age = 18;
student2["favorite-subject"] = "Physics";
console.log("Student2:", student2);

const shopItem = { itemName: "Milk", price: 2, category: "Food" };
shopItem.quantity = 30;
shopItem["discount-percentage"] = 10;
console.log("Shop item:", shopItem);
console.log("");


const menu = { burger: 5, pizza: 8, juice: 3 };
console.log("Menu items and prices:");
for (const item in menu) {
  if (Object.prototype.hasOwnProperty.call(menu, item)) {
    console.log(`${item}: $${menu[item]}`);
  }
}

const cityInfo = { population: 500000, mayor: "Hassan", area: "200 sq km" };
console.log("City info:");
Object.keys(cityInfo).forEach(key => console.log(`${key}: ${cityInfo[key]}`));

const schedule = { math: "8:00 AM", english: "10:00 AM", science: "1:00 PM" };
console.log("Class schedule:");
for (const [subject, time] of Object.entries(schedule)) {
  console.log(`${subject}: ${time}`);
}
console.log("");


const movie = { title: "Inception", duration: "2h 30m", rating: 9 };
const movieJson = JSON.stringify(movie);
console.log("Movie JSON string:", movieJson);

const jsonString = '{"name":"Sara","age":25,"country":"Kenya"}';
const objFromJson = JSON.parse(jsonString);
console.log("Parsed object from JSON string:");
for (const key in objFromJson) {
  console.log(`${key}: ${objFromJson[key]}`);
}
