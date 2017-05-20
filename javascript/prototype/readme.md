# prototype

## 参考
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript

## 1、Object

- Object是js内置函数对象，new Object结果是Object函数对象构造的对象实例

```javascript
//1.1
console.log(typeof Object);	//function
```

- 语法

```
// 对象初始化器（Object initialiser）或对象字面量（literal）
{ [ nameValuePair1[, nameValuePair2[, ...nameValuePairN] ] ] } 
// 以构造函数形式来调用
new Object([value])
```

- new Object

```javascript
//1.2
var obj = new Object();
obj.name = '小毛';
obj.age = 18;
console.log(typeof obj); //object

```

```javascript
//1.3
var obj = new Object({name:'小毛', age:18});
console.log(typeof obj); //object
```


## 2、Function

- Function是js内置函数对象，它比较特殊，其他函数new之后是对象实例，new Function还是一个函数对象

```javascript
//2.1
console.log(typeof Function); //function
console.log(typeof new Function("return 1")); //function
```

- 语法
```
new Function ([arg1[, arg2[, ...argN]],] functionBody)
```

- new Function

```javascript
//2.2
var add = new Function("a","b", "return a+b");
console.log(add(1,2)); //3
```

## 3、prototype

- prototype原型是函数对象的一个属性，是显式原型, 每个函数对象都有一个prototype属性

```javascript
//3.1
console.log(Object.prototype !== undefined);	//true
console.log((function(){}).prototype !== undefined); // true
```

- 对象实例没有prototype

```javascript
//3.2
console.log(typeof {}.prototype); //undefined
```

- prototype是一个对象实例, 系统内置Function.prototype,Function.prototype.prototype除外

```javascript
//3.3
console.log(typeof Object.prototype);	//object
console.log(typeof (function(){}).prototype); //object
console.log(typeof Function.prototype);	//function
console.log(typeof Function.prototype.prototype);	//undefined

```

- prototype中都有contructor函数对象指向自己，构成循环引用

```javascript
//3.4
function Person(name){
	this.name = name
}
console.log(Person.prototype.constructor === Person);//true
```

- 简单实用原型共享方法

把对象需要共享的属性和方法放到这个属性下，有点超类的意思

```javascript
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

p1.job(); //大毛在工作
p2.job(); //二毛在工作

p1.sleep(); //大毛睡着了
p2.sleep(); //二毛睡着了

console.log(p1.job === p2.job); // false
console.log(p1.sleep === p2.sleep); //true

```

## 4、__proto__

- __proto__是对象的属性,它是对象的隐式原型，不是所有浏览器都能访问到

- 所有对象都有一个__proto__,包括函数对象, Object.prototype.__proto__除外,因为Object.prototype是终点

```javascript
//4.1
console.log(Object.__proto__ != undefined); // true
console.log(Object.prototype.__proto__ != undefied);  // false
console.log(Function.__proto__ != undefined); // true
console.log(String.__proto__ != undefined); // true
console.log((function(){}).__proto__ != undefined); //true
console.log({}.__proto__ != undefined); // true
console.log("abc".__proto__ != undefined); // true

```

- 对象__proto__属性指向它构造函数的prototype属性

```javascript
//4.2

function Person(name){
	this.name = name
}
var person = new Person("大毛");
console.log(person.__proto__ === Person.prototype); // true

console.log(person.__proto__); //object
console.log(typeof Person.__proto__); //function
console.log(typeof Object.__proto__);  //function
console.log(typeof Function.__proto__);  //function
console.log(Object instanceof Function); //true
console.log(Function instanceof Object); //true

```

- 简单从结构上看 对象 = 本身属性 + 本身方法 + __proto__

__proto__相当于对象指向父亲的指针

```javascript
//4.3
function Person(name){
	this.name = name
	this.job = function(){}
}
Person.prototype.sleep = function(){};
var person = new Person("大毛"); //person有三个属性name,job, __proto__
 
```


- 把所有__proto__属性串起来的链叫proto chain原型链

```javascript
//4.4
function Person(name){
	this.name = name
}
var person = new Person("大毛");

var abc = "abc";

//person的原型链
person.__proto__ === Person.prototype
Person.prototype.__proto__ === Object.prototype
Object.prototype.__proto__ === null
得出：
person.__proto__ => Person.prototype.__proto__ => Object.prototype.__proto__

//abc的原型链
abc.__proto__ === String.prototype
String.prototype.__proto__  === Object.prototype
Object.prototype.__proto__ === null
得出：
abc.__proto__ => String.prototype.__proto__ => Object.prototype.__proto__

```

- 对象实例能访问原型链上所有属性和方法

修改原型链上某个函数对象的prototype对象，会影响依赖它的所有对象实例

存在同名情况，前面的覆盖后面的

```javascript
//4.5
Object.prototype.test1 = "test1";
Object.prototype.test2 = "test2";

function Person(name){
	this.name = name
}

Person.prototype.test2 = "new test2"
var person = new Person("大毛");
console.log(person.test1); //test1
console.log(person.test2); //new test2
```


## 5、constructor

- 构造函数是prototype的一个函数对象，它指向prototype拥有者函数对象自己

```javascript
//5.1
function Person(name){
	this.name = name
}

console.log(Person.prototype.constructor === Person); //true

```

- new一个函数对象的运行机制

```javascript
//5.2
function Person(name){
	this.name = name
}

var person = new Person('大毛');

/*
new Person('大毛')运行机制伪码

var obj = {}; //新建空对象实例
obj.__proto__ = Person.prototype; //将对象实例__proto__指向函数对象prototype
Person.prototype.constructor.call(obj, '大毛'); //调用原型构造函数，把this对象指向对象实例
return obj； //返回
*/

```



## 6、利用原型链实现一个继承

动物(Animal)：吃(eat方法)

人(Person)：姓名（name属性） 工作（job方法）

男人(Man)：睡觉（sleep方法）


希望执行下面的代码能得到注释的结果

var man = new Man('大毛');

console.log(man.name); //大毛

man.eat(); //控制台输出吃

man.job(); //控制台输出工作

man.sleep(); //控制台输出睡觉


```javascript
//6.1
function Animal(){
	
}

Animal.prototype.eat = function(){
	console.log("吃")
}

function Person(name){
	this.name = name
}

Person.prototype = new Animal();
Person.prototype.job = function(){
	console.log('工作')
}
Person.prototype.constructor = Person;

function Man(name){
	Person.call(this, name);
}

Man.prototype = new Person();
Man.prototype.sleep = function(){
	console.log('睡觉')
}
Man.prototype.constructor = Man;

var man = new Man('大毛');

console.log(man.name);
man.eat();
man.job();
man.sleep();

//原型链
man.__proto__ === Man.prototype
Man.prototype.__proto__ === Person.prototype
Person.prototype.__proto__ === Animal.prototype
Animal.prototype.__proto__ === Object.prototype
Object.prototype.__proto__ === null

原型链就是 
man.__proto__ => Man.prototype.__proto__ => Person.prototype.__proto__ => Animal.prototype.__proto__

=> Animal.prototype.__proto__ => Object.prototype.__proto__
```



