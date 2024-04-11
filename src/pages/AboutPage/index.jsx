import { useEffect } from 'react'
import { createMagicSquares } from '../../utils/index'

const AboutPage = () => {
  useEffect(() => {
    createMagicSquares(['main'])
  }, [])
  return (
    <main className="container">
      <h1>About me</h1>

      <h2>Why am I coding at all?</h2>
      <p>
        I started coding because I wanted a change in my career, I wanted to
        have a future and be competitive in the market. Initially, I had been
        learning Ruby on Rails when I tried CSS and Javascript, and instantly
        fell in love with those languages. I could immediately see the result of
        my coding. It was back in 2013 and I was super active user on
        Codecademy, the online learning platform for coding.
      </p>

      <h2>Why should you hire me exactly?</h2>
      <p>
        I believe I bring a lot of values to the table. I honestly care about
        the code I am writing and the product I am working on. I am super picky
        about the projects since I want to build impressive portfolio. I don't
        want to just work on something just to be working on something. I always
        ask myself how will this project look like in my CV?
      </p>
      <p>
        About the values I bring, I am resistent, dilligent and effective. I
        mean I taught myself to code without anyone's help. One day I woke up
        and just decided today was the day I would start coding. I did not go to
        any school nor bootcamp. I just used free services like Freecodecamp,
        Code School (r.i.p.) and Codecademy.
      </p>

      <h2>Am I lacking the academic experience?</h2>
      <p>
        I do not have a diploma in the software development, but I have been
        coding for so long now, almost ten years. I believe I can compete with
        anyone who has a diploma. I mean college graduates will probably know
        less than me. I am up to date with all the latest technologies and I
        follow several blogs and youtubers to see the latest shiny thing in
        front-end development.
      </p>

      <h2>What am I doing in my free time?</h2>
      <p>
        A lot of things and when I say a lot I mean a looooot. I drum in the
        drumming collective where we fight for human and animal rights. I read,
        mostly fiction and comic books. I play basketball, go to the gym, swim
        and ride bicycle.
      </p>

      <h2>What are some of the accomplishments I am proud of?</h2>
      <p>
        I organised css meetup in Zagreb (before corona took over). I
        volunteered in borders:none; organization where we encouraged refugees
        to start coding. I started a coding school called Kodiraonica where I
        lead a team of developers in a quest to teach others to code.
      </p>
    </main>
  )
}

export default AboutPage
