import LinkItem from "../../../LinkItem";

export default function MaerskVinyl() {
    return (
        <div className="p-2 pt-8 bg-white bg-opacity-35 w-full flex flex-col items-start">
            
            {/* Text Section with Wrapped Image */}
            <div className="text-gray-800 text-left" style={{ position: "relative" }}>

                {/* Wrapped Text */}
                <h2 className="text-2xl font-bold pb-8 text-center">
                    "The Mærsk Opera" vinyl LP (2018)
                </h2>

                {/* Floating Image */}
                <img 
                    src="/images/Releases/Mærsk-ReleasePic.jpeg" 
                    className="w-1/3 h-auto float-left mr-4 mb-2" 
                    alt="MaerskLPpic" 
                />

                <p>
                “The Mærsk Opera” released in december 2018. A deluxe double-vinyl package, from the Danish record label <LinkItem url="https://www.dacapo-records.dk/da/udgivelser/monrad-maersk-operaen-lp" text="Dacapo" /> with brillant cover artwork by <LinkItem url="https://superflex.net/publications/the_maersk_opera" text="SUPERFLEX" />.
                </p>
            </div>
        </div>
    );
}