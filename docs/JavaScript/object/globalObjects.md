## JS Function(JS全局对象)
- 全局属性和函数可用于所有内建的 JavaScript 对象。
- 全局对象只是一个对象，而不是类。既没有构造函数，也无法实例化一个新的全局对象。

## 全局函数
- decodeURI()	解码某个编码的 URI。  
- decodeURIComponent()	解码一个编码的 URI 组件。  
- encodeURI()			把字符串编码为 URI。  
- encodeURIComponent()	把字符串编码为 URI 组件。  
- escape()	对字符串进行编码。  
- eval()		计算 JavaScript 字符串，并把它作为脚本代码来执行。  
- getClass()	返回一个 JavaObject 的 JavaClass。  
- isFinite()	检查某个值是否为有穷大的数。  
- isNaN()		检查某个值是否是数字。  
- Number()	把对象的值转换为数字。  
- parseFloat()	解析一个字符串并返回一个浮点数。  
- parseInt()	解析一个字符串并返回一个整数。  
- String()		把对象的值转换为字符串。  
- unescape()	对由 escape() 编码的字符串进行解码。  

## 全局属性
Infinity		代表正的无穷大的数值。  
java		代表 java.* 包层级的一个 JavaPackage。  
NaN		指示某个值是不是数字值。  
Packages	根 JavaPackage 对象。  
undefined	指示未定义的值。  

## 包装类
- 在JS中为我们提供了三个包装类，通过这三个包装类可以将基本数据类型的数据转换为对象
- String() 可以将基本数据类型字符串转换为String对象
- Number() 可以将基本数据类型的数字转换为Number对象
- Boolean() 可以将基本数据类型的布尔值转换为Boolean对象
- 注意：在实际应用中不会使用基本数据类型的对象