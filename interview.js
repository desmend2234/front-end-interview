// =============== JavaScript 面試題 ===============

// 1. 解釋 closure 閉包
function createCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    getCount: () => count,
  };
}

// 2. this 綁定問題
const person = {
  name: '小明',
  sayHiArrow: () => {
    console.log(`Arrow: ${this.name}`);
  },
  sayHiFunction: function () {
    console.log(`Function: ${this.name}`);
  },
};

// 3. Promise 串接
const promise1 = Promise.resolve('第一步');
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve('第二步'), 1000)
);
const promise3 = new Promise((resolve) =>
  setTimeout(() => resolve('第三步'), 500)
);

Promise.all([promise1, promise2, promise3])
  .then(console.log)
  .catch(console.error);

// 4. Event Loop
console.log('1');
setTimeout(() => console.log('2'), 0);
Promise.resolve('3').then(console.log);
console.log('4');

// 5. 深拷貝實作
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  const clone = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clone[key] = deepClone(obj[key]);
    }
  }
  return clone;
}

// 6. 防抖函數
function debounce(fn, delay) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// 7. 節流函數
function throttle(fn, delay) {
  let last = 0;
  return function (...args) {
    const now = Date.now();
    if (now - last > delay) {
      fn.apply(this, args);
      last = now;
    }
  };
}

// 8. 數組扁平化
function flatten(arr) {
  return arr.reduce(
    (flat, item) =>
      Array.isArray(item) ? flat.concat(flatten(item)) : flat.concat(item),
    []
  );
}

// 9. Promise.race 實作
function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      Promise.resolve(promise).then(resolve).catch(reject);
    });
  });
}

// 10. 實作 EventEmitter
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }

  emit(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach((callback) => callback(...args));
    }
  }
}

// =============== React 面試題 ===============
/*
1. React 生命週期
- 說明 componentDidMount, componentDidUpdate, componentWillUnmount 的用途
- 對比 useEffect 的使用方式

2. React Hooks 原理
- useState 如何保存狀態
- useEffect 的依賴陣列原理
- 自定義 Hook 的使用場景

3. Virtual DOM
- 解釋 Virtual DOM 的概念
- 比較 Virtual DOM 和真實 DOM 的差異
- key 的作用

4. 狀態管理
- Redux 工作流程
- Context API vs Redux
- Redux middleware 的作用

5. 效能優化
- React.memo 使用場景
- useMemo vs useCallback
- 如何避免不必要的重渲染

6. 組件通訊
- Props drilling 問題
- 組件間通訊方式
- 父子組件生命週期順序

7. Hooks 規則
- 為什麼不能在條件式中使用 Hooks
- Hooks 使用規則
- 常見的 Hooks 錯誤

8. React Router
- 路由原理
- 動態路由
- 路由守衛實現

9. 錯誤處理
- Error Boundary
- 錯誤捕獲方式
- 錯誤處理最佳實踐

10. SSR
- Next.js 優勢
- SSR vs CSR
- Hydration 原理
*/

// =============== CSS 面試題 ===============
/*
1. 盒模型
- box-sizing: content-box vs border-box
- margin 負值效果
- margin 合併現象

2. 定位
- position 各值的區別
- z-index 層級關係
- 固定頭部實現方式

3. Flex 布局
- flex: 1 代表什麼
- flex-direction 與 flex-wrap
- justify-content vs align-items

4. Grid 布局
- fr 單位的使用
- grid-template-areas
- 響應式布局實現

5. BFC
- 觸發 BFC 的方式
- BFC 的應用場景
- 清除浮動的方法

6. 動畫
- transition vs animation
- transform 的性能
- 硬件加速

7. 響應式設計
- media queries 寫法
- viewport 設置
- rem vs em

8. CSS 選擇器
- 選擇器優先級
- 偽類vs偽元素
- 複合選擇器效能

9. CSS 模塊化
- CSS Modules
- CSS-in-JS
- 預處理器比較

10. 效能優化
- CSS 載入優化
- 選擇器性能
- 重排重繪優化
*/

