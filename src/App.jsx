import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {

  const headerLinks = [
    { id: 1, title: 'characters', url: '#' },
    { id: 2, title: 'comics', url: '#' },
    { id: 3, title: 'movies', url: '#' },
    { id: 4, title: 'tv', url: '#' },
    { id: 5, title: 'games', url: '#' },
    { id: 6, title: 'collectibles', url: '#' },
    { id: 7, title: 'videos', url: '#' },
    { id: 8, title: 'fans', url: '#' },
    { id: 9, title: 'news', url: '#' },
    { id: 10, title: 'shop', url: '#' }
  ]

  return (
    <>
      <Header headerLinks={headerLinks} />
      <Main />
      <Footer />
    </>
  )
}

export default App