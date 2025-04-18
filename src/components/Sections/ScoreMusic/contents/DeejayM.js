import LinkItem from "../../../LinkItem";

export default function DeejayM() {
    return (
        <div className="p-2 pt-8 bg-white bg-opacity-35 w-full flex flex-col items-start">
            
            <div className="text-gray-800 text-left" style={{ position: "relative" }}>

                {/* Headline */}
                <h2 className="text-2xl font-bold pb-8 text-left">
                    DeeJay Monsterwheel & The Schuberthill Gang (2009) - <LinkItem url={`${process.env.PUBLIC_URL}/files/DeeJayMonsterwheelScore.pdf`} text="(Score)" />
                </h2>
                
                {/* Text */}
                <p>
                    A piece in three movements composed for Clarinet, Bassoon, Horn, 2 Violins, Viola, Cello & Doublebass – like the Schubert Octet in F major – hence the title referring to Schubert in a quirky combination with “funky” rhythms, inspired by the oldschool hiphop-group <LinkItem url="https://en.wikipedia.org/wiki/The_Sugarhill_Gang" text="The Sugarhill Gang" />. This recording is a performance by the Finnish <LinkItem url="https://www.uusintaensemble.fi" text="Uusinta-ensemble" />, from a concert at the <LinkItem url="https://www.ungnordiskmusik.dk" text="UNM-festival" /> in Helsinki, 2010. A favourable review of this performance was published by the local paper <LinkItem url="/files/DeeJayReview23092010.pdf" text="hufvudstadsbladet" />.
                </p>

                
                {/* <iframe 
                    className="w-full h-14 mt-2"
                    src="https://www.youtube.com/embed/nX0rHltJEHs?si=jqe861JSQ0dFZvP3&controls=1&showinfo=0&autoplay=0&mute=0"
                    title="Deejay Audio"
                    allow="encrypted media"
                ></iframe> */}
                
            </div>
        </div>
    );
}