function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.clear = clear;
  this.length = length;
}

function push(element) {
  this.dataStore[this.top++] = element;
}

function peek() {
  return this.dataStore[this.top - 1];
}
function pop() {
  return this.dataStore[--this.top];
}
function clear() {
  this.top = 0;
}
function length() {
  return this.top;
}

function fact(n) {
  var s = new Stack();
  while(n>1) {
    s.push(n--);
  }
  var result = 1;
  while(s.length() > 0) {
    result *= s.pop();
  }
  return result;
}

print(fact(3));