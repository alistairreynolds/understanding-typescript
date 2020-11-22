enum Role {
    USER,
    DEV,
    ADMIN = 99,
}

const person = {
    name: "Alistair",
    age: 34,
    hobbies: ['cake', "pizza"],
    role: Role.ADMIN
};

// Throws an error because tuple index 1 = number
// person.role[1] = 4;

let hobbies: string[];
hobbies = ['cake', 'pizza'];

for (const hobby of hobbies) {
    console.log(hobby.toUpperCase());
}