import SoundingImages from "./contents/SoundingImages";
import Quadcopter from "./contents/Quadcopter";
import GreenRusty from "./contents/GreenRusty";
import MonradElving from "./contents/MonradElving";
import LegoConcert from "./contents/LegoConcert";


export default function Performances({ isOpen }) {
    return (
        <div className="text-black text-center space-y-4">
            <SoundingImages isOpen={isOpen}/>
            <Quadcopter isOpen={isOpen}/>
            <GreenRusty isOpen={isOpen}/>
            <MonradElving isOpen={isOpen}/>
            <LegoConcert isOpen={isOpen}/>
        </div>
    );
}