import EMPinterview from "./contents/EMPinterview";
import Seismograf from "./contents/Seismograf";

export default function Texts() {
    return (
        <div className="text-black text-center space-y-4">
            <EMPinterview/>
            <Seismograf/>
        </div>
    );
}