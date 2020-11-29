var _a;
var person = {
    name: 'dave',
    job: { title: 'poop-head', description: 'head of poop' }
};
// Only log job if it exists
console.log((_a = person.job) === null || _a === void 0 ? void 0 : _a.title);
var userInput = '';
// It's empty, so will return default (logical OR)
console.log(userInput || 'default');
// It's specifically not null, so will return the user input still (nullish coalescing)
console.log(userInput !== null && userInput !== void 0 ? userInput : 'default');
