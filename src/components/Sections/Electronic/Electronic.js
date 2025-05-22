import GreenRustyB from "./contents/GreenRustyB";
import Heksepige from "./contents/Heksepige";

export default function Electronic({ isOpen }) {
    return (
        <div className="text-black text-center space-y-4">
            <GreenRustyB isOpen={isOpen}/>
            <Heksepige isOpen={isOpen}/>    
        </div>
    );
}