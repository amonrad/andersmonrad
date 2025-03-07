import EggRunGame from "./contents/EggRunGame";
import FoieGrasGame from "./contents/FoieGrasGame";
import MrDoodles from "./contents/MrDoodles";

export default function Prototypes() {
    return (
        <div className="p-4 text-black bg-white bg-opacity-35 text-center">
            <EggRunGame/>
            <MrDoodles/>
            <FoieGrasGame/>
        </div>
    );
}