/**
 * 🍽️ Thali Combo Platter - Mixed Methods Capstone
 *
 * Grand Indian Thali restaurant mein combo platter system banana hai.
 * String, Number, Array, aur Object — sab methods mila ke ek complete
 * thali banao. Yeh capstone challenge hai — sab kuch combine karo!
 *
 * Data format: thali = {
 *   name: "Rajasthani Thali",
 *   items: ["dal baati", "churma", "papad"],
 *   price: 250,
 *   isVeg: true
 * }
 *
 * Functions:
 *
 *   1. createThaliDescription(thali)
 *      - Template literal, .join(", "), .toUpperCase(), .toFixed(2) use karo
 *      - Format: "{NAME} (Veg/Non-Veg) - Items: {items joined} - Rs.{price}"
 *      - name ko UPPERCASE karo, price ko 2 decimal places tak
 *      - isVeg true hai toh "Veg", false hai toh "Non-Veg"
 *      - Agar thali object nahi hai ya required fields missing hain, return ""
 *      - Required fields: name (string), items (array), price (number), isVeg (boolean)
 *      - Example: createThaliDescription({name:"Rajasthani Thali", items:["dal","churma"], price:250, isVeg:true})
 *                 => "RAJASTHANI THALI (Veg) - Items: dal, churma - Rs.250.00"
 *
 *   2. getThaliStats(thalis)
 *      - Array of thali objects ka stats nikalo
 *      - .filter() se veg/non-veg count
 *      - .reduce() se average price
 *      - Math.min/Math.max se cheapest/costliest
 *      - .map() se saare names
 *      - Return: { totalThalis, vegCount, nonVegCount, avgPrice (2 decimal string),
 *                  cheapest (number), costliest (number), names (array) }
 *      - Agar thalis array nahi hai ya empty hai, return null
 *
 *   3. searchThaliMenu(thalis, query)
 *      - .filter() + .includes() se search karo (case-insensitive)
 *      - Thali match karti hai agar name ya koi bhi item query include kare
 *      - Agar thalis array nahi hai ya query string nahi hai, return []
 *      - Example: searchThaliMenu(thalis, "dal") => thalis with "dal" in name or items
 *
 *   4. generateThaliReceipt(customerName, thalis)
 *      - Template literals + .map() + .join("\n") + .reduce() se receipt banao
 *      - Format:
 *        "THALI RECEIPT\n---\nCustomer: {NAME}\n{line items}\n---\nTotal: Rs.{total}\nItems: {count}"
 *      - Line item: "- {thali name} x Rs.{price}"
 *      - customerName UPPERCASE mein
 *      - Agar customerName string nahi hai ya thalis array nahi hai/empty hai, return ""
 *
 * @example
 *   createThaliDescription({name:"Rajasthani Thali", items:["dal"], price:250, isVeg:true})
 *   // => "RAJASTHANI THALI (Veg) - Items: dal - Rs.250.00"
 */
export function createThaliDescription(thali) {
  // Your code here

  // Base Case
  if(
    thali === null ||
    typeof thali !== "object" 
  ) return "";

  if(
    typeof thali.name !== "string" ||
    typeof thali.price !== "number" ||
    typeof thali.isVeg !== "boolean" 
  )return "";

  const CapticalName = thali.name.toUpperCase();
  const price = thali.price.toFixed(2);
  const isVeg = (thali.isVeg)? "Veg":"Non-Veg";
  const item = thali.items.join(", ");

  return `${CapticalName} (${isVeg}) - Items: ${item} - Rs.${price}`;
}

export function getThaliStats(thalis) {
  // Your code here

  if(!Array.isArray(thalis) || thalis === null){
    return null;
  }

  const Veg = thalis.filter(
    (thali) => thali.isVeg
  );
  const Non_Veg = thalis.filter(
    (thali) => !thali.isVeg
  );
  const vegCount = Veg.length;
  const nonVegCount = Non_Veg.length;

  const totalPrice = thalis.reduce(
    (sum, thali) => sum + thali.price 
  , 0);

  let totalThalis = thalis.length
  let avgPrice = (totalPrice / totalThalis).toFixed(2);

  const cheapest = thalis.reduce(
    (min, thali) => Math.min(min, thali.price)
    ,Infinity);
  const costliest = thalis.reduce(
    (max, thali) => Math.max(max, thali.price)
    ,-Infinity);

  const nameList = thalis.map((thali) => thali.name);
  if(nameList.length === 0 || nameList === null) return null

  return { 
          totalThalis: totalThalis,
          vegCount: vegCount, 
          nonVegCount: nonVegCount, 
          avgPrice: avgPrice,
          cheapest: cheapest,
          costliest: costliest, 
          names: nameList
        }
}

export function searchThaliMenu(thalis, query) {
  // Your code here

  if(!Array.isArray(thalis) || typeof query !== "string"){
    return [];
  }

  const search = query.toLowerCase();

  return thalis.filter(
    (thali) => {
      // check name
      const nameMatch = thali.name.toLowerCase().includes(search);
      
      // check items
      const itemMatch = thali.items.some(item =>
        item.toLowerCase().includes(search)
      );

      return nameMatch || itemMatch;
    }
  );
}

export function generateThaliReceipt(customerName, thalis) {
  // Your code here
  if(typeof customerName !== "string") return "";
  if(!Array.isArray(thalis) || thalis.length === 0) return "";

  const NAME = customerName.toUpperCase();

  // Line items
  const lineItems = thalis
                      .map(thali => `- ${thali.name} x Rs.${thali.price}`)
                      .join("\n");
  
  // Total price
  const total = thalis.reduce(
    (sum, thali) => sum + thali.price
    , 0
  );

  const count = thalis.length;


  return `THALI RECEIPT\n---\nCustomer: ${NAME}\n${lineItems}\n---\nTotal: Rs.${total}\nItems: ${count}`;
}
