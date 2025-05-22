import LinkItem from "../../../LinkItem";
import AudioBarLiteEmbed from '../../../AudioBarLiteEmbed';

export default function Dowar({ isOpen }) {
    return (
        <div className="p-2 pt-8 bg-white bg-opacity-35 w-full flex flex-col items-start">
            <div className="text-gray-800 text-left" style={{ position: "relative" }}>
                <h2 className="text-2xl font-bold pb-8 text-center">
                    Days of Wine & Roses (DOWAR)
                </h2>
                 
                <img 
                    src={`${process.env.PUBLIC_URL}/images/Commercial/DOWAR.jpeg`} 
                    className="w-1/2 h-auto float-left mr-4 mb-2" 
                    alt="DowarPic" 
                />

                <p>
                    DOWAR is the name of a lounge-combo, in which I play the piano and do most of the arrangements. Apart from me, DOWAR consists of <LinkItem url="https://www.icebergmusicgroup.com/publishing/songwriters/mikkel-petterson.aspx" text="Mikkel Petterson" /> (Guitar), <LinkItem url="https://soundcloud.com/marie-louise-von-b-low" text="Marie Louise von Bülow" /> (Double bass) & <LinkItem url="https://devilduckrecords.com/artists/gone/dangers-of-the-sea/" text="Andreas Estrup" /> (Drums/Percussion). The style is heavily influenced by the pianist <LinkItem url="https://en.wikipedia.org/wiki/Carmen_Cavallaro" text="Carmen Cavallaro" />, and our repertoire consists mainly of tunes from the 50’s and 60’s. This particular tune “Gør hvad du vil” was actually composed by my father’s uncle Henry Hannibal (1916-2013) for the <LinkItem url="https://da.wikipedia.org/wiki/Dansk_Melodi_Grand_Prix_1960" text="Eurovision" /> contest in 1960. I made this arrangement:    
                </p>
            </div>
                                
            <div className="w-full">
                {isOpen ? (   
                    <AudioBarLiteEmbed id="g3AzGnJY-y8" title="DowarAudio" />
                ) : null}                
            </div>
        </div>
    );
}