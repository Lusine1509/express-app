const fs = require('fs');
const path= require('path')

fs.readFile('text.txt', function (err, data) {
    if (err) throw err;
    const array = data.toString().split("\n");
    const newArr = [];
    let result = {};
    let final = {}


    const merge = (...arguments) => {
        let target = {};
        const merger = (obj) => {
            for (let prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                    if (Object.prototype.toString.call(obj[prop]) === '[object Object]') {
                        target[prop] = merge(target[prop], obj[prop]);
                    } else {
                        target[prop] = obj[prop];
                    }
                }
            }
        };


        for (let i = 0; i < arguments.length; i++) {
            merger(arguments[i]);
        }

        return target;
    };


    for (let i = 0; i < array.length; i++) {

        const obj = {};
        newArr.push(array[i].split('.').reverse())
        obj[newArr[i][0].split('=')[0]] = newArr[i][0].split('=')[1]


        newArr[i].shift();

        result = newArr[i].reduce((res, key) => ({ [key]: res }), obj)

        final = merge(final, result)

    }
<<<<<<< HEAD
    fs.writeFileSync(path.join(__dirname, 'text.json'), JSON.stringify(final));
}


);
=======
    
>>>>>>> 2c8dc90b261a739611a5830f6131f1da491ae041
