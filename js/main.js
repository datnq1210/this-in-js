/**
 * 1. What is "this"?
 * - Trong Javascript, chúng ta dùng "this" để tham chiếu đến một object
 * - this tham chiếu đến object nào là phụ thuộc vào cách nó được sử dụng
 * -> this không phải một biến. Nó là một từ khóa. Vì vậy không thể thay đổi giá trị của "this"
 * 2. Context vs scope
 * - scope dựa trên function, liên quan đến quyền truy cập biến
 * - context dựa trên object, luôn là giá trị của "this" tham chiếu đến object sở hũw đoạn code đang được thực thi
 * Every function invocation has both a scope and a context associated with it.
 * Fundamentally, scope is function-based while context is object-based.
 * In other words, scope pertains to the variable access of a function when it is invoked and is unique to each invocation.
 * Context is always the value of the this keyword, which is a reference to the object that “owns” the currently executing code.
 * https://modernweb.com/understanding-scope-and-context-in-javascript/#:~:text=Fundamentally%2C%20scope%20is%20function%2Dbased,owns%E2%80%9D%20the%20currently%20executing%20code.
 * https://www.freecodecamp.org/news/javascript-lexical-scope-tutorial/
 */

// this Alone
let x = this;
console.log('this Alone', x);

// this in a Function
function myFunction() {
    console.log(this);
    const a = function () {
        console.log('a',this);
    };
    a();
}
myFunction();

// this in a Method
const person = {
    firstName: "John",
    lastName: "Doe",
    myFunction: function () {
        return this;
    }
};
console.log('this in a Method', person.myFunction())

// this in a Events Handlers
const btn1 = document.getElementById('btn1');
btn1.onclick = function () {
    console.log(this)
}

const btn2 = document.getElementById('btn2');
btn2.onclick = () => {
    const me = this;
    console.log(me)
}