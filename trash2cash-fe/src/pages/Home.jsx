import NavigationBar from "../components/NavigationBar"
import ScanAndEarn from "../components/ScanAndEarn"
import FooterSection from "../components/FooterSection"
import Testimonials from "../components/Testimonials"
import OurFiture from "../components/OurFiture"
import PointsDashboard from "../components/PointDashbord"
import { Hero } from "../components/Hero"
import UploadImage from "../components/UploadImage"
import PointsDashboard from "../components/PointDashbord"
import NotificationAlert from "../components/NotificationAlert"


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
            <PointsDashboard></PointsDashboard>
            <FooterSection></FooterSection>
            <NotificationAlert></NotificationAlert>


        </>
    )
}

export default Home;