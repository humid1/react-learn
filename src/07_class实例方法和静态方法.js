/**
 * class 的基本使用  【静态方法】 【实例方法】
 */
// --------------------- 传统面向对象的方式 ------------------------
function Person(name, age) {
    // 实例属性
    this.name = name;
    this.age = age;
}

// info 属性，直接挂载给构造函数，所以他是【静态属性】
Person.info = 'aaa';

// 静态方法
Person.show = function() {
    console.log('这是 Person 的静态 show 方法');
}

// 原型对象-定义实例方法
Person.prototype.say = function() {
    console.log("这是 Person 的实例方法")
}

var p1 = new Person('姓名',18);
console.log(p1);

// 调用【实例方法】
p1.say(); 
// 调用【静态方法】
Person.show();

// ------------------- 使用 class 面向对象的方式 --------------------------

// 动物类
//   在 class 区域内，只能写 构造器、静态方法、静态属性、实例方法
//   class 内部，还是用的 ES5 语法实现的，所以就把 class 关键字，称为 语法糖
class Animal {
    // 这是类的构造器
    // 每一个类中，都有一个构造器,如果未定义构造器，默认会一个空的构造器 constructor() {}
    // 构造器的作用，就是每当 new 这个类的时候，必然会先执行
    constructor(name, age) {
        // 实例属性
        this.name = name;
        this.age = age;
    }

    // 在 class 内部修饰的属性，就是静态属性 (用的较少)
    static info = 'eeee';

    // 这是 Animal 的实例方法 ( 常用 )
    shili() {
        console.log('Animal 的实例方法')
    }

    // 这是 Animal 的静态方法
    static show() {
        console.log('Animal 的静态方法')
    }
}

const a1 = new Animal('大华',11);
console.log(a1);

// 实例方法
a1.shili();
// 静态方法
Animal.show();