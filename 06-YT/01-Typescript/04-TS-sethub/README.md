# TypeScript Installation Commands

| Command                |  Purpose                                                             |
|------------------------|----------------------------------------------------------------------|
|npm init -y             | initizatize package.json file                                        |
|npm i -D typescript     | download tsc in node module as devDependencies                       |
|npx tsc --init          | initizatize tsconfig file [npx becoz tsc is not installed grobally]  |
|npx tsc                 | compile the .ts and save it as defind in tsconfig.json               |


```json
"scripts": {
    "start": "node dist/index.js",
    "dev": "npx tsc"
},
```
