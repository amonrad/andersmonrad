import LinkItem from "../../../LinkItem";

export default function TemsonVinyl() {
    return (
        <div className="p-2 pt-8 bg-white bg-opacity-35 w-full flex flex-col items-start">
            
            {/* Text Section with Wrapped Image */}
            <div className="text-gray-800 text-left" style={{ position: "relative" }}>

                {/* Wrapped Text */}
                <h2 className="text-2xl font-bold pb-8 text-center">
                    "Temson" 10' vinyl LP (2012)
                </h2>
                
                {/* Floating Image */}
                <img 
                    src={`${process.env.PUBLIC_URL}/images/Releases/Temson.jpeg`} 
                    className="w-1/3 h-auto float-left mr-4 mb-2" 
                    alt="TemsonLPpic" 
                />

                <p>
                    This 10’ vinyl LP is a collaboration project with the Danish poet <LinkItem url="https://politiken.dk/ibyen/byliv/art5582562/Ispindedigter-Der-sker-ekstremt-meget-i-musikken-i-København" text="Jesper Elving" />. It was released by the publisher <LinkItem url="http://afterhand.blogspot.com/2012/01/metoj-digtsamling-af-jesper-elving.html" text="After Hand" /> in 2012. The release contains raw recordings of improvised performances of Elving reciting his poetry and me handling a custom <LinkItem url="https://cycling74.com" text="max/msp" />-patch playing algorithm-generated general-MIDI sounds directly from my laptop-loudspeakers. Have a listen to one of the tracks <LinkItem url="https://soundcloud.com/elvingmonrad/gasker" text="here" />. You can buy the physical release on <LinkItem url="https://www.discogs.com/release/3406432-Jesper-Elving-Anders-Monrad-Temson" text="discogs" />.
                </p>
            </div>
        </div>
    );
}