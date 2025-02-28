import LinkItem from "../../../LinkItem";

export default function SoundingImages({ containerClass, textClass, iframeWrapperClass, iframeClass }) {
    return (
        <div className={containerClass} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", alignItems: "center", paddingTop: "40px" }}>
            {/* Text Section */}
            <div className={textClass} style={{ gridColumn: "1", gridRow: "1" }}>
                <h2 className="text-2xl font-bold pb-8">Sounding Images & Percussion</h2>
                <p>
                    Performance from <LinkItem url="https://genbib.dk/tranen" text="Tranen, Gentofte Hovedbibliotek" />, March 31, 2019. I am performing on an iPad, showcasing my iOS app Sounding Images #7-12 in an improvisatory interplay with Ying-Hsueh Chen on her acoustic percussion instruments. We perform regularly with this setup at various venues.
                </p>
            </div>

            {/* Responsive iframe wrapper */}
            <div className={iframeWrapperClass} style={{ gridColumn: "2", gridRow: "1" }}>
                <iframe 
                    className={iframeClass} 
                    src="https://www.youtube.com/embed/Ehx0cWi_bbY?si=x9CmG4wnzqygTSOH" 
                    title="SoundingImages Video" 
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}

// export default function SoundingImages({ containerClass, textClass, iframeWrapperClass, iframeClass }) {
//     return (
//         <div className={containerClass}>
//             {/* Text Section */}
//             <div className={textClass}>
//                 <h2 className="text-2xl font-bold pb-8">Sounding Images & Percussion</h2>
//                 <p>
//                     Performance from <LinkItem url="https://genbib.dk/tranen" text="Tranen, Gentofte Hovedbibliotek" />, March 31, 2019. I am performing on an iPad, showcasing my iOS app Sounding Images #7-12 in an improvisatory interplay with Ying-Hsueh Chen on her acoustic percussion instruments. We perform regularly with this setup at various venues.
//                 </p>
//             </div>

//             {/* Responsive iframe wrapper */}
//             <div className={`${iframeWrapperClass}`} style={{ paddingTop: "56.25%" }}>
//                 <iframe 
//                     className={iframeClass} 
//                     src="https://www.youtube.com/embed/Ehx0cWi_bbY?si=x9CmG4wnzqygTSOH" 
//                     title="SoundingImages Video" 
//                     allowFullScreen
//                 ></iframe>
//             </div>
//         </div>
//     );
// }

// export default function SoundingImages({ containerClass, textClass, iframeWrapperClass, iframeClass }) {
//     return (
//         <div className={containerClass}>
//             <div className={textClass}>
//                 <h2 className="text-2xl font-bold pb-8">Sounding Images & Percussion</h2>
//                 <p>
//                     Performance from <LinkItem url="https://genbib.dk/tranen" text="Tranen, Gentofte Hovedbibliotek" />, March 31, 2019. I am performing on an iPad, showcasing my iOS app Sounding Images #7-12 in an improvisatory interplay with Ying-Hsueh Chen on her acoustic percussion instruments. We perform regularly with this setup at various venues.
//                 </p>
//             </div>

//             {/* Responsive iframe wrapper */}
//             <div className={`${iframeWrapperClass} relative`} style={{ paddingTop: "56.25%" }}>
//                 <iframe 
//                     className={`${iframeClass} absolute top-0 left-0 w-full h-full`} 
//                     src="https://www.youtube.com/embed/Ehx0cWi_bbY?si=x9CmG4wnzqygTSOH" 
//                     title="SoundingImages Video" 
//                     allowFullScreen
//                 ></iframe>
//             </div>
//         </div>
//     );
// }