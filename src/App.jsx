import { useState, useRef } from 'react';
import { questions } from '../dummy';
import QuestionSection from './components/QuestionSection';

function App() {
  const [activeTab, setActiveTab] = useState('javascript');
  const [activeCategory, setActiveCategory] = useState(0);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const contentRef = useRef(null);

  const tabs = [
    { id: 'javascript', label: 'JavaScript' },
    { id: 'react', label: 'React' },
    { id: 'css', label: 'CSS' },
  ];

  const currentCategories = questions[activeTab].categories;
  const currentQuestions = currentCategories[activeCategory].questions;

  const handleQuestionClick = (index) => {
    setSelectedQuestion(index);
    // 在移動設備上滾動到內容區
    if (window.innerWidth < 1024) {
      setTimeout(() => {
        contentRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 100);
    }
  };

  return (
    <div className='min-h-screen bg-gradient-page'>
      <div className='max-w-6xl mx-auto p-4 md:p-6 lg:p-8'>
        {/* Hamburger Menu - 只在移動端顯示 */}
        <div className='lg:hidden fixed top-4 right-4 z-50'>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='p-2 rounded-lg bg-white shadow-md'
          >
            <div
              className={`w-6 h-0.5 bg-gray-600 transition-all ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-gray-600 my-1.5 transition-all ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-gray-600 transition-all ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            ></div>
          </button>
        </div>

        <h1 className='text-2xl md:text-3xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>
          前端面試題目練習
        </h1>

        {/* 主題選擇 */}
        <div
          className={`fixed inset-0 lg:relative lg:inset-auto bg-white/95 lg:bg-transparent transform transition-transform lg:transform-none ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 z-40`}
        >
          <div className='flex flex-col lg:flex-row gap-2 md:gap-4 p-4 lg:p-0 mb-6 md:mb-8 border-b border-gray-200/50 pb-4'>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-3 md:px-6 py-2 rounded-lg transition-all text-sm md:text-base ${
                  activeTab === tab.id
                    ? 'bg-gradient-primary text-white shadow-lg shadow-primary/30'
                    : 'bg-white/80 text-gray-600 hover:bg-white hover:shadow-md'
                }`}
                onClick={() => {
                  setActiveTab(tab.id);
                  setActiveCategory(0);
                  setSelectedQuestion(null);
                  setIsMenuOpen(false);
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* 分類選擇 */}
          <div className='flex flex-wrap gap-2 mb-6 p-4 lg:p-0'>
            {currentCategories.map((category, index) => (
              <button
                key={index}
                className={`px-3 py-1 rounded-full text-sm transition-all ${
                  activeCategory === index
                    ? 'bg-secondary/20 text-secondary font-medium'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                onClick={() => {
                  setActiveCategory(index);
                  setSelectedQuestion(null);
                  setIsMenuOpen(false);
                }}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          {/* 題目列表 */}
          <div className='lg:col-span-1 space-y-2'>
            <h2 className='text-xl font-bold text-gray-800 mb-4'>
              {currentCategories[activeCategory].name}
            </h2>
            <div className='space-y-2 max-h-[calc(100vh-200px)] overflow-y-auto pr-2'>
              {currentQuestions.map((question, index) => (
                <button
                  key={index}
                  className={`w-full p-4 rounded-lg text-left transition-all ${
                    selectedQuestion === index
                      ? 'bg-gradient-primary text-white shadow-lg'
                      : 'bg-white/80 hover:bg-white hover:shadow-md text-gray-700'
                  }`}
                  onClick={() => handleQuestionClick(index)}
                >
                  <h3 className='font-medium'>{question.title}</h3>
                  <p
                    className={`text-sm mt-1 line-clamp-2 ${
                      selectedQuestion === index
                        ? 'text-white/80'
                        : 'text-gray-500'
                    }`}
                  >
                    {question.question}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* 題目內容 */}
          <div ref={contentRef} className='lg:col-span-2'>
            {selectedQuestion !== null ? (
              <div className='animate-fadeIn'>
                <QuestionSection
                  title={`${currentCategories[activeCategory].name} 題目`}
                  questions={[currentQuestions[selectedQuestion]]}
                />
              </div>
            ) : (
              <div className='h-full flex items-center justify-center text-gray-500'>
                請選擇一個題目
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
