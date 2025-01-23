class TrieNode {
    constructor() {
        this.child = new Array(26).fill(null); // Children nodes for each letter
    }
}

function countDistinctSubstring(str) {
    let head = new TrieNode();
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        let temp = head;
        for (let j = i; j < str.length; j++) {
            let index = str.charCodeAt(j) - 'a'.charCodeAt(0); // Get index for the character
            if (temp.child[index] === null) {
                temp.child[index] = new TrieNode(); // Add a new node if it doesn't exist
                count++; // Increment count for each new node
            }
            temp = temp.child[index]; // Move to the next node
        }
    }
    return count;
}

console.log("Count of Distinct Substrings: " + countDistinctSubstring("aaabc"));
