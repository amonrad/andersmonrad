import LinkItem from "../../../LinkItem";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

export default function Ervax({ isOpen }) {
    return (
        <div className="p-2 pt-8 bg-white bg-opacity-35 w-full flex flex-col items-start">
            
            <div className="text-gray-800 text-left" style={{ position: "relative" }}>

                <h2 className="text-2xl font-bold pb-8 text-center">
                    Ervax (2011)
                </h2>

                <img 
                    src={`${process.env.PUBLIC_URL}/images/Installations/ErvaxInstallation.jpeg`}
                    className="w-1/3 sm:w-1/4 h-auto float-right mr-4 mb-2" 
                    alt="ErvaxPic1" 
                />

                <p className="mb-4">
                “ERVAX for 2″ is an interactive art piece, part videogame and part compositional tool: this means that while you’re playing the game, you’re at the same time generating a piece of randomized serial music – a quirky combination between retro arcadegame-aesthetics and 50’s musical avantgarde – Nancarrow meets Space invaders!
ERVAX was created in collaboration with game designer <LinkItem url="http://jim1000sprog.dk/works/ervax-for-2" text="Simon Bækdahl Nielsen" /> during 2011, and has been showcased and exhibited a number of places, as a conceptual installation resembling a classic retro arcade game. Venues includes classical concerts, Art galleries, Roskilde Festival to Game venues. In 2013 it was nominated in the category 'Most amazing indigame' at <LinkItem url="https://2025.amaze-berlin.de/" text="Amaze Indie Connect" /> festival in Berlin.            
                </p>
            </div>

            <div className="w-full">
                {isOpen ? (   
                    <div className="float-left w-full sm:w-2/3 aspect-video mr-4 mb-2 relative">
                        <LiteYouTubeEmbed
                            id="l8l2VAwYkuI"
                            title="ErvaxVideo"
                            noCookie={true}
                            adNetwork={false}
                            poster="maxresdefault"
                            wrapperClass="yt-lite"
                        />
                    </div>
                ) : null}
            </div>
        </div>
    );
}