import Description from "./Description/Description"
import { useState, useEffect } from 'react'
import Options from "./Options/Options"
import Feedback from "./Feedback/Feedback"
import Notification from "./Notification/Notification"
import css from "./App.module.css"


export default function App () {
    const [clicks, setClicks] = useState(()=> {
        const savedClicks = window.localStorage.getItem("saved-clicks");

        if (savedClicks !== null) {
            
            return  JSON.parse(savedClicks)
            
        }

        return  ({
            good: 0,
            neutral: 0,
            bad: 0
        })
    })


  
    //Збереження в локал сторедж
    useEffect(() => {
        window.localStorage.setItem("saved-clicks", JSON.stringify(clicks));
    }, [clicks])
   


    const updateFeedback = feedbackType  => {
        setClicks((prevClicks) => ({
            ...prevClicks,
            [feedbackType]: prevClicks[feedbackType] + 1
        }));
    };
    const resetClicks = () => {
        setClicks ({
            good: 0,
            neutral: 0,
            bad: 0
        });
    }
 
    const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
    const positiveFeedback = totalFeedback > 0 ? Math.round((clicks.good / totalFeedback) * 100) : 0;

    return (
        <div className={css.container}>
            <Description/>
            <Options updateFeedback={updateFeedback} clicks={clicks} resetClicks={resetClicks}/>
            {totalFeedback ? (<Feedback clicks={clicks} positiveFeedback={positiveFeedback} totalFeedback={totalFeedback}/>): (<Notification/>)}
        </div>
    )
}