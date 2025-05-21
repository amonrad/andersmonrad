import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

export default function Piano({ isOpen }) {
    return (
        <div className="p-4 text-black bg-white bg-opacity-35 text-center">
            <p className="mb-4">
                Piano-playing is my main artistic background, and has been a central part of my artistic identity since I started playing when I was 6 years old. I played on a high level as a teenager, and participated in a few competitions. In my 20’s I abandoned the piano for a while. In later years, since I started teaching piano, I have taken up my piano playing again, and enjoy playing a wide variety of musical styles - especially the transcendental piano works of the romantic era and beyond. Here’s a little selection.
            </p>
            
            {/* Conditionally render the YouTube videos only if accordion is open */}
            {isOpen && (
                <>
                    {/* Video 1 */}
                    <div className="relative w-full mt-8" style={{ paddingTop: '56.25%' }}>
                        <div className="absolute top-0 left-0 w-full h-full">
                            <LiteYouTubeEmbed
                                id="Ffe-7T6yDhU"
                                title="Un Sospiro video"
                                noCookie={true}
                                adNetwork={false}
                                poster="maxresdefault"
                                wrapperClass="yt-lite"
                            />
                        </div>
                    </div>

                    {/* Video 2 */}
                    <div className="relative w-full mt-8" style={{ paddingTop: '56.25%' }}>
                        <div className="absolute top-0 left-0 w-full h-full">
                            <LiteYouTubeEmbed
                                id="GdUSz1l9r0w"
                                title="Alkan Video"
                                noCookie={true}
                                adNetwork={false}
                                poster="maxresdefault"
                                wrapperClass="yt-lite"
                            />
                        </div>
                    </div>

                    {/* Video 3 */}
                <div
                    className="relative w-full mt-8"
                    style={{ paddingTop: '56.25%' }}
                >
                    <div className="absolute top-0 left-0 w-full h-full">
                    <LiteYouTubeEmbed
                        id="92Kf9ZmpS4M"
                        title="Liebesfreud Video"
                        noCookie={true}
                        adNetwork={false}
                        //customThumbnail={`${process.env.PUBLIC_URL}/files/Thumbnails/LegoThumbnail.jpg`}
                        poster="maxresdefault"
                        wrapperClass="yt-lite"
                    />
                    </div>
                </div>

                {/* Video 4 */}
                <div
                    className="relative w-full mt-8"
                    style={{ paddingTop: '56.25%' }}
                >
                    <div className="absolute top-0 left-0 w-full h-full">
                    <LiteYouTubeEmbed
                        id="uMJlXaPptvU"
                        title="Smetana Video"
                        noCookie={true}
                        adNetwork={false}
                        //customThumbnail={`${process.env.PUBLIC_URL}/files/Thumbnails/LegoThumbnail.jpg`}
                        poster="maxresdefault"
                        wrapperClass="yt-lite"
                    />
                    </div>
                </div>

                {/* Video 5 */}
                <div
                    className="relative w-full mt-8"
                    style={{ paddingTop: '56.25%' }}
                >
                    
                    <div className="absolute top-0 left-0 w-full h-full">
                    <LiteYouTubeEmbed
                        id="O0nAQBD13Zg"
                        title="Bartok Video"
                        noCookie={true}
                        adNetwork={false}
                        //customThumbnail={`${process.env.PUBLIC_URL}/files/Thumbnails/LegoThumbnail.jpg`}
                        poster="maxresdefault"
                        wrapperClass="yt-lite"
                    />
                    </div>

                </div>
                </>
            )}
        </div>
    );
}