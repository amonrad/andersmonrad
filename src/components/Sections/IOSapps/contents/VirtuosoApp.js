import LinkItem from "../../../LinkItem";

export default function VirtuosoApp() {
    return (
        <div className="pt-8 p-2 bg-white bg-opacity-35 w-full flex flex-col items-start">
            
        {/* Text Section with Wrapped Video */}
        <div className="text-gray-800 text-left" style={{ position: "relative" }}>
                {/* Wrapped Text */}
                <h2 className="text-2xl font-bold pb-8 text-center">
                    Virtuoso (2014)
                </h2>

                {/* Floating Video */}
                <div className="w-2/3 float-left mr-4 mb-2">
                    <div className="relative w-full aspect-video">
                        <iframe 
                            className="absolute inset-0 w-full h-full" 
                            src="https://www.youtube.com/embed/1TX8Myc1FsY?si=7SS7Y2XYyGeqEH1p" 
                            title="VirtuosoApp Video" 
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            
                <p>
                “Virtuoso” was my first music app for iPhone. Unfortunately, it is awaiting update, and thus not available on appstore at the moment. It will soon be made available again. <br key="break" />
                The Interface is based on a combination of multitouch- and accelerometer-input, which suggests a gestural, bodily control of the app: by moving the Iphone around in all directions, whilst holding down one or multiple fingers to the screen, the user can control and manipulate five different synthesizers. These 5 synthesizers generates abstract electronic sounds by 5 different synthesis techniques: additive-, physical modeling-, FM-, subtractive-, and granular-synthesis. <br key="break" />
                While playing with the app, thereby activating up to 5 different sounds one by one, the user at the same time generates a 15-second musical composition and a simple piece of graphic design on the screen from a built-in algorithmic composition setup. When the user releases the fingers from the screen, this composition will play with the selected sounds and graphics. <br key="break" />
                Thus – “Virtuoso” can be called an instrument, an interactive composition and a graphic artpiece in one: a new kind of digital Gesamtkunstwerk, which the user can operate on his/her own Iphone – like the classical music virtuoso playing in a “symbiotic”, sensuous interaction with his/her instrument. <br key="break" />
                <br key="break" />
                For further information, read this <LinkItem url="https://frankensteins-lab.net/blog/virtuoso" text="interview" /> I did for Rudiger Meyer of Danish Composers Society. <br key="break" />
                “Virtuoso” was launched on the 30th of october 2014, at a release event in <LinkItem url="https://nikolajkunsthal.kk.d" text="Nikolaj Kunsthal (Copenhagen)" />. At this event, the percussionist <LinkItem url="http://www.yinghsuehchen.com/" text="Ying-Hsueh Chen" /> did a musical performance showcasing “Virtuoso”, followed by an artist talk between me and Danish electronic music-grand old man, composer <LinkItem url="https://www.fuzzy.dk/" text="Fuzzy" />. <br key="break" />
                Later Ying-Hsueh Chen has performed with Virtuoso at several occasions in Denmark and abroad – including <LinkItem url="https://artmatter.dk/venue/dias-digital-kunst-i-det-offentlige-rum/" text="DIAS Kunsthal" /> in August 2015. <br key="break" />
                “Virtuoso” was curated by the artists group <LinkItem url="https://www.facebook.com/Haandholdt/" text="Haandholdt" />
                </p>  
            </div>
        </div>
    );
}