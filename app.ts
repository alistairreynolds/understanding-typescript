const person = {
    name: "Alistair",
    age: 34,
    hobbies: ['cake', "pizza"]
};

let hobbies: string[];
hobbies = ['cake', 'pizza'];

for(const hobby of hobbies){
    console.log(hobby.toUpperCase());
}