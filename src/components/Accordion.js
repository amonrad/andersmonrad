import { useState, useEffect, useRef } from "react";

export default function Accordion({ title, displayName, imageSrc, content, styles, isOpen, onToggle }) {
    const accordionRef = useRef(null); // Reference to track the accordion's position
    const [showFloatingBar, setShowFloatingBar] = useState(false); // Controls floating bar visibility

    const floatingSidebarHeight = 40; // this is the actual "width" when rotated

    useEffect(() => {
        if (!isOpen) {
            setShowFloatingBar(false);
            return;
        }

        const handleScroll = () => {
            if (!accordionRef.current) return;

            const rect = accordionRef.current.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0; // Check if accordion is in view

            setShowFloatingBar(isVisible);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Run initially to check visibility

        return () => window.removeEventListener("scroll", handleScroll);
    }, [isOpen]);

    return (
        <div id={title} ref={accordionRef} className="px-2 sm:px-6 lg:px-4 relative mt-4">
            
            
            
            {/* Clickable Top Bar (indented when open) */}
<div
    className={`${isOpen ? styles.open : styles.closed} p-2 cursor-pointer w-full flex items-center transition-all duration-300`}
    style={{
        marginLeft: isOpen ? `${floatingSidebarHeight}px` : "0px", // Match accordion indentation
        width: isOpen ? `calc(100% - ${floatingSidebarHeight}px)` : "100%", // Ensure it fits
    }}
    onClick={(e) => {
        e.stopPropagation();
        const willOpen = !isOpen;
        onToggle(willOpen ? title : null);

        if (willOpen) {
            setTimeout(() => {
                const element = document.getElementById(title);
                if (element) {
                    const topBarHeight = document.querySelector(".top-bar")?.offsetHeight || 100;
                    const y = element.getBoundingClientRect().top + window.scrollY - topBarHeight;
                    window.scrollTo({ top: y, behavior: "smooth" });
                }
            }, 200);
        }
    }}
>
                <div className="z-10 flex items-center font-semibold w-full h-full">
                    <img src={imageSrc} alt={title} className="w-16 sm:w-32 h-auto rounded-lg" />
                    <div className="w-full flex justify-center">
                        <div className="text-black text-lg sm:text-2xl font-semibold">
                            {displayName}
                            <i className={`${isOpen ? "fa-chevron-up" : "fa-chevron-down"} fa ml-4`}></i>
                        </div>
                    </div>
                </div>
            </div>

<div
    className={`${styles.content} ${styles.open} overflow-hidden p-2 flex py-2 text-gray-500 z-10 transition-opacity duration-300 ease-in-out
    ${isOpen ? "relative opacity-100 h-auto" : "absolute opacity-0 h-0 -left-[9999px]"}`}
    style={{
        marginLeft: isOpen ? `${floatingSidebarHeight}px` : "0px", // Match top bar indentation
        width: isOpen ? `calc(100% - ${floatingSidebarHeight}px)` : "100%", // Ensure content width matches
    }}
>
    {content}
</div>

    {showFloatingBar && (
        <div 
            className={`${styles.content} ${styles.open} fixed top-1/4 bg-black text-white p-2 shadow-lg 
            transition-opacity duration-300 flex items-center justify-center transform rotate-90 w-auto`}
            style={{
                height: `${floatingSidebarHeight}px`, // Set the height (rotated sidebar's width)
                transformOrigin: "left bottom",  // Rotate around the center
            }}
        >
            <div className="flex items-center space-x-2 transform">
                {/* Display Name */}
                <div className="text-lg font-semibold text-white whitespace-nowrap">
                    {displayName}
                </div>

                {/* Close Button */}
                <button className="text-white hover:text-gray-300 text-lg font-bold" onClick={() => {
                    onToggle(null);
                    setTimeout(() => {
                        const element = document.getElementById(title);
                        if (element) {
                        const topBarHeight = document.querySelector(".top-bar")?.offsetHeight || 100;
                        const y = element.getBoundingClientRect().top + window.scrollY - topBarHeight;
                        window.scrollTo({ top: y, behavior: "smooth" });
                        }
                    }, 100);
                }}>
                    ✕
                </button>
            </div>
        </div>
    )}

        </div>
    );
}