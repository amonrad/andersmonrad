import SoundingImages from "./contents/SoundingImages";
import Quadcopter from "./contents/Quadcopter";
import Virtuoso from "./contents/Virtuoso";
import GreenRusty from "./contents/GreenRusty";
import MonradElving from "./contents/MonradElving";
import LegoConcert from "./contents/LegoConcert";

export default function Performances() {
    return (
        <div className="p-4 text-black bg-white bg-opacity-35">
            <SoundingImages/>
            <Quadcopter/>
            <Virtuoso/>
            <GreenRusty/>
            <MonradElving/>
            <LegoConcert/>
        </div>
    );
}