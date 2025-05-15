import LinkItem from "../../../LinkItem";
import AudioBarLiteEmbed from '../../../AudioBarLiteEmbed';

export default function ApopheniaExh() {
    return (
        <div className="p-2 pt-8 bg-white bg-opacity-35 w-full flex flex-col items-start">
            
            {/* Text Section with Wrapped Image */}
            <div className="text-gray-800 text-left" style={{ position: "relative" }}>

                {/* Wrapped Text */}
                <h2 className="text-2xl font-bold pb-8 text-center">
                    Apophenia Cloud Travel Apparatus (2014)
                </h2>
                
                {/* Floating Image */}
                <img 
                    src={`${process.env.PUBLIC_URL}/images/Installations/TaekkerExhibition.jpeg`}
                    className="w-1/2 h-auto float-left mr-4 mb-2" 
                    alt="ApophPic" 
                />

                <p>
                In 2014 I created the sound design for visual artist <LinkItem url="https://artmatter.dk/profile/jacob-taekker/" text="Jacob Tækker" />’s exhibition “<LinkItem url="https://overgaden.org/en/exhibitions/apophenia-cloud-travel-apparatus" text="‘Apophenia Cloud Travel Apparatus’" />, held at <LinkItem url="https://overgaden.org/en" text="Overgaden - Institute of Contemporary Art" /> during spring 2014. The Sound design was based on superimposed timestretched household sounds, generated from a granular synthesis-setup (programmed in open source software <LinkItem url="https://puredata.info" text="Pure Data" />) with in-build slight irregularities resulting in discrete rhythmical patterns. A vinyl record production documenting the exhibition and sound design will soon be released during 2017. Listen to a short fragment from the sound design here:            
                </p>

            </div>
                
                 <div className="w-full">
                
                    <AudioBarLiteEmbed id="lZ4twFSwBJA" title="ApophAudio" />

            {/*                 
                <iframe 
                    className="w-full h-14 mt-5"  // Full width with minimal height
                    src="https://www.youtube.com/embed/lZ4twFSwBJA?si=KTQvvkX8uhkxOnbN&controls=1&showinfo=0&autoplay=0&mute=0"
                    title="ApophAudio"
                    allow="encrypted media"
                ></iframe> */}
            
            </div>
        </div>
    );
}