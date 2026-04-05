const chai = {
    name: "Masala Chai",
    price: 20,
    isHot: true
}

// << Syntax to defind object in TS. >>
// {
//     name: string,
//     price: number,
//     isHot: boolean
// }

// Defind objects :- 
// Example-1
let tea: {
    name: string,
    price: number,
    isHot: boolean
};
tea = {
    name: "Ginger Tea",
    price: 25,
    isHot: true
};

// Example-2
type Tea = {
    name: string,
    price: number,
    ingredients: string[]
};
const adrakChai: Tea = {
    name: "Adrak Chai",
    price: 25,
    ingredients: ["ginger", "tea leaves", "milk", "Sugar"]
};

// ----------------------------------------------------------------------------------
// Duck Typing
// Example-1
type Cup = {size: string};

let smallCup: Cup = {size: "200ml"};
let bigCup = {size: "500ml", material: "steel"}; // here type is not definded --it is object type but open

smallCup = bigCup;

// Example-2
type Brew = {brewTime: number};

const coffee = {brewTime: 5, beans: "Arabica"}
const chaiBrew: Brew = coffee

// ----------------------------------------------------------------------------------

// type vaildation:- 
type User = {
    username: string,
    password: string
}

const u:User = {
    username: "chaicode",
    // password: "123"     <<----- if this is present than there is no issue, but if it is remove than it will show error
}

// ----------------------------------------------------------------------------------

// Data type (T) split:-  This is done in order to matained the code readablity and clearlity
type Item = {
    name: string,
    quantity: number
};
type Address = {
    street: string,
    pin: number
};
type Order = {
    id: string,
    items: Item[], // 👁️👁️ line 71
    address: Address // 👁️👁️ line 75
};

// ----------------------------------------------------------------------------------

// 1. Partial :- It allow you to pass a specific property 
//         Downside:- Allow empty Object too

// Example-1
type Chai = {
    name: string,
    price: number,
    isHot: boolean
}

const updateChai = (updates: Partial<Chai>) => {
    console.log("updating chai with", updates);
}

updateChai({price: 25});
updateChai({isHot: false});
updateChai({}); // Empty object

// 2. Required :- All property should be defined (musted)

// Example - 1
type ChaiOrder = {
    name?: string,
    quantity?: number
}

const placeOrder = (order: Required <ChaiOrder>) => {
    console.log(order);
}

placeOrder({ // since required is used need to pass all properties
    name: "Masala Chai",
    quantity: 2    
});

// 3. pick :- let to pick a particular set of values (simalar to partical but more precise)
type ChaiRecipe = {
    name: string,
    price: number,
    isHot: boolean,
    ingredients: string[]
}

type BasiChaiInfo = Pick<Chai, "name" | "price">;

const chaiInfo: BasiChaiInfo = {
    name: "Lemon Tea",
    price: 30
}

// 4. Omit :- let you omit a particular property
type ChaiSecret = {
    name: string,
    price: number,
    isHot: boolean,
    secretIngredients: string
}

type publicChai = Omit <Chai, "secretIngredients">;

const publicChaiRecipe: publicChai = {
    name: "Milk Tea",
    price: 10,
    isHot: true
}

console.log(publicChaiRecipe);
// ----------------------------------------------------------------------------------































