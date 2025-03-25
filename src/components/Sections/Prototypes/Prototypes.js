import EggRunGame from "./contents/EggRunGame";
import FoieGrasGame from "./contents/FoieGrasGame";
import MrDoodles from "./contents/MrDoodles";

export default function Prototypes() {
    return (
        <div className="text-black text-center space-y-4">
            <MrDoodles/>
            <EggRunGame/>
            <FoieGrasGame/>
        </div>
    );
}