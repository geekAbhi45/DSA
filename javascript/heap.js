class MaxHeap {
  constructor() {
    this.heap = [];
  }

  // ---------- Helpers ----------
  parent(i) { return Math.floor((i - 1) / 2); }
  left(i)   { return 2 * i + 1; }
  right(i)  { return 2 * i + 2; }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  size()    { return this.heap.length; }
  isEmpty() { return this.heap.length === 0; }

  // ---------- PEEK: see the max without removing ----------
  peek() {
    return this.isEmpty() ? null : this.heap[0];
  }

  // ---------- INSERT ----------
  insert(value) {
    this.heap.push(value);               // 1. add at the end
    this.bubbleUp(this.heap.length - 1); // 2. move it up to its place
  }

  bubbleUp(i) {
    while (i > 0) {
      const p = this.parent(i);
      if (this.heap[p] >= this.heap[i]) break; // parent is bigger, so done
      this.swap(i, p);
      i = p;
    }
  }

  // ---------- DELETE (extract max) ----------
  extractMax() {
    if (this.isEmpty()) return null;

    const max = this.heap[0];
    const last = this.heap.pop();        // 1. remove the last element

    if (!this.isEmpty()) {
      this.heap[0] = last;               // 2. move it to the root
      this.bubbleDown(0);                // 3. push it down to its place
    }
    return max;
  }

  bubbleDown(i) {
    const n = this.heap.length;
    while (true) {
      const l = this.left(i);
      const r = this.right(i);
      let largest = i;

      if (l < n && this.heap[l] > this.heap[largest]) largest = l;
      if (r < n && this.heap[r] > this.heap[largest]) largest = r;

      if (largest === i) break;          // already bigger than its children
      this.swap(i, largest);
      i = largest;
    }
  }

  // ---------- CREATE from an existing array (heapify) ----------
  static fromArray(arr) {
    const h = new MaxHeap();
    h.heap = [...arr];                   // copy, don't mutate the original
    for (let i = Math.floor(h.heap.length / 2) - 1; i >= 0; i--) {
      h.bubbleDown(i);
    }
    return h;
  }
}

const heap = new MaxHeap();
[10, 20, 5, 30, 15, 2].forEach((v) => heap.insert(v));
console.log(heap.heap); // [30, 20, 5, 10, 15, 2]
console.log(heap.peek()); // 30


class MinHeap {
  constructor() {
    this.heap = [];
  }

  // ---------- Helpers ----------
  parent(i) { return Math.floor((i - 1) / 2); }
  left(i)   { return 2 * i + 1; }
  right(i)  { return 2 * i + 2; }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  size()    { return this.heap.length; }
  isEmpty() { return this.heap.length === 0; }

  // ---------- PEEK: see the min without removing ----------
  peek() {
    return this.isEmpty() ? null : this.heap[0];
  }

  // ---------- INSERT ----------
  insert(value) {
    this.heap.push(value);              // 1. add at the end
    this.bubbleUp(this.heap.length - 1); // 2. move it up to its place
  }

  bubbleUp(i) {
    while (i > 0) {
      const p = this.parent(i);
      if (this.heap[p] <= this.heap[i]) break; // parent is smaller, so done
      this.swap(i, p);
      i = p;
    }
  }

  // ---------- DELETE (extract min) ----------
  extractMin() {
    if (this.isEmpty()) return null;

    const min = this.heap[0];
    const last = this.heap.pop();       // 1. remove the last element

    if (!this.isEmpty()) {
      this.heap[0] = last;              // 2. move it to the root
      this.bubbleDown(0);               // 3. push it down to its place
    }
    return min;
  }

  bubbleDown(i) {
    const n = this.heap.length;
    while (true) {
      const l = this.left(i);
      const r = this.right(i);
      let smallest = i;

      if (l < n && this.heap[l] < this.heap[smallest]) smallest = l;
      if (r < n && this.heap[r] < this.heap[smallest]) smallest = r;

      if (smallest === i) break;        // already smaller than its children
      this.swap(i, smallest);
      i = smallest;
    }
  }

  // ---------- CREATE from an existing array (heapify) ----------
  static fromArray(arr) {
    const h = new MinHeap();
    h.heap = [...arr];                  // copy, don't mutate the original
    // start from the last parent and bubble down each one
    for (let i = Math.floor(h.heap.length / 2) - 1; i >= 0; i--) {
      h.bubbleDown(i);
    }
    return h;
  }
}