class HashTable {
    constructor() {
        this.table = new Array(10)
        this.size = 10
    }
    hash(key, max) {
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i)
        }
        return hash % max
    }

    add(key, value) {
        let index = this.hash(key, this.size)
        if (this.table[index] == undefined) {
            this.table[index] = [[key, value]]
        } else {
            let inserted = false
            for (let i = 0; i < this.table[index].length; i++) {
                if (this.table[index][i][0] == key) {
                    this.table[index][i][1] = value
                    inserted = true
                }
            }
            if (inserted == false) {
                this.table[index].push([key, value])
            }
        }
    }

    remove(key) {
        let index = this.hash(key, this.size)
        if(this.table[index].length == 1 && this.table[index][0][0] == key){
            delete this.table[index]
        }else{
            for(let i = 0 ; i < this.table[index].length ; i++){
                if(this.table[index][i][0] == key){
                    this.table[index].splice(i,1)
                }
            }
        }
    }

    lookup(key){
        let index = this.hash(key,this.size)
        if(this.table[index] == undefined){
            return undefined
        }else{
            for(let i= 0 ; i < this.table[index].length ; i++){
                if(this.table[index][i][0] == key){
                    return this.table[index][i][1]
                }
            }
            return undefined
        }
    }
    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(`Bucket ${i}:`, this.table[i]);
            }
        }
    }
}
const hashTable = new HashTable();

// Add keys and values
hashTable.add("name", "Alice");
hashTable.add("age", 25);
hashTable.add("city", "New York");
hashTable.add("profession", "Developer");

// Test lookup
console.log(hashTable.lookup("name")); // Alice
console.log(hashTable.lookup("age"));  // 25
console.log(hashTable.lookup("city")); // New York
console.log(hashTable.lookup("missing")); // undefined

// Add a duplicate key with a new value
hashTable.add("city", "Los Angeles");
console.log(hashTable.lookup("city")); // Los Angeles

// Test remove
hashTable.remove("age");
console.log(hashTable.lookup("age")); // undefined

// Display hash table
hashTable.display();
