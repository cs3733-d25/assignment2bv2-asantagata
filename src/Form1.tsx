import './App.css'

function Form1() {

    return (
        <>
            <form>
                <h2>Apply to play board games with me and my popular friends</h2>
                <label htmlFor="name">Your name:</label>
                <input id="name" type="text"/>
                <br/>
                <label htmlFor="email">Your WPI email:</label>
                <input id="email" type="text"/>
                <br/>
                <p>Which of these board games are you interested in playing? (You can select multiple)</p>
                <input type="checkbox" id="onuw"/>
                <label htmlFor="onuw">One Night Ultimate Werewolf</label>
                <br/>
                <input type="checkbox" id="wt"/>
                <label htmlFor="wt">Wandering Towers</label>
                <br/>
                <input type="checkbox" id="trio"/>
                <label htmlFor="trio">Trio</label>
                <br/>
                <p>What is your favorite kind of board game?</p>
                <input type="radio" name="genre" id="memory"/>
                <label htmlFor="memory">Memory games</label>
                <br/>
                <input type="radio" name="genre" id="strategy"/>
                <label htmlFor="strategy">Strategy games</label>
                <br/>
                <input type="radio" name="genre" id="rpg"/>
                <label htmlFor="rpg">Role-playing games</label>
                <br/>
                <input type="radio" name="genre" id="other"/>
                <label htmlFor="other">Other games</label>
                <br/><br/>
                <label htmlFor="feedback">Leave comments here</label>
                <br/>
                <textarea id="feedback" spellCheck="false"></textarea>
                <br/>
                <br/>
                <label htmlFor="skill-level">Describe yourself:</label>
                <select id="skill-level">
                    <option value="novice">Board game novice</option>
                    <option value="intermediate">Intermediate board game player</option>
                    <option value="advanced">Advanced board game player</option>
                    <option value="expert">Board game expert</option>
                </select>
                <br/><br/>
                <button id="submit">Submit</button>
            </form>
        </>
    )
}

export default Form1