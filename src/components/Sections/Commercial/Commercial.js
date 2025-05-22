import HCAplaygate from "./contents/HCAplaygate";
import Paaskesondag from "./contents/Paaskesondag";
import Dowar from "./contents/Dowar";

export default function Commercial({ isOpen }) {
    return (
        <div className="text-black text-center space-y-4">
            <Dowar isOpen={isOpen}/>
            <HCAplaygate isOpen={isOpen}/>
            <Paaskesondag isOpen={isOpen}/>
        </div>
    );
}