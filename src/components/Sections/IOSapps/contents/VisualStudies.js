import LinkItem from "../../../LinkItem";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

export default function VisualStudies({ isOpen }) {
    return (
        <div className="pt-8 p-2 bg-white bg-opacity-35 w-full flex flex-col items-start">
            
            <div className="text-gray-800 text-left" style={{ position: "relative" }}>
                    <h2 className="text-2xl font-bold pb-8 text-center">
                        Visual Studies (2023)
                    </h2>

                    <div className="w-full">
                        {isOpen ? (
                            <div className="float-left w-full sm:w-2/3 aspect-video mr-4 mb-2 relative">
                                <LiteYouTubeEmbed
                                    id="GYtFVI-MngU"
                                    title="VisualStudies Video"
                                    noCookie={true}
                                    adNetwork={false}
                                    poster="maxresdefault"
                                    wrapperClass="yt-lite"
                                />
                            </div>
                        ) : null}
                
                    <p className="mb-4">
                    “Visual Studies” was originally developed as a macOS-application, intended for audiovisual live performances by a music ensemble. For this purpose, I even constructed a traditional sheet music <LinkItem url={`${process.env.PUBLIC_URL}/files/VisualStudiesScore.pdf`} text="score" />, with instructions for how musicians should play the virtual instruments, via MIDI drum pads. Thereby the project combines my background as a classically trained composer, with my more recently acquired skills as a digital, audiovisual software developer. This project also marks the first time I have experimented with coding graphic shaders.<br/>
                    However, public performances of the project yet have to find fruition. As soon as this happens, I will publish performance dates and video-recordings on this site. Take a look at the embedded video (with a screendump of a midi-playthrough of the musical score) to get an impression of the work's graphic and sonic universe.<br/>
                    It is possible, that I will develop an IOS-application from this project in the future. Until then, you can try the macOS-application for yourself <LinkItem url={`${process.env.PUBLIC_URL}/files/Visual Studies Updated.zip`} text="here" /> (tested and runs on macOS Monterey 12.7).
                    </p>  
                </div>
            </div>
        </div>
    );
}

