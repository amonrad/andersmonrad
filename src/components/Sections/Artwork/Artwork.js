import { useState, useEffect } from "react";

export default function Artwork() {

    // Use separate useState hooks for each shuffled image array
    const [shuffledImages, setShuffledImages] = useState([]);
    const [shuffledImagesB, setShuffledImagesB] = useState([]);

    useEffect(() => {
        const basePath = process.env.PUBLIC_URL;

        const images = [
            `${basePath}/images/Artwork/artwork1.jpg`,
            `${basePath}/images/Artwork/artwork2.jpg`,
            `${basePath}/images/Artwork/artwork3.jpg`,
            `${basePath}/images/Artwork/artwork4.jpg`,
            `${basePath}/images/Artwork/artwork5.jpg`,
            `${basePath}/images/Artwork/artwork6.jpg`
        ];
        const imagesB = [
            `${basePath}/images/Artwork/artwork7.jpg`,
            `${basePath}/images/Artwork/artwork8.jpg`,
            `${basePath}/images/Artwork/artwork9.jpg`
        ];

        const shuffleArray = (array) => {
            let shuffled = [...array];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            return shuffled;
        };

        setShuffledImages(shuffleArray(images));
        setShuffledImagesB(shuffleArray(imagesB));
    }, []);

    return (
        <div className="p-4 text-black bg-white bg-opacity-35 text-center">
            <p className="mb-4">
            In addition to my musical activities, I’m very interested in visual art and have been doing a lot of visual artwork myself over the years. This is a selection of my acrylic paintings created between 2005-2014.
            <br />
            The style is inspired by 60’s OpArt, but my main interest is a musical, “polyphonic” approach, with multiple, simultaneous motives layered on top of each other. Accordingly, I have been very interested in the direct integration between visuals and sound – which was a key motivation for my work with audio-visual digital projects.
            </p>

            <div className="grid grid-cols-2 gap-8 mt-8">
                {shuffledImages.map((src, index) => (
                    <img key={`A-${index}`} src={src} alt={`artwork${index + 1}`} className="w-full h-auto" />
                ))}
            </div>
            <div className="grid grid-cols-3 gap-8 mt-8 pb-10">
                {shuffledImagesB.map((src, index) => (
                    <img key={`B-${index}`} src={src} alt={`artwork${index + 1}`} className="w-full h-auto" />
                ))}
            </div>
        </div>
    );
}