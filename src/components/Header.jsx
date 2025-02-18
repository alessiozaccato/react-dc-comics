const Header = () => {
    return (
        <header className="container">
            <figure>
                <img src="../src/assets/img/dc-logo.png" alt="logo" />
            </figure>
            <nav>
                <ul className="headerNav">
                    <li><a href="#">characters</a></li>
                    <li><a href="#">comics</a></li>
                    <li><a href="#">movies</a></li>
                    <li><a href="#">tv</a></li>
                    <li><a href="#">games</a></li>
                    <li><a href="#">collectibles</a></li>
                    <li><a href="#">videos</a></li>
                    <li><a href="#">fans</a></li>
                    <li><a href="#">news</a></li>
                    <li><a href="#">shop</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header