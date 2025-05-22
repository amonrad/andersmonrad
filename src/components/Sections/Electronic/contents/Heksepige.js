import LinkItem from "../../../LinkItem";
import AudioBarLiteEmbed from '../../../AudioBarLiteEmbed';

export default function Heksepige({ isOpen }) {
    return (
        <div className="p-2 pt-8 pb-4 bg-white bg-opacity-35 w-full flex flex-col items-start">
            
            <div className="text-gray-800 text-left" style={{ position: "relative" }}>
                
                <h2 className="text-2xl font-bold pb-8 text-center">
                    Heksepige (2005) -  <LinkItem url="/files/Heksepige.pdf" text="(Score)" />
                </h2>
                
                <img 
                    src={`${process.env.PUBLIC_URL}/images/ElectronicMusic/WhopAtNorberg.jpeg`} 
                    className="w-1/3 h-auto float-right mr-4 mb-2"
                    alt="Prepositions" 
                />

                <p>
                    A quirky piece from 2005, composed for the “yelling choir” <LinkItem url="http://whop.dk" text="WHOP" /> and an electronic part derived entirely from recordings of human voice recitations of poems from the obscure collection “Heksepige” by Danish author Mette Ulfsen. The whole piece is in three movements and was performed a variety of places during 2005, including <LinkItem url="https://norbergfestival.com" text="Norberg Festival" /> in Sweden:
                </p>
            </div>
                            
            <div className="w-full">
                {isOpen ? (      
                    <>
                    <AudioBarLiteEmbed id="q8imDU78z2s" title="HeksepigeA Audio" />
                    <AudioBarLiteEmbed id="nd7cNFMjbX0" title="HeksepigeB Audio" />
                    <AudioBarLiteEmbed id="73o9Msf7tco" title="HeksepigeC Audio" />
                    </>
                ) : null}                            
            </div>
        </div>
    );
}