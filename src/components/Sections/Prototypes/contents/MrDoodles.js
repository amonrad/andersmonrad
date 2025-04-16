import LinkItem from "../../../LinkItem";

export default function PaperEvolutionGame() {
    return (
        <div className="p-2 pt-8 bg-white bg-opacity-35 w-full flex flex-col items-start">
            
            {/* Text Section with Wrapped Image */}
            <div className="text-gray-800 text-left" style={{ position: "relative" }}>

                {/* Wrapped Text */}
                <h2 className="text-2xl font-bold pb-8 text-center">
                    PaperEvolution/Mr. Doodles (2011)
                </h2>

                
                {/* <div className="w-1/3 float-left mr-4 mb-2">
                    <div className="relative w-full aspect-video">
                        <iframe className="absolute inset-0 w-full h-full" 
                            src="https://www.youtube.com/embed/2FZ4U0goknQ?si=RHntMbFcLNFg84v3" 
                            title="PaperEvolutionVideo" 
                            allowFullScreen
                        ></iframe>
                    </div>
                </div> */}

                <p>
                    Three tunes I composed for a planned game project, which unfortunately remained unfinished and unreleased. The game (Mr. Doodles) was planned as a further development of the prototype game <LinkItem url="https://github.com/lukaszdk/Paper-Evolution" text="Paper Evolution" /> I did with three game developers (Lukasz Paczkowski, Matias Billeschou & Simon Leander Mikkelsen) for Nordic Game Jam in 2011. The Cosy tunes remains though, and they were inspired by music from Danish 70’s kids’ televison, suitable for the game set in a school classroom. I recorded all instruments, sound effects and whistling! – my friend <LinkItem url="https://www.icebergmusicgroup.com/publishing/songwriters/mikkel-petterson.aspx" text="Mikkel Petterson" /> contributed with the guitar parts:
                </p>

                
                {/* <iframe 
                    className="w-full h-14 mt-5"  // Full width with minimal height
                    src="https://www.youtube.com/embed/GleJuDSUd-4?si=LGpGeK7lgQcBj4xM&controls=1&showinfo=0&autoplay=0&mute=0"
                    title="MrDoodles1Audio"
                    allow="encrypted media"
                ></iframe>
                <iframe 
                    className="w-full h-14 mt-5"  // Full width with minimal height
                    src="https://www.youtube.com/embed/8lwZIrZF7xw?si=ozRIDe7G--_QJC-W&controls=1&showinfo=0&autoplay=0&mute=0"
                    title="MrDoodles2Audio"
                    allow="encrypted media"
                ></iframe>
                <iframe 
                    className="w-full h-14 mt-5"  // Full width with minimal height
                    src="https://www.youtube.com/embed/06g2lhTG8QU?si=Vj_G_Puoo5vgmwa3&controls=1&showinfo=0&autoplay=0&mute=0"
                    title="MrDoodles3Audio"
                    allow="encrypted media"
                ></iframe> */}
                
            </div>
        </div>
    );
}