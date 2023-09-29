
export const GifItem = ({ title, url, id }) => {

    return (
        <div className="card">
            <h4>{title}</h4>
            <img src={url} />
        </div>
    )
}

