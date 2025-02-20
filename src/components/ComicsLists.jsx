
const ComicsList = (props) => {


    const { comics } = props;

    return (
        <section className="contentSection ">
            <div className="hero"></div>
            <h2 className="container">Comics List</h2>
            <div className="comics container">

                {

                    comics.map((comic) => {

                        const { title, thumb, id } = comic;

                        return (
                            <div className="card" key={id}>
                                <figure>
                                    <img src={thumb} alt={title} />
                                </figure>
                                <h6>{title}</h6>

                            </div>

                        )
                    })
                }

            </div>
            <div className=" addMore flex">
                <button className="button ">Add More!</button>
            </div>

        </section>
    )
}

export default ComicsList