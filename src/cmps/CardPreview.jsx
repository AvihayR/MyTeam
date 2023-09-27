export function CardPreview({ info }) {
    const { imgSrc, title, content } = info

    return (
        <article className="card flex">
            <img src={imgSrc} alt="icon" />
            <div className="card-content">
                <h4>{title}</h4>
                <p>{content}</p>
            </div>
        </article>
    )
}