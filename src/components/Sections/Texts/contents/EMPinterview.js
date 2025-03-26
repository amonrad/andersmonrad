import LinkItem from "../../../LinkItem";

export default function EMPinterview() {
    return (
        <div className="p-2 pt-8 bg-white bg-opacity-35 w-full flex flex-col items-start">
            
            {/* Text Section with Wrapped Image */}
            <div className="text-gray-800 text-left" style={{ position: "relative" }}>

                {/* Wrapped Text */}
                <h2 className="text-2xl font-bold pb-8 text-center">
                    Interview with Else Marie Pade (2005)
                </h2>

                {/* Floating Image */}
                <img 
                    src="/images/Texts/EMPsLejlighed.jpeg" 
                    className="w-1/2 h-auto float-left mr-4 mb-2" 
                    alt="EMPpic" 
                />

                <p>
                As a musicology-student at Copenhagen University, I wrote a number of articles for the institute magazine. One of them was <LinkItem url="/files/EMPSamlet.pdf" text="this interview" /> from 2005 with the Danish electronic music pioneer Else Marie Pade (EMP). Me and journalism student <LinkItem url="https://www.buggingdenmark.dk/teamet" text="Kirsten Sterling" /> approached EMP under excuse of being journalists, but actually the motive was mostly personal. In the years following this interview I met with EMP a number of times, and she became somewhat of a mentor for me in my formative years as a composition student.    
                </p>
            </div>
        </div>
    );
}