import './App.scss';
import { useEffect, useState } from 'react';
import { questions } from './data/questions';
import { shuffleArray } from './utils';
import { createMagicSquares } from './utils';

function App() {
  const [search, setSearch] = useState('');

  useEffect(() => {
    createMagicSquares(['.container', 'header', 'main']);
  }, []);

  return (
     <>
      <div className="container">
        <h6>Command + N.</h6>
      </div>
      <header>
        <div className='container'>
          <h1>Hey, I am Antonija,</h1>
          <h3>a frontend developer from Zagreb.</h3>
          
          <div> 
            <p>I enjoy building beautiful user interfaces from scratch </p>
            <p> using React, Javascript, Typescript and CSS in all its form and glory.</p>
          </div>
        </div>
      </header>

      <main>
        <section>
            <div className="container">
              <h3>I tried to make this website as fun as possible, let's get right into it. What would you like to know about me?</h3>
              <div className="input-container">
                <div className="search-icon">
                <span class="material-symbols-outlined">
                  search
                  </span>
                </div>
                <input type='text' placeholder='What would you like to know?' onChange={(e) => {
                  setSearch(e.target.value)
                }} />
              </div>
              <div className="questions">
                {shuffleArray(questions).filter((question) => {
                  if (search === '') {
                    return question
                  } else if (question.title.toLowerCase().includes(search.toLowerCase())) {
                    return question
                  }
                }
                ).slice(0, 3).map((question) => {
                  return (
                    <a key={question.id} className='question' href={`/answer/${question.id}`}>
                      <h4>{question.title}</h4>
                    </a>
                  )
                })}
              </div>
            </div>
        </section>
      </main>
    </>
  );
}

export default App;
