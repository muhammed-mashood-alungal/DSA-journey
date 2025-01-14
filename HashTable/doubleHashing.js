class HashTableDoubleHashing {
    constructor(size = 10) {
        this.table = new Array(size);
        this.size = size;
    }

    hash1(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.size;
    }

    
    hash2(key) {
        let prime = 7;
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return prime - (hash % prime); 
    }

    // Add key-value pair to the hash table
    add(key, value) {
        let index = this.hash1(key);
        let stepSize = this.hash2(key);
        let originalIndex = index;
        let i = 0;

        // Probing loop for open addressing with double hashing
        while (this.table[index] !== undefined) {
            if (this.table[index][0] === key) {
                this.table[index][1] = value; // Update the value if key exists
                return;
            }
            i++;
            index = (originalIndex + i * stepSize) % this.size; // Recalculate index with double hashing
            if (i > this.size) {
                console.log("Table is full");
                return; // Break if we've tried all spots
            }
        }

        // If the spot is empty, insert the key-value pair
        this.table[index] = [key, value];
    }

    // Remove a key from the hash table
    remove(key) {
        let index = this.hash1(key);
        let stepSize = this.hash2(key);
        let originalIndex = index;
        let i = 0;

        // Probing loop to find and remove key-value pair
        while (this.table[index] !== undefined) {
            if (this.table[index][0] === key) {
                this.table[index] = undefined; // Remove the key-value pair
                return;
            }
            i++;
            index = (originalIndex + i * stepSize) % this.size; // Recalculate index with double hashing
            if (i > this.size) {
                console.log("Key not found");
                return; // Break if key is not found
            }
        }
    }

    // Lookup a key in the hash table
    lookup(key) {
        let index = this.hash1(key);
        let stepSize = this.hash2(key);
        let originalIndex = index;
        let i = 0;

        // Probing loop to find the key and return its value
        while (this.table[index] !== undefined) {
            if (this.table[index][0] === key) {
                return this.table[index][1]; // Return the value
            }
            i++;
            index = (originalIndex + i * stepSize) % this.size; // Recalculate index with double hashing
            if (i > this.size) {
                return undefined; // Key not found
            }
        }
        return undefined; // Key not found
    }

    // Display the current state of the hash table
    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(`Index ${i}:`, this.table[i]);
            }
        }
    }
}

// Example usage
const hashTableDH = new HashTableDoubleHashing();

// Add keys and values
hashTableDH.add("name", "Alice");
hashTableDH.add("age", 25);
hashTableDH.add("city", "New York");

// Test lookup
console.log(hashTableDH.lookup("name")); // Alice
console.log(hashTableDH.lookup("age"));  // 25
console.log(hashTableDH.lookup("city")); // New York
console.log(hashTableDH.lookup("missing")); // undefined

// Test remove
hashTableDH.remove("age");
console.log(hashTableDH.lookup("age")); // undefined

// Display hash table
hashTableDH.display();
