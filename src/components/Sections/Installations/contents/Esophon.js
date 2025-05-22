import LinkItem from "../../../LinkItem";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

export default function Esophon({ isOpen }) {
    return (
        <div className="p-2 pt-8 bg-white bg-opacity-35 w-full flex flex-col items-start">
            
            <div className="text-gray-800 text-left" style={{ position: "relative" }}>

                <h2 className="text-2xl font-bold pb-8 text-center">
                    Esophon (2021)
                </h2>

                <img 
                    src={`${process.env.PUBLIC_URL}/images/Installations/EsophonPic1.jpeg`} 
                    className="w-1/4 h-auto float-right mr-4 mb-2" 
                    alt="EsophonPic1" 
                />
                
                <p className="mb-4">
                The Esophon is an interactive sound installation. By operating the three touch-sensitive consoles, audience members collaborate to compose a piece of music. The Esophon was developed in collaboration with my long time collaborator and friend <LinkItem url="https://www.jim1000sprog.dk/works/esophon" text="Simon Bækdahl Nielsen" />, who developed the physical installation. I developed the software, music-generating part. The Esophon was developed for the permanent exhibition at <LinkItem url="https://en.natmus.dk/museums-and-palaces/the-danish-music-museum/" text="The Danish Music Museum" />, where it is currently exhibited.            
                </p>
                
                <div className="w-full">
                    {isOpen ? (   
                        <div className="float-left w-2/3 aspect-video mr-4 mb-2 relative">
                            <LiteYouTubeEmbed
                                id="2M-qbI9FaVM"
                                title="EsophonVideo"
                                noCookie={true}
                                adNetwork={false}
                                poster="maxresdefault"
                                wrapperClass="yt-lite"
                            />
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
}