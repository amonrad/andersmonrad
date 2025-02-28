import SoundingImages from "./contents/SoundingImages";
import Quadcopter from "./contents/Quadcopter";
import Virtuoso from "./contents/Virtuoso";
import GreenRusty from "./contents/GreenRusty";
import MonradElving from "./contents/MonradElving";
import LegoConcert from "./contents/LegoConcert";

export default function Performances() {
    return (
        <div className="p-4 text-black bg-white bg-opacity-35">
            <SoundingImages 
                containerClass="grid grid-cols-2 gap-8 items-start"
                textClass="text-gray-800"
                iframeWrapperClass="relative w-full aspect-video"
                iframeClass="absolute top-0 left-0 w-full h-full"
            />
            <Quadcopter 
                containerClass="grid grid-cols-2 gap-8 items-start"
                textClass="text-gray-800"
                iframeWrapperClass="relative w-full aspect-video"
                iframeClass="absolute top-0 left-0 w-full h-full"
            />
            <Virtuoso 
                containerClass="grid grid-cols-2 gap-8 items-start"
                textClass="text-gray-800"
                iframeWrapperClass="relative w-full aspect-video"
                iframeClass="absolute top-0 left-0 w-full h-full"
            />
            <GreenRusty 
                containerClass="grid grid-cols-2 gap-8 items-start"
                textClass="text-gray-800"
                iframeWrapperClass="relative w-full aspect-video"
                iframeClass="absolute top-0 left-0 w-full h-full"
            />
            <MonradElving 
                containerClass="grid grid-cols-2 gap-8 items-start"
                textClass="text-gray-800"
                iframeWrapperClass="relative w-full aspect-video"
                iframeClass="absolute top-0 left-0 w-full h-full"
            />
            <LegoConcert 
                containerClass="grid grid-cols-2 gap-8 items-start"
                textClass="text-gray-800"
                iframeWrapperClass="relative w-full aspect-video"
                iframeClass="absolute top-0 left-0 w-full h-full"
            />
        </div>
    );
}