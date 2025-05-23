import LinkItem from "../../../LinkItem";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

export default function MonradElving({ isOpen }) {
    return (
        <div className="pt-8 p-2 bg-white bg-opacity-35 w-full flex flex-col items-start">
            
            <div className="text-gray-800 text-left" style={{ position: "relative" }}>
                   
                <h2 className="text-2xl font-bold pb-8 text-center">'Monrad/Elving'-performance</h2>

                <div className="w-full">
                    
                    {isOpen ? ( 
                        <div className="float-left w-full sm:w-2/3 aspect-video mr-4 mb-2 relative">
                            <LiteYouTubeEmbed
                                id="p70Tl_gGhG0"
                                title="MonradElving Video"
                                noCookie={true}
                                adNetwork={false}
                                poster="maxresdefault"
                                wrapperClass="yt-lite"
                            />
                        </div>
                    ) : null}
            
                    <p className="mb-4">
                        Spectacular rooftop-performance with poet <LinkItem url="https://www.discogs.com/artist/1737432-Jesper-Elving?srsltid=AfmBOorDQhjVe40rZmuumODERqgNZ5rXHMlx56wIIS2o2h0BUEDAZ_lL" text="Jesper Elving" /> from <LinkItem url="https://artmatter.dk/journal/lydkunstfestivalen-lak/" text="LAK Festival" />, august 2012. I'm controlling a generative music setup from my laptop.
                    </p>
                </div>
            </div>
        </div>
    );
}