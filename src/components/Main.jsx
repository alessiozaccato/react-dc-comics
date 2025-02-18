import digitalComics from "../assets/img/buy-comics-digital-comics.png"
import dcMerchandise from "../assets/img/buy-comics-merchandise.png"
import subscriptions from "../assets/img/buy-comics-subscriptions.png"
import shopLocator from "../assets/img/buy-comics-shop-locator.png"
import dcPowerVisa from "../assets/img/buy-dc-power-visa.svg"

const Main = () => {
    return (
        <main>
            <section className="contentSection container">
                <p>Content Goes Here</p>
            </section>
            <div className="bgBlue">
                <section className="infoSection container">

                    <div>
                        <figure>
                            <img src={digitalComics} alt="digital comics" />

                        </figure>
                        <p>digital comics</p>
                    </div>
                    <div>
                        <figure>
                            <img src={dcMerchandise} alt="merchandise" />

                        </figure>
                        <p>dc merchandise</p>
                    </div>
                    <div>
                        <figure>
                            <img src={subscriptions} alt="subscriptions" />

                        </figure>
                        <p>subscription</p>
                    </div>
                    <div>
                        <figure>
                            <img src={shopLocator} alt="shop locator" />

                        </figure>
                        <p>comic shop location</p>
                    </div>
                    <div>
                        <figure>
                            <img src={dcPowerVisa} alt="power visa" />
                        </figure>
                        <p>dc power visa</p>
                    </div>

                </section>
            </div>

        </main>
    )
}

export default Main