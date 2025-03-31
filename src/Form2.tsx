export default function Form2() {
    return (
        <>
            <h2>Sign Up For Our Email List</h2>
            <form>
                <label htmlFor="email_address">Enter Your Email Address</label>
                <input type="text" id="email_address"/>
                <br/>
                <label htmlFor="phone_number" id="email">Enter Your Phone Number (optional)</label>
                <input type="text" id="phone_number"/>
                <br/>
                <br/>
                <input type="checkbox" id="blog_updates"/>
                <label htmlFor="blog_updates">Blog Updates</label>
                <br/>
                <input type="checkbox" id="weekly_puzzle"/>
                <label htmlFor="weekly_puzzle">Weekly Puzzle</label>
                <br/>
                <input type="checkbox" id="new_US_torunaments"/>
                <label htmlFor="new_US_torunaments">New US Torunaments</label>
                <br/>
                <br/>
                <input type="submit" id="Submit_1"/>
                <br/>
            </form>

            <hr/>


        </>
    )
}