import LinkItem from "../../../LinkItem";

export default function Prepositions() {
    return (
        <div className="p-2 pt-8 bg-white bg-opacity-35 w-full flex flex-col items-start">
              
            {/* Text Section with Wrapped Image */}
            <div className="text-gray-800 text-left" style={{ position: "relative" }}>
                
                {/* Floating Image */}
                <img 
                    src={`${process.env.PUBLIC_URL}/images/ScoreMusic/PrepositionsBillede.jpeg`}
                    className="w-1/5 h-auto float-left mr-4 mb-2" // ✅ Image floats right, text wraps around it
                    alt="Prepositions" 
                />

                {/* Wrapped Text */}
                <h2 className="text-2xl font-bold pb-8 text-left">
                    Prepositions (2015) - <LinkItem url={`${process.env.PUBLIC_URL}/files/Prepositions.pdf`} text="(Score)" />
                </h2>
                
                <p>
                    “Prepositions” is a song cycle for soprano and piano, which consists of 9 songs set to texts by the Norwegian author <LinkItem url="https://aschehoug.no/Demian_Vitanza" text="Demian Vitanza" />. The work dates from the spring of 2015, 
                    composed in close collaboration and dialogue with the author and the soprano Ly Tran, who premiered the work at <LinkItem url="http://hindsgavlfestival.dk" text="Hindsgavl Festival" /> in 2015, with myself playing the piano part. <br/>
                    
                    The work deliberately relates very closely to the classical Lied tradition, known from the Lieder of Franz Schubert, Robert Schumann and others. 
                    It had been a long time, since I'd worked within such a classical music terrain, but it was my own choice to keep the work tight within the genre: 
                    apart from the sound of actual wood chopping by the singer in one of the songs (as illustration of the storyline), the instrumentation in the work does 
                    not include neither alternative playing techniques, electronic processing or the like.<br/>
                    
                    In addition to further performances of the work, a studio recording was recorded in 2016. Listen to recordings of a few of the songs:
                </p>

                
                {/* <iframe 
                    className="w-full h-14 mt-2"
                    src="https://www.youtube.com/embed/57yMZ3GMZD8?si=HjEbYqaYW5S6eBNV&controls=1&showinfo=0&autoplay=0&mute=0"
                    title="PrepositionsA Audio"
                    allow="encrypted media"
                ></iframe>
                <iframe 
                    className="w-full h-14 mt-2"
                    src="https://www.youtube.com/embed/4GJccpuV6nY?si=pxh84rxBi9-ymQD6&controls=1&showinfo=0&autoplay=0&mute=0"
                    title="PrepositionsB Audio"
                    allow="encrypted media"
                ></iframe> */}
                
            </div>
        </div>
    );
}