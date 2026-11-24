class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insert(data) {
        const newData = new Node(data);
        if (this.head === null) {
            this.head = newData;
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;

        }

        current.next = newData






    }

    delete(data) {
        if (this.head === null) return;

        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;

        while (current.next !== null) {
            if (current.next.data === data) {
                current.next = current.next.next;
                return;
            }

            current = current.next;
        }
    }

    display() {
        let current = this.head;

        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }
    reverse() {
        let previous = null;
        let current = this.head;

        while (current !== null) {

            let nextNode = current.next;

            current.next = previous;

            previous = current;

            current = nextNode;
        }

        this.head = previous;
    }
}

const list = new LinkedList();

list.insert(10);
list.insert(20);
list.insert(30);

list.display();

list.delete(20);

console.log("After deletion:");

list.display();
console.log("Reverse linkedList list:");

list.reverse()
list.display();