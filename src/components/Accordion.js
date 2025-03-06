export default function Accordion({ title, displayName, imageSrc, content, styles, isOpen, onToggle }) {
    return (
        <div 
            id={title} //{title ? title.toLowerCase().replace(/\s+/g, '_') : ""} 
            className="px-2 sm:px-6 lg:px-4 relative mt-4"
        >
            {/* Clickable Top Bar */}
            <div 
                className={`${isOpen ? styles.open : styles.closed} p-2 cursor-pointer w-full flex items-center`}
                onClick={(e) => {
                    e.stopPropagation(); // Prevents click from bubbling to parent
                    onToggle(isOpen ? null : title);
                }}
            >
                <div className="z-10 flex items-center font-semibold w-full h-full">
                    <div>
                        <img src={imageSrc} alt={title} className="w-16 sm:w-32 h-auto rounded-lg" />
                    </div>
                    <div className="w-full flex justify-center">
                        <div className="text-black text-lg sm:text-2xl font-semibold">
                            {displayName}
                            <i className={`${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'} fa ml-4`}></i>
                        </div>
                    </div>
                </div>
            </div>


            {/* Open State Content (Always Rendered, But Hidden When Closed - for search engine optimization) */}

            <div 
                className={`${styles.content} ${styles.open} overflow-hidden p-2 flex py-2 text-gray-500 z-10 
                transition-opacity duration-300 ease-in-out ${isOpen ? 'relative opacity-100 h-auto' : 'absolute opacity-0 h-0 -left-[9999px]'}`}
            >
            {content}
            </div> 
        </div>        
    );
}