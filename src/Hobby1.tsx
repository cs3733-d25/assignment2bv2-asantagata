
import './App.css'
import List1 from './List1.tsx';
import Table1 from './Table1.tsx';
import Form1 from './Form1.tsx';

function Hobby1() {

    return (
        <>
            <nav>
                <ul>
                    <li className="navbar-item"><a href="https://en.wikipedia.org/wiki/Board_game">What are board
                        games?</a></li>
                    <li className="navbar-item"><a href="https://www.amazon.com/Board-Games/b?ie=UTF8&node=166225011">Purchase
                        board games</a></li>
                    <li className="navbar-item"><a href="https://boardgamegeek.com/boardgame/10685/blick">My favorite
                        board game</a></li>
                </ul>
            </nav>
            <h1>Alex Santagata's Board Game Zone</h1>
            <p>Thank you for visiting the zone of Alex Santagata's interest in board games.</p>
            <div id="img-wrapper"><img src="public/board games.jpg" width="640px" /></div>
            <p>I am Alex Santagata, a junior in Computer Science at WPI. I am a big-time enjoyer of board games. This is
                my page about board games.</p>
            <p>Board games are a great way to bond with a group over a core shared experience. One great way to get to
                know other board game fans is through board game events.</p>
            <List1 />
            <Table1 />
            <Form1 />
        </>
)
}

export default Hobby1


