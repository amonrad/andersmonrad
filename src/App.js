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
            setOpenSection(sectionId); // Open the selected section after a short delay
        }, 100); // Short delay ensures state updates first
    
        setTimeout(() => {
            const element = document.getElementById(sectionId.toLowerCase());
            if (element) {
                const yOffset = -100; // Adjust this value to match the height of the TopBar
                const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
    
                window.scrollTo({ top: y, behavior: "smooth" });
            }
        }, 200); // Scroll after the accordion is fully updated
    };

    return (
        <div className="bg-black min-h-screen">
            
            {/* Pass `handleMenuClick` to `TopBar` */}
            <TopBar onMenuClick={handleMenuClick} />
            <div className="pt-16 sm:pt-24 container mx-auto">
                
                <Accordion 
                    title="SCORE MUSIC"
                    imageSrc="/images/score_music.jpeg" 
                    content={<ScoreMusic />} 
                    styles={accordionStyles.scoremusic}
                    isOpen={openSection === "SCORE MUSIC"} // Controls if the accordion is open
                    onToggle={setOpenSection} // Allows the accordion to update `openSection`
                />

                <Accordion 
                    title="IOS APPS"
                    imageSrc="/images/ios_apps.jpeg" 
                    content={<IOSapps />} 
                    styles={accordionStyles.iosapps}
                    isOpen={openSection === "IOS APPS"}
                    onToggle={setOpenSection}
                />

                <Accordion 
                    title="INSTALLATIONS"
                    imageSrc="/images/installations.jpeg" 
                    content={<Installations />} 
                    styles={accordionStyles.installations}
                    isOpen={openSection === "INSTALLATIONS"}
                    onToggle={setOpenSection}
                />  

                <Accordion 
                    title="VISUAL ART" 
                    imageSrc="/images/Artwork/artwork.jpg" 
                    content={<Artwork />} 
                    styles={accordionStyles.artwork}
                    isOpen={openSection === "VISUAL ART"}
                    onToggle={setOpenSection}
                />

                <Accordion 
                    title="PIANO"
                    imageSrc="/images/piano.jpeg" 
                    content={<Piano />} 
                    styles={accordionStyles.piano}
                    isOpen={openSection === "PIANO"}
                    onToggle={setOpenSection}
                />

                <Accordion 
                    title="ELECTRONIC MUSIC"
                    imageSrc="/images/electronic.jpeg" 
                    content={<Electronic />} 
                    styles={accordionStyles.electronic}
                    isOpen={openSection === "ELECTRONIC MUSIC"}
                    onToggle={setOpenSection}
                />

                <Accordion 
                    title="PERFORMANCES" 
                    imageSrc="/images/performances.jpeg" 
                    content={<Performances />} 
                    styles={accordionStyles.performances}
                    isOpen={openSection === "PERFORMANCES"}
                    onToggle={setOpenSection}
                />

                <Accordion 
                    title="PROTOTYPES"
                    imageSrc="/images/prototypes.jpeg" 
                    content={<Prototypes />} 
                    styles={accordionStyles.prototypes}
                    isOpen={openSection === "PROTOTYPES"}
                    onToggle={setOpenSection}
                />

                <Accordion 
                    title="COMMERCIAL"
                    imageSrc="/images/commercial.jpeg" 
                    content={<Commercial />} 
                    styles={accordionStyles.commercial}
                    isOpen={openSection === "COMMERCIAL"}
                    onToggle={setOpenSection}
                />

                <Accordion 
                    title="RELEASES"
                    imageSrc="/images/releases.jpeg" 
                    content={<Releases />} 
                    styles={accordionStyles.releases}
                    isOpen={openSection === "RELEASES"}
                    onToggle={setOpenSection}
                />

                <Accordion 
                    title="TEXTS"
                    imageSrc="/images/texts.jpeg" 
                    content={<Texts />} 
                    styles={accordionStyles.texts}
                    isOpen={openSection === "TEXTS"}
                    onToggle={setOpenSection}
                />

                <Accordion 
                    title="ABOUT"
                    imageSrc="/images/bio_pic.jpeg" 
                    content={<About />} 
                    styles={accordionStyles.about}
                    isOpen={openSection === "ABOUT"}
                    onToggle={setOpenSection}
                />
            </div>
        </div>
    );
}

export default App;