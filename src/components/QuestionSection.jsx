import Question from './Question';

function QuestionSection({ title, questions }) {
  return (
    <div className='space-y-4 md:space-y-6'>
      <h2 className='text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent pb-2 border-b-2 border-primary/20'>
        {title}
      </h2>
      {questions.map((question, index) => (
        <Question key={index} {...question} />
      ))}
    </div>
  );
}

export default QuestionSection;
