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

    // const handleMenuClick = (sectionId) => {
    //     setTimeout(() => {
    //     setOpenSection(null); // Close all sections first
    //     }, 100); // Scroll after the accordion is fully updated
    
    //     setTimeout(() => {
    //         const element = document.getElementById(sectionId.toLowerCase());
    //         if (element) {
    //             const topBarHeight = document.querySelector('.top-bar')?.offsetHeight || 100;
    //             const yOffset = -topBarHeight;

    //             //const yOffset = -100; // Adjust this value to match the height of the TopBar
    //             const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
    
    //             window.scrollTo({ top: y, behavior: "smooth" });
    //         }
    //     }, 1000); // Scroll after the accordion is fully updated

    //     setTimeout(() => {
    //         setOpenSection(sectionId); // Open the selected section after a short delay
    //     }, 500); // Short delay ensures state updates first
        
    // };

    return (
        <div className="bg-black min-h-screen">
            
            {/* Pass `handleMenuClick` to `TopBar` */}
            <TopBar onMenuClick={handleMenuClick} />
            <div className="pt-16 sm:pt-24 container mx-auto">
                
                <Accordion 
                    title="scoremusic"
                    displayName="SCORE MUSIC"
                    imageSrc="/images/score_music.jpeg" 
                    content={<ScoreMusic />} 
                    styles={accordionStyles.scoremusic}
                    isOpen={openSection === "SCOREMUSIC"} // Controls if the accordion is open
                    onToggle={setOpenSection} // Allows the accordion to update `openSection`
                />

                <Accordion 
                    title="iosapps"
                    displayName="IOS APPS"
                    imageSrc="/images/ios_apps.jpeg" 
                    content={<IOSapps />} 
                    styles={accordionStyles.iosapps}
                    isOpen={openSection === "IOSAPPS"}
                    onToggle={setOpenSection}
                />

                <Accordion 
                    title="installations"
                    displayName="INSTALLATIONS"
                    imageSrc="/images/installations.jpeg" 
                    content={<Installations />} 
                    styles={accordionStyles.installations}
                    isOpen={openSection === "INSTALLATIONS"}
                    onToggle={setOpenSection}
                />  

                <Accordion 
                    title="visualart" 
                    displayName="VISUAL ART"
                    imageSrc="/images/Artwork/artwork.jpg" 
                    content={<Artwork />} 
                    styles={accordionStyles.artwork}
                    isOpen={openSection === "VISUALART"}
                    onToggle={setOpenSection}
                />

                <Accordion 
                    title="piano"
                    displayName="PIANO"
                    imageSrc="/images/piano.jpeg" 
                    content={<Piano />} 
                    styles={accordionStyles.piano}
                    isOpen={openSection === "PIANO"}
                    onToggle={setOpenSection}
                />

                <Accordion 
                    title="electronicmusic"
                    displayName="ELECTRONIC MUSIC"
                    imageSrc="/images/electronic.jpeg" 
                    content={<Electronic />} 
                    styles={accordionStyles.electronic}
                    isOpen={openSection === "ELECTRONICMUSIC"}
                    onToggle={setOpenSection}
                />

                <Accordion 
                    title="performances" 
                    displayName="PERFORMANCES"
                    imageSrc="/images/performances.jpeg" 
                    content={<Performances />} 
                    styles={accordionStyles.performances}
                    isOpen={openSection === "PERFORMANCES"}
                    onToggle={setOpenSection}
                />

                <Accordion 
                    title="prototypes"
                    displayName="PROTOTYPES"
                    imageSrc="/images/prototypes.jpeg" 
                    content={<Prototypes />} 
                    styles={accordionStyles.prototypes}
                    isOpen={openSection === "PROTOTYPES"}
                    onToggle={setOpenSection}
                />

                <Accordion 
                    title="commercial"
                    displayName="COMMERCIAL"
                    imageSrc="/images/commercial.jpeg" 
                    content={<Commercial />} 
                    styles={accordionStyles.commercial}
                    isOpen={openSection === "COMMERCIAL"}
                    onToggle={setOpenSection}
                />

                <Accordion 
                    title="releases"
                    displayName="RELEASES"
                    imageSrc="/images/releases.jpeg" 
                    content={<Releases />} 
                    styles={accordionStyles.releases}
                    isOpen={openSection === "RELEASES"}
                    onToggle={setOpenSection}
                />

                <Accordion 
                    title="texts"
                    displayName="TEXTS"
                    imageSrc="/images/texts.jpeg" 
                    content={<Texts />} 
                    styles={accordionStyles.texts}
                    isOpen={openSection === "TEXTS"}
                    onToggle={setOpenSection}
                />

                <Accordion 
                    title="about"
                    displayName="ABOUT"
                    imageSrc="/images/bio_pic.jpeg" 
                    content={<About />} 
                    styles={accordionStyles.about}
                    isOpen={openSection === "ABOUT"}
                    onToggle={setOpenSection}
                />
                
                <div className="w-full h-screen opacity-0 pointer-events-none">
                {/* This fills the screen but is invisible */}
                </div>
                
            </div>
        </div>
    );
}

export default App;