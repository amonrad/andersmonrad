import LinkItem from "../../../LinkItem";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import AudioBarLiteEmbed from '../../../AudioBarLiteEmbed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

export default function PaperEvolutionGame({ isOpen }) {
    return (
        <div className="p-2 pt-8 bg-white bg-opacity-35 w-full flex flex-col items-start">
            <div className="text-gray-800 text-left" style={{ position: "relative" }}>
                <h2 className="text-2xl font-bold pb-8 text-center">
                    PaperEvolution/Mr. Doodles (2011)
                </h2>

                <div className="w-full">
                    {isOpen ? (
                        <div className="float-left w-full sm:w-2/3 aspect-video mr-4 mb-2 relative">
                            <LiteYouTubeEmbed
                                id="2FZ4U0goknQ"
                                title="PaperEvolutionVideo"
                                noCookie={true}
                                adNetwork={false}
                                customThumbnail={`${process.env.PUBLIC_URL}/files/PaperEvolutionThumbnail.jpg`}
                                wrapperClass="yt-lite"
                            />
                        </div>
                    ) : null}
            
                    <p className="mb-4">
                        Three tunes I composed for a planned game project, which unfortunately remained unfinished and unreleased. The game (Mr. Doodles) was planned as a further development of the prototype game <LinkItem url="https://github.com/lukaszdk/Paper-Evolution" text="Paper Evolution" /> I did with three game developers (Lukasz Paczkowski, Matias Billeschou & Simon Leander Mikkelsen) for Nordic Game Jam in 2011. The Cosy tunes remains though, and they were inspired by music from Danish 70’s kids’ televison, suitable for the game set in a school classroom. I recorded all instruments, sound effects and whistling! – my friend <LinkItem url="https://www.icebergmusicgroup.com/publishing/songwriters/mikkel-petterson.aspx" text="Mikkel Petterson" /> contributed with the guitar parts:
                    </p>
                </div>
            </div>
                
            <div className="w-full">
                {isOpen ? (             
                    <>
                    <AudioBarLiteEmbed id="GleJuDSUd-4" title="MrDoodles1Audio" />
                    <AudioBarLiteEmbed id="8lwZIrZF7xw" title="MrDoodles2Audio" />
                    <AudioBarLiteEmbed id="06g2lhTG8QU" title="MrDoodles3Audio" />
                    </>
                ) : null}
            </div>      
        </div>
    );
}