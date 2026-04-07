# TypeScript Installation Commands

| Command                |  Purpose                                                                 |
|------------------------|--------------------------------------------------------------------------|
|npm init -y             | initizatize **package.json file**                                        |
|                        |                                                                          |
|npx tsc --init          | initizatize **tsconfig file** [npx becoz tsc is not installed grobally]  |
|tsc -p . ⭐             | compile the **TypeScript file**                                         |
|npm i -D typescript     | download **TS Compiler as Dev-Dependencies**                             |
|npm i tsc-watch -D      | watch **TS file [auto run]**                                             |
|                        |                                                                          |
|npx gitignore Node      | It create .gitignore file for Node                                       |


```json
"scripts": {
    "start": "node dist/index.js",
    "dev": "npx tsc"
},
```
