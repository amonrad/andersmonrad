import LinkItem from "../../../LinkItem";

export default function VisualStudies() {
    return (
        <div className="pt-8 p-2 bg-white bg-opacity-35 w-full flex flex-col items-start">
            
        {/* Text Section with Wrapped Video */}
        <div className="text-gray-800 text-left" style={{ position: "relative" }}>
                {/* Wrapped Text */}
                <h2 className="text-2xl font-bold pb-8 text-center">
                    Visual Studies (2023)
                </h2>

                {/* Floating Video */}
                <div className="w-2/3 float-left mr-4 mb-2">
                    <div className="relative w-full aspect-video">
                        <iframe 
                            className="absolute inset-0 w-full h-full" 
                            src="https://www.youtube.com/embed/GYtFVI-MngU?si=d6I33siZ77p2Bkqn" 
                            title="VisualStudies Video" 
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            
                <p>
                “Visual Studies” was originally developed as a macOS-application, intended for audiovisual live performances by a music ensemble. For this purpose, I even constructed a traditional sheet music <LinkItem url="/files/VisualStudiesScore.pdf" text="score" />, with instructions for how musicians should play the virtual instruments, via MIDI drum pads. Thereby the project combines my background as a classically trained composer, with my more recently acquired skills as a digital, audiovisual software developer. This project also marks the first time I have experimented with coding graphic shaders.<br key="break" />
                However, public performances of the project yet have to find fruition. As soon as this happens, I will publish performance dates and video-recordings on this site. Take a look at the embedded video (with a screendump of a midi-playthrough of the musical score) to get an impression of the work's graphic and sonic universe.<br key="break" />
                It is possible, that I will develop an IOS-application from this project in the future. Until then, you can try the macOS-application for yourself <LinkItem url="/files/Visual Studies Updated.zip" text="here" /> (tested and runs on macOS Monterey 12.7).
                </p>  
            </div>
        </div>
    );
}