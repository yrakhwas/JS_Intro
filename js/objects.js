//let obj = new Object();
// let obj = {};

// obj.name = "Yurii";
// obj.age = 30;
// console.log(obj.name + " " + obj.age);

// delete obj.age;

// console.log(obj.name + " " + obj.age);
// let obj = {}

// obj['Adress of living'] = "Rivne";
// console.log(obj.Adress);

const obj = {
    name: "Yurii",
    age: 30,
    adress: "Rivne",
    countryOfStuding: {
        country: "Ukraine",
        city: "Rivne",
        street: "Shevchenka",
        house: 1
    },
    car: ["BMW", "Volkswagen", "Mercedes"],
    print: function(){
        alert(this.name + " " + this.age);
    },
    showInfo(){
        alert(this.name + " " + this.age);
    }


}

function addCarToObject(obj, newCar)
{
    obj.car.push(newCar);
}

function showAllCars(obj)
{
    alert("Cars: " + obj.car.join(", "));
}

// obj.print();
// obj.showInfo(); 


// obj.name = "Vova";
// obj.age = 25;
// console.log(obj);
// showAllCars(obj);
// let nCar = prompt("Enter the name of the new car");
// addCarToObject(obj, nCar);
// showAllCars(obj);


// let res = "\tPerson info:\n";
// for(let property in obj){
//     if(property == "countryOfStuding"){
//         res += "\t\tCountry of studying:\n";
//         for(let property2 in obj[property]){
//             res += "\t\t\t" + property2 + ": " + obj[property][property2] + "\n";
//         }
//     }
//     res+= property + ": " + obj[property] + "\n";
// }

// alert(res);

// if('country' in obj.countryOfStuding) {
//     //console.log("Yes, there is a country");
//     alert("The country is " + obj.countryOfStuding.country);
// }
// else{
//     console.log("No, there is no country");
// }


// let obj1 = {}
// let obj12 = new Object();
// function Rectangle(width, height){
//     this.width = width;
//     this.height = height;
//     this.area = width * height;
//     this.perimeter = 2 * (width + height);
//     this.showInfo = function(){
//         alert("Width: " + this.width + "\nHeight: " + this.height + "\nArea: " + this.area + "\nPerimeter: " + this.perimeter);
//     }
// }

// let rect1 = new Rectangle(10,12);
// rect1.showInfo();
