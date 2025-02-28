import LinkItem from "../../../LinkItem";

export default function Virtuoso({ containerClass, textClass, iframeWrapperClass, iframeClass }) {
    return (
        <div className={containerClass} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", alignItems: "center", paddingTop: "40px" }}>
            {/* Text Section */}
            <div className={textClass} style={{ gridColumn: "1", gridRow: "1" }}>
                <h2 className="text-2xl font-bold pb-8">'Virtuoso'-performance</h2>
                <p>
                    Performance by <LinkItem url="http://www.yinghsuehchen.com" text="Ying-Hsueh Chen" />with my audio/visual app-piece "Virtuoso" - at <LinkItem url="https://artmatter.dk/venue/dias-digital-kunst-i-det-offentlige-rum/" text="DIAS Kunsthal, Vallensbæk Station" />, august 2015. I have an ongoing collaboration with Ying-Hsueh - a classical percussion player, who has done live performances with several of my app-pieces.
                </p>
            </div>

            {/* Responsive iframe wrapper */}
            <div className={iframeWrapperClass} style={{ gridColumn: "2", gridRow: "1" }}>
                <iframe 
                    className={`${iframeClass} absolute top-0 left-0 w-full h-full`} 
                    src="https://www.youtube.com/embed/1TX8Myc1FsY?si=7SS7Y2XYyGeqEH1p" 
                    title="Virtuoso Video" 
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}