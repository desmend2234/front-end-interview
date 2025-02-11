// 題目資料結構
export const questions = {
  javascript: {
    categories: [
      // 分類列表
      {
        name: '1. 基礎概念',
        questions: [
          // 題目列表
          {
            title: '1.1 變量聲明', // 題目標題
            question: '請解釋 var、let、const 之間的區別是什麼？',
            answer: `var: 
- 宣告的變數具有函式作用域或全域作用域
- 可以重複宣告
- 存在提升現象

let: 
- 宣告的變數具有區塊作用域
- 不能重複宣告
- 不存在提升現象

const: 
- 宣告的是常數，必須在宣告時賦值
- 賦值後不能修改
- 具有區塊作用域
- 不存在提升現象`,
          },
          {
            title: '1.2 相等運算符',
            question: '== 和 === 的區別？',
            answer: `== 和 === 的主要區別：

==（寬鬆相等）：
- 只比較值是否相等
- 會進行類型轉換
- 容易產生意外結果

===（嚴格相等）：
- 比較值和類型是否都相等
- 不進行類型轉換
- 結果更可預測

示例：
5 == "5"    // true
5 === "5"   // false
null == undefined  // true
null === undefined // false`,
          },
          {
            title: '1.3 null 和 undefined',
            question: '請解釋 null 和 undefined 的區別？',
            answer: `null 和 undefined 的比較：

1. undefined：
- 變量未被賦值
- 函數沒有返回值
- 訪問對象不存在的屬性
- 函數參數未傳值

2. null：
- 表示空對象指針
- 明確的空值
- 常用於初始化
- typeof null 返回 "object"

3. 使用場景：
// undefined 的情況
let a;
console.log(a);  // undefined

function foo() {}
console.log(foo());  // undefined

// null 的使用
let obj = null;  // 明確表示空值
let user = { name: null };  // 明確表示屬性為空

4. 最佳實踐：
- 優先使用 null 表示空值
- undefined 用於未定義的情況
- 避免手動賦值 undefined`,
          },
          {
            title: '1.4 typeof 和 instanceof',
            question: 'typeof 和 instanceof 的區別？',
            answer: `typeof 和 instanceof 的比較：

typeof：
- 用於判斷基本數據類型
- 返回一個表示類型的字符串
- 對 null 返回 "object"（歷史遺留問題）

instanceof：
- 用於判斷對象的類型
- 檢查原型鏈
- 可以判斷對象的繼承關係

示例：
typeof 42           // "number"
typeof "hello"      // "string"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof null         // "object"
typeof {}           // "object"
typeof []           // "object"

[] instanceof Array        // true
{} instanceof Object      // true
"hello" instanceof String // false`,
          },
          {
            title: '1.5 NaN',
            question: 'NaN 是什麼？如何判斷變數是否為 NaN？',
            answer: `NaN（Not a Number）：

特性：
- 表示非數字的特殊數值
- typeof NaN 返回 "number"
- NaN 不等於任何值，包括它自己

判斷方法：
1. Number.isNaN()
2. isNaN()
3. 自身比較

示例：
console.log(NaN === NaN)        // false
console.log(Number.isNaN(NaN))  // true
console.log(isNaN("hello"))     // true
console.log(Number.isNaN("hello")) // false

最佳實踐：
- 優先使用 Number.isNaN()
- 避免使用全局 isNaN()
- 注意 NaN 的特殊比較規則`,
          },
          {
            title: '1.6 數據類型',
            question: '什麼是 JavaScript 的數據類型（Data Types）？',
            answer: `JavaScript 的數據類型分為兩大類：

1. 原始類型（Primitive Types）：
- Undefined：未定義
- Null：空值
- Boolean：布爾值
- Number：數字
- String：字符串
- Symbol：符號（ES6）
- BigInt：大整數（ES2020）

2. 物件類型（Object Types）：
- Object：對象
- Array：數組
- Function：函數
- Date：日期
- RegExp：正則
- Error：錯誤

3. 類型檢查：
typeof 運算符：
console.log(typeof 42);         // "number"
console.log(typeof "hello");    // "string"
console.log(typeof true);       // "boolean"
console.log(typeof undefined);  // "undefined"
console.log(typeof null);       // "object"
console.log(typeof {});         // "object"
console.log(typeof []);         // "object"
console.log(typeof function(){}); // "function"

4. 類型轉換：
- 顯式轉換：Number()、String()、Boolean()
- 隱式轉換：運算符觸發的自動轉換`,
          },
          {
            title: '1.7 typeof null',
            question: '為什麼 typeof null 會返回 "object"？',
            answer: `typeof null 返回 "object" 的原因：

1. 歷史遺留問題：
- JavaScript 初版的類型標記使用低位存儲
- null 的機器碼全為 0
- 與對象的類型標記相同

2. 實際情況：
console.log(typeof null);        // "object"
console.log(null instanceof Object); // false

3. 正確的判斷方法：
// 直接比較
console.log(value === null);

// 或使用 Object 原型方法
console.log(Object.prototype.toString.call(null)); // "[object Null]"

4. 最佳實踐：
- 使用嚴格相等（===）判斷 null
- 不依賴 typeof 來檢查 null
- 注意 null 和 undefined 的區別`,
          },
          {
            title: '1.8 執行緒',
            question: 'JavaScript 是單執行緒還是多執行緒？',
            answer: `JavaScript 的執行模型：

1. 單執行緒特性：
- JavaScript 是單執行緒語言
- 一次只能執行一個任務
- 使用事件循環處理並發

2. 事件循環：
- 調用堆疊（Call Stack）
- 任務佇列（Task Queue）
- 微任務佇列（Microtask Queue）

3. 異步處理：
- Promise
- async/await
- setTimeout/setInterval
- Web Workers（多線程）

4. 示例：
console.log('1');
setTimeout(() => console.log('2'), 0);
Promise.resolve().then(() => console.log('3'));
console.log('4');

// 輸出順序：1, 4, 3, 2

5. 性能考慮：
- 避免長時間運算阻塞主線程
- 使用 Web Workers 處理密集計算
- 合理使用異步操作`,
          },
          {
            title: '1.9 陣列判斷',
            question: '如何判斷一個變數是陣列（Array）？',
            answer: `判斷陣列的方法：

1. Array.isArray()：
- 最推薦的方法
- ES5 新增
- 準確判斷陣列
Array.isArray([])  // true
Array.isArray({})  // false

2. instanceof：
- 檢查原型鏈
- 可能受跨框架影響
[] instanceof Array  // true

3. Object.prototype.toString：
- 最可靠的方法
- 可以判斷內建類型
Object.prototype.toString.call([]) === '[object Array]'

4. 注意事項：
- typeof [] 返回 "object"
- constructor 可能被修改
- instanceof 在多窗口環境可能失效

5. 最佳實踐：
- 優先使用 Array.isArray()
- 需要跨窗口時使用 toString 方法
- 避免使用 typeof`,
          },
          {
            title: '1.10 值類型與引用類型',
            question: 'JavaScript 的值類型和引用類型有什麼區別？',
            answer: `值類型和引用類型的比較：

1. 值類型（Primitive Types）：
- 直接存儲在棧內存
- 複製會創建新值
- 比較時比較值
示例：
let a = 10;
let b = a;
a = 20;
console.log(b);  // 10

2. 引用類型（Reference Types）：
- 存儲在堆內存
- 複製時複製引用
- 比較時比較引用
示例：
let obj1 = { name: 'John' };
let obj2 = obj1;
obj1.name = 'Jane';
console.log(obj2.name);  // 'Jane'

3. 深淺拷貝：
// 淺拷貝
Object.assign({}, obj)
{ ...obj }

// 深拷貝
JSON.parse(JSON.stringify(obj))
structuredClone(obj)  // 新API

4. 注意事項：
- 函數參數傳遞方式
- 對象比較方式
- 內存管理考慮`,
          },
          // ... 繼續添加其他基礎概念題目
        ],
      },
      {
        name: '2. 作用域與閉包',
        questions: [
          {
            title: '2.1 作用域概念',
            question: '什麼是作用域（Scope）？有哪些種類？',
            answer: `作用域的概念和類型：

1. 作用域定義：
- 變量和函數的可訪問範圍
- 決定變量的生命週期
- 控制變量的可見性

2. 作用域類型：
全局作用域：
- 在任何地方都可訪問
- window/global 對象的屬性
- 容易造成命名衝突

函數作用域：
- 在函數內部定義的變量
- 外部無法訪問
- 函數參數也屬於函數作用域

塊級作用域：
- let/const 聲明的變量
- {} 內有效
- if/for/while 等語句塊

3. 作用域鏈：
- 內部作用域可以訪問外部作用域
- 外部作用域無法訪問內部作用域
- 查找變量時由內向外查找`,
          },
          {
            title: '2.2 閉包',
            question: '什麼是閉包（Closure）？閉包的應用場景？',
            answer: `閉包的概念和應用：

1. 閉包定義：
- 函數及其周圍狀態的組合
- 可以訪問外部函數作用域
- 即使外部函數已執行完畢

2. 主要特性：
- 保持對外部變量的引用
- 形成獨立的作用域
- 可以實現數據私有化

3. 應用場景：
- 數據私有化
- 函數工廠
- 回調函數
- 模塊化開發

4. 示例：
function createCounter() {
    let count = 0;  // 私有變量
    return {
        increment() { count++; },
        getCount() { return count; }
    };
}

const counter = createCounter();
counter.increment();
console.log(counter.getCount()); // 1

5. 注意事項：
- 注意內存洩漏
- 及時清理不用的閉包
- 避免過度使用`,
          },
          {
            title: '2.3 IIFE',
            question: 'IIFE（立即執行函式）是什麼？有什麼應用場景？',
            answer: `IIFE（Immediately Invoked Function Expression）：

1. 基本概念：
- 定義後立即執行的函數
- 創建獨立的作用域
- 避免全局命名空間污染

2. 基本語法：
(function() {
    // 代碼
})();

// 或者
(() => {
    // 代碼
})();

3. 應用場景：
- 模塊化封裝
- 初始化代碼
- 避免變量衝突
- jQuery 插件開發

4. 示例：
const counter = (function() {
    let count = 0;
    return {
        increment() { count++; },
        getCount() { return count; }
    };
})();

5. 優點：
- 隔離作用域
- 保護私有變量
- 避免命名衝突
- 模塊化組織代碼`,
          },
          {
            title: '2.4 this 綁定',
            question: 'this 在不同情境下的指向？',
            answer: `this 的綁定規則：

1. 默認綁定：
- 在非嚴格模式下指向全局對象
- 在嚴格模式下指向 undefined
function foo() {
    console.log(this);
}

2. 隱式綁定：
- 作為對象方法調用時指向該對象
const obj = {
    foo() {
        console.log(this);
    }
};

3. 顯式綁定：
- call()、apply()、bind() 方法
- 指定 this 的指向
function foo() {
    console.log(this.name);
}
foo.call({ name: 'John' });

4. new 綁定：
- 構造函數中的 this 指向新創建的實例
function Person(name) {
    this.name = name;
}

5. 箭頭函數：
- 繼承外層作用域的 this
- 不能被顯式綁定
const foo = () => {
    console.log(this);
};

6. 常見問題：
- 回調函數中的 this
- 事件處理器中的 this
- 定時器中的 this`,
          },
          {
            title: '2.5 作用域鏈',
            question: '什麼是作用域鏈？它是如何工作的？',
            answer: `作用域鏈的工作原理：

1. 基本概念：
- 變量查找的路徑
- 從內到外的層級關係
- 決定變量的訪問權限

2. 查找過程：
- 先在當前作用域查找
- 找不到則向外層查找
- 直到全局作用域

3. 示例：
let global = 'global';
function outer() {
    let outerVar = 'outer';
    function inner() {
        let innerVar = 'inner';
        console.log(innerVar); // 當前作用域
        console.log(outerVar); // 外層作用域
        console.log(global);   // 全局作用域
    }
}

4. 性能考慮：
- 作用域鏈越長查找越慢
- 避免過深的作用域嵌套
- 合理使用閉包

5. 最佳實踐：
- 優先使用當前作用域的變量
- 避免過多的全局變量
- 注意變量名衝突`,
          },
        ],
      },
      {
        name: '3. 原型與繼承',
        questions: [
          {
            title: '3.1 原型鏈',
            question: 'JavaScript 是如何實現繼承的？什麼是原型鏈？',
            answer: `JavaScript 的原型繼承機制：

1. 原型鏈概念：
- 每個對象都有原型（__proto__）
- 原型也是對象，也有自己的原型
- 形成一個鏈式結構

2. 繼承實現：
// ES6 之前
function Animal(name) {
    this.name = name;
}
Animal.prototype.speak = function() {
    console.log(this.name + ' makes a sound');
}

function Dog(name) {
    Animal.call(this, name);
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// ES6 之後
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + ' makes a sound');
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }
}

3. 原型鏈查找：
- 先查找對象自身的屬性
- 如果找不到，查找原型
- 沿著原型鏈向上查找
- 直到找到或到達 null

4. 注意事項：
- 避免原型鏈過長
- 注意屬性遮蔽
- 合理使用繼承`,
          },
          {
            title: '3.2 原型',
            question: '什麼是原型（Prototype）？它是如何運作的？',
            answer: `原型的工作原理：

1. 基本概念：
- 每個函數都有 prototype 屬性
- 每個對象都有 __proto__ 屬性
- prototype 用於實現繼承和共享屬性

2. 原型對象：
function Person(name) {
    this.name = name;
}
Person.prototype.sayHello = function() {
    console.log('Hello, ' + this.name);
};

const person = new Person('John');
person.sayHello(); // "Hello, John"

3. 屬性查找順序：
- 實例屬性
- 原型屬性
- 原型鏈上的屬性

4. 常用方法：
- Object.create()
- Object.getPrototypeOf()
- Object.setPrototypeOf()
- hasOwnProperty()

5. 最佳實踐：
- 避免修改內建原型
- 使用 Object.create(null) 創建純淨對象
- 優先使用類語法`,
          },
          {
            title: '3.3 Object.create',
            question: 'Object.create() 是如何運作的？',
            answer: `Object.create() 的工作原理：

1. 基本用法：
- 創建一個新對象
- 使用現有對象作為新對象的原型
Object.create(proto[, propertiesObject])

2. 實現原理：
function createObject(proto) {
    function F() {}
    F.prototype = proto;
    return new F();
}

3. 使用場景：
// 創建純淨對象
const obj = Object.create(null);

// 實現繼承
const parent = { name: 'parent' };
const child = Object.create(parent);

4. 優點：
- 可以指定原型
- 避免構造函數的問題
- 更靈活的繼承模式

5. 注意事項：
- 性能考慮
- 原型鏈長度
- 屬性描述符的使用`,
          },
          {
            title: '3.4 class vs prototype',
            question: 'class 和 prototype 繼承的區別？',
            answer: `class 與 prototype 繼承比較：

1. 語法差異：
// prototype 方式
function Animal(name) {
    this.name = name;
}
Animal.prototype.speak = function() {
    console.log(this.name);
}

// class 方式
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name);
    }
}

2. 主要區別：
- class 是語法糖，底層仍是原型繼承
- class 不會提升，prototype 函數會提升
- class 內部默認嚴格模式
- class 方法不可枚舉
- class 必須使用 new 調用

3. 繼承實現：
// prototype
function Dog(name) {
    Animal.call(this, name);
}
Dog.prototype = Object.create(Animal.prototype);

// class
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
}

4. 最佳實踐：
- 優先使用 class 語法
- 保持代碼一致性
- 注意瀏覽器兼容性`,
          },
          {
            title: '3.5 new 運算子',
            question: 'new 運算子的底層運作方式？',
            answer: `new 運算子的執行過程：

1. 基本步驟：
- 創建空對象
- 設置原型
- 綁定 this
- 返回對象

2. 模擬實現：
function myNew(Constructor, ...args) {
    // 創建空對象，並設置原型
    const obj = Object.create(Constructor.prototype);
    
    // 綁定 this 並執行構造函數
    const result = Constructor.apply(obj, args);
    
    // 返回結果
    return result instanceof Object ? result : obj;
}

3. 使用示例：
function Person(name) {
    this.name = name;
}
const person = new Person('John');

4. 注意事項：
- 構造函數返回值的處理
- this 綁定
- 原型鏈的建立
- 屬性初始化

5. 最佳實踐：
- 構造函數首字母大寫
- 總是使用 new 調用構造函數
- 避免在構造函數中返回對象`,
          },
          // ... 繼續添加其他原型與繼承題目
        ],
      },
      {
        name: '4. ES6+ 新特性',
        questions: [
          {
            title: '4.1 箭頭函數',
            question: '箭頭函數與普通函數的區別？',
            answer: `箭頭函數特性：

1. 語法差異：
// 普通函數
function add(a, b) {
    return a + b;
}

// 箭頭函數
const add = (a, b) => a + b;

2. this 綁定：
- 箭頭函數沒有自己的 this
- 繼承外層作用域的 this
- 不能用 call/apply/bind 改變 this

3. 其他區別：
- 沒有 arguments 對象
- 不能作為構造函數
- 沒有 prototype 屬性
- 不能用作生成器函數

4. 使用場景：
- 回調函數
- 方法簡寫
- 鏈式調用
- 函數式編程`,
          },
          {
            title: '4.2 解構賦值',
            question: '如何使用解構賦值？有什麼應用場景？',
            answer: `解構賦值用法：

1. 數組解構：
const [a, b] = [1, 2];
const [first, ...rest] = [1, 2, 3];
const [x = 1] = [];  // 默認值

2. 對象解構：
const { name, age } = person;
const { name: userName } = person;  // 重命名
const { title = 'default' } = {};  // 默認值

3. 嵌套解構：
const { address: { city } } = user;
const [{ prop }] = array;

4. 常見應用：
- 交換變量
- 函數參數
- 導入模塊
- 提取數據`,
          },
          {
            title: '4.3 Promise',
            question: 'Promise 的原理和使用方法？',
            answer: `Promise 詳解：

1. 基本用法：
new Promise((resolve, reject) => {
    // 異步操作
    if (success) {
        resolve(data);
    } else {
        reject(error);
    }
});

2. 鏈式調用：
promise
    .then(data => {})
    .catch(error => {})
    .finally(() => {});

3. 靜態方法：
Promise.all([p1, p2, p3]);
Promise.race([p1, p2, p3]);
Promise.allSettled([p1, p2, p3]);
Promise.any([p1, p2, p3]);

4. 錯誤處理：
- catch 捕獲錯誤
- finally 清理資源
- 錯誤傳遞機制

5. 最佳實踐：
- 總是添加錯誤處理
- 避免嵌套 Promise
- 使用 async/await
- 注意內存泄漏`,
          },
        ],
      },
      {
        name: '5. 非同步編程',
        questions: [
          {
            title: '5.1 async/await',
            question: 'async/await 的工作原理是什麼？',
            answer: `async/await 機制：

1. 基本語法：
async function getData() {
    try {
        const result = await fetch(url);
        const data = await result.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

2. 特性：
- async 函數總是返回 Promise
- await 只能在 async 函數內使用
- 可以使用 try/catch 處理錯誤
- 支持頂層 await（ES2022）

3. 錯誤處理：
- try/catch 捕獲錯誤
- Promise 鏈的替代方案
- 更直觀的錯誤處理

4. 最佳實踐：
- 並行請求使用 Promise.all
- 注意錯誤處理
- 避免阻塞主線程
- 合理使用 await`,
          },
        ],
      },
    ],
  },
  react: {
    categories: [
      {
        name: '基礎概念',
        questions: [
          {
            title: '1.1 React 生命週期',
            question: '請解釋 React 組件的生命週期方法。',
            answer: `React 組件生命週期：

1. 掛載階段（Mounting）：
- constructor：初始化 state 和綁定方法
- getDerivedStateFromProps：根據 props 更新 state
- render：渲染 UI
- componentDidMount：組件掛載後執行

2. 更新階段（Updating）：
- getDerivedStateFromProps
- shouldComponentUpdate：性能優化
- render
- getSnapshotBeforeUpdate：獲取更新前的快照
- componentDidUpdate：組件更新後執行

3. 卸載階段（Unmounting）：
- componentWillUnmount：清理工作

4. 錯誤處理：
- getDerivedStateFromError
- componentDidCatch

5. 常見使用場景：
- componentDidMount：數據請求、訂閱
- componentDidUpdate：根據更新後的 props/state 執行操作
- componentWillUnmount：清理定時器、取消訂閱`,
          },
          {
            title: '1.2 Virtual DOM',
            question: '什麼是 Virtual DOM？它如何提升性能？',
            answer: `Virtual DOM 原理：

1. 基本概念：
- JavaScript 對象表示的 DOM 樹
- 用於減少實際 DOM 操作
- 批量處理更新

2. 工作流程：
- 產生 Virtual DOM 樹
- 對比新舊 Virtual DOM（Diffing）
- 計算最小更新
- 批量更新實際 DOM

3. 性能優化：
- 減少 DOM 操作
- 批量處理更新
- 跨瀏覽器兼容性

4. 使用建議：
- 適當的組件拆分
- 使用 key 屬性
- 避免不必要的渲染`,
          },
        ],
      },
      {
        name: 'Hooks',
        questions: [
          {
            title: '2.1 useState',
            question: '請解釋 useState 的使用方式和注意事項。',
            answer: `useState Hook：

1. 基本用法：
const [state, setState] = useState(initialValue);

2. 更新方式：
// 直接設置新值
setState(newValue);

// 基於之前的值更新
setState(prevState => prevState + 1);

3. 注意事項：
- 不要在循環、條件或嵌套函數中使用
- 更新是異步的
- 複雜狀態考慮使用 useReducer

4. 最佳實踐：
- 合理拆分狀態
- 使用函數式更新
- 避免過度使用狀態`,
          },
          {
            title: '2.2 useEffect',
            question: '如何正確使用 useEffect？',
            answer: `useEffect Hook：

1. 基本用法：
useEffect(() => {
  // 副作用代碼
  return () => {
    // 清理函數
  };
}, [dependencies]);

2. 依賴數組：
- 空數組：只在掛載和卸載時執行
- 有依賴：依賴項變化時執行
- 無依賴：每次渲染後執行

3. 常見用途：
- 數據請求
- 訂閱事件
- DOM 操作
- 定時器設置

4. 注意事項：
- 正確設置依賴
- 清理副作用
- 避免無限循環`,
          },
        ],
      },
      {
        name: '性能優化',
        questions: [
          {
            title: '3.1 React.memo',
            question: '如何使用 React.memo 優化組件性能？',
            answer: `React.memo 使用指南：

1. 基本用法：
const MemoizedComponent = React.memo(function MyComponent(props) {
  // 組件邏輯
});

2. 自定義比較函數：
React.memo(MyComponent, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id;
});

3. 適用場景：
- 純展示組件
- 接收簡單 props
- 重複渲染頻繁
- 計算量大的組件

4. 注意事項：
- 不要過度使用
- 考慮比較成本
- 注意 props 穩定性
- 配合 useCallback/useMemo`,
          },
          {
            title: '3.2 useMemo/useCallback',
            question: 'useMemo 和 useCallback 的使用場景和區別？',
            answer: `記憶化 Hooks：

1. useMemo：
// 記憶化計算結果
const memoizedValue = useMemo(() => {
  return expensiveComputation(a, b);
}, [a, b]);

2. useCallback：
// 記憶化回調函數
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);

3. 使用場景：
useMemo：
- 昂貴的計算
- 複雜的數據處理
- 避免重複渲染

useCallback：
- 傳遞給子組件的函數
- 依賴項變化頻繁的函數
- 防止不必要的重渲染

4. 性能考慮：
- 避免過度優化
- 權衡記憶化成本
- 正確設置依賴項
- 測量性能提升`,
          },
        ],
      },
      {
        name: '狀態管理',
        questions: [
          {
            title: '4.1 Context API',
            question: '如何使用 Context API 管理全局狀態？',
            answer: `Context API 使用：

1. 創建 Context：
const ThemeContext = React.createContext(defaultValue);

2. 提供 Context：
function App() {
  return (
    <ThemeContext.Provider value={theme}>
      <MyComponent />
    </ThemeContext.Provider>
  );
}

3. 消費 Context：
// 類組件
static contextType = ThemeContext;

// 函數組件
const theme = useContext(ThemeContext);

4. 最佳實踐：
- 適度使用
- 考慮性能影響
- 合理拆分 Context
- 避免頻繁更新`,
          },
          {
            title: '4.2 Redux',
            question: 'Redux 的核心概念和工作流程是什麼？',
            answer: `Redux 架構：

1. 核心概念：
- Store：狀態容器
- Action：描述變化
- Reducer：處理變化
- Dispatch：發送動作

2. 工作流程：
// Action Creator
const addTodo = (text) => ({
  type: 'ADD_TODO',
  payload: text
});

// Reducer
function todoReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    default:
      return state;
  }
}

// Store
const store = createStore(todoReducer);

3. 使用 Redux Toolkit：
- 簡化配置
- 內置 Immer
- 自動處理異步
- TypeScript 支持

4. 最佳實踐：
- 合理劃分 store
- 使用選擇器
- 避免過度使用
- 考慮替代方案`,
          },
        ],
      },
    ],
  },
  css: {
    categories: [
      {
        name: '布局',
        questions: [
          {
            title: '1.1 Flexbox',
            question: '請解釋 Flexbox 的主要屬性和使用場景。',
            answer: `Flexbox 布局：

1. 容器屬性：
display: flex;
flex-direction: row | column;
justify-content: flex-start | center | space-between;
align-items: stretch | center | flex-start;
flex-wrap: wrap | nowrap;

2. 項目屬性：
flex: 1;
flex-grow: 1;
flex-shrink: 0;
flex-basis: auto;
align-self: auto | flex-start;

3. 常見應用：
- 導航欄布局
- 卡片列表
- 居中對齊
- 響應式設計

4. 最佳實踐：
- 合理使用 flex-wrap
- 注意兼容性
- 結合媒體查詢`,
          },
          {
            title: '1.2 Grid',
            question: '如何使用 CSS Grid 創建響應式布局？',
            answer: `CSS Grid 布局：

1. 基本語法：
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: auto;
gap: 20px;

2. 響應式設計：
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}

3. 區域定義：
grid-template-areas:
  "header header"
  "sidebar main"
  "footer footer";

4. 常見應用：
- 整頁布局
- 圖片畫廊
- 儀表板
- 響應式網格`,
          },
        ],
      },
      {
        name: '動畫與過渡',
        questions: [
          {
            title: '2.1 CSS 動畫',
            question: '如何使用 CSS 創建動畫？',
            answer: `CSS 動畫技術：

1. @keyframes 定義：
@keyframes slidein {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

2. animation 屬性：
animation: slidein 3s ease-in-out infinite;
animation-name: slidein;
animation-duration: 3s;
animation-timing-function: ease-in-out;
animation-iteration-count: infinite;
animation-direction: alternate;

3. 性能優化：
- 使用 transform 和 opacity
- 避免影響文檔流的屬性
- 使用 will-change
- 硬件加速

4. 最佳實踐：
- 適度使用動畫
- 注意性能影響
- 提供回退方案`,
          },
          {
            title: '2.2 過渡效果',
            question: '如何使用 CSS transition 實現平滑過渡？',
            answer: `CSS 過渡效果：

1. 基本語法：
transition: all 0.3s ease-in-out;
transition-property: transform, opacity;
transition-duration: 0.3s;
transition-timing-function: ease-in-out;
transition-delay: 0s;

2. 常見應用：
- 懸停效果
- 狀態切換
- 介面反饋
- 載入動畫

3. 性能考慮：
- 選擇合適的屬性
- 避免過多同時過渡
- 使用 GPU 加速

4. 使用技巧：
- 合理的時間設置
- 恰當的緩動函數
- 考慮移動端體驗`,
          },
        ],
      },
      {
        name: '響應式設計',
        questions: [
          {
            title: '3.1 媒體查詢',
            question: '如何使用媒體查詢實現響應式設計？',
            answer: `響應式設計技術：

1. 媒體查詢語法：
@media screen and (max-width: 768px) {
  .container {
    width: 100%;
  }
}

2. 斷點設置：
- 移動優先
- 常用斷點
- 設備適配

3. 最佳實踐：
- 使用相對單位
- 流式布局
- 圖片優化
- 內容優先

4. 常見技巧：
- 彈性布局
- 內容隱藏
- 導航適配
- 圖片響應`,
          },
          {
            title: '3.2 移動優先',
            question: '什麼是移動優先設計？如何實現？',
            answer: `移動優先設計：

1. 基本原則：
- 從小屏幕開始設計
- 漸進增強
- 性能優先
- 內容優先

2. 實現方法：
// 基礎樣式（移動端）
.container {
  width: 100%;
  padding: 15px;
}

// 平板
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}

// 桌面
@media (min-width: 1024px) {
  .container {
    width: 970px;
  }
}

3. 注意事項：
- 性能優化
- 資源加載
- 觸摸友好
- 網絡考慮

4. 測試要點：
- 多設備測試
- 性能監控
- 用戶體驗
- 兼容性檢查`,
          },
        ],
      },
    ],
  },
};
