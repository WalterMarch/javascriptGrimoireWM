// first pass at getting keys from json data
// will need to be refactored to handle nested json data
// probably use recursion

// get the data
// check if it is an array or an object

// let jsonData = require('/workspaces/javascriptGrimoireWM/json/64kb.json');
let jsonData = require('/workspaces/javascriptGrimoireWM/json/products.json');

let jsonDataLength = jsonData.length;

if (jsonDataLength === undefined) {
    // if the length is undefined, then it is an object
    const sampleObjectKeys = Object.keys(jsonData);
    console.log("Outer Keys", sampleObjectKeys);
    for (let i = 0; i < sampleObjectKeys.length; i++) {
        innerJsonData = jsonData[sampleObjectKeys[i]]; 
        sampleInnerKeys = Object.keys(innerJsonData[0]);
        console.log("Inner Keys", sampleInnerKeys);
        for (let j = 1; j < innerJsonData.length; j++) {
            if (!(JSON.stringify(Object.keys(innerJsonData[j])) == JSON.stringify(sampleInnerKeys))) {
                console.log('Keys do not match');
                break;
            }
        }

    }
} else {
    // if the length is defined, then it is an array
    const sampleObjectKeys = Object.keys(jsonData[0]);
    console.log("Keys", sampleObjectKeys);
    for (let i = 1; i < jsonData.length; i++) {
        if (!(JSON.stringify(Object.keys(jsonData[i])) == JSON.stringify(sampleObjectKeys))) {
            console.log('Keys do not match');
            break;
        }
    }
}

