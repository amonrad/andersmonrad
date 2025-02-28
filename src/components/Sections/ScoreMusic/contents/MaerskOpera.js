import LinkItem from "../../../LinkItem";

export default function MaerskOpera({ containerClass, textClass, iframeWrapperClass, iframeClass }) {
    return (
        <div className={containerClass} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", alignItems: "center", paddingTop: "15px" }}>
            {/* Responsive iframe wrapper */}
            <div className={iframeWrapperClass} style={{ gridColumn: "1", gridRow: "1" }}>
                <img src="/images/ScoreMusic/xlarge_superflex_gaven.jpg" className="w-full h-auto" alt="MaerskPic" />
            </div>

            {/* Text Section */}
            <div className={textClass} style={{ gridColumn: "2", gridRow: "1" }}>
                <h2 className="text-2xl font-bold pb-8">The Mærsk Opera (2012-16) - <LinkItem url="/files/MærskOperaen.pdf" text="(Score)" /></h2>
                <p>
                An opera in 3 acts, for 26 voices, choir & orchestra. Produced in collaboration with artists group  <LinkItem url="https://superflex.net" text="SUPERFLEX" /> , who wrote the libretto in collaboration with Nikolai Heltoft. First composed in 2012, where the score was exhibited as a conceptual art piece in <LinkItem url="https://nikolajkunsthal.kk.dk" text="Nikolai Kunsthal" /> 
                . Later re-arranged and recorded in 2016, and included in the film <LinkItem url="https://superflex.net/works/the_maersk_opera" text="The Mærsk Opera" /> by SUPERFLEX, premiered at <LinkItem url="https://cphdox.dk/da/" text="CPH DOX" /> 2017.<br key="break" /> A recording of the Opera is released on the Danish label <LinkItem url="https://www.dacapo-records.dk/da/udgivelser/monrad-maersk-operaen-lp" text="DACAPO" />. </p>
            
                <iframe 
                    className="w-full h-14 mt-5"  // Full width with minimal height
                    src="https://www.youtube.com/embed/T69PNZAC-WY?si=zc1NFGXTN5STpVDe&controls=1&showinfo=0&autoplay=0&mute=0"
                    title="Mærsk Audio"
                    allow="encrypted media"
                ></iframe>
            </div>
        </div>
    );
}