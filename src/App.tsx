import HeroSection from "./sectionComponents/HeroSection"
import AboutMe from "./sectionComponents/AboutMe"
import ReelsSlider from "./sectionComponents/ReelsSlider"
import HowIWork from "./sectionComponents/HowIWork"
import FeaturedVideosSection from "./sectionComponents/FeaturedVideosSection"
import ContactMe from "./sectionComponents/ContactMe"
import Footer from "./sectionComponents/Footer"

function App() {
  return (
    <>
      {/* <SplashCursor /> */}

      <HeroSection />
      <AboutMe />
      <HowIWork />
      <FeaturedVideosSection />
      <ReelsSlider />
      <ContactMe />
      <Footer />
    </>
  )
}

export default App
