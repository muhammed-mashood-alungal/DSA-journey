
class TrieNode {
    constructor() {
        this.isWord = false;
        this.child = new Array(26).fill(null);
    }
}

function countDistinctSubstring(str) {
    let head = new TrieNode();
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let temp = head;
        for (let j = i; j < str.length; j++) {
            if (temp.child[str.charCodeAt(j) - 'a'.charCodeAt(0)] === null) {
                temp.child[str.charCodeAt(j) - 'a'.charCodeAt(0)] = new TrieNode();
                temp.isWord = true;
                count++;
            }
            temp = temp.child[str.charCodeAt(j) - 'a'.charCodeAt(0)];
        }
    }
    return count;
}

console.log("Count of Distinct Substrings: " + countDistinctSubstring("aaabc"));
