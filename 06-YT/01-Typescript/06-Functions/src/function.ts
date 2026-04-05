// Creation:- Function
function makeChai (type: string, cups: number) {
    console.log(`Making ${cups} cups of ${type}`);
}

makeChai ("Masala", 2);

// ----------------------------------------------------------------------
// return type <<syntax>> :- 
function getChaiPrice(): number {
    return 25;
}
function makeOrder (order: string) {
    if(!order) return null;

    return order;
}

// ----------------------------------------------------------------------
// return type:- 

// 1. Void :- nothing will be returned
function logChai(): void {
    console.log("Chai is ready");
}

// 2. optional data type ---> << ? >>
function orderChai (type?: string){
    
}
// 3. Default data type
function orderChai_Default (type: string = "Masala"){
    // if nothing is return than << "Masala" >> will be return
}

// ----------------------------------------------------------------------
// Complext function <T>
function createChai (order: {
    type: string,
    sugar: number,
    size: "small" | "large"
}): number {
    return 4;
}