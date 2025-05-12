import LinkItem from "../../../LinkItem";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

export default function SoundingImagesA() {
    return (
        <div className="pt-8 p-2 bg-white bg-opacity-35 w-full flex flex-col items-start">
            
        {/* Text Section with Wrapped Video */}
        <div className="text-gray-800 text-left" style={{ position: "relative" }}>
                {/* Wrapped Text */}
                <h2 className="text-2xl font-bold pb-8 text-center">
                    Sounding Images #1-6 (2016)
                </h2>

{/*                 
                <div className="w-2/3 float-left mr-4 mb-2">
                    <div className="relative w-full aspect-video">
                        <iframe 
                            className="absolute inset-0 w-full h-full" 
                            src="https://www.youtube.com/embed/11ZTtUGIhXY?si=hd5kiyhV66Z54ltt" 
                            title="SoundingImagesA Video" 
                            allowFullScreen
                        ></iframe>
                    </div>
                </div> */}
            <div className="w-full">
                {/* Floated Video Container */}
                <div className="float-left w-full sm:w-2/3 aspect-video mr-4 mb-2 relative">
                    <LiteYouTubeEmbed
                        id="11ZTtUGIhXY"
                        title="SoundingImagesA Video"
                        noCookie={true}
                        adNetwork={false}
                        poster="maxresdefault"
                        wrapperClass="yt-lite"
                    />
                </div>
            
                <p className="mb-4">
                “Sounding Images” is a project, which I intended to become an ongoing series of interactive audiovisual installations, combining directly related algorithmic graphics with sound & music. <br/>
                “Sounding Images #1-6″ is the first installment in the series, developed for a concert and presentation at the contemporary music festival <LinkItem url="https://klang.dk/" text="KLANG" /> in Copenhagen, 13th of june 2016. The Piece was presented as an Ipad app, performed by Taiwanese percussion player <LinkItem url="http://www.yinghsuehchen.com/" text="Ying-Hsueh Chen" />, followed by an interview/discussion between me and Danish writer and cultural critic <LinkItem url="https://www.torbensangild.dk/" text="Torben Sangild" />. <br/>
                Unfortunately “Sounding Images #1-6″ is not currently available for download on appstore.
                
                {/* <LinkItem url="https://itunes.apple.com/app/id1439881377" text="appstore" /> */}
                
                </p>  
            </div>
        </div>
        </div>
    );
}