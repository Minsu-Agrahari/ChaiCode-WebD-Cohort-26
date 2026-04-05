// 1. Array Declaration
// ---- 1D Array <Syntax Array>
const chaiFlavours: string[] = ["Masala", "Adrak"];
const chaiPrice: number[] = [10, 20]

const rating: Array<number> = [4.5, 5.0]; // can also have custom <T> data type

// ---- 2D Array << Syntax Array >>
const table: number[][] = [
    [1, 2, 3],
    [4, 5, 6]
];
// ----------------------------------------------------------------------------------

// Array of Objects
type Chai = {
    name: string,
    price: number,
};
const menu: Chai[] = [
    { name: "Masala", price: 15 },
    { name: "Adrak", price: 25 },
]

// ----------------------------------------------------------------------------------

// Read only Array:- Array cannot be modifyed 
const cities: readonly string[] = ["Delhi", "Jaipur"]; // This will not allow me to push pop [perform any opertation]

// ----------------------------------------------------------------------------------

// TUPLES:- resitied array || data is inserted in the order it is defined
// << Syntax >>
let chaiTuple: [string, number];
chaiTuple = ["Masala", 20];
// chaiTuple = [20, "Masala"]; ❌ will give an error

let userInfo: [string, number, boolean?]; // here boolean value, is optional
userInfo = ["hitesh", 100];
userInfo = ["hitesh", 100, true];
// ----------------------------------------------------------------------------------

// Named Tuble
const chaiItems: [name: string, price: number] = ["Masala", 25];

// ----------------------------------------------------------------------------------
// Read only tuble:-
const location: readonly [number, number] = [28.66, 32.22];

// ----------------------------------------------------------------------------------

// ENUM:- restrict Choices
enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}

const size = CupSize.LARGE

// Enum [auto increase value]
enum Status {
    PENDING = 100,
    SERVER, // 101
    CANCELLED // 102
}

enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger",
}

function makeChai (type: ChaiType) {
    console.log(`Making: ${type}`);
}

makeChai (ChaiType.GINGER);
// makeChai("masala"); <<--- Error 


// Tuple are Array <<---- [[ GOTCHA ]] 
let t: [string, number] = ["chai", 10];
t.push("extra");