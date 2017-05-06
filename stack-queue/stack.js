class Stack {
//Creates a node containing the data and a reference to the next item
     constructor() {
       this.top = null
    }

    push(data) {
        //checks if stack is null.
        //if true assignes data to to top
        if(this.top === null) {
            this.top = createNode(data);
            return;
        }
        const node = createNode(data, this.top)
        this.top = node;
    }

    pop() {
        //assigns node below top to the top
        //return the popped node
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}
function createNode(data=null, next=null){
  return {
    data,
    next
  };
}
function peek(stack){
    if(stack.top === null) {
        return null;
    }
    return stack.top.data
}

function display(stack){
    let node = stack.top;
    while(node != null) {
        console.log(node.data);
        node = node.next;
    }
}
function isPalindrome(str){
    console.log('=========Palindrome Exercise==========')
    console.log(`Is ${str} a palindrome?`);
    let palinD = new Stack();
    let count = 0;
    let isData = true;
    while(isData) {
        if(str[count] != null){
            palinD.push(str[count]);
            count++;
        }
        else {
            isData = false;
        }
    }
    let node = palinD.top;
    let reverseString = '';
    while(node != null){
        reverseString+= node.data
        node = node.next
    }
    return reverseString === str
    // display(palinD);
}
function isBalanced(str){
    console.log('==========Parenthesis Matching Exercise==========')
    console.log(`Is "${str}" blalanced?`)
    ;
    let Parens = new Stack();
    let count = 0;
    while(str[count] != null ) {
        if(
            str[count] === '[' ||
            str[count] === ']' ||
            str[count] === '{' ||
            str[count] === '}' ||
            str[count] === '(' ||
            str[count] === ')'
        ) {
          Parens.push(str[count]);  
        }
        count++;
    }
    let node = Parens.top
    let closeParens = 0;
    let openParens = 0;
    let lastParens = node.data;
    let firstParens = ''
    while(node != null){
        if(node.next === null){
            firstParens = node.data;
        }
        if(node.data === '(' || node.data === '{' || node.data == '['){
            openParens++;
        }
        else if(node.data === ')' || node.data === '}' || node.data == ']'){
            closeParens++;
        }
        node = node.next;
    }
    if(['}',')', ']'].includes(firstParens) || ['{','(', '['].includes(lastParens)){
        return console.log(false);
    }
    else{ return console.log(openParens === closeParens);}

}

let myStack = new Stack();
myStack.push(1);
myStack.push(3);
myStack.push(4);
myStack.pop();

console.log(isPalindrome('123abc'));

isBalanced('12[]{}()234*)');
isBalanced('[((345*2)-4)]*3(23/2)=0');
isBalanced(']((345*2)-4)[*3](23/2)[=0');
