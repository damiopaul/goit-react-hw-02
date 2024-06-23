import css from "./Options.module.css"
import clsx from "clsx";



export default function Options ({updateFeedback, resetClicks, clicks}) {
    const hasFeedback = clicks.good > 0 || clicks.neutral > 0 || clicks.bad > 0;
    return (
    <div className={css.container}>
        <button className={css.optionButton} onClick={() => updateFeedback('good')}>Good</button>
        <button className={css.optionButton} onClick={() => updateFeedback('neutral')}>Neutral</button>
        <button className={css.optionButton} onClick={() => updateFeedback('bad')}>Bad</button>
        { hasFeedback && <button className={css.optionButton} onClick={resetClicks}>Reset</button>} 
    </div>
    )
}