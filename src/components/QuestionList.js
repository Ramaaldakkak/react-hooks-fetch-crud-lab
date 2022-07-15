import React from "react";
import { useState, useEffect } from "react"
import QuestionItem from "./QuestionItem"

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then(res => res.json())
      .then(data => setQuestions(data))
  }, [])

  // function handleAddQuestion(newQuestions) {
  //   setQuestions([...questions, newQuestions])
  // }

  function handleDeleteQuestion(deletedQuestion) {
    const deletedQuestions = questions.filter((question) => question.id !== deletedQuestion.id)
    setQuestions(deletedQuestions)
  }

  
  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */}
      {questions.map((question) => (
          <QuestionItem question={question} handleDeleteQuestion={handleDeleteQuestion} />
        ))}</ul>
    </section>
  )
}

export default QuestionList;
