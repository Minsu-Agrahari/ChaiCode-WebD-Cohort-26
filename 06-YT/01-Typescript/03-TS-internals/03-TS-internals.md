# TypeScript Internal working

## Question Coverted:

1.  Different Stages in flow
    
2.  Internal working
    
3.  Why it is needed
    
4.  Result passed on different states
    

* * *

## Full Code Flow

```plaintext
    TS Code
        → Lexer
        → Parser [Abstract Syntax Tree (AST)]
        → Binder
        → Checker
        → Emitter
        → Output (.js, .d.ts, .map)
```

## 1\. Lexer (Scanner. Tokenizer)

### What it is

Convert a raw TypeScript code into Tokens (small meaningful units).

### Example

```javascript
let x: number = 10;
```

### Tokens:

```javascript
[let] [identifier:x] [number] [=] [10] [;]
```

### What it does internally

*   Read code character by character
    
*   Group characters into token using rules/ Grammer
    
*   Ignores whitespace/ comments (mostly)
    

### Output

➡️ Stream of tokens → goes to parser

* * *

## 2\. Parser (Creates Abstract Syntax Tree (AST))

### What it is

Transform tokens into a tree structure called AST (Abstract Syntax Tree).

### Example

```graphql
VariableDeclaration
    ├── name: x
    ├── type: number
    └── value: 10
```

### What it does internally

*   Applies grammer rules (like JS/Ts syntax)
    
*   Builds hierarchical structure
    
*   Detects syntax error
    

### output

➡️ AST (tree structure)

* * *

## 3\. Binder

### What it is

Connects identifies to their meaning (symbols).

### what it creates

*   Symbol Table
    
*   Parent pointer
    
*   Flow nodes (control flow graph)
    

### What it does internally

*   Walks through AST (Abstract Syntax Tree)
    
*   For every identifier:
    
    *   Creates a symbol (variable, function, class)
        
    *   Stores it in a symbol table
        
*   Links nodes with parents → easy traversal
    
*   Builds flow graph for control flow analysis
    

### Example

```javascript
let x = 10
console.log(x);
```

#### Binder links:

*   x → same symbol in both places.
    

### Why needed

Without this:

*   Compiler can't know what "x" refers to
    
*   Scope resolution impossible
    

### Output → Passed forward

➡️ AST + Symbol Table + Flow Graph

* * *

## 4\. Checker (Type Checker)

### What it is

The brain of TypeScript

### What it does

*   Type checking
    
*   Type inference \[Type Consistency Check\]
    
*   Validates correctness
    

### Internal Work

*   Uses:
    
    *   AST
        
    *   Symbol Table
        
    *   Flow nodes
        

### Why needed

*   JavaScript doesn't have types.
    
*   This step ensures type safety before runtime
    

### Output Passing forward

➡️ Annotates AST (types attached, error if any)

* * *

## 5\. Emitter

### What it does internally

*   Traverses AST
    
*   Removes TypeScript-only syntax:
    
    *   types
        
    *   interfaces
        
    *   enums (converted)
        
*   Converts to JavaScript
    

### Example

```typescript
let x: number = 10;
```

Becomes:

```javascript
let x = 10;
```

### Generates

*   `.js` → executable JS
    
*   `.d.ts` → type definitions
    
*   `.map` → source maps (TS JS mapping)
    

### Why needed

Browsers/ Nodes.js understand only JavaScript

### Output

➡️ Final files for running & tooling

* * *

\-—» ***THE END***, see you in ***Next Article***😁👍
