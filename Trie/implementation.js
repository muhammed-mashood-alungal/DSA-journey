class Node {
    constructor() {
        this.keys = new Array(26)
        this.flag = false
    }

    containsKey(ch) {
        return this.keys[ch.charCodeAt(0) - 'a'.charCodeAt(0)] != undefined
    }

    put(ch, node) {
        this.keys[ch.charCodeAt(0) - 'a'.charCodeAt(0)] = node
    }

    get(ch) {
        return this.keys[ch.charCodeAt(0) - 'a'.charCodeAt(0)]
    }
    
    setEnd() {
        this.flag = true
    }
}

class Trie {
    constructor() {
        this.root = new Node()
    }

    insert(word) {
        let node = this.root

        for (let i = 0; i < word.length; i++) {
            if (!node.containsKey(word[i])) {
                node.put(word[i], new Node())
            }
            node = node.get(word[i])
        }
        node.setEnd()
    }

    _getAllWord(node, prefix, result) {
        if (node.flag == true) {
            result.push(prefix)
        }
        for (let i = 0; i < 26; i++) {
            if (node.keys[i] !== undefined) {
                let char = String.fromCharCode(i + 'a'.charCodeAt(0))
                this._getAllWord(node.keys[i], prefix + char, result)
            }
        }
    }

    getWordsWithPrefix(prefix) {
        if (prefix.length == 0) return []

        let node = this.root
        for (let i = 0; i < prefix.length; i++) {
            if (!node.containsKey(prefix[i])) {
                return []
            }
            node = node.get(prefix[i])
        }
        let result = []
        this._getAllWord(node, prefix, result)
        return result
    }
}

const trie = new Trie()
trie.insert("apple");
trie.insert("app");
trie.insert("apricot");
trie.insert("banana");
console.log(trie.getWordsWithPrefix("ap")); // ["app", "apple", "apricot"]
console.log(trie.getWordsWithPrefix("ba")); // ["banana"]
console.log(trie.getWordsWithPrefix("cat")); // []

