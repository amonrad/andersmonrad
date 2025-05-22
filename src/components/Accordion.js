import { useState, useEffect, useRef } from "react";

export default function Accordion({ title, displayName, imageSrc, content, styles, isOpen, onToggle }) {
    const accordionRef = useRef(null); // Reference to track the accordion's position
    const [showFloatingBar, setShowFloatingBar] = useState(false); // Controls floating bar visibility
    const [sidebarPosition, setSidebarPosition] = useState(0);

    const floatingSidebarHeight = 40; // this is the actual "width" when rotated

    // Debounce function to limit the number of times a function is called
    const debounce = (func, delay) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), delay);
        };
    };

    useEffect(() => {
        if (!isOpen) {
            setShowFloatingBar(false);
            return;
        }
        else {
            setShowFloatingBar(true);
        }

        const handleScroll = debounce(() => {
            if (!accordionRef.current) return;

            const rect = accordionRef.current.getBoundingClientRect();

            if (!isOpen) return;



            // JEG MANGLER AT FINDE DENNE VÆRDI!!!!
            const rotatedSidebarHeight = 260;


            
            const topOfAccordion = rect.top; // Top of accordion relative to page
            const bottomOfAccordion = rect.bottom - rotatedSidebarHeight; // + window.scrollY - topBarHeight;

            

            // Calculate the potential sidebar position (taking rotation into account)
            let newSidebarPosition = window.innerHeight * 0.25;
            //let newSidebarPosition = accordionY; // Ensure the sidebar doesn't go above the accordion top
    
            // If the sidebar position is too high (i.e., above the top of the accordion), adjust it
            if (newSidebarPosition < topOfAccordion - floatingSidebarHeight) {
                newSidebarPosition = topOfAccordion - floatingSidebarHeight; // Prevent sidebar from going above the accordion
            }
            else if (newSidebarPosition > bottomOfAccordion) {
                newSidebarPosition = bottomOfAccordion;
            }
    
            setSidebarPosition(newSidebarPosition);
        });

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
            className={`fixed top-1/4 bg-black text-white p-2 shadow-lg 
            transition-opacity duration-300 flex items-center justify-center transform rotate-90 w-auto ${styles.sidebar}`}
            style={{
                height: `${floatingSidebarHeight}px`, // Set the height (rotated sidebar's width)
                transformOrigin: "left bottom",  // Rotate around the center
                top: `${sidebarPosition}px`
            }}
        >
            <div className="flex items-center space-x-2 transform">
                {/* Display Name */}
                <div className="text-lg font-semibold text-black whitespace-nowrap">
                    {displayName}
                </div>

                {/* Close Button */}
                <button className="text-black hover:text-gray-300 text-lg font-bold" onClick={() => {
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