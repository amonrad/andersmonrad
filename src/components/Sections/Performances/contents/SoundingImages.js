import LinkItem from "../../../LinkItem";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

export default function SoundingImages({ isOpen }) {
    return (
        <div className="pt-8 p-2 bg-white bg-opacity-35 w-full flex flex-col items-start text-gray-800 text-left">
            <h2 className="text-2xl font-bold pb-8 text-center w-full">Sounding Images & Percussion</h2>
            
            <div className="w-full">
                
                {isOpen ? ( 
                    <div className="float-left w-full sm:w-2/3 aspect-video mr-4 mb-2 relative">
                        <LiteYouTubeEmbed
                            id="Ehx0cWi_bbY"
                            title="SoundingImages video"
                            noCookie={true}
                            adNetwork={false}
                            poster="maxresdefault"
                            wrapperClass="yt-lite"
                        />
                    </div>
                ) : null}

                <p className="mb-4">
                    Performance from <LinkItem url="https://genbib.dk/tranen" text="Tranen, Gentofte Hovedbibliotek" />, March 31, 2019.
                    I am performing on an iPad, showcasing my iOS app Sounding Images #7-12 in an improvisatory interplay with Ying-Hsueh Chen on her acoustic percussion instruments.
                    We perform regularly with this setup at various venues. Our approach blends tactile technology with organic percussion, inviting listeners into a hybrid acoustic-electronic sound world where touch, resonance, and gesture intertwine in real-time performance.
                </p>

                <p>
                    In addition to public concerts, we’ve explored educational and experimental settings, adapting the performance to both young audiences and contemporary music venues. The Sounding Images app acts as a graphical score and instrument, allowing spontaneous composition and interaction. Our goal is to challenge and inspire listeners through texture, rhythm, and playful immediacy.
                </p>
            </div>
        </div>
    );
}