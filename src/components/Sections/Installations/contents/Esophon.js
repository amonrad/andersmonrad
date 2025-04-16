import LinkItem from "../../../LinkItem";

export default function Esophon() {
    return (
        <div className="p-2 pt-8 bg-white bg-opacity-35 w-full flex flex-col items-start">
            
            {/* Text Section with Wrapped Image */}
            <div className="text-gray-800 text-left" style={{ position: "relative" }}>

                {/* Wrapped Text */}
                <h2 className="text-2xl font-bold pb-8 text-center">
                    Esophon (2021)
                </h2>
                
                {/* Floating Image */}
                <img 
                    src={`${process.env.PUBLIC_URL}/images/Installations/EsophonPic1.jpeg`} 
                    className="w-1/3 h-auto float-left mr-4 mb-2" 
                    alt="EsophonPic1" 
                />
                
                {/* <div className="w-1/3 float-left mr-4 mb-2">
                    <div className="relative w-full aspect-video">
                        <iframe className="absolute inset-0 w-full h-full" 
                            src="https://www.youtube.com/embed/2M-qbI9FaVM?si=UqH9vJfseVqeuQ3f" 
                            title="EsophonVideo" 
                            allowFullScreen
                        ></iframe>
                    </div>
                </div> */}


                <p>
                The Esophon is an interactive sound installation. By operating the three touch-sensitive consoles, audience members collaborate to compose a piece of music. The Esophon was developed in collaboration with my long time collaborator and friend <LinkItem url="https://www.jim1000sprog.dk/works/esophon" text="Simon Bækdahl Nielsen" />, who developed the physical installation. I developed the software, music-generating part. The Esophon was developed for the permanent exhibition at <LinkItem url="https://en.natmus.dk/museums-and-palaces/the-danish-music-museum/" text="The Danish Music Museum" />, where it is currently exhibited.            
                </p>
            </div>
        </div>
    );
}