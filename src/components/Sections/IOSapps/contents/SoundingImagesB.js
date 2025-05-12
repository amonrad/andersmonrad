import LinkItem from "../../../LinkItem";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

export default function SoundingImagesB() {
    return (
        <div className="pt-8 p-2 bg-white bg-opacity-35 w-full flex flex-col items-start">
            
        {/* Text Section with Wrapped Video */}
        <div className="text-gray-800 text-left" style={{ position: "relative" }}>
                {/* Wrapped Text */}
                <h2 className="text-2xl font-bold pb-8 text-center">
                Sounding Images #7-12 (2018)
                </h2>

                
                {/* <div className="w-2/3 float-left mr-4 mb-2">
                    <div className="relative w-full aspect-video">
                        <iframe 
                            className="absolute inset-0 w-full h-full" 
                            src="https://www.youtube.com/embed/lOPmMgoayNU?si=mAQ9U4w-RH69Hx9p" 
                            title="SoundingImagesA Video" 
                            allowFullScreen
                        ></iframe>
                    </div>
                </div> */}

                <div className="w-full">
                    {/* Floated Video Container */}
                    <div className="float-left w-full sm:w-2/3 aspect-video mr-4 mb-2 relative">
                        <LiteYouTubeEmbed
                            id="lOPmMgoayNU"
                            title="SoundingImagesB Video"
                            noCookie={true}
                            adNetwork={false}
                            poster="maxresdefault"
                            wrapperClass="yt-lite"
                        />
                    </div>
            
                <p className="mb-4">
                “Sounding Images #7-12” is an audiovisual IOS app, which I developed in 2017-18 as a follow up to its predecessor “Sounding Images #1-6” from 2016. <br/>
                Whereas “Sounding Images #1-6” was based on concrete sound recordings, “Sounding Images #7-12” is based entirely on sound synthesis, with no prerecorded sounds whatsoever. <br/>
                The App was first presented at a concert at the experimental music festival <LinkItem url="https://www.snyk.dk/en/about-gong-tomorrow" text="'Gong Tomorrow'" /> November 10th 2018 at the Copenhagen venue <LinkItem url="https://alicecph.com/" text="ALICE" />, with my longtime collaborator <LinkItem url="http://www.yinghsuehchen.com/" text="Ying-Hsueh Chen" />. <br/>
                Here, the app was showcased as part of a spectacular musical duo-performance, where I performed with the app in a musical dialogue with Ying-Hsueh Chen, performing on her acoustic percussion instruments. <br/>    
                Unfortunately “Sounding Images #7-12″ is not currently available for download on appstore.
                          
                </p>  
            </div>
        </div>
        </div>
    );
}