function createNode(data=null, next=null, prev=null) {
    return {
        data,
        next,
        prev
    };
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(data) {
        const node = createNode(data);

        if (this.last) {
            node.next = this.last;
            this.last.prev = node;
        }

        this.last = node;

        if (this.first === null) {
            this.first = node;
        }
    }

    dequeue() {
        if (this.first === null) {
            return;
        }

        const node = this.first;
        this.first = node.prev;

        if (node === this.last) {
            this.last = null;
        }

        return node.data;
    }
}

//other funcitons that uses the queue class

function display(queue) {
    let node = queue.first;
    while (node !== null) {
        console.log(node.data);
        node = node.prev;
    }
}

function squareDance(q){
  console.log('============Square Dance Exercise =========')
  function dancerCounter(dancers){
    dancers = dancers.first
    let count = 1;
    while(dancers != null) {
      count++;
      dancers = dancers.next;
    }
    return count;
  }
  let dancer = q.first; 
  let qM = new Queue;
  let qF = new Queue;
  while(dancer != null){
    // console.log(`node ${dancer.data} visited`);
    if(dancer.data[0] === 'M') {
      qM.enqueue(dancer.data);
    }
    else qF.enqueue(dancer.data);
    dancer = dancer.prev
  }
  mDancer = qM.first;
  fDancer = qF.first;
  while(fDancer != null && mDancer != null){
    console.log(`Female dancer is: ${fDancer.data.substr(2)} and Male dancer is ${mDancer.data.substr(2)}`);
    fDancer = fDancer.prev;
    mDancer = mDancer.prev;
  }
  if( fDancer != null) {
    
    console.log(`There are ${dancerCounter(qF)} female dancers waiting to dance`);
  }
  if(mDancer != null) {
    console.log(`There are ${dancerCounter(qM)} male male dancers waiting to dance`);
  }
}

function ophidianBank(customers){
  console.log('=============Ophidian Bank Exercise ============')
  let counter = 0;
  customer = customers.first;
  while(customer != null ){
    if((Math.round(Math.random()*4)) === 2) {
      counter++;
      console.log(`Customer ${counter}: ${customer.data.substr(2)} cannot be processed`);
      let savedCustomer = customer.data;
      customer = customer.prev;
      customers.dequeue();
      customers.enqueue(savedCustomer);
    }
    else {
      counter++;
      console.log(`Customer ${counter}: ${customer.data.substr(2)} completes bank transaction`);
      customer = customer.prev;
      customers.dequeue();
    }
  }
}

let q = new Queue();
q.enqueue("F Jane");
q.enqueue("M Frank");
q.enqueue("M John");
q.enqueue("M Sherlock");
q.enqueue("F Madonna");
q.enqueue("M David");
q.enqueue("M Christopher");
q.enqueue("F Beyonce");

squareDance(q);
ophidianBank(q);

