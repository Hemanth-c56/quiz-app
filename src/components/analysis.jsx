import React, { useState } from "react";
import './analysis.css'
import { useLocation } from "react-router-dom";
import {FcOk , FcExpand , FcCollapse} from "react-icons/fc"
import Questions from "./questions"
import buttonSound from "../audio/button-sound.mp3"
import { Link } from "react-router-dom";

function Analysis(){

    const location = useLocation()
    var score = ((location.state.score / Questions.length ) * 100).toFixed(0)
    var [showAns , setShowans] = useState(false)
    var wish;
    const buttonAudio = new Audio(buttonSound);
    if(score > 20){
       if(score >= 90 && score <= 100){
        wish = "🎊 MAGNIFICENT 🎊"
       }
       else if(score>= 80 && score < 90){
        wish = "🎉 EXCELENT 🎉"
       }
       else if(score >= 70 && score < 80){
        wish = "😃 GOOD 😃"
       }
       else{
        wish = "😉 CAN DO BETTER 😉"
       }
    }
    else{
        wish = "😣 FAIL 😣"   
    }

    function handleanswers(){
        setShowans(!showAns)
        buttonAudio.play()
    }

    function handleExplanation(id){
        buttonAudio.play()
        var box = document.getElementsByClassName('matter-div')[id - 1];
        if(box.classList.contains("expanded")){
            box.classList.remove("expanded")
        }
        else{
            box.classList.add("expanded");
        }     
    }
    return (
        <div className='analysis-body'>
            <div className="analysis-container">
                <div className="quiz-analysis">
                  <FcOk className="correct"/>
                  <span className="score-title">your percentage</span>
                  <div className="score-board">{score}%</div>
                  <span style={wish === "Fail"?{color:"red"}:{color:"black"}} className="wish-msg">{wish}</span>
                  <div className="data-analysis">
                    <div className="data-box-1">
                        <span className="data-1">Total number of questions</span>
                        <span className="data-1">Number of questions attempted</span>
                        <span className="data-1">Number of correct answers</span>
                        <span className="data-1">Number of wrong answers</span>
                        <span className="data-1">Total time taken</span>
                    </div>
                    <div className="data-box-2">
                        <span className="data-1">{Questions.length}</span>
                        <span className="data-1">{location.state.qattempted}</span>
                        <span className="data-1">{location.state.score}</span>
                        <span className="data-1">{location.state.qattempted - location.state.score}</span>
                        <span className="data-1">{1 - location.state.minute}:{60 - location.state.second}</span>
                    </div>
                  </div>
                </div>
                <div className="answer-btn-div"><button onClick={handleanswers} className="answer-button">Answers</button><Link to={"/"} onClick={()=>{buttonAudio.play()}} className="answer-button">Re-test</Link></div>
                <div style={showAns?{display:"block"}:{display:"none"}} className="answers-div">
                {Questions.map((item,index)=>{
                    return (
                    <div key={item.id} className="answer-container">
                        <div className="question-box">{item.id}) {item.question}</div>
                        <div className="answer-box"><span className="ans-text">Ans :-</span> {item.answer}</div>
                        <div className="explanation-div">
                            <span className="explanation-text">explanation</span>
                            <FcExpand className="exp-button" onClick={()=>{handleExplanation(item.id)}} />
                        </div>
                        <div className="matter-div">
                            <span className="exp-matter">{item.explanation}</span>
                        </div>
                    </div> 
                    )
                })}
                </div>
            </div>
        </div>
    )
}

export default Analysis