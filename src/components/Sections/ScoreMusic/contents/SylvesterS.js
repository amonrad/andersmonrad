import LinkItem from "../../../LinkItem";

export default function SylvesterS() {
    return (
        <div className="w-full flex flex-col items-start" style={{ paddingTop: "50px" }}>
            
            <div className="text-gray-800 text-left" style={{ position: "relative" }}>

                {/* Headline */}
                <h2 className="text-2xl font-bold pb-8 text-left">
                    Sylvester The Symphony (2010) - <LinkItem url="/files/SylvesterTheSymphonyScore.pdf" text="(Score)" />
                </h2>

                {/* Text */}
                <p>
                A “children’s symphony” composed in 2010, for my son Sylvester, who was born that same year. The Title refers to the children's cartoon <LinkItem url="https://www.youtube.com/watch?v=HQzABYlPcGc" text="Tubby the Tuba" /> and the musical style reflects my great interest in (and inspiration from) American orchestral composers Gershwin, Bernstein, Copland etc. This recording is from the first performance at 
                <LinkItem url="https://www.dkdm.dk/da" text="The Royal Danish Academy of Music" />, played by <LinkItem url="https://copenhagenphil.dk" text="The Copenhagen Phil" /> (conducted by Jesper Nordin), November 5, 2010: .
                </p>

                {/* Embedded Audio */}
                <iframe 
                    className="w-full h-14 mt-2"
                    src="https://www.youtube.com/embed/57yMZ3GMZD8?si=HjEbYqaYW5S6eBNV&controls=1&showinfo=0&autoplay=0&mute=0"
                    title="SylvesterS Audio"
                    allow="encrypted media"
                ></iframe>
            </div>
        </div>
    );
}