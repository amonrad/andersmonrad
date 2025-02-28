export default function Accordion({ title, imageSrc, content, styles, isOpen, onToggle }) {
    return (
        <div id={title.toLowerCase()} className="w-full px-2 sm:px-6 lg:px-4 max-w-7xl mx-auto relative mt-4">
            {/* Closed State */}
            {!isOpen && (
                <div 
                    onClick={() => onToggle(title)} // ✅ Update open section
                    className={`${styles.closed} p-2 cursor-pointer w-full flex items-center`}
                >
                    <div className="z-10 flex items-center font-semibold w-full relative h-full">
                        <img src={imageSrc} alt={title} className="p-1 w-1/6 h-auto" />
                        <div className="absolute left-1/2 transform -translate-x-[18px] sm:-translate-x-[22px] text-black text-2xl font-semibold">
                            {title}
                        </div>
                    </div>
                </div>
            )}

            {/* Open State */}
            {isOpen && (
                <div className={`${styles.open} p-2 w-full`}>
                    <div className={`${styles.top} w-full flex items-center relative z-30 bg-transparent`}>
                        <button onClick={() => onToggle(null)} className="w-full text-left font-semibold flex items-center relative h-full">
                            <img src={imageSrc} alt={title} className="p-1 w-1/6 h-auto" />
                            <span className="absolute left-1/2 transform -translate-x-[18px] sm:-translate-x-[22px] text-black text-2xl font-semibold">
                                {title}
                            </span>
                        </button>
                    </div>

                    <div className={`${styles.content} overflow-hidden p-1 flex py-2 text-gray-500 z-10`}>
                        {content}
                    </div>
                </div>
            )}
        </div>
    );
}