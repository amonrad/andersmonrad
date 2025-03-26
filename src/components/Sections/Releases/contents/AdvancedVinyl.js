import LinkItem from "../../../LinkItem";

export default function AdvancedVinyl() {
    return (
        <div className="p-2 pt-8 bg-white bg-opacity-35 w-full flex flex-col items-start">
            
            {/* Text Section with Wrapped Image */}
            <div className="text-gray-800 text-left" style={{ position: "relative" }}>

                {/* Wrapped Text */}
                <h2 className="text-2xl font-bold pb-8 text-center">
                    "Advanced Avantgarde" vinyl LP (2018)
                </h2>

                {/* Floating Image */}
                <img 
                    src="/images/Releases/AdvancedAvantgarde.jpeg" 
                    className="w-1/3 h-auto float-left mr-4 mb-2" 
                    alt="AdvancedLPpic" 
                />

                <p>
                "Advanced Avantgarde" is a collaboration project with composer and producer <LinkItem url="http://www.peterhelms.net" text="Peter Helms" />. Our first 12' vinyl record, with a suite of "advanced avantgarde" music for MIDI-instruments, was released in march 2018 - with sublime cover artwork done by my brother Jens Monrad. Buy the physical release on <LinkItem url="https://www.discogs.com/release/12221260-Monrad-Helms-Advanced-Avantgarde" text="discogs" /> - and have a listen at <LinkItem url="https://monradandhelms.bandcamp.com/album/advanced-avantgarde" text="bandcamp" />. Also, have a look at Monrad&Helms' <LinkItem url="www.youtube.com/@monradhelms2511" text="YouTube-channel" />.
                </p>
            </div>
        </div>
    );
}