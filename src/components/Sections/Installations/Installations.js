import Esophon from "./contents/Esophon";
import Ervax from "./contents/Ervax";
import ApopheniaExh from "./contents/ApopheniaExh";

export default function Installations({ isOpen }) {
    return (
        <div className="text-black text-center space-y-4">
            <Esophon isOpen={isOpen}/>
            <Ervax isOpen={isOpen}/>
            <ApopheniaExh isOpen={isOpen}/>
        </div>
    );
}