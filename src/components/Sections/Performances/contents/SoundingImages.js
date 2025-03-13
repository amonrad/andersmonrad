import LinkItem from "../../../LinkItem";

export default function SoundingImages() {
    return (
        <div className="pt-8 p-2 bg-white bg-opacity-35 w-full flex flex-col items-start">
            
            <div className="text-gray-800 text-left" style={{ position: "relative" }}>
                   
                <h2 className="text-2xl font-bold pb-8 text-center">Sounding Images & Percussion</h2>
                
                {/* Responsive iframe wrapper */}
                <div className="w-2/3 float-left mr-4 mb-2">
                    <div className="relative w-full aspect-video">
                        <iframe className="absolute inset-0 w-full h-full" 
                            src="https://www.youtube.com/embed/Ehx0cWi_bbY?si=x9CmG4wnzqygTSOH" 
                            title="SoundingImages Video" 
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                <p>
                    Performance from <LinkItem url="https://genbib.dk/tranen" text="Tranen, Gentofte Hovedbibliotek" />, March 31, 2019. I am performing on an iPad, showcasing my iOS app Sounding Images #7-12 in an improvisatory interplay with Ying-Hsueh Chen on her acoustic percussion instruments. We perform regularly with this setup at various venues.
                </p>
            </div>
 
        </div>
    );
}