import LinkItem from "../../../LinkItem";

export default function ApopheniaVinyl() {
    return (
        <div className="p-2 pt-8 bg-white bg-opacity-35 w-full flex flex-col items-start">
            
            {/* Text Section with Wrapped Image */}
            <div className="text-gray-800 text-left" style={{ position: "relative" }}>

                {/* Wrapped Text */}
                <h2 className="text-2xl font-bold pb-8 text-center">
                    "Apophenia Cloud Travel Apparatus" vinyl LP (2019)
                </h2>
                
                {/* Floating Image */}
                <img 
                    src={`${process.env.PUBLIC_URL}/images/Releases/ApopheniaLP.jpeg`}
                    className="w-1/3 h-auto float-left mr-4 mb-2" 
                    alt="ApophLPpic" 
                />

                <p>
                <LinkItem url="https://www.discogs.com/master/1982770-Anders-Monrad-Apophenia-Cloud-Travel-Apparatus" text="Apophenia Cloud Travel Apparatus" /> released in december 2019, on the independent label <LinkItem url="https://bindata.bandcamp.com" text="BIN" />. The record contains 6 electronic music pieces based on sound designs I created for for visual artist <LinkItem url="https://artmatter.dk/profile/jacob-taekker/" text="Jacob Tækker" />
                ‘s exhibition <LinkItem url="https://overgaden.org/en/exhibitions/apophenia-cloud-travel-apparatus" text="‘Apophenia Cloud Travel Apparatus’" />, held at <LinkItem url="https://overgaden.org/en" text="Overgaden - Institute of Contemporary Art" /> during spring 2014. The Sound design is based on superimposed timestretched household sounds, generated from a granular synthesis-setup (programmed in open source software <LinkItem url="https://puredata.info" text="Pure data" />) with in-build slight irregularities resulting in discrete rhythmical patterns. 
                </p>
            </div>
        </div>
    );
}