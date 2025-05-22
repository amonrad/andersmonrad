import LinkItem from "../../../LinkItem";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

export default function FoieGrasGame({ isOpen }) {
    return (
        <div className="pt-8 p-2 bg-white bg-opacity-35 w-full flex flex-col items-start">
            <div className="text-gray-800 text-left" style={{ position: "relative" }}>
                <h2 className="text-2xl font-bold pb-8 text-center">Foie Gras - The Game (2011)</h2>
                
                <div className="w-full">
                    {isOpen ? (
                        <div className="float-left w-full sm:w-2/3 aspect-video mr-4 mb-2 relative">
                            <LiteYouTubeEmbed
                                id="osHkiSJPRfE"
                                title="FoieGrasVideo"
                                noCookie={true}
                                adNetwork={false}
                                poster="maxresdefault"
                                wrapperClass="yt-lite"
                            />
                        </div>
                    ) : null}

                    <p className="mb-4">
                    A wacky game prototype developed at the Game jam <LinkItem url="http://nomoresweden.com/about/" text="‘No More Sweden’" /> (Stockholm, 2011) by Johannes Wadin, Ivan Bostrom, Simon Nielsen, Paolo Taje and myself. I created the music.
                    </p>
                </div>
            </div>
        </div>
    );
}