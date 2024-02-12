import Nav from './components/Navbar.jsx';
import Main from './components/Main.jsx';
import { useState } from 'react';

export default function Homepage () {

    let time = new Date();
    const [tweets, setTweets] = useState([{'tweet': "hello", 'time': time},{'tweet': "hello", 'time': time}, {'tweet': "hello", 'time': time} ]);
    // console.log(tweets);

    function handleTweetPost (value) {
        // console.log(value);
        let tweetObject = {'tweet': value, 'time': new Date()};
        tweets.unshift(tweetObject);
        setTweets([...tweets]);
        // console.log(tweets);
    }

    return (
        <div className="homepage-wrapper">
            <Nav onTweetPost={handleTweetPost} />
            <Main tweets={tweets} />
        </div>
    );
}