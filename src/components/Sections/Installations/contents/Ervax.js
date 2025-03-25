import LinkItem from "../../../LinkItem";

export default function Ervax() {
    return (
        <div className="p-2 pt-8 bg-white bg-opacity-35 w-full flex flex-col items-start">
            
            {/* Text Section with Wrapped Image */}
            <div className="text-gray-800 text-left" style={{ position: "relative" }}>

                {/* Wrapped Text */}
                <h2 className="text-2xl font-bold pb-8 text-center">
                    Ervax (2011)
                </h2>

                {/* Floating Image */}
                <img 
                    src="/images/Installations/ErvaxInstallation.jpeg" 
                    className="w-1/3 h-auto float-left mr-4 mb-2" 
                    alt="ErvaxPic1" 
                />
                <div className="w-1/3 float-left mr-4 mb-2">
                    <div className="relative w-full aspect-video">
                        <iframe className="absolute inset-0 w-full h-full"
                            src="https://player.vimeo.com/video/30701974"
                            title="ErvaxVideo" 
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
                <p>
                “ERVAX for 2″ is an interactive art piece, part videogame and part compositional tool: this means that while you’re playing the game, you’re at the same time generating a piece of randomized serial music – a quirky combination between retro arcadegame-aesthetics and 50’s musical avantgarde – Nancarrow meets Space invaders!
ERVAX was created in collaboration with game designer <LinkItem url="http://jim1000sprog.dk/works/ervax-for-2" text="Simon Bækdahl Nielsen" /> during 2011, and has been showcased and exhibited a number of places, as a conceptual installation resembling a classic retro arcade game. Venues includes classical concerts, Art galleries, Roskilde Festival to Game venues. In 2013 it was nominated in the category 'Most amazing indigame' at <LinkItem url="https://2025.amaze-berlin.de/" text="Amaze Indie Connect" /> festival in Berlin.            
                </p>
            </div>
        </div>
    );
}