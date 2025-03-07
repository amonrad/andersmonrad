import EMPinterview from "./contents/EMPinterview";
import Seismograf from "./contents/Seismograf";

export default function Texts() {
    return (
        <div className="p-4 text-black bg-white bg-opacity-35 text-center">
            <EMPinterview/>
            <Seismograf/>
        </div>
    );
}