import Nav from './components/Navbar.jsx';
import Main from './components/Main.jsx';
import { useState } from 'react';

export default function Homepage () {

    const [tweets, setTweets] = useState([]);
    // console.log(tweets);

    function handleTweetPost (value) {
        // console.log(value);
        tweets.unshift(value);
        setTweets([...tweets]);
        console.log(tweets);
        
    }

    return (
        <div className="homepage-wrapper">
            <Nav onTweetPost={handleTweetPost} />
            <Main tweets={tweets} />
        </div>
    );
}