import LinkItem from "../../../LinkItem";

export default function FoieGrasGame() {
    return (
        <div className="pt-8 p-2 bg-white bg-opacity-35 w-full flex flex-col items-start">
            
            <div className="text-gray-800 text-left" style={{ position: "relative" }}>
                   
                <h2 className="text-2xl font-bold pb-8 text-center">Foie Gras - The Game (2011)</h2>
                
                {/* Responsive iframe wrapper */}
                <div className="w-2/3 float-left mr-4 mb-2">
                    <div className="relative w-full aspect-video">
                        <iframe className="absolute inset-0 w-full h-full" 
                            src="https://player.vimeo.com/video/27458127" 
                            title="FoieGrasVideo" 
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                <p>
                A wacky game prototype developed at the Game jam <LinkItem url="http://nomoresweden.com/about/" text="‘No More Sweden’" /> (Stockholm, 2011) by Johannes Wadin, Ivan Bostrom, Simon Nielsen, Paolo Taje and myself. I created the music.
                </p>
            </div>
 
        </div>
    );
}