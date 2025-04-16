import LinkItem from "../../../LinkItem";

export default function GreenRusty() {
    return (
        <div className="pt-8 p-2 bg-white bg-opacity-35 w-full flex flex-col items-start">
            
            <div className="text-gray-800 text-left" style={{ position: "relative" }}>
                   
                <h2 className="text-2xl font-bold pb-8 text-center">'Green, Rusty Metal On A Sunken Ship'</h2>
                
                
                {/* <div className="w-2/3 float-left mr-4 mb-2">
                    <div className="relative w-full aspect-video">
                        <iframe className="absolute inset-0 w-full h-full" 
                            src="https://player.vimeo.com/video/27066966" 
                            title="GreenRusty Video" 
                            allowFullScreen
                        ></iframe>
                    </div>
                </div> */}

                <p>
                Video recording from the premiere of my piece “Green Rusty Metal on a sunken ship”, november 2006 at the Copenhagen venue "Plex" (now closed). I played the piano part, <LinkItem url="https://tonehoved.dk" text="Anders Børup" /> and <LinkItem url="http://jim1000sprog.dk" text="Simon Bækdahl Nielsen" /> created the live visuals.
                </p>
            </div>
 
        </div>
    );
}
