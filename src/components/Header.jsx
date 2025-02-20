import logo from "../assets/img/dc-logo.png"

const Header = (props) => {

    // let's do array of objects for the links
    // const headerLinks = [
    //     { id: 1, title: 'characters', url: '#' },
    //     { id: 2, title: 'comics', url: '#' },
    //     { id: 3, title: 'movies', url: '#' },
    //     { id: 4, title: 'tv', url: '#' },
    //     { id: 5, title: 'games', url: '#' },
    //     { id: 6, title: 'collectibles', url: '#' },
    //     { id: 7, title: 'videos', url: '#' },
    //     { id: 8, title: 'fans', url: '#' },
    //     { id: 9, title: 'news', url: '#' },
    //     { id: 10, title: 'shop', url: '#' }
    // ]

    // let's give the array of objects through props 
    const { headerLinks } = props;

    return (
        <div className="position">

            <header className="container">
                <figure>
                    <img src={logo} alt="logo" />
                </figure>
                <nav>
                    <ul className="headerNav">

                        {/* old method */}
                        {/* <li><a href="#">characters</a></li>
                    <li><a href="#">comics</a></li>
                    <li><a href="#">movies</a></li>
                    <li><a href="#">tv</a></li>
                    <li><a href="#">games</a></li>
                    <li><a href="#">collectibles</a></li>
                    <li><a href="#">videos</a></li>
                    <li><a href="#">fans</a></li>
                    <li><a href="#">news</a></li>
                    <li><a href="#">shop</a></li> */}

                        {/* new method  */}
                        {
                            headerLinks.map((link) => {

                                // destructuring
                                const { id, title, url } = link;

                                return (
                                    <li key={id}>
                                        <a href={url}>{title}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header