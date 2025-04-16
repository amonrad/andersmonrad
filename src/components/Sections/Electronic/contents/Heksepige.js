import LinkItem from "../../../LinkItem";

export default function Heksepige() {
    return (
        <div className="p-2 pt-8 pb-4 bg-white bg-opacity-35 w-full flex flex-col items-start">
            
            {/* Text Section with Wrapped Image */}
            <div className="text-gray-800 text-left" style={{ position: "relative" }}>
                
                {/* Wrapped Text */}
                <h2 className="text-2xl font-bold pb-8 text-center">
                    Heksepige (2005) -  <LinkItem url="/files/Heksepige.pdf" text="(Score)" />
                </h2>
                
                {/* Floating Image */}
                <img 
                    src={`${process.env.PUBLIC_URL}/images/ElectronicMusic/WhopAtNorberg.jpeg`} 
                    className="w-1/3 h-auto float-right mr-4 mb-2" // ✅ Image floats right, text wraps around it
                    alt="Prepositions" 
                />

                <p>
                    A quirky piece from 2005, composed for the “yelling choir” <LinkItem url="http://whop.dk" text="WHOP" /> and an electronic part derived entirely from recordings of human voice recitations of poems from the obscure collection “Heksepige” by Danish author Mette Ulfsen. The whole piece is in three movements and was performed a variety of places during 2005, including <LinkItem url="https://norbergfestival.com" text="Norberg Festival" /> in Sweden:
                    
                </p>

                
                {/* <iframe 
                    className="w-full h-14 mt-2"
                    src="https://www.youtube.com/embed/q8imDU78z2s?si=SxfPobhv6EeComqj&controls=1&showinfo=0&autoplay=0&mute=0"
                    title="HeksepigeA Audio"
                    allow="encrypted media"
                ></iframe>
                <iframe 
                    className="w-full h-14 mt-2"
                    src="https://www.youtube.com/embed/nd7cNFMjbX0?si=bvxcksEBIAILs4eO&controls=1&showinfo=0&autoplay=0&mute=0"
                    title="HeksepigeB Audio"
                    allow="encrypted media"
                ></iframe>
                <iframe 
                    className="w-full h-14 mt-2"
                    src="https://www.youtube.com/embed/73o9Msf7tco?si=h4ywp2cMWwNsyuI_&controls=1&showinfo=0&autoplay=0&mute=0"
                    title="HeksepigeC Audio"
                    allow="encrypted media"
                ></iframe> */}

            </div>
        </div>
    );
}