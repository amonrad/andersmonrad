import { useState } from "react";
import TopBar from "./components/TopBar";
import Accordion from "./components/Accordion";
import Artwork from "./components/Sections/Artwork/Artwork";
import Piano from "./components/Sections/Piano/Piano";
import Performances from "./components/Sections/Performances/Performances";
import About from "./components/Sections/About/About";
import ScoreMusic from "./components/Sections/ScoreMusic/ScoreMusic";
import Commercial from "./components/Sections/Commercial/Commercial";
import Electronic from "./components/Sections/Electronic/Electronic";
import Installations from "./components/Sections/Installations/Installations";
import IOSapps from "./components/Sections/IOSapps/IOSapps";
import Prototypes from "./components/Sections/Prototypes/Prototypes";
import Releases from "./components/Sections/Releases/Releases";
import Texts from "./components/Sections/Texts/Texts";
import ContactForm from "./components/ContactForm";

import accordionStyles from "./styles/styles";

function App() {

    const [openSection, setOpenSection] = useState(null);

    const handleMenuClick = (sectionId) => {
        setOpenSection(null); // Close all sections first
    
        setTimeout(() => {
            const scrollToSection = () => {
                const element = document.getElementById(sectionId.toLowerCase());
                if (element) {
                    const topBarHeight = document.querySelector('.top-bar')?.offsetHeight || 100;
                    const y = element.getBoundingClientRect().top + window.scrollY - topBarHeight;
    
                    window.scrollTo({ top: y, behavior: "smooth" });
                }
            };
    
            // Ensure scrolling happens after the DOM has fully updated
            requestAnimationFrame(() => {
                requestAnimationFrame(scrollToSection);
            });
        }, 100); 
        setTimeout(() => {
            setOpenSection(sectionId); // Open the selected section after a short delay
        }, 500); 
    };

    return (
        <div className="bg-black min-h-screen">
            
            {/* Pass `handleMenuClick` to `TopBar` */}
            <TopBar onMenuClick={handleMenuClick} />
            <div className="pt-16 sm:pt-24 container mx-auto">
                
                <Accordion 
                    title="scoremusic"
                    displayName="SCORE MUSIC"
                    imageSrc={`${process.env.PUBLIC_URL}/images/score_music.jpeg`} 
                    content={<ScoreMusic />} 
                    styles={accordionStyles.scoremusic}
                    isOpen={openSection === "scoremusic"} // Controls if the accordion is open
                    onToggle={setOpenSection} // Allows the accordion to update `openSection`
                />

                <Accordion 
                    title="iosapps"
                    displayName="IOS APPS"
                    imageSrc={`${process.env.PUBLIC_URL}/images/ios_apps.jpeg`} 
                    content={<IOSapps />} 
                    styles={accordionStyles.iosapps}
                    isOpen={openSection === "iosapps"}
                    onToggle={setOpenSection}
                />

                <Accordion 
                    title="installations"
                    displayName="INSTALLATIONS"
                    imageSrc={`${process.env.PUBLIC_URL}/images/installations.jpeg`} 
                    content={<Installations />} 
                    styles={accordionStyles.installations}
                    isOpen={openSection === "installations"}
                    onToggle={setOpenSection}
                />  

                <Accordion 
                    title="visualart" 
                    displayName="VISUAL ART"
                    imageSrc={`${process.env.PUBLIC_URL}/images/Artwork/artwork.jpg`} 
                    content={<Artwork />} 
                    styles={accordionStyles.artwork}
                    isOpen={openSection === "visualart"}
                    onToggle={setOpenSection}
                />

                <Accordion
                    title="piano"
                    displayName="PIANO"
                    imageSrc={`${process.env.PUBLIC_URL}/images/piano.jpeg`}
                    content={<Piano isOpen={openSection === "piano"} />}  // Pass isOpen here
                    styles={accordionStyles.piano}
                    isOpen={openSection === "piano"}
                    onToggle={setOpenSection}
                />

                <Accordion 
                    title="electronicmusic"
                    displayName="ELECTRONIC MUSIC"
                    imageSrc={`${process.env.PUBLIC_URL}/images/electronic.jpeg`}
                    content={<Electronic />} 
                    styles={accordionStyles.electronic}
                    isOpen={openSection === "electronicmusic"}
                    onToggle={setOpenSection}
                />

                <Accordion 
                    title="performances" 
                    displayName="PERFORMANCES"
                    imageSrc={`${process.env.PUBLIC_URL}/images/performances.jpeg`} 
                    content={<Performances isOpen={openSection === "performances"}/>} 
                    styles={accordionStyles.performances}
                    isOpen={openSection === "performances"}
                    onToggle={setOpenSection}
                />

                <Accordion 
                    title="prototypes"
                    displayName="PROTOTYPES"
                    imageSrc={`${process.env.PUBLIC_URL}/images/prototypes.jpeg`} 
                    content={<Prototypes />} 
                    styles={accordionStyles.prototypes}
                    isOpen={openSection === "prototypes"}
                    onToggle={setOpenSection}
                />

                <Accordion 
                    title="commercial"
                    displayName="COMMERCIAL"
                    imageSrc={`${process.env.PUBLIC_URL}/images/commercial.jpeg`} 
                    content={<Commercial />} 
                    styles={accordionStyles.commercial}
                    isOpen={openSection === "commercial"}
                    onToggle={setOpenSection}
                />

                <Accordion 
                    title="releases"
                    displayName="RELEASES"
                    imageSrc={`${process.env.PUBLIC_URL}/images/releases.jpeg`}
                    content={<Releases />} 
                    styles={accordionStyles.releases}
                    isOpen={openSection === "releases"}
                    onToggle={setOpenSection}
                />

                <Accordion 
                    title="texts"
                    displayName="TEXTS"
                    imageSrc={`${process.env.PUBLIC_URL}/images/texts.jpeg`} 
                    content={<Texts />} 
                    styles={accordionStyles.texts}
                    isOpen={openSection === "texts"}
                    onToggle={setOpenSection}
                />

                <Accordion 
                    title="about"
                    displayName="ABOUT"
                    imageSrc={`${process.env.PUBLIC_URL}/images/bio_pic.jpeg`} 
                    content={<About />} 
                    styles={accordionStyles.about}
                    isOpen={openSection === "about"}
                    onToggle={setOpenSection}
                />

                <Accordion 
                    title="contact"
                    displayName="CONTACT"
                    imageSrc={`${process.env.PUBLIC_URL}/images/score_music.jpeg`} 
                    content={<ContactForm />} 
                    styles={accordionStyles.contactform}
                    isOpen={openSection === "contact"} // Controls if the accordion is open
                    onToggle={setOpenSection} // Allows the accordion to update `openSection`
                />
                
                <div className="w-full h-screen opacity-0 pointer-events-none">
                {/* This fills the screen but is invisible - otherwise scrolling to bottom sections doesn't work properly */}
                </div>
                
            </div>
        </div>
    );
}

export default App;