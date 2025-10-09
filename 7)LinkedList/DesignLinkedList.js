function Node(val) {
  this.val = val;
  this.next = null;
}

var MyLinkedList = function () {
  this.head = null;
  this.size = 0;
};

function addAtHead(val) {
  let newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
}

function addAtTail(val) {
  let curr = this.head;
  while (curr.next !== null) {
    curr = curr.next;
  }
  let newNode = new Node(val);
  curr.next = newNode;
  this.size++;
}

function addAtIndex(index, val) {
  if (index === 0) {
    addAtHead(val);
    return;
  } else if (index === this.size) {
    addAtTail(val);
    return;
  } else {
    let newNode = new Node(val);
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    newNode.next = curr.next;
    curr.next = newNode;
  }
  this.size++;
}

function get(index) {
  if (index < 0 || index >= size) {
    return -1;
  }
  let curr = this.head;
  for (let i = 0; i < index; i++) {
    curr = curr.next;
  }
  return curr.val;
}
