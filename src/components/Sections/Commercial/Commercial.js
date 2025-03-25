import HCAplaygate from "./contents/HCAplaygate";
import Paaskesondag from "./contents/Paaskesondag";
import Dowar from "./contents/Dowar";

export default function Commercial() {
    return (
        <div className="text-black text-center space-y-4">
            <Dowar/>
            <HCAplaygate/>
            <Paaskesondag/>
        </div>
    );
}