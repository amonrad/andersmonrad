import MaerskOpera from "./contents/MaerskOpera";
import Prepositions from "./contents/Prepositions";
import DeejayM from "./contents/DeejayM";
import SylvesterS from "./contents/SylvesterS";


export default function ScoreMusic({ isOpen }) {
    return (

        <div className="text-black text-center space-y-4"> 
            <MaerskOpera isOpen={isOpen}/>
            <Prepositions isOpen={isOpen}/>        
            <DeejayM isOpen={isOpen}/>
            <SylvesterS isOpen={isOpen}/>      
        </div>
    );
}