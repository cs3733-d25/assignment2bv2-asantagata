import './App.css'

function Table1() {

    return (
        <>
            <table className="collapse">
                <caption>Here are some of my favorite board games:</caption>
                <tr>
                    <th>Game</th>
                    <th>Genre</th>
                    <th>Number of Players</th>
                    <th>Ranking</th>
                </tr>
                <tr>
                    <td>One Night Ultimate Werewolf</td>
                    <td>Social Deduction</td>
                    <td>3+</td>
                    <td>★★★★★</td>
                </tr>
                <tr>
                    <td>Wandering Towers</td>
                    <td>Strategy</td>
                    <td>2+</td>
                    <td>★★★★☆</td>
                </tr>
                <tr>
                    <td>Trio</td>
                    <td>Memory</td>
                    <td>3+</td>
                    <td>★★★☆☆</td>
                </tr>
            </table>
        </>
    )
}

export default Table1