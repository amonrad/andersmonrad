import LinkItem from "../../../LinkItem";

// containerClass="grid grid-cols-2 gap-8 items-start"
//                 textClass="text-gray-800"
//                 iframeWrapperClass="relative w-full aspect-video"
//                 iframeClass="absolute top-0 left-0 w-full h-full"

export default function Quadcopter() {
    return (
        <div className="grid grid-cols-2 gap-8 items-start" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", alignItems: "center", paddingTop: "40px" }}>
            {/* Text Section */}
            <div className="text-gray-800" style={{ gridColumn: "1", gridRow: "1" }}>
                <h2 className="text-2xl font-bold pb-8">The Quadcopter Concert</h2>
                <p>
                    Performance from <LinkItem url="https://tedxcopenhagen.dk/events/mobility/" text="TEDxCopenhagen" /> event, 
                    September 17, 2014 with Tim Garbos and Patrick Jarnfelt from <LinkItem url="https://www.copenhagengamecollective.org" text="Copenhagen Game Collective" />. 
                    Patrick later wrote this <LinkItem url="https://www.copenhagengamecollective.org/2015/11/27/playing-drones-as-instruments/" text="blogpost" /> about the project. 
                    The Quadcopter concert is an algorithmic music setup with a direct mapping from the movements of the quadcopters to the output sound. 
                    I'm standing in the middle, handling the musical setup, with Tim and Patrick on either side controlling the quadcopters. 
                    The piece was first performed at <LinkItem url="https://kuto.dk/click/" text="Click Festival" /> in May 2014.
                </p>
            </div>

            {/* Responsive iframe wrapper */}
            <div className="relative w-full aspect-video" style={{ gridColumn: "2", gridRow: "1" }}>
                <iframe 
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/g9_yaSGtlQI?si=a-CX0Z1aogXiW0pj" 
                    title="Quadcopter Video" 
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}