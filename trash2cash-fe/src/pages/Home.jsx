import NavigationBar from "../components/NavigationBar"
import ScanAndEarn from "../components/ScanAndEarn"
import FooterSection from "../components/FooterSection"
import Testimonials from "../components/Testimonials"
import OurFiture from "../components/OurFiture"
import { Hero } from "../components/Hero"

 function Home({isLoggedIn, setIsLoggedIn}) {
    return(
        <>
            <NavigationBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
            </NavigationBar>
            <Hero></Hero>
            <OurFiture></OurFiture>
            <ScanAndEarn></ScanAndEarn>
            <Testimonials></Testimonials>
            <PointsDashboard></PointsDashboard>
            <FooterSection></FooterSection>

        </>
    )
}

export default Home;