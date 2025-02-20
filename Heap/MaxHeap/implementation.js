class MaxHeap {
    constructor() {
        this.arr = new Array()
    }

    parent(i) {
        return Math.floor((i - 1) / 2);
    }

    left(i) {
        return 2 * i + 1;
    }

    right(i) {
        return 2 * i + 2;
    }

    insert(x) {
        this.arr.push(x);

        let k = this.arr.length - 1;

        while (k > 0 && this.arr[this.parent(k)] < this.arr[k]) {
            let temp = this.arr[k];
            this.arr[k] = this.arr[this.parent(k)];
            this.arr[this.parent(k)] = temp;
            k = this.parent(k);
        }
    }

    heapify(idx) {
        let li = this.left(idx)
        let ri = this.right(idx)
        let largest = idx;

        if (li < this.arr.length && this.arr[li] > this.arr[largest]) {
            largest = li;
        }

        if (ri < this.arr.length && this.arr[ri] > this.arr[largest]) {
            largest = ri;
        }
        if (largest != idx) {
            [this.arr[largest], this.arr[idx]] = [this.arr[idx], this.arr[largest]];
            this.heapify(largest);
        }
    }

    getMax() {
        return this.arr[0];
    }

    extractMax() {
        if (this.arr.length === 0) {
            return undefined;
        }
        if (this.arr.length == 1) {
            return this.arr.pop();
        }
        let max = this.arr[0];
        this.arr[0] = this.arr[this.arr.length - 1];
        this.arr.pop();
        if (this.arr.length > 0) {
            this.heapify(0);
        }
        return max;
    }
    

    increaseKey(i, val) {
        if (val < this.arr[i]) {
            throw new Error('New value is smaller than the current value');
        }
        this.arr[i] = val;
        while (i > 0 && this.arr[this.parent(i)] < this.arr[i]) {
            [this.arr[this.parent(i)], this.arr[i]] = [this.arr[i], this.arr[this.parent(i)]];
            i = this.parent(i);
        }
    }

    delete(i) {
        this.increaseKey(i, Infinity);
        this.extractMax();
    }
}


// Test the MaxHeap class
const maxHeap = new MaxHeap();

// Insert elements into the heap
maxHeap.insert(10);
maxHeap.insert(20);
maxHeap.insert(5);
maxHeap.insert(30);
maxHeap.insert(15);
maxHeap.insert(25);

// Test getMax method
console.log("Max value:", maxHeap.getMax()); // Expected: 30

// Extract the maximum value and print it
console.log("Extracted Max:", maxHeap.extractMax()); // Expected: 30


// Check the new max value after extraction
console.log("New Max value:", maxHeap.getMax()); // Expected: 25

// Insert a new element and check the new max value
maxHeap.insert(40);
console.log("New Max value after insert:", maxHeap.getMax()); // Expected: 40

// Increase key of an element (e.g., element at index 2, set to 50)
maxHeap.increaseKey(2, 50);
console.log("Max value after increasing key:", maxHeap.getMax()); // Expected: 50

// Delete an element (e.g., element at index 1)
console.log(maxHeap.arr)
maxHeap.delete(1);
console.log("Max value after delete:", maxHeap.getMax()); // Expected: 50 or another valid value based on the heap structure
console.log(maxHeap.arr)
// Extract max repeatedly to test heap maintenance
console.log("Extracted Max:", maxHeap.extractMax()); // Expected: 50
console.log(maxHeap.arr)
console.log("Extracted Max:", maxHeap.extractMax()); // Expected: 40
console.log(maxHeap.arr)
console.log("Extracted Max:", maxHeap.extractMax()); 
console.log(maxHeap.arr)
console.log("Extracted Max:", maxHeap.extractMax()); // Expected: 20
console.log(maxHeap.arr)
console.log("Extracted Max:", maxHeap.extractMax()); // Expected: 15
console.log(maxHeap.arr)
