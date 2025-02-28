export default function Accordion({ title, imageSrc, content, styles, isOpen, onToggle }) {
    return (
        <div
            id={title ? title.toLowerCase() : ""}
            className="px-2 sm:px-6 lg:px-4 relative mt-4"
            onClick={() => onToggle(isOpen ? null : title)} // Toggle logic
        >
            {/* Closed State */}
            <div className={`${styles.closed} p-2 cursor-pointer w-full flex items-center`}>
                <div className="z-10 flex items-center font-semibold w-full h-full">
                    <div>
                        <img src={imageSrc} alt={title} className="w-16 sm:w-32 h-auto rounded-lg" />
                    </div>
                    <div className="w-full flex justify-center">
                        <div className="text-black text-lg sm:text-2xl font-semibold">
                            {title}
                            <i className={`${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'} fa ml-4`}></i>
                        </div>
                    </div>
                </div>
            </div>

            {/* Open State */}
            {isOpen && (
                <div className={`${styles.content} ${styles.open} overflow-hidden p-1 flex py-2 text-gray-500 z-10`}>
                    {content}
                </div>
            )}
        </div>
    );
}