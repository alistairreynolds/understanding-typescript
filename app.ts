const person = {
    name: 'dave',
    job: {title: 'poop-head', description: 'head of poop'}
}

// Only log job if it exists
console.log(person.job?.title);

const userInput = '';

// It's empty, so will return default (logical OR)
console.log(userInput || 'default');

// It's specifically not null, so will return the user input still (nullish coalescing)
console.log(userInput ?? 'default');