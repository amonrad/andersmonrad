import MaerskOpera from "./contents/MaerskOpera";
import Prepositions from "./contents/Prepositions";
import DeejayM from "./contents/DeejayM";
import SylvesterS from "./contents/SylvesterS";


export default function ScoreMusic() {
    // const aboutText = [
    //     "Score Music"];

    return (
        <div className="p-4 text-black bg-white bg-opacity-35 text-center">
            {/* <p className="mb-4">{aboutText}</p> */}

            <MaerskOpera 
            //containerClass="grid grid-cols-2 gap-8 items-start"
            //textClass="text-gray-800 text-left"
            //iframeWrapperClass="relative w-full aspect-video"
            //iframeClass="absolute top-0 left-0 w-full h-full"
            />

            <Prepositions 
            //containerClass="w-full flex flex-col items-start"
            //textClass="text-gray-800 text-left"
            //iframeWrapperClass="relative w-full aspect-video"
            //iframeClass="absolute top-0 left-0 w-full h-full"
            />

            <DeejayM 
            // containerClass="grid grid-cols-2 gap-8 items-start"
            // textClass="text-gray-800"
            // iframeWrapperClass="relative w-full aspect-video"
            // iframeClass="absolute top-0 left-0 w-full h-full"
            />

            <SylvesterS 
            // containerClass="grid grid-cols-2 gap-8 items-start"
            // textClass="text-gray-800"
            // iframeWrapperClass="relative w-full aspect-video"
            // iframeClass="absolute top-0 left-0 w-full h-full"
            />      
        </div>
    );
}