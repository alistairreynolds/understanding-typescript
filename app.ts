const person: {
    name: string;
    age: number
    hobbies: string[];
    role: [number, string]; // Denotes a Tuple
} = {
    name: "Alistair",
    age: 34,
    hobbies: ['cake', "pizza"],
    role: [2, 'dev']
};

// Throws an error because tuple index 1 = number
// person.role[1] = 4;

let hobbies: string[];
hobbies = ['cake', 'pizza'];

for (const hobby of hobbies) {
    console.log(hobby.toUpperCase());
}