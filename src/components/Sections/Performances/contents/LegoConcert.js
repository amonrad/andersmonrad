import LinkItem from "../../../LinkItem";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

export default function LegoConcert({ isOpen }) {
    return (
        <div className="pt-8 p-2 bg-white bg-opacity-35 w-full flex flex-col items-start">
            
            <div className="text-gray-800 text-left" style={{ position: "relative" }}>
                   
                <h2 className="text-2xl font-bold pb-8 text-center">Lego Concert</h2>
                
                
                {/* <div className="w-2/3 float-left mr-4 mb-2">
                    <div className="relative w-full aspect-video">
                        <iframe className="absolute inset-0 w-full h-full" 
                            src="https://www.youtube.com/embed/kZIy3170pgI?si=p2IdV0Wv5S-Lojg4" 
                            title="LegoConcert Video" 
                            allowFullScreen
                        ></iframe>
                    </div>
                </div> */}

                

                 <div className="w-full">
                    {isOpen ? ( 
                    <div className="float-left w-full sm:w-2/3 aspect-video mr-4 mb-2 relative">
                        <LiteYouTubeEmbed
                            id="kZIy3170pgI"
                            title="LegoConcert Video"
                            noCookie={true}
                            adNetwork={false}
                            customThumbnail={`${process.env.PUBLIC_URL}/files/Thumbnails/LegoThumbnail.jpg`}
                            wrapperClass="yt-lite"
                        />
                    </div>
                    ) : null}
            
                <p className="mb-4">
                Video-snippet from a concert I did with <LinkItem url="http://totem.menneske.dk" text="Jonas Olesen" /> at the <LinkItem url="https://norbergfestival.com" text="Norberg Festival" /> in Sweden, July 2006. Our concert-act was called IAPMI, and consisted of a Lego-landscape with in-build “instruments”, connected to the loudspeakers through contact microphones. Thus all the sounds are actual sounds by Lego bricks.
                </p>
            </div>
            </div>
 
        </div>
    );
}