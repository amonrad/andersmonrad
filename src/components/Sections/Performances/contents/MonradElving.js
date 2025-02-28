import LinkItem from "../../../LinkItem";

export default function MonradElving({ containerClass, textClass, iframeWrapperClass, iframeClass }) {
    return (
        <div className={containerClass} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", alignItems: "center", paddingTop: "40px" }}>
            {/* Text Section */}
            <div className={textClass} style={{ gridColumn: "1", gridRow: "1" }}>
                <h2 className="text-2xl font-bold pb-8">'Monrad/Elving'-performance</h2>
                <p>
                Spectacular rooftop-performance with poet <LinkItem url="https://www.discogs.com/artist/1737432-Jesper-Elving?srsltid=AfmBOorDQhjVe40rZmuumODERqgNZ5rXHMlx56wIIS2o2h0BUEDAZ_lL" text="Jesper Elving" /> from 
                <LinkItem url="https://artmatter.dk/journal/lydkunstfestivalen-lak/" text="LAK Festival" />, august 2012. I'm controlling a generative music setup from my laptop.
                </p>
            </div>

            {/* Responsive iframe wrapper */}
            <div className={iframeWrapperClass} style={{ gridColumn: "2", gridRow: "1" }}>
                <iframe 
                    className={`${iframeClass} absolute top-0 left-0 w-full h-full`} 
                    src="https://www.youtube.com/embed/p70Tl_gGhG0?si=qSgTQ9I8xfi7ZoiB" 
                    title="MonradElving Video" 
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}