// 題目資料
const questions = {
  javascript: [
    {
      title: '1. 解釋 closure 閉包',
      question: '什麼是閉包？請解釋閉包的概念並說明其應用場景。',
      answer: `閉包是指函數能夠記住並訪問其詞法作用域的特性，即使該函數在其他地方執行。

範例說明：
function createCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    getCount: () => count,
  };
}

閉包的應用：
1. 數據私有化
2. 函數工廠
3. 部分應用（Partial Application）
4. 記憶化（Memoization）`,
    },
    {
      title: '2. this 綁定問題',
      question:
        '請解釋 JavaScript 中 this 的綁定規則，並說明箭頭函數中的 this 有何特殊性？',
      answer: `this 綁定有四種規則：
1. 默認綁定：獨立函數調用，this 指向全局對象（非嚴格模式）或 undefined（嚴格模式）
2. 隱式綁定：作為對象方法調用，this 指向調用的對象
3. 顯式綁定：使用 call、apply、bind，this 指向指定的對象
4. new 綁定：使用 new 調用構造函數，this 指向新創建的對象

箭頭函數特殊性：
- 沒有自己的 this，繼承外層作用域的 this
- 不能用作構造函數
- 不能用 call、apply、bind 改變 this`,
    },
    {
      title: '3. Promise 串接',
      question: '請解釋 Promise 的運作機制，以及如何處理多個非同步操作。',
      answer: `Promise 是處理非同步操作的一種方式，它有三種狀態：pending、fulfilled、rejected。

基本用法：
const promise = new Promise((resolve, reject) => {
  // 非同步操作
});

串接示例：
Promise.all([promise1, promise2, promise3])
  .then(results => console.log(results))
  .catch(error => console.error(error));

實際應用：
1. API 請求串接
2. 檔案操作
3. 延遲執行
4. 錯誤處理`,
    },
    {
      title: '4. Event Loop',
      question: '請解釋 JavaScript 的事件循環機制，以及宏任務和微任務的區別。',
      answer: `Event Loop 是 JavaScript 處理非同步操作的核心機制。

執行順序：
1. 同步代碼
2. 微任務（Promise、process.nextTick）
3. 宏任務（setTimeout、setInterval）

示例：
console.log('1');
setTimeout(() => console.log('2'), 0);
Promise.resolve('3').then(console.log);
console.log('4');

輸出順序：1, 4, 3, 2`,
    },
    {
      title: '5. 深拷貝實作',
      question: '請實作一個深拷貝函數，並解釋深拷貝和淺拷貝的區別。',
      answer: `深拷貝實作：
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  const clone = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clone[key] = deepClone(obj[key]);
    }
  }
  return clone;
}

深淺拷貝區別：
- 淺拷貝：只複製一層，內部對象仍然共享引用
- 深拷貝：遞歸複製所有層級，完全獨立的新對象`,
    },
    {
      title: '6. 防抖函數',
      question: '請實作一個防抖函數，並說明防抖和節流的區別。',
      answer: `防抖函數實作：
function debounce(fn, delay) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

使用場景：
- 搜索框輸入
- 視窗調整
- 表單驗證

防抖 vs 節流：
- 防抖：多次觸發，只執行最後一次
- 節流：固定時間內只執行一次`,
    },
    {
      title: '7. 節流函數',
      question: '請實作一個節流函數，並說明其應用場景。',
      answer: `節流函數實作：
function throttle(fn, delay) {
  let last = 0;
  return function (...args) {
    const now = Date.now();
    if (now - last > delay) {
      fn.apply(this, args);
      last = now;
    }
  };
}

應用場景：
1. 滾動事件處理
2. 頻繁點擊
3. 實時搜索
4. 遊戲中的移動`,
    },
    {
      title: '8. 數組扁平化',
      question: '請實作一個數組扁平化函數，將多維數組轉為一維數組。',
      answer: `數組扁平化實作：
function flatten(arr) {
  return arr.reduce(
    (flat, item) =>
      Array.isArray(item) ? flat.concat(flatten(item)) : flat.concat(item),
    []
  );
}

使用示例：
flatten([1, [2, 3], [4, [5, 6]]]) // [1, 2, 3, 4, 5, 6]

其他方法：
1. Array.flat(Infinity)
2. toString() + split()
3. 迭代方法`,
    },
    {
      title: '9. Promise.race 實作',
      question: '請實作 Promise.race 方法，並說明其使用場景。',
      answer: `Promise.race 實作：
function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach(promise => {
      Promise.resolve(promise).then(resolve).catch(reject);
    });
  });
}

使用場景：
1. 請求超時控制
2. 多個數據源競速
3. 資源加載超時處理

特點：
- 只要有一個 Promise 完成就結束
- 可能是成功也可能是失敗`,
    },
    {
      title: '10. EventEmitter 實作',
      question: '請實作一個簡單的事件發射器（EventEmitter）。',
      answer: `EventEmitter 實作：
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }

  emit(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach(callback => callback(...args));
    }
  }
}

使用場景：
1. 事件驅動架構
2. 發布訂閱模式
3. 組件通信`,
    },
  ],
  react: [
    {
      title: '1. React 生命週期',
      question: `請解釋 React 類組件的生命週期方法，以及它們在 Hooks 中的對應關係。`,
      answer: `類組件生命週期：

1. 掛載階段：
- constructor
- getDerivedStateFromProps
- render
- componentDidMount

2. 更新階段：
- getDerivedStateFromProps
- shouldComponentUpdate
- render
- getSnapshotBeforeUpdate
- componentDidUpdate

3. 卸載階段：
- componentWillUnmount

Hooks 對應關係：
- useEffect(() => {}, []) 對應 componentDidMount
- useEffect(() => {}) 對應 componentDidUpdate
- useEffect 返回函數對應 componentWillUnmount`,
    },
    // ... 添加其他 React 題目
  ],
  css: [
    {
      title: '1. 盒模型',
      question: `請解釋 CSS 盒模型的組成部分，以及 box-sizing 屬性的作用。另外，請說明 margin 的特殊效果。`,
      answer: `盒模型包含四個部分：
1. content：內容區域
2. padding：內邊距
3. border：邊框
4. margin：外邊距

box-sizing:
- content-box：默認值，width/height 只包含 content
- border-box：width/height 包含 content + padding + border

margin 負值效果：
- 上/左負值：元素向上/左移動
- 下/右負值：後續元素向上/左移動

margin 合併：
- 只發生在塊級元素
- 只發生在垂直方向
- 取較大的 margin 值`,
    },
    // ... 添加其他 CSS 題目
  ],
};

