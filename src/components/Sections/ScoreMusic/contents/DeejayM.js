import LinkItem from "../../../LinkItem";
import AudioBarLiteEmbed from '../../../AudioBarLiteEmbed';

export default function DeejayM({ isOpen }) {
    return (
        <div className="p-2 pt-8 bg-white bg-opacity-35 w-full flex flex-col items-start">
            
            <div className="text-gray-800 text-left" style={{ position: "relative" }}>

                <h2 className="text-2xl font-bold pb-8 text-left">
                    DeeJay Monsterwheel & The Schuberthill Gang (2009) - <LinkItem url={`${process.env.PUBLIC_URL}/files/DeeJayMonsterwheelScore.pdf`} text="(Score)" />
                </h2>

                <p>
                    A piece in three movements composed for Clarinet, Bassoon, Horn, 2 Violins, Viola, Cello & Doublebass – like the Schubert Octet in F major – hence the title referring to Schubert in a quirky combination with “funky” rhythms, inspired by the oldschool hiphop-group <LinkItem url="https://en.wikipedia.org/wiki/The_Sugarhill_Gang" text="The Sugarhill Gang" />. This recording is a performance by the Finnish <LinkItem url="https://www.uusintaensemble.fi" text="Uusinta-ensemble" />, from a concert at the <LinkItem url="https://www.ungnordiskmusik.dk" text="UNM-festival" /> in Helsinki, 2010. A favourable review of this performance was published by the local paper <LinkItem url="/files/DeeJayReview23092010.pdf" text="hufvudstadsbladet" />:
                </p>

                </div>
                
                    <div className="w-full">
                        {isOpen ? (
                            <AudioBarLiteEmbed id="nX0rHltJEHs" title="Deejay Video" />
                        ) : null}
      
                </div>
            </div>
        );
}