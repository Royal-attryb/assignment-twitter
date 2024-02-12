import '../styles/TweetCard.css';
import logo from '../images/logo.jpg';

export default function TweetCard ({tweet}) {
    var h = tweet.time.getHours(); // => 9
    var m = tweet.time.getMinutes(); // =>  30
    var s = tweet.time.getSeconds(); // => 51
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var month = months[tweet.time.getMonth()];
    var day = tweet.time.getDate();
    var year = tweet.time.getFullYear();
    console.log(tweet);
    return (
        <div className="card-wrapper">
            <div className='image'>
                <img src={logo} alt="Logo"></img>
            </div>
            <div className='content'>
                <h2 className='heading'>User <span className='time'>{h}:{m}:{s} {month} {day}, {year}</span></h2>
                <p className='tweet'>{tweet.tweet}</p>
            </div>
        </div>
    );
}