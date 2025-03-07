import HCAplaygate from "./contents/HCAplaygate";
import Paaskesondag from "./contents/Paaskesondag";
import Dowar from "./contents/Dowar";

export default function Commercial() {
    return (
        <div className="p-4 text-black bg-white bg-opacity-35 text-center">
            <Dowar/>
            <HCAplaygate/>
            <Paaskesondag/>
        </div>
    );
}