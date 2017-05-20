/*1、Object*/

//1.1
console.log(typeof Object);	 //?

//1.2
var obj = new Object();
obj.name = '小毛';
obj.age = 18;
console.log(obj); //?

//1.3
var obj = new Object({name:'小毛', age:18});
console.log(typeof obj);  //?












/*2、Function*/

//2.1
console.log(typeof Function); //?
console.log(typeof new Function("return 1")); //?

//2.2
var add = new Function("a","b", "return a+b");
console.log(add(1,2));  //?











/*3、prototype*/

//3.1
console.log(Object.prototype !== undefined); //?
console.log((function(){}).prototype !== undefined); //?

//3.2
console.log(typeof {}.prototype); //?

//3.3
console.log(typeof Object.prototype); //?
console.log(typeof (function(){}).prototype); //?
console.log(typeof Function.prototype); //?
console.log(typeof Function.prototype.prototype); //?

//3.4
function Person(name){
	this.name = name
}
console.log(Person.prototype.constructor === Person); //?


//3.5
function Person(name){
	this.name = name	
	this.job = function(){
		console.log(this.name + '在工作');
	}
}

Person.prototype.sleep = function(){
	console.log(this.name + '睡着了');
}

var p1 = new Person('大毛');
var p2 = new Person('二毛');

p1.job(); //?
p2.job(); //?

p1.sleep();  //?
p2.sleep();  //?

console.log(p1.job === p2.job);  //?
console.log(p1.sleep === p2.sleep);  //?








/*4、__proto__*/

//4.1
console.log(Object.__proto__ != undefined); //?
console.log(Object.prototype.__proto__ != undefied);  //?
console.log(Function.__proto__ != undefined); //?
console.log(String.__proto__ != undefined); //?
console.log((function(){}).__proto__ != undefined); //?
console.log({}.__proto__ != undefined); //?
console.log("abc".__proto__ != undefined); //?

//4.2
function Person(name){
	this.name = name
}
var person = new Person("大毛");
console.log(person.__proto__ === Person.prototype); //?

console.log(person.__proto__); //?
console.log(typeof Person.__proto__); //?
console.log(typeof Object.__proto__);  //?
console.log(typeof Function.__proto__);  //?
console.log(Object instanceof Function); //?
console.log(Function instanceof Object);


//4.3
function Person(name){
	this.name = name
	this.job = function(){}
}
Person.prototype.sleep = function(){};
var person = new Person("大毛"); //person一级属性哪些？

//4.4
function Person(name){
	this.name = name
}
var person = new Person("大毛"); //描述person的原型链? 例如 person.__proto__ => *** => ***

var abc = "abc"; //描述abc的原型链?

//4.5
Object.prototype.test1 = "test1";
Object.prototype.test2 = "test2";

function Person(name){
	this.name = name
}

Person.prototype.test2 = "new test2"
var person = new Person("大毛");
console.log(person.test1); //?
console.log(person.test2); //?














/*5、constructor*/

//5.1
function Person(name){
	this.name = name
}

console.log(Person.prototype.constructor === Person); //?

//5.2
function Person(name){
	this.name = name
}

var person = new Person('大毛'); //用js伪代码写出new Person('大毛')运行机制？ 















/*6、利用原型链实现一个继承*/

//6.1

动物(Animal)：吃(eat方法)

人(Person)：姓名（name属性） 工作（job方法）

男人(Man)：睡觉（sleep方法）


希望执行下面的代码能得到注释的结果

var man = new Man('大毛');
console.log(man.name); //大毛
man.eat(); //控制台输出吃
man.job(); //控制台输出工作
man.sleep(); //控制台输出睡觉





