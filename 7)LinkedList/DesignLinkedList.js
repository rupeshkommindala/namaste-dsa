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
