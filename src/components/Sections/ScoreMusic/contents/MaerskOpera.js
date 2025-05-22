import LinkItem from "../../../LinkItem";
import AudioBarLiteEmbed from '../../../AudioBarLiteEmbed';

export default function MaerskOpera({ isOpen }) {
    return (
        <div className="p-2 pt-8 bg-white bg-opacity-35 w-full flex flex-col items-start">
            
            <div className="text-gray-800 text-left" style={{ position: "relative" }}>

                <h2 className="text-2xl font-bold pb-8 text-center">
                    The Mærsk Opera (2012-16) - <LinkItem url={`${process.env.PUBLIC_URL}/files/MærskOperaen.pdf`} text="(Score)" />
                </h2>

                <img  
                    src={`${process.env.PUBLIC_URL}/images/ScoreMusic/xlarge_superflex_gaven.jpg`} 
                    className="w-1/2 h-auto float-left mr-4 mb-2" 
                    alt="MaerskPic" 
                />

                <p>
                    An opera in 3 acts, for 26 voices, choir & orchestra. Produced in collaboration with artists group  <LinkItem url="https://superflex.net" text="SUPERFLEX" /> , who wrote the libretto in collaboration with Nikolai Heltoft. First composed in 2012, where the score was exhibited as a conceptual art piece in <LinkItem url="https://nikolajkunsthal.kk.dk" text="Nikolai Kunsthal" /> 
                    . Later re-arranged and recorded in 2016, and included in the film <LinkItem url="https://superflex.net/works/the_maersk_opera" text="The Mærsk Opera" /> by SUPERFLEX, premiered at <LinkItem url="https://cphdox.dk/da/" text="CPH DOX" /> 2017.<br/> A recording of the Opera is released on the Danish label <LinkItem url="https://www.dacapo-records.dk/da/udgivelser/monrad-maersk-operaen-lp" text="DACAPO"/>. Listen to the whole opera here:            
                </p>

                </div>

                <div className="w-full">
                    {isOpen ? (
                        <>
                        <AudioBarLiteEmbed id="iNvFo66XMSE" title="MærskA Video" />
                        <AudioBarLiteEmbed id="AD7ZouzSzpM" title="MærskB Video" />
                        <AudioBarLiteEmbed id="T69PNZAC-WY" title="MærskC Video" />
                        <AudioBarLiteEmbed id="0n0UEhwsmc8" title="MærskD Video" />
                        <AudioBarLiteEmbed id="tAE4NkpMLVE" title="MærskE Video" />
                        </>
                    ) : null}
            </div>
        </div>
    );
}