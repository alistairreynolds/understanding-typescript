function add(num1: number, num2: number, showResult: boolean, prefix: string){
    const result =  `${prefix} ${num1 + num2}`;
    if(showResult){
        alert(result);
    }else{
        return result;
    }
}

let first: number;
first = 5;
const second = 7.2;
const showResult = true;

const r = add(first, second, showResult, "The result is ");

console.log(r);