import { useState } from 'react';

// 單個題目組件
function Question({ title, question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false); // 控制答案顯示/隱藏

  return (
    <div className='mb-6 p-4 md:p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-all'>
      {/* 題目標題 */}
      <h3 className='text-lg md:text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2'>
        {title}
      </h3>
      {/* 題目內容 */}
      <p className='text-sm md:text-base text-gray-700 mb-4'>{question}</p>
      {/* 顯示/隱藏答案按鈕 */}
      <button
        onClick={() => setShowAnswer(!showAnswer)}
        className={`mb-4 px-3 md:px-4 py-1.5 md:py-2 rounded transition-all ${
          showAnswer
            ? 'bg-gradient-secondary text-white'
            : 'bg-gradient-primary text-white'
        }`}
      >
        {showAnswer ? '隱藏答案' : '顯示答案'}
      </button>
      {/* 答案區域 */}
      {showAnswer && (
        <div className='mt-4 p-3 md:p-4 bg-gray-50/80 backdrop-blur-sm rounded-lg'>
          <pre className='text-sm md:text-base text-gray-700 whitespace-pre-wrap break-words'>
            {answer}
          </pre>
        </div>
      )}
    </div>
  );
}

export default Question;
