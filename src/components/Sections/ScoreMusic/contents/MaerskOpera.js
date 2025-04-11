import LinkItem from "../../../LinkItem";

export default function MaerskOpera() {
    return (
        <div className="p-2 pt-8 bg-white bg-opacity-35 w-full flex flex-col items-start">
            
            {/* Text Section with Wrapped Image */}
            <div className="text-gray-800 text-left" style={{ position: "relative" }}>

                {/* Wrapped Text */}
                <h2 className="text-2xl font-bold pb-8 text-center">
                    The Mærsk Opera (2012-16) - <LinkItem url={`${process.env.PUBLIC_URL}/files/MærskOperaen.pdf`} text="(Score)" />
                    {/* <LinkItem url="/files/MærskOperaen.pdf" text="(Score)" /> */}
                </h2>

                {/* Floating Image */}
                <img  
                    src={`${process.env.PUBLIC_URL}/images/ScoreMusic/xlarge_superflex_gaven.jpg`} 
                    // src="/images/ScoreMusic/xlarge_superflex_gaven.jpg" 
                    className="w-1/2 h-auto float-left mr-4 mb-2" 
                    alt="MaerskPic" 
                />

                <p>
                    An opera in 3 acts, for 26 voices, choir & orchestra. Produced in collaboration with artists group  <LinkItem url="https://superflex.net" text="SUPERFLEX" /> , who wrote the libretto in collaboration with Nikolai Heltoft. First composed in 2012, where the score was exhibited as a conceptual art piece in <LinkItem url="https://nikolajkunsthal.kk.dk" text="Nikolai Kunsthal" /> 
                    . Later re-arranged and recorded in 2016, and included in the film <LinkItem url="https://superflex.net/works/the_maersk_opera" text="The Mærsk Opera" /> by SUPERFLEX, premiered at <LinkItem url="https://cphdox.dk/da/" text="CPH DOX" /> 2017.<br/> A recording of the Opera is released on the Danish label <LinkItem url="https://www.dacapo-records.dk/da/udgivelser/monrad-maersk-operaen-lp" text="DACAPO"/>.            
                </p>

                {/* Embedded Audio */}
                <iframe 
                    className="w-full h-14 mt-5"  // Full width with minimal height
                    src="https://www.youtube.com/embed/iNvFo66XMSE?si=8XcmFbalH95CRMbm&controls=1&showinfo=0&autoplay=0&mute=0"
                    title="MærskA Audio"
                    allow="encrypted media"
                ></iframe>
                <iframe 
                    className="w-full h-14 mt-5"  // Full width with minimal height
                    src="https://www.youtube.com/embed/AD7ZouzSzpM?si=QANZ-RK3X1gTU0zq&controls=1&showinfo=0&autoplay=0&mute=0"
                    title="MærskB Audio"
                    allow="encrypted media"
                ></iframe>
                <iframe 
                    className="w-full h-14 mt-5"  // Full width with minimal height
                    src="https://www.youtube.com/embed/T69PNZAC-WY?si=zc1NFGXTN5STpVDe&controls=1&showinfo=0&autoplay=0&mute=0"
                    title="MærskC Audio"
                    allow="encrypted media"
                ></iframe>
                <iframe 
                    className="w-full h-14 mt-5"  // Full width with minimal height
                    src="https://www.youtube.com/embed/0n0UEhwsmc8?si=SVlszPMhfcXKcGuq&controls=1&showinfo=0&autoplay=0&mute=0"
                    title="MærskD Audio"
                    allow="encrypted media"
                ></iframe>
                <iframe 
                    className="w-full h-14 mt-5"  // Full width with minimal height
                    src="https://www.youtube.com/embed/tAE4NkpMLVE?si=yZ7gcw8_q_UtiKWU&controls=1&showinfo=0&autoplay=0&mute=0"
                    title="MærskE Audio"
                    allow="encrypted media"
                ></iframe>
            </div>
        </div>
    );
}