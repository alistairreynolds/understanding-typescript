// This is generic
const users: [] = []

// These are specific
const users1: Array<string | number> = [];     // Would be like string[]|number[]
const users2: (string | number)[] = [];
const users3: string[] | number[] = [];       // However this does not work


users1.push('asd');
users1.push(1);
users2.push('asd');
users2.push(1);


// Would be generic if not for Promise<string>
const promiseFn: Promise<string> = new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
        resolve('all good');
    } else {
        reject('all bad');
    }
})

promiseFn.then(r => console.log(r)).catch(r => console.error(r));
