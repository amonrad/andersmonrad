import EggRunGame from "./contents/EggRunGame";
import FoieGrasGame from "./contents/FoieGrasGame";
import MrDoodles from "./contents/MrDoodles";

export default function Prototypes({ isOpen }) {
    return (
        <div className="text-black text-center space-y-4">
            <MrDoodles isOpen={isOpen}/>
            <EggRunGame isOpen={isOpen}/>
            <FoieGrasGame isOpen={isOpen}/>
        </div>
    );
}