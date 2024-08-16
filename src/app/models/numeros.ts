export class Numeros {
    constructor(
        public num1:number = 0,
        public num2:number = 0
    ) {}

    //getters
    get getNum1(): number {
        return this.num1;
    }
    get getNum2(): number {
        return this.num2;
    }
    //setters
    set setNum1(num1: number) {
        this.num1 = num1;
    }
    set setNum2(num2:number) {
        this.num2 = num2;
    }
}