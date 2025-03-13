import LinkItem from "../../../LinkItem";

export default function Quadcopter() {
    return (
        <div className="pt-8 p-2 bg-white bg-opacity-35 w-full flex flex-col items-start">
            
            <div className="text-gray-800 text-left" style={{ position: "relative" }}>
                   
                <h2 className="text-2xl font-bold pb-8 text-center">The Quadcopter Concert</h2>
                
                {/* Responsive iframe wrapper */}
                <div className="w-2/3 float-left mr-4 mb-2">
                    <div className="relative w-full aspect-video">
                        <iframe className="absolute inset-0 w-full h-full" 
                            src="https://www.youtube.com/embed/g9_yaSGtlQI?si=a-CX0Z1aogXiW0pj" 
                            title="Quadcopter Video" 
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                <p>
                    Performance from <LinkItem url="https://tedxcopenhagen.dk/events/mobility/" text="TEDxCopenhagen" /> event, 
                    September 17, 2014 with Tim Garbos and Patrick Jarnfelt from <LinkItem url="https://www.copenhagengamecollective.org" text="Copenhagen Game Collective" />. 
                    Patrick later wrote this <LinkItem url="https://www.copenhagengamecollective.org/2015/11/27/playing-drones-as-instruments/" text="blogpost" /> about the project. 
                    The Quadcopter concert is an algorithmic music setup with a direct mapping from the movements of the quadcopters to the output sound. 
                    I'm standing in the middle, handling the musical setup, with Tim and Patrick on either side controlling the quadcopters. 
                    The piece was first performed at <LinkItem url="https://kuto.dk/click/" text="Click Festival" /> in May 2014.
                </p>
            </div>
        </div>
    );
}