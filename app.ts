class DataStorage<T extends String | Number | Boolean>{
    // Define a custom/generic type so that it doesn't really matter what gets passed
    // Don't allow objects as they won't be removed very well
    private data : T[] = [];

    addItem(item: T){
        this.data.push(item);
    }

    removeItem(item: T){
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems(){
        return this.data;
    }
}


// Now we define what we want to store when we instantiate the object
const textStorage = new DataStorage<String>()
textStorage.addItem('cake')

const numberStorage = new DataStorage<Number>()
numberStorage.addItem(10)


// This won't work because we're creating the new object when we trying to remove it.
// Only way around would be to create the object and reference it when removing, which defeats the point

// const objStorage = new DataStorage<Object>()
// numberStorage.addItem({name: 'bill'})
// numberStorage.removeItem({name: 'bill'})