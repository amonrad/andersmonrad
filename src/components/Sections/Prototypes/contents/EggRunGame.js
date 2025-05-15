import LinkItem from "../../../LinkItem";
import AudioBarLiteEmbed from '../../../AudioBarLiteEmbed';

export default function EggRunGame() {
    return (
        <div className="p-2 pt-8 bg-white bg-opacity-35 w-full flex flex-col items-start">
            
            {/* Text Section with Wrapped Image */}
            <div className="text-gray-800 text-left" style={{ position: "relative" }}>

                {/* Wrapped Text */}
                <h2 className="text-2xl font-bold pb-8 text-center">
                    Egg run (2011)
                </h2>

                <p>
                Brief theme song for another prototype game project, which never went beyond the planning stage. <LinkItem url="https://napnokgames.com" text="KnapNok Games" /> came up with the idea for “Egg run”, in which the player was supposed to balance an imaginary egg while running with a tablet. This theme song, played by myself on a “honky tonk”-piano, is heavily influenced by the music of ragtime composer Scott Joplin.            
                </p>

            </div>
                                
            <div className="w-full">
                                
                <AudioBarLiteEmbed id="41GvTt5YUO8" title="EggRun Audio" />
                      

                
                {/* <iframe 
                    className="w-full h-14 mt-5"  // Full width with minimal height
                    src="https://www.youtube.com/embed/41GvTt5YUO8?si=6izt9gGa2cXwAWUc&controls=1&showinfo=0&autoplay=0&mute=0"
                    title="EggRun Audio"
                    allow="encrypted media"
                ></iframe> */}
                
            </div>
        </div>
    );
}