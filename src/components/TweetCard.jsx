import '../styles/TweetCard.css';
import logo from '../images/logo.jpg';

export default function TweetCard ({tweet}) {
    // var h = time.getHours(); // => 9
    // var m = time.getMinutes(); // =>  30
    // var s = time.getSeconds(); // => 51

    return (
        <div className="card-wrapper">
            <div className='image'>
                <img src={logo} alt="Logo"></img>
            </div>
            <div className='content'>
                <h2 className='heading'>User</h2>
                <p className='tweet'>{tweet}</p>
            </div>
        </div>
    );
}