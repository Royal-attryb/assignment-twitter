import { useState, useEffect } from 'react';
import TweetCard from './TweetCard.jsx';

export default function Tweets ({tweets}) {
    
    const displayTweets = tweets.map((tweet) => { return (<TweetCard tweet={tweet} />); })
    return (
        <>
            {displayTweets}
        </>
    )
}