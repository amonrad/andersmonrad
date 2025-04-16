import LinkItem from "../../../LinkItem";

export default function MonradElving() {
    return (
        <div className="pt-8 p-2 bg-white bg-opacity-35 w-full flex flex-col items-start">
            
            <div className="text-gray-800 text-left" style={{ position: "relative" }}>
                   
                <h2 className="text-2xl font-bold pb-8 text-center">'Monrad/Elving'-performance</h2>
                
                
                {/* <div className="w-2/3 float-left mr-4 mb-2">
                    <div className="relative w-full aspect-video">
                        <iframe className="absolute inset-0 w-full h-full" 
                            src="https://www.youtube.com/embed/p70Tl_gGhG0?si=qSgTQ9I8xfi7ZoiB" 
                            title="MonradElving Video" 
                            allowFullScreen
                        ></iframe>
                    </div>
                </div> */}

                <p>
                Spectacular rooftop-performance with poet <LinkItem url="https://www.discogs.com/artist/1737432-Jesper-Elving?srsltid=AfmBOorDQhjVe40rZmuumODERqgNZ5rXHMlx56wIIS2o2h0BUEDAZ_lL" text="Jesper Elving" /> from <LinkItem url="https://artmatter.dk/journal/lydkunstfestivalen-lak/" text="LAK Festival" />, august 2012. I'm controlling a generative music setup from my laptop.
                </p>
            </div>
        </div>
    );
}