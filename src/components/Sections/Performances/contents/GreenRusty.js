import LinkItem from "../../../LinkItem";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

export default function GreenRusty({ isOpen }) {
    return (
        <div className="pt-8 p-2 bg-white bg-opacity-35 w-full flex flex-col items-start">
            
            <div className="text-gray-800 text-left" style={{ position: "relative" }}>
                   
                <h2 className="text-2xl font-bold pb-8 text-center">'Green, Rusty Metal On A Sunken Ship'</h2>
                
                
                <div className="w-full">

                    {isOpen ? (
                        <div className="float-left w-full sm:w-2/3 aspect-video mr-4 mb-2 relative">
                            <LiteYouTubeEmbed
                                id="QESWoYD2Zzs"
                                title="GreenRustyVideo"
                                noCookie={true}
                                adNetwork={false}
                                poster="maxresdefault"
                                wrapperClass="yt-lite"
                            />
                        </div>
                    ) : null}

            
                <p className="mb-4">
                Video recording from the premiere of my piece “Green Rusty Metal on a sunken ship”, november 2006 at the Copenhagen venue "Plex" (now closed). I played the piano part, <LinkItem url="https://tonehoved.dk" text="Anders Børup" /> and <LinkItem url="http://jim1000sprog.dk" text="Simon Bækdahl Nielsen" /> created the live visuals.
                </p>
            </div>
 
        </div>
        </div>
    );
}