// 渲染題目到頁面
function renderQuestions() {
  const sections = {
    javascript: document.getElementById('js-questions'),
    react: document.getElementById('react-questions'),
    css: document.getElementById('css-questions'),
  };

  for (const [category, questionList] of Object.entries(questions)) {
    questionList.forEach((q, index) => {
      const questionDiv = document.createElement('div');
      questionDiv.className = 'question';
      questionDiv.innerHTML = `
        <h3>${q.title}</h3>
        <p>${q.question}</p>
        <button onclick="toggleAnswer(this)">顯示答案</button>
        <div class="answer">
          <pre>${q.answer}</pre>
        </div>
      `;
      sections[category].appendChild(questionDiv);
    });
  }
}

// 切換答案顯示/隱藏
function toggleAnswer(button) {
  const answer = button.nextElementSibling;
  const isHidden =
    answer.style.display === 'none' || answer.style.display === '';
  answer.style.display = isHidden ? 'block' : 'none';
  button.textContent = isHidden ? '隱藏答案' : '顯示答案';
}

// 初始化頁面
document.addEventListener('DOMContentLoaded', renderQuestions);

// 測試代碼
console.log('開始測試...');
const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2

person.sayHiArrow(); // Arrow: undefined
person.sayHiFunction(); // Function: 小明

// 測試深拷貝
const obj = { a: 1, b: { c: 2 } };
const clonedObj = deepClone(obj);
console.log(clonedObj);

// 測試數組扁平化
console.log(flatten([1, [2, 3], [4, [5, 6]]]));
