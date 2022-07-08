import React, { useState } from 'react';
import './kalkulator.css';

function App() {
  const [showbutton, setShowButton] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [earned, setEarned] = useState(0);

  const pointOn = (wartosc) => {
    if (score == 0) {
      setScore(wartosc)
    }
    else {
      setScore(wartosc)
    }
  }
  function pointOff(index) {
    return (
      setSelectedOption(index),
      setShowButton(true)
    )
  }

  const nastepny = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedOption(null)
      setEarned(score + earned)
      setShowButton(false)
      setScore(0);
    }
    else {
      setShowResults(true);
    }

  }
  const restartKalkulatora = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
    setEarned(0)
    setSelectedOption(null)
    setShowButton(false)
  };

  const questions = [
    {
      text: "1. Jaka jest Twoja znajomość języka niemieckiego?",
      options: [
        { id: 0, text: "A1- Potrafię formułować krótkie zdania z obszaru opieki, np.: Pomogę pani wstać. Umyjemy ręce. Znam podstawowe słownictwo, np.: śniadanie, obiad, mydło, ręcznik itd.", wartosc: 1150, opcjanr: 1 },
        { id: 1, text: "A2- Prawidłowo reaguję na różne sytuacje w opiece np.: potrafię opisać stan zdrowia osoby podopiecznej, określić jego potrzeby. Umiem powiedzieć o sobie, opisać miejsce zamieszkania, porozmawiać o pogodzie…", wartosc: 1250, opcjanr: 2 },
        { id: 2, text: "B1- Moja znajomość języka niemieckiego pozwala mi na zachowanie jasnej i zrozumiałej komunikacji z osobą zależną. Potrafię porozmawiać z podopiecznymi na wiele tematów, choć mam jeszcze trudności i ograniczenia w słownictwie oraz gramatyce.", wartosc: 1350, opcjanr: 3 },
        { id: 3, text: "B2- Potrafię porozmawiać z osobą zależną na wiele tematów np.: o polityce, książkach, programach w telewizji, zdarzeniach w ciągu dnia…Znam czas przeszły i nim się posługuję. Moje słownictwo jest rozbudowane a zdania są zasadniczo poprawne pod kątem gramatycznym.", wartosc: 1450, opcjanr: 4 },
      ],
    },
    {
      text: "2. Czy posiadasz referencje / kartkę urodzinową / świąteczną od rodziny?",
      options: [
        { id: 0, text: "nie", wartosc: 0 },
        { id: 1, text: "tak - 1 referencja / kartka urodzinowa / kartka świąteczna", wartosc: 20 },
        { id: 2, text: "tak - 2 lub więcej referencji / kartek urodzinowych / kartek świątecznych", wartosc: 40 },
      ],
    },
    {
      text: "3. Czy posiadasz prawo jazdy?",
      options: [
        { id: 0, text: "Tak", wartosc: 50 },
        { id: 1, text: "Nie", wartosc: 0 },
      ],
    },
    {
      text: "4. Czy jesteś osobą palącą?",
      options: [
        { id: 0, text: "Tak", wartosc: 0 },
        { id: 1, text: "Nie", wartosc: 10 },
      ],
    },
    {
      text: "5. Iloma osobami chcesz się opiekować?",
      options: [
        { id: 0, text: "1 osobą", wartosc: 0 },
        { id: 1, text: "2 osobami wymagającymi opieki", wartosc: 200 },
        { id: 2, text: "2 osobami, jedna wymagająca więcej opieki, a druga mniej", wartosc: 50 }
      ]
    },
    {
      text: "6. Czy możesz pomóc osobie zależnej wstać/usiąść?",
      options: [
        { id: 0, text: "Tak - mogę pomóc osobie zależnej wstać/usiąść", wartosc: 100 },
        { id: 1, text: "Nie", wartosc: 0 },

      ],
    },
    {
      text: "7. Czy pomożesz osobie zależnej przy toalecie nocnej?",
      options: [
        { id: 0, text: "Tak - sporadycznie raz w nocy", wartosc: 20 },
        { id: 1, text: "Tak - częściej niż raz w nocy", wartosc: 50 },
        { id: 2, text: "Nie pomagam w nocy ", wartosc: 0 },
      ],
    },

    {
      text: "8. Czy chcesz pomagać osobie zależnej cierpiącej na demencję? ",
      options: [
        { id: 0, text: "Tak - przy początkach demencji", wartosc: 20 },
        { id: 1, text: "Tak - przy średniej lub zaawansowanej demencji", wartosc: 50 },
        { id: 2, text: "Nie", wartosc: 0 },

      ],
    },
    {
      text: "podsumowanie - wylicz moje wynagrodzenie miesięczne w firmie Berlin Opieka",
      options: [
        { id: 0, text: "Oblicz moje wynagrodzenie", wartosc: 0 },
      ]
    }

  ]



  return (
    <div className="App">
      {/* 1. Header*/}
      <h1> OSOBISTY KALKULATOR WYNAGRODZEŃ NA OKRES 30 DNI I OFERT! </h1>


      {showResults ? (
        /* 4. Final Results */
        <div className='final-results1'>
          <h1> Oto wynagrodzenie miesięczne jakie możesz zarabiać współpracując z nami! :  </h1>
          <div className="wynikoboksiebie">
            <div className='wynikwynagrodzenia'>
              <h2> {earned} €</h2> </div>
            <div className='wynikwynagrodzenia'>
              <h2> {earned * 4.5} zł</h2>
            </div>
          </div>
          <div className="restart" onClick={() => restartKalkulatora()}>Restart</div>
          <h1>  </h1>
          <h2>2. TE OFERTY PASUJĄ DLA CIEBIE: *Tu jawiają się dwie oferty*</h2>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="pytanie">
          <h2> Pytania:</h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => {
              return (
                <div className={index === selectedOption ? "option active" : "option"}
                  key={option.id}
                  onClick={() => { pointOn(option.wartosc) || pointOff(index) }}

                >
                  {option.text}
                </div>
              )
            }
            )
            }
          </div>
          <div className="przyciski">
            {showbutton ? (
              <div className={"nastepny"} onClick={() => nastepny()}>
                Następny</div>) : (<h2></h2>)
            }
          </div>
          <div className="final-results">
            <h1> Suma części składowych wynagrodzenia: </h1>
            <h3> {score} €   </h3>
          </div>
        </div>
      )
      }

    </div>
  )
}

export default App;
