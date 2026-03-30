function compareVersion(version1: string, version2: string): number{
    // version1: string representing the first version
    // version2: string representing the second version
    
    // Your implementation here

    const v1 = version1.split(".");
    const v2 = version2.split(".");

    const maxLen = Math.max(v1.length, v2.length);

    while(v1.length < maxLen){
        v1.push("0");
    }
    while(v2.length < maxLen){
        v2.push("0");
    }

    
    for(let i=0; i<maxLen; i++){

        // console.log(`${(Number)(v1[i])} -- ${(Number)(v2[i])}`);
        if(Number(v1[i]) > Number(v2[i])){
            return 1;
        }else if (Number(v1[i]) < Number(v2[i])){
            return -1;
        }
    }

    return 0;
}

console.log(compareVersion("1.01", "1.001"));
console.log(compareVersion("1.0", "1.0.0"));
console.log(compareVersion("0.1", "1.1"));
console.log(compareVersion("1.0.1", "1"));
console.log(compareVersion("7.5.2.4", "7.5.3"));