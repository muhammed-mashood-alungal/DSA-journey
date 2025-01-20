class MinHeap {
    constructor() {
        this.arr = new Array()
    }

    parent(i) {
        return Math.floor((i - 1) / 2)
    }
    left(i) {
        return 2 * i + 1
    }
    right(i) {
        return 2 * i + 2
    }
    insert(x) {
        this.arr.push(x)

        let k = this.arr.length - 1
        while (k > 0 && this.arr[this.parent(k)] > this.arr[k]) {
            let temp = this.arr[this.parent(k)]
            this.arr[this.parent(k)] = this.arr[k]
            this.arr[k] = temp
            k = this.parent(k)
        }
    }
    heapify(idx){
        let ri = this.right(idx)
        let li = this.left(idx)
        let smallest = idx

        if(li < this.arr.length && this.arr[li] < this.arr[smallest]){
            smallest = li
        }
        if(li < this.arr.length && this.arr[ri] < this.arr[smallest]){
            smallest = ri
        }

        if(smallest != idx){
            [this.arr[idx],this.arr[smallest]] = [this.arr[smallest],this.arr[idx]]
            this.heapify(smallest)
        }
    }

    extractMin(){
        if(this.arr.length  ==1){
           
            return this.arr.pop()
        }
        let mini = this.arr[0]
        this.arr[0] = this.arr[this.arr.length - 1]
        this.heapify(0)
        return mini

    }

    decreaseKey(i,val){
        this.arr[i] = val

        while(i > 0 && this.arr[this.parent(i)] > this.arr[i]){
            [this.arr[i],this.arr[this.parent(i)]] = [this.arr[this.parent(i)],this.arr[i]]
            i = this.parent(i)
        }

    }
    delete(i){
        this.decreaseKey(i,-Infinity)
        this.extractMin()
    }

    getMin() {
        return this.arr[0];
    }

    print() {
        console.log(this.arr.slice(0, this.size).join(" "));
    }

}
const h = new MinHeap(20);
h.insert(4);
h.insert(1);
h.insert(2);
h.insert(6);
h.insert(7);
h.insert(3);
h.insert(8);
h.insert(5);
console.log("Min value is", h.getMin());
h.insert(-1);
console.log("Min value is", h.getMin());
h.decreaseKey(3, -2);
console.log("Min value is", h.getMin());
h.extractMin();
console.log("Min value is", h.getMin());
h.delete(0);
console.log("Min value is", h.getMin());