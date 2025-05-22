import LinkItem from "../../../LinkItem";
import AudioBarLiteEmbed from '../../../AudioBarLiteEmbed';

export default function Paaskesondag({ isOpen }) {
    return (
        <div className="p-2 pt-8 bg-white bg-opacity-35 w-full flex flex-col items-start">
            <div className="text-gray-800 text-left" style={{ position: "relative" }}>
                <h2 className="text-2xl font-bold pb-8 text-center">
                    Theme song for "Påskesøndag" (2011)
                </h2>

                <p>
                Short piano tune, composed for the short film “Påskesøndag” (Easter sunday) by the Danish film director <LinkItem url="https://www.dfi.dk/viden-om-film/filmdatabasen/person/jonas-grum" text="Jonas Grum" />. 
                </p>
            </div>
                                            
            <div className="w-full">
                {isOpen ? (                            
                    <AudioBarLiteEmbed id="vwiWZ0HyfEI" title="paaskesondagAudio" />
                ) : null}                        
            </div>
        </div>
    );
}