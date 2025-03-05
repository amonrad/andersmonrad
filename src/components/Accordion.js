export default function Accordion({ title, imageSrc, content, styles, isOpen, onToggle }) {
    return (
        <div 
            id={title ? title.toLowerCase().replace(/\s+/g, '_') : ""} 
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
                            {title}
                            <i className={`${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'} fa ml-4`}></i>
                        </div>
                    </div>
                </div>
            </div>

            {/* Open State Content (Always Rendered, But Hidden When Closed) */}
            <div className={`${styles.content} ${styles.open} overflow-hidden p-2 flex py-2 text-gray-500 z-10`}
                style={{
                    position: isOpen ? 'relative' : 'absolute',
                    left: isOpen ? 'auto' : '-9999px',
                    height: isOpen ? 'auto' : '0',
                    overflow: 'hidden',
                    opacity: isOpen ? 1 : 0,
                    transition: 'opacity 0.3s ease-in-out, height 0.3s ease-in-out'
                }}
>
            {content}
            </div> 
        </div>        
    );
}


// export default function Accordion({ title, imageSrc, content, styles, isOpen, onToggle }) {
//     return (
//         <div
//             id={title ? title.toLowerCase().replace(/\s+/g, '_') : ""}
//             className="px-2 sm:px-6 lg:px-4 relative mt-4"
//             onClick={() => onToggle(isOpen ? null : title)}
//         >

//             {/* Closed State */}
//             <div className={`${styles.closed} ${isOpen ? 'bg-yellow-500' : ''} p-2 cursor-pointer w-full flex items-center`}>
//                 <div className="z-10 flex items-center font-semibold w-full h-full">
//                     <div>
//                         <img src={imageSrc} alt={title} className="w-16 sm:w-32 h-auto rounded-lg" />
//                     </div>
//                     <div className="w-full flex justify-center">
//                         <div className="text-black text-lg sm:text-2xl font-semibold">
//                             {title}
//                             <i className={`${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'} fa ml-4`}></i>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Open State (Always Rendered, but Hidden When Closed) */}
//             <div
//                 className={`${styles.content} ${styles.open} overflow-hidden p-1 flex py-2 text-gray-500 z-10`}
//                 style={{
//                     position: isOpen ? 'relative' : 'absolute',
//                     left: isOpen ? 'auto' : '-9999px',
//                     height: isOpen ? 'auto' : '0',
//                     overflow: 'hidden',
//                     opacity: isOpen ? 1 : 0,
//                     transition: 'opacity 0.3s ease-in-out'
//                 }}
//             >
//                 {content}
//             </div>
//         </div>
//     );
// }


// export default function Accordion({ title, imageSrc, content, styles, isOpen, onToggle }) {
//     return (
//         <div
//             id={title ? title.toLowerCase().replace(/\s+/g, '_') : ""}
//             className="px-2 sm:px-6 lg:px-4 relative mt-4"
//             onClick={() => onToggle(isOpen ? null : title)} // Toggle logic
//         >
//             {/* Closed State */}
//             <div className={`${styles.closed} p-2 cursor-pointer w-full flex items-center`}>
//                 <div className="z-10 flex items-center font-semibold w-full h-full">
//                     <div>
//                         <img src={imageSrc} alt={title} className="w-16 sm:w-32 h-auto rounded-lg" />
//                     </div>
//                     <div className="w-full flex justify-center">
//                         <div className="text-black text-lg sm:text-2xl font-semibold">
//                             {title}
//                             <i className={`${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'} fa ml-4`}></i>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Open State */}
//             {isOpen && (
//                 <div className={`${styles.content} ${styles.open} overflow-hidden p-1 flex py-2 text-gray-500 z-10`}>
//                     {content}
//                 </div>
//             )}
//         </div>
//     );
// }