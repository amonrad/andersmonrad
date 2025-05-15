import LinkItem from "../../../LinkItem";
import AudioBarLiteEmbed from '../../../AudioBarLiteEmbed';

export default function Paaskesondag() {
    return (
        <div className="p-2 pt-8 bg-white bg-opacity-35 w-full flex flex-col items-start">
            
            {/* Text Section with Wrapped Image */}
            <div className="text-gray-800 text-left" style={{ position: "relative" }}>

                {/* Wrapped Text */}
                <h2 className="text-2xl font-bold pb-8 text-center">
                    Theme song for "Påskesøndag" (2011)
                </h2>

                <p>
                Short piano tune, composed for the short film “Påskesøndag” (Easter sunday) by the Danish film director <LinkItem url="https://www.dfi.dk/viden-om-film/filmdatabasen/person/jonas-grum" text="Jonas Grum" />. 
                </p>
            </div>
                                            
            <div className="w-full">
                                            
                <AudioBarLiteEmbed id="vwiWZ0HyfEI" title="paaskesondagAudio" />
                                       

{/*                 
                <iframe 
                    className="w-full h-14 mt-5"  // Full width with minimal height
                    src="https://www.youtube.com/embed/vwiWZ0HyfEI?si=yPGgT-ZoSAcuphDB&controls=1&showinfo=0&autoplay=0&mute=0"
                    title="paaskesondagAudio"
                    allow="encrypted media"
                ></iframe> */}


            </div>
        </div>
    );
}