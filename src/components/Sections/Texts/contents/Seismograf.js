import LinkItem from "../../../LinkItem";

export default function Seismograf() {
    return (
        <div className="p-2 pt-8 bg-white bg-opacity-35 w-full flex flex-col items-start">
            
            {/* Text Section with Wrapped Image */}
            <div className="text-gray-800 text-left" style={{ position: "relative" }}>

                {/* Wrapped Text */}
                <h2 className="text-2xl font-bold pb-8 text-center">
                    Polemic articles (2007 & 2019)
                </h2>

                {/* Floating Image */}
                {/* <img 
                    src="/images/Texts/EMPsLejlighed.jpeg" 
                    className="w-1/2 h-auto float-left mr-4 mb-2" 
                    alt="EMPpic" 
                /> */}

                <p>
                    As a young composer searching for my artistic path, I often found myself critical of the Danish classical music scene. This led me, in 2007, to write the article <LinkItem url="https://seismograf.org/dmt/82/01/fjernt-fra-virkeligheden" text="‘Fjernt fra virkeligheden’" /> for the now-defunct Danish music journal. The article sparked considerable controversy but also led to an unexpected collaboration with Danish cello professor <LinkItem url="https://www.mortenzeuthen.com" text="Morten Zeuthen" />. As a response to my critique, Zeuthen invited me to compose a piece for him—an effort to bridge the gap between composers and musicians that I had highlighted in my writing.<br key="break" />
                    Twelve years later, in 2019, the online music journal Seismograf invited me to revisit my original article and reflect on how my perspectives had evolved. This resulted in a follow-up piece, <LinkItem url="https://seismograf.org/artikel/stadig-fjernt-fra-virkeligheden" text="‘Stadig fjernt fra virkeligheden?’" />, where I explored how I had navigated the challenges I once criticized, offering a more constructive discussion on my artistic development and strategies as a modern composer.
                </p>
            </div>
        </div>
    );
}