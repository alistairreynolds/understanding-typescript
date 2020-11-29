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


// Defining a generic function
// Convention is to use "T", then carry on with the alphabet
// Using "extends" it constrains the T and U to be objects still
function merged<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergeResult = merged({name: 'sdada'}, {age: 30});
const mergeResult2 = merged({potatoes: ['red', 'brown']}, {age: 30});

// If we just used (objA: object) on the function definition, it wouldn't be able to know "name" is a property
console.log(mergeResult.name);
console.log(mergeResult2.potatoes[0]);


// Won't work as it's a constrained generic
// const constrainedMergeResult = merged({name: 'sdada'},  30);

interface HasLength {
    // State that it needs to have a length property
    length: number;
}

function countAndDescribe<T extends HasLength>(param: T): [T, string] {
    let description = 'has no length value';
    if (param.length === 1) {
        description = `has a a single element `;
    } else if (param.length > 1) {
        description = `has ${param.length} elements`;
    }

    return [param, description];
}

console.log(countAndDescribe(['asdadad', 'dfsf']));