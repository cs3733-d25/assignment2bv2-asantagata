import Title from './Title.tsx';
import Intro from './Intro.tsx';
import Hobby1 from './Hobby1.tsx';
import Hobby2 from "./Hobby2.tsx";

import './App.css'

function App() {

  return (
    <>
      <Title />
      <Intro name1="Alex Santagata" name2="Michael Primavera"/>
      <Hobby1 />
      <Hobby2 />

    </>
  )
}

export default App
