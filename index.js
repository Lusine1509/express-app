const fs = require('fs')

fs.readFile('text.txt', function (err, data) {
    if (err) throw err;
    const array = data.toString().split("\n");
    const newArr = [];
    let result = {};
    let obj7={}
 

    for (let i = 0; i < array.length; i++) {
       
        const obj = {};
        newArr.push(array[i].split('.').reverse())
        obj[newArr[i][0].split('=')[0]] = newArr[i][0].split('=')[1]


        newArr[i].shift();
        
        result = newArr[i].reduce((res, key) => ({ [key]: res }), obj)
        Object.assign(obj7,result)
        console.log(result);
      
       
    }
    
