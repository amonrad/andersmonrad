import LinkItem from "../../../LinkItem";

export default function GreenRusty({ containerClass, textClass, iframeWrapperClass, iframeClass }) {
    return (
        <div className={containerClass} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", alignItems: "center", paddingTop: "40px" }}>
        {/*<div className={containerClass}>*/}
            {/*<div className={textClass}>*/}
            <div className={textClass} style={{ gridColumn: "1", gridRow: "1" }}>
                <h2 className="text-2xl font-bold pb-8">'Green, Rusty Metal On A Sunken Ship'</h2>
                <p>
                    Video recording from the premiere of my piece “Green Rusty Metal on a sunken ship”, november 2006 at the Copenhagen venue "Plex" (now closed). I played the piano part, <LinkItem url="https://tonehoved.dk" text="Anders Børup" /> and <LinkItem url="http://jim1000sprog.dk" text="Simon Bækdahl Nielsen" /> created the live visuals.
                </p>
            </div>

            {/* Responsive iframe wrapper */}
            <div className={iframeWrapperClass} style={{ gridColumn: "2", gridRow: "1" }}>
            {/*<div className={`${iframeWrapperClass} relative`} style={{ paddingTop: "56.25%" }}>*/}
                <iframe 
                    className={`${iframeClass} absolute top-0 left-0 w-full h-full`} 
                    src="https://player.vimeo.com/video/27066966" 
                    title="GreenRusty Video" 
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}