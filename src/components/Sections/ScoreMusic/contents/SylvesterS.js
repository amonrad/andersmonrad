import LinkItem from "../../../LinkItem";
import AudioBarLiteEmbed from '../../../AudioBarLiteEmbed';

export default function SylvesterS() {
    return (
        <div className="p-2 pt-8 bg-white bg-opacity-35 w-full flex flex-col items-start">
               
            <div className="text-gray-800 text-left" style={{ position: "relative" }}>

                {/* Headline */}
                <h2 className="text-2xl font-bold pb-8 text-center">
                    Sylvester The Symphony (2010) - <LinkItem url={`${process.env.PUBLIC_URL}/files/SylvesterTheSymphonyScore.pdf`} text="(Score)" />
                </h2>
                
                {/* Text */}
                <p>
                A “children’s symphony” composed in 2010, for my son Sylvester, who was born that same year. The Title refers to the children's cartoon <LinkItem url="https://www.youtube.com/watch?v=HQzABYlPcGc" text="Tubby the Tuba" /> and the musical style reflects my great interest in (and inspiration from) American orchestral composers Gershwin, Bernstein, Copland etc. This recording is from the first performance at 
                <LinkItem url="https://www.dkdm.dk/da" text="The Royal Danish Academy of Music" />, played by <LinkItem url="https://copenhagenphil.dk" text="The Copenhagen Phil" /> (conducted by Jesper Nordin), November 5, 2010:
                </p>

            </div>
                
                <div className="w-full">
                
                    <AudioBarLiteEmbed id="1uMjVfU4aZc" title="SylvesterS Video" />
                
                    
                {/* <iframe 
                    className="w-full h-14 mt-2"
                    src="https://www.youtube.com/embed/1uMjVfU4aZc?si=O84Gb8UJ3fWpY623&controls=1&showinfo=0&autoplay=0&mute=0"
                    title="SylvesterS Audio"
                    allow="encrypted media"
                ></iframe> */}
                
            </div>
        </div>
    );
}