import VisualStudies from "./contents/VisualStudies";
import SoundingImagesB from "./contents/SoundingImagesB";
import SoundingImagesA from "./contents/SoundingImagesA";
import VirtuosoApp from "./contents/VirtuosoApp";

export default function IOSapps({ isOpen }) {
    return (
        <div className="text-black text-center space-y-4">
            <VisualStudies isOpen={isOpen}/>
            <SoundingImagesB isOpen={isOpen}/>
            <SoundingImagesA isOpen={isOpen}/>
            <VirtuosoApp isOpen={isOpen}/>
        </div>
    );
}