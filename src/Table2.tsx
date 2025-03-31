import './App.css'

export default function Table2() {

    return (
        <>
            <table className="collapse">
                <caption><b>My Favorite Winning Openings</b></caption>
                <tr>
                    <th>Opening</th>
                    <th>Wins</th>
                    <th>Losses</th>
                    <th>Ties</th>

                </tr>

                <tr>
                    <td>Queen Gambit</td>
                    <td>760</td>
                    <td>698</td>
                    <td>36</td>
                </tr>

                <tr>
                    <td>London System</td>
                    <td>456</td>
                    <td>445</td>
                    <td>76</td>
                </tr>

                <tr>
                    <td>The Italian Game</td>
                    <td>376</td>
                    <td>402</td>
                    <td>21</td>
                </tr>

                <tr>
                    <td>Caro-Kann Defense</td>
                    <td>668</td>
                    <td>499</td>
                    <td>34</td>
                </tr>


            </table>
            <br/>
            <hr/>

        </>

    )
}