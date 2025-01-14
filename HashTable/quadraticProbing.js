class HashTableLinearProbing {
    constructor(size = 10) {
        this.table = new Array(size);
        this.size = size;
    }

    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.size;
    }
    add(key, value) {
        let index = this.hash(key)
        let i = 1 
        let originalIndex = index

        while (this.table[index] != undefined) {
            if (this.table[index][0] == key) {
                this.table[index][1] = value
                return
            }
            index = (index + i*i) % this.size
            i++
            if(index == originalIndex) return  
        }
        this.table[index] = [key,value]
    }

    remove(key){
        let index = this.hash(key)
        let i = 1
        let originalIndex = index
        
        while(this.table[index] != undefined){
            if(this.table[index][0] == key){
                this.table[index] = undefined
                return
            }

            index = (index + i*i) % this.size
            i++
            if(index == originalIndex) return // NO KEY FOUND
        }
    }
    lookup(key) {
        let index = this.hash(key);
        let originalIndex = index;
        let i =0 
        while (this.table[index] !== undefined) {
            if (this.table[index][0] === key) {
                return this.table[index][1];
            }
            index = (index + i * i) % this.size;
            i++
            if (index === originalIndex) return undefined; // Key not found
        }
        return undefined;
    }
    
    display(){
        for(let i =0 ; i < this.table.length ; i++){
            console.log(this.table[i])
        }
    }



}

const hashTableLP = new HashTableLinearProbing();

// Add keys and values
hashTableLP.add("name", "Alice");
hashTableLP.add("age", 25);
hashTableLP.add("city", "New York");

// Test lookup
console.log(hashTableLP.lookup("name")); // Alice
console.log(hashTableLP.lookup("age"));  // 25
console.log(hashTableLP.lookup("city")); // New York
console.log(hashTableLP.lookup("missing")); // undefined

// Test remove
hashTableLP.remove("age");
console.log(hashTableLP.lookup("age")); // undefined

// Display hash table
hashTableLP.display();
