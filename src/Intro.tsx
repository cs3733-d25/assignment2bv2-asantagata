
import './App.css'

function Intro({name1, name2}: {name1: string, name2: string}) {

    return (
        <>
           <p>We are {name1} and {name2}</p>
        </>
    )
}

export default Intro
