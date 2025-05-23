// let car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020,
// }
// let car2 = {
//     make: "Honda",
//     model: "Civic",
//     year: 2021,
// }
// let car3 = {
//     make: "Ford",
//     model: "Mustang",
//     year: 2022,
// }


class Car{
    model;
    year;
    color;
    speed;
    constructor(model, year, color, speed){
        this.model = model;
        this.year = year;
        this.color = color;
        this._speed = speed;
    }
    set speed(value){
        if(value < 0){
            console.log("Speed cannot be negative");
            this._speed = 0;
            return;
        }
        else
        {
            this._speed = value;
        }
    }
    get speed(){
        return this._speed;
    }




    setSpeed(value){
        this.speed = value;
    }


    print(){
        console.log(`Car model : ${this.model} year : ${this.year} color : ${this.color} speed : ${this._speed}`);
    }
}

class PoliceCar extends Car{

    volume;

    constructor(model, year, color, speed, volume){
        super(model, year, color, speed);
        this.volume = volume;
    }
    beep()
    {
        console.log("Beep Beep");
    }
}



const car1 = new Car("Toyota", 2020, "White", 180);
// car1.model = "Toyota";
// car1.year = 2020;
// car1.color = "red";
// car1.speed = 120;
car1.print();
//car1.setSpeed(200);
car1._speed = 200;
car1.print();

const car2 = new PoliceCar("Toyota Prius", 2020, "White", 180, 100);
car2.beep();
car2.print();