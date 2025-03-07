import VisualStudies from "./contents/VisualStudies";
import SoundingImagesB from "./contents/SoundingImagesB";
import SoundingImagesA from "./contents/SoundingImagesA";
import VirtuosoApp from "./contents/VirtuosoApp";

export default function IOSapps() {
    return (
        <div className="p-4 text-black bg-white bg-opacity-35 text-center">
            <VisualStudies/>
            <SoundingImagesB/>
            <SoundingImagesA/>
            <VirtuosoApp/>
        </div>
    );
}