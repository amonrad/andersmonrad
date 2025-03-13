import MaerskOpera from "./contents/MaerskOpera";
import Prepositions from "./contents/Prepositions";
import DeejayM from "./contents/DeejayM";
import SylvesterS from "./contents/SylvesterS";


export default function ScoreMusic() {
    return (

        <div className="text-black text-center space-y-4"> 
            <MaerskOpera/>
            <Prepositions/>        
            <DeejayM/>
            <SylvesterS/>      
        </div>
    );
}