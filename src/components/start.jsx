import './start.css';
import { Link } from 'react-router-dom';
import Questions from './questions'
import buttonSound from "../audio/button-sound.mp3"

function Start(){

    const btnAudio = new Audio(buttonSound)

    return (
        <div className="body">
            <div className="container">
                <h1 id="online-heading">ONLINE TEST</h1>
                <h2>instructions</h2>
                <ul>
                    <li>This test has <span className="ques-num">{Questions.length}</span> Questions</li>
                    <li><span className="green"></span> Indicates no.of Questions Attempted</li>
                    <li><span className="red"></span> Indicates no.of Questions Unattempted</li>
                    <li>you have <span className='ques-num'>2</span> minutes of time to complete</li>
                    <li>All The Best</li>
                </ul>
                <Link to="/quiz" onClick={()=>{btnAudio.play()}} className="start-btn">Start Test</Link>
            </div>
        </div>
    );
}

export default Start;