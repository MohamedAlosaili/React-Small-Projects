export default function Start({ toggleStart }) {
    return (
        <div className="start--container">
            <img src="/assets/yellow-shape.png" className="top-img" />
            <div className="start--content">
                <h2 className="start--title">Quizzical</h2>
                <p className="start--text">
                    Take a quick quiz about random topic
                </p>
                <button className="start--btn btn" onClick={toggleStart}>Start quiz</button>
            </div>
            <img src="/assets/blue-shape.png" className="bottom-img" />
        </div>
    )
}