import LinkItem from "../../../LinkItem";

export default function LegoConcert() {
    return (
        <div className="pt-8 p-2 bg-white bg-opacity-35 w-full flex flex-col items-start">
            
            <div className="text-gray-800 text-left" style={{ position: "relative" }}>
                   
                <h2 className="text-2xl font-bold pb-8 text-center">Lego Concert</h2>
                
                {/* Responsive iframe wrapper */}
                <div className="w-2/3 float-left mr-4 mb-2">
                    <div className="relative w-full aspect-video">
                        <iframe className="absolute inset-0 w-full h-full" 
                            src="https://www.youtube.com/embed/kZIy3170pgI?si=p2IdV0Wv5S-Lojg4" 
                            title="LegoConcert Video" 
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                <p>
                Video-snippet from a concert I did with <LinkItem url="http://totem.menneske.dk" text="Jonas Olesen" /> at the  
                <LinkItem url="https://norbergfestival.com" text="Norberg Festival" /> in Sweden, July 2006. Our concert-act was called IAPMI, and consisted of a Lego-landscape with in-build “instruments”, connected to the loudspeakers through contact microphones. Thus all the sounds are actual sounds by Lego bricks.
                </p>
            </div>
 
        </div>
    );
}