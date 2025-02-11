import { useState } from 'react';

function Question({ title, question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className='mb-6 p-4 md:p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-all'>
      <h3 className='text-lg md:text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2'>
        {title}
      </h3>
      <p className='text-sm md:text-base text-gray-700 mb-4'>{question}</p>
      <button
        onClick={() => setShowAnswer(!showAnswer)}
        className={`mb-4 px-3 md:px-4 py-1.5 md:py-2 rounded transition-all text-sm md:text-base ${
          showAnswer
            ? 'bg-gradient-secondary text-white shadow-lg shadow-secondary/30'
            : 'bg-gradient-primary text-white shadow-lg shadow-primary/30'
        }`}
      >
        {showAnswer ? '隱藏答案' : '顯示答案'}
      </button>
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
