let car = {
    modelName:"BMW",
    brandName:"X6",
    horsePower:12000,
    year:2000,
    millage: 250,
    currentFuel:30,
    fuelCapacity:20,
    serviceHistory: [100,140,156],
    fuelFor1km:20
}

let car2 = {
    modelName:"BMW",
    brandName:"X5",
    horsePower:16000,
    year:2010,
    millage: 300,
    currentFuel:40,
    fuelCapacity:30,
    serviceHistory: [100,140,156,200],
    fuelFor1km:30
}
let car3 = {
    modelName:"BMW",
    brandName:"X6",
    horsePower:12000,
    year:2000,
    millage: 250,
    currentFuel:30,
    fuelCapacity:20,
    serviceHistory: [100,140,156],
    fuelFor1km:20
}
let car4 = {
    modelName:"BMW",
    brandName:"X6",
    horsePower:12000,
    year:2000,
    millage: 250,
    currentFuel:30,
    fuelCapacity:20,
    serviceHistory: [100,140,156],
    fuelFor1km:20
}


function drive(km) {
    const requiredFuel = km * this.fuelFor1KM;
    if (requiredFuel <= this.currentFuel) {
        this.milage += km; 
        this.currentFuel -= requiredFuel; 
        return `Drove ${km} km. Current mileage: ${this.milage} km. Current fuel: ${this.currentFuel} liters.`;
    } else {
        return "Not enough fuel";
    }
}
 function age(){
    let age = 2024 - this.year;
    return age;
 }
 function calculateMaxKm() {
    return Math.floor(this.currentFuel / this.fuelFor1KM);
}

function serviceXost(){
    let sum = 0;
    for(let i = 0;i < serviceHistory.length;i++){
        sum += serviceHistory[i];
    }
    return sum;
}


//Task2



let cars = [
    new car("Toyota", "Corolla", 2020, "Qara"),
    new car("Ford", "Mustang", 2021, "Goy"),
    new car("Volkswagen", "Golf", 2019, "Mavi"),
    new car("Honda", "Civic", 2022, "Ag"),
    new car("BMW", "X5", 2023, "Gümüs")
];

function carsMethod(brand, model, year, color) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
}

console.log(carsMethod);


//Task3

/*
3. Bir arrow function yazın. (getTop3HorsepowerCars  )
Global-da yuxarıdakı adda bir arrow function yazın hansı ki parametr olaraq bir array qəbul edir və geriyə 3 elementli başqa bir array qaytarır. (Ən çox at gücü olan 3 maşını bir array-ə yığıb return edir)
*/
const modelsCar = [
    { model: 'Car A', horsepower: 300 },
    { model: 'Car B', horsepower: 400 },
    { model: 'Car C', horsepower: 250 },
    { model: 'Car D', horsepower: 500 },
    { model: 'Car E', horsepower: 350 }
];
const getTop3HorsepowerCars = (cars) => {
    return cars
        .sort((a, b) => b.horsepower - a.horsepower) 
        .slice(0, 3); 
};
const topCars = getTop3HorsepowerCars(cars);
console.log(topCars);

//Task4
/*4. Əlavə olaraq array ilə əməliyyatlar edin:
Qiymətə görə avtomobilləri sort edin. (çoxdan aza)
Məsafəsi 10_000 km-dən artıq olan ilk avtomobili tapın.    
10 yaşdan böyük olan avtomobilləri filter edin. (avotomobil-dəki age metodundan və filter-dən istifadə et)  */ 
const automobiles = [
    { model: "Toyota Camry", price: 30000, distance: 12000, year: 2015 },
    { model: "Honda Accord", price: 25000, distance: 8000, year: 2019 },
    { model: "Ford Focus", price: 20000, distance: 15000, year: 2011 },
    { model: "Chevrolet Malibu", price: 22000, distance: 11000, year: 2010 },
    { model: "Nissan Altima", price: 28000, distance: 5000, year: 2018 },
];
 const sortPrice  = (automobiles) => {
      return automobiles
      .sort((a,b) => b.price - a.price);
 };

function findDistance(automobiles){
    let text = [];
    for(let i = 0;i < automobiles.length;i++){
     if(automobiles[i].distance == 10000 )
     text.push(automobiles[i])
    }
    return text;
}


 //Task5


function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Alice", sayGoodbye);




























