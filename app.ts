const person = {
    name: 'dave',
    job: {title: 'poop-head', description: 'head of poop'}
}


// Only log job if it exists
console.log(person.job?.title);