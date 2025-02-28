import LinkItem from "../../../LinkItem";

export default function LegoConcert({ containerClass, textClass, iframeWrapperClass, iframeClass }) {
    return (
        <div className={containerClass} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", alignItems: "center", paddingTop: "40px" }}>
        {/* Text Section */}
        <div className={textClass} style={{ gridColumn: "1", gridRow: "1" }}>
                <h2 className="text-2xl font-bold pb-8">Lego Concert</h2>
                <p>
                Video-snippet from a concert I did with <LinkItem url="http://totem.menneske.dk" text="Jonas Olesen" /> at the  
                <LinkItem url="https://norbergfestival.com" text="Norberg Festival" /> in Sweden, July 2006. Our concert-act was called IAPMI, and consisted of a Lego-landscape with in-build “instruments”, connected to the loudspeakers through contact microphones. Thus all the sounds are actual sounds by Lego bricks.
                </p>
            </div>

            {/* Responsive iframe wrapper */}
            <div className={iframeWrapperClass} style={{ gridColumn: "2", gridRow: "1" }}>
                <iframe 
                    className={`${iframeClass} absolute top-0 left-0 w-full h-full`} 
                    src="https://www.youtube.com/embed/kZIy3170pgI?si=p2IdV0Wv5S-Lojg4" 
                    title="LegoConcert Video" 
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}