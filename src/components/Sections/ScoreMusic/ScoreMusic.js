import MaerskOpera from "./contents/MaerskOpera";
import Prepositions from "./contents/Prepositions";
import DeejayM from "./contents/DeejayM";
import SylvesterS from "./contents/SylvesterS";


export default function ScoreMusic() {
    return (
        <div className="p-4 text-black bg-white bg-opacity-35 text-center">
            <MaerskOpera/>
            <Prepositions/>
            <DeejayM/>
            <SylvesterS/>      
        </div>
    );
}