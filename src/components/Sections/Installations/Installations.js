import Esophon from "./contents/Esophon";
import Ervax from "./contents/Ervax";
import ApopheniaExh from "./contents/ApopheniaExh";

export default function Installations() {
    return (
        <div className="p-4 text-black bg-white bg-opacity-35 text-center">
            <Esophon/>
            <Ervax/>
            <ApopheniaExh/>
        </div>
    );
}