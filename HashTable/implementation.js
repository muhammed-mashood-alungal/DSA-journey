class HashTable {
    constructor() {
        this.table = new Array(10);
        this.size = 10;
    }

    hash(key, max) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % max;
    }

    add(key, value) {
        let index = this.hash(key, this.size);
        if (!this.table[index]) {
            this.table[index] = [[key, value]];
        } else {
            let inserted = false;
            for (let i = 0; i < this.table[index].length; i++) {
                if (this.table[index][i][0] === key) {
                    this.table[index][i][1] = value;
                    inserted = true;
                    break;
                }
            }
            if (!inserted) {
                this.table[index].push([key, value]);
            }
        }
    }

    remove(key) {
        let index = this.hash(key, this.size);
        if (!this.table[index]) return; // Prevent accessing undefined bucket

        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i][0] === key) {
                this.table[index].splice(i, 1);
                if (this.table[index].length === 0) {
                    this.table[index] = undefined; // Set to undefined if empty
                }
                return;
            }
        }
    }

    lookup(key) {
        let index = this.hash(key, this.size);
        if (!this.table[index]) return undefined;
        
        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i][0] === key) {
                return this.table[index][i][1];
            }
        }
        return undefined;
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(`Bucket ${i}:`, this.table[i]);
            }
        }
    }
}

// Test cases
const hashTable = new HashTable();

hashTable.add("name", "Alice");
hashTable.add("age", 25);
hashTable.add("city", "New York");
hashTable.add("profession", "Developer");

console.log(hashTable.lookup("name")); // Alice
console.log(hashTable.lookup("age"));  // 25
console.log(hashTable.lookup("city")); // New York
console.log(hashTable.lookup("missing")); // undefined

hashTable.add("city", "Los Angeles");
console.log(hashTable.lookup("city")); // Los Angeles

hashTable.remove("age");
console.log(hashTable.lookup("age")); // undefined

hashTable.display();
