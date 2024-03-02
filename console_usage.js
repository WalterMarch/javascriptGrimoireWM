console.table({name: 'John', age: 25,});

let nowTime = new Date();
console.group('DateTime');
    console.log('toLocaleTimeString:', nowTime.toLocaleTimeString());
    console.log('toLocaleDateString:', nowTime.toLocaleDateString());
    console.log('toLocaleString:', nowTime.toLocaleString());
    console.log('toUTCString:', nowTime.toUTCString());
    console.groupCollapsed('DateTime parts');
        console.log('getFullYear:', nowTime.getFullYear());
        console.log('getMonth:', nowTime.getMonth());
        console.log('getDate:', nowTime.getDate());
        console.log('getDay:', nowTime.getDay());
    console.groupEnd();
console.groupEnd();

for (let i = 0; i <= 25; i++) {
    console.count('Count: ');
    console.log("i: ", i);
    let outputMessage = `${i} is divisible by 5`;
    console.assert(i % 5 != 0, outputMessage);
}