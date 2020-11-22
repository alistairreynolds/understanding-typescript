function add(first: number, second: number) {
    return first + second;
}

function print(num: number): void {
    console.log(num)
}

// Set the combinedValues var to be a method that requires two number parameters and returns a number
let combinedValues: (a: number, b: number) => number;

combinedValues = add;

print(add(3, 5));
print (combinedValues(7, 10));