import LiteYouTubeEmbed from 'react-lite-youtube-embed';
//import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

export default function Piano() {
    //const pianoText = "Piano-playing is my main artistic background, and has been a central part of my artistic identity since I started playing when I was 6 years old. I played on a high level as a teenager, and participated in a few competitions. In my 20’s I abandoned the piano for a while. In later years, since I started teaching piano, I have taken up my piano playing again, and enjoy playing a wide variety of musical styles - especially the transcendental piano works of the romantic era and beyond. Here’s a little selection.";

    return (
        <div className="p-4 text-black bg-white bg-opacity-35 text-center">
            <p className="mb-4">Piano-playing is my main artistic background, and has been a central part of my artistic identity since I started playing when I was 6 years old. I played on a high level as a teenager, and participated in a few competitions. In my 20’s I abandoned the piano for a while. In later years, since I started teaching piano, I have taken up my piano playing again, and enjoy playing a wide variety of musical styles - especially the transcendental piano works of the romantic era and beyond. Here’s a little selection.</p>

            <div className="grid grid-cols-3">

                <div
                className="relative col-span-2 w-full mt-8 ml-auto"
                style={{ paddingTop: '56.25%' }} // 16:9 aspect ratio
                >
                    <div className="absolute top-0 left-0 w-full h-full">
                        <LiteYouTubeEmbed
                        id="Ffe-7T6yDhU"
                        title="UnSospiro Video"
                        noCookie={true}
                        poster="maxresdefault"
                        wrapperClass="w-full h-full"
                        />
                    </div>
                </div>

                {/* <div className="relative col-span-2 w-full mt-8 ml-auto" style={{ paddingTop: '56.25%' }} // 16:9 aspect ratio
                >
                    <div className="absolute top-0 left-0 w-full h-full">
                        <LiteYouTubeEmbed
                        id="Ffe-7T6yDhU"
                        title="UnSospiro Video"
                        noCookie={true}
                        poster="maxresdefault"
                        wrapperClass="w-full h-full"
                        />
                    </div>
            </div> */}

                {/* <div className="col-span-2 w-full mt-8 ml-auto max-w-3xl mx-auto">
                    <LiteYouTubeEmbed
                        id="Ffe-7T6yDhU"
                        title="UnSospiro Video"
                        noCookie={true}
                        poster="maxresdefault"
                        wrapperClass="youtube-lite-wrapper"
                    />
                </div> */}

                {/* <div className="relative col-span-2 w-full mt-8 ml-auto" style={{ paddingTop: "56.25%" }}>
                    <div className="absolute top-0 left-0 w-full h-full">
                        <LiteYouTubeEmbed
                        id="Ffe-7T6yDhU" // Video-ID
                        title="UnSospiro Video"
                        noCookie={true}
                        poster="maxresdefault"
                        />
                    </div>
                </div> */}



            {/* <div className="relative col-span-2 w-full mt-8 ml-auto" style={{ paddingTop: "56.25%" }}>
                    <iframe 
                        className="absolute top-0 left-0 w-full h-full" 
                        src="https://www.youtube.com/embed/Ffe-7T6yDhU?si=cAc8zRNMlOpJQNEI" 
                        title="UnSospiro Video" 
                        allowFullScreen
                    ></iframe>
                </div>
                
                <div className="relative col-span-2 w-full mt-8" style={{ paddingTop: "56.25%" }}>
                    <iframe 
                        className="absolute top-0 left-0 w-full h-full" 
                        src="https://www.youtube.com/embed/GdUSz1l9r0w?si=EVCpklTYpf5boV-D" 
                        title="Alkan Video" 
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="relative col-span-2 w-full mt-8 ml-auto" style={{ paddingTop: "56.25%" }}>
                    <iframe 
                        className="absolute top-0 left-0 w-full h-full" 
                        src="https://www.youtube.com/embed/92Kf9ZmpS4M?si=JpfiplVCWxkT3ZCl" 
                        title="Liebesfreud Video" 
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="relative col-span-2 w-full mt-8 ml-auto" style={{ paddingTop: "56.25%" }}>
                    <iframe 
                        className="absolute top-0 left-0 w-full h-full" 
                        src="https://www.youtube.com/embed/uMJlXaPptvU?si=UyIsq2X7wfG6IXEZ" 
                        title="Smetana Video" 
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="relative col-span-2 w-full mt-8 ml-auto" style={{ paddingTop: "56.25%" }}>
                    <iframe 
                        className="absolute top-0 left-0 w-full h-full" 
                        src="https://www.youtube.com/embed/O0nAQBD13Zg?si=daaz6k9_DiTvXr0F" 
                        title="Bartok Video" 
                        allowFullScreen
                    ></iframe>
                </div> */}

            </div>  
        </div>
    );
}