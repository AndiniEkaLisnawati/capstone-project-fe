import NavigationBar from "../components/NavigationBar"
import { Hero } from "../components/Hero"

 function Home({isLoggedIn, setIsLoggedIn}) {
    return(
        <>
            <NavigationBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
            </NavigationBar>
            <Hero></Hero>
        </>
    )
}

export default Home;