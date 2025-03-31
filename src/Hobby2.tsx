import './App.css'
import List2 from './List2.tsx'

export default function Hobby2() {
    return (
        <>
            <hr/>
            <br/>
            <nav>
                <ul>
                    <li><a href="https://www.chess.com/" target = "_blank">Chess Games</a></li>
                    <li><a href="https://chessmood.com/forum" target = "_blank">Chessmood Forum</a></li>
                    <li><a href="https://learningchess.net/us/index" target = "_blank">Chess Lessons</a></li>
                </ul>
            </nav>

        <div id="AI_Chess_Board">
            <img src="public/ai-gen_chess.jpg" width = "500" alt="AI-generated image of my hobby"/>
        </div>

        <h1>Michael's Chess Journey</h1>

        <p>Welcome to my page about <b>CHESS</b></p>
        <p>I've been playing for a few years now, and the ride has been spectacular!</p>
        <br/>
        <p>Chess was invented over 1500 years ago, and it is played by two people.</p>
        <p>It is a strategic game, where two people can have a sophisticated battle with their intellectual capabilities!</p>
        <List2 />
{/*
        <Table2 />
        <Form2 />*/}

        </>

    )
}