import imgQuote from '../assets/img/icon-quotes.svg'

export function StoryPreview({ story }) {
    const { person, title, msg, imgUrl } = story
    return (
        <div className="story-card-container">
            <img className='quotations' src={imgQuote} alt="quotations img" />
            <article className="story-card">
                <p className="msg">
                    {msg}
                </p>
                <div className="person-title">
                    <h3>{person}</h3>
                    <h4>{title}</h4>
                </div>
                <img src={imgUrl} alt="person-img" />
            </article>
        </div>
    )
}