import LinkItem from "../../../LinkItem";

export default function EMPSamlet() {
    return (
        <div className="p-2 pt-8 bg-white bg-opacity-35 w-full flex flex-col items-start">
            <div className="text-gray-800 text-left" style={{ position: "relative" }}>
                <h2 className="text-2xl font-bold pb-8 text-center">
                    “Else Marie Pade - Samlede tekster” (2017)
                </h2>
                
                <img 
                    src={`${process.env.PUBLIC_URL}/images/Releases/EMP-udgivelse.jpeg`} 
                    className="w-1/3 h-auto float-left mr-4 mb-2" 
                    alt="EMPsamletPic" 
                />

                <p>
                    My interview with Else Marie Pade from 2005 is released in the collection "Else Marie Pade - Samlede tekster" from publisher <LinkItem url="https://passiveaggressive.dk/prints_by_pa/else-marie-pade-samlede-tekster/1" text="Passive/Aggressive" />. Read more about the interview in the ‘Texts’-section on my homepage.
                </p>
            </div>
        </div>
    );
}