import LinkItem from "../../../LinkItem";
import AudioBarLiteEmbed from '../../../AudioBarLiteEmbed';

export default function GreenRustyB({ isOpen }) {
    return (
        <div className="p-2 pt-8 pb-4 bg-white bg-opacity-35 w-full flex flex-col items-start">
            
            <div className="text-gray-800 text-left" style={{ gridColumn: "2", gridRow: "1" }}>
                <h2 className="text-2xl font-bold pb-8 text-center">....Green Rusty Metal On A Sunken Ship (2006) - <LinkItem url="/files/GreenRustyMetal.pdf" text="(Score)" /></h2>
                <p>
                A piece composed in 2006 for acoustic piano and a prerecorded electronic part. The Electronic part is created entirely from concrete sounds from the piano part, to achieve a tight integration between the acoustic and electronic sounds. The idea was to create a symbiosis between classical music and music of the digital age. At the time I was very much into electronic glitch music by the likes of <LinkItem url="https://www.popppopppopp.com/copy-of-mey" text="OVAL" /> and others - whose aesthetic serves as a model for the electronic part. Thus, the overall effect of the piece, is that of a classical concert piece in digital decay - hence the poetic, somewhat melancholic title, resembling the titles of Debussy's piano Preludes. I play the piano part myself on this recording:
                </p>
            </div>
                
            <div className="w-full"> 
                {isOpen ? (   
                    <AudioBarLiteEmbed id="jaPt1PmGJWA" title="GreenRusty Audio" />
                ) : null}
            </div>
        </div>
    );
}