import LinkItem from "../../../LinkItem";
import AudioBarLiteEmbed from '../../../AudioBarLiteEmbed';

export default function HCAplaygate({ isOpen }) {
    return (
        <div className="p-2 pt-8 bg-white bg-opacity-35 w-full flex flex-col items-start">
            <div className="text-gray-800 text-left" style={{ position: "relative" }}>
                <h2 className="text-2xl font-bold pb-8 text-center">
                    Music for HCA-Playgate (2013)
                </h2>

                <img 
                    src={`${process.env.PUBLIC_URL}/images/Commercial/HCA-TaleRun.jpeg`} 
                    className="w-1/3 md:w-1/5 lg:w-1/6 h-auto float-left mr-4 mb-2" 
                    alt="HCApic" 
                />

                <p>
                These are theme-songs I composed for the commercial kids’ game <LinkItem url="https://apps.apple.com/dk/app/h-c-andersen-eventyrl%C3%B8b/id771674113?l=da" text="HCA playgate" /> in 2013, produced in collaboration with <LinkItem url="https://napnokgames.com" text="KnapNok Games" />. The game is available on appstore, released by the Danish playground company <LinkItem url="https://www.kompan.com/da/dk" text="Kompan" />, to promote a new playground concept based on the fairytales of H.C. Andersen. Thus, these are theme songs for “The Tinderbox”, “The Little Mermaid” and “The Ugly Duckling” – with musical inspiration ranging from the Danish composer H.C. Lumbye, “Aqaurium” by Saint-Säens to “Peter & the Wolf” by Prokofiev. Midway through, each of the pieces are repeated with expanded orchestration – intended for the “frenzy”-mode parts of the game…    
                </p>
            </div>
                                            
            <div className="w-full">
                {isOpen ? (        
                    <>
                    <AudioBarLiteEmbed id="uWLskss8Uwo" title="HCAAAudio" />
                    <AudioBarLiteEmbed id="6e0SQBEj_I4" title="HCABAudio" />
                    <AudioBarLiteEmbed id="AZkhHf6vMAg" title="HCACAudio" />
                    </>
                ) : null}
            </div>
        </div>
    );
}