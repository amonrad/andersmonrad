import LinkItem from "../../../LinkItem";

export default function Virtuoso() {
    return (
        <div className="pt-8 p-2 bg-white bg-opacity-35 w-full flex flex-col items-start">
            <div className="text-gray-800 text-left" style={{ position: "relative" }}>
                   
                <h2 className="text-2xl font-bold pb-8 text-center">'Virtuoso'-performance</h2>
                
                {/* Responsive iframe wrapper */}
                <div className="w-2/3 float-left mr-4 mb-2">
                    <div className="relative w-full aspect-video">
                        <iframe className="absolute inset-0 w-full h-full" 
                            src="https://www.youtube.com/embed/1TX8Myc1FsY?si=7SS7Y2XYyGeqEH1p" 
                            title="Virtuoso Video" 
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                <p>
                Performance by <LinkItem url="http://www.yinghsuehchen.com" text="Ying-Hsueh Chen" />with my audio/visual app-piece "Virtuoso" - at <LinkItem url="https://artmatter.dk/venue/dias-digital-kunst-i-det-offentlige-rum/" text="DIAS Kunsthal, Vallensbæk Station" />, august 2015. I have an ongoing collaboration with Ying-Hsueh - a classical percussion player, who has done live performances with several of my app-pieces.
                </p>
            </div>
        </div>
    );
}