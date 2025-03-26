import MaerskVinyl from "./contents/MaerskVinyl";
import ApopheniaVinyl from "./contents/ApopheniaVinyl";
import AdvancedVinyl from "./contents/AdvancedVinyl";
import TemsonVinyl from "./contents/TemsonVinyl";
import EMPsamlet from "./contents/EMPsamlet";


export default function Releases() {
    return (
        <div className="text-black text-center space-y-4">
            <MaerskVinyl/>
            <ApopheniaVinyl/>
            <AdvancedVinyl/>
            <TemsonVinyl/>
            <EMPsamlet/>   
        </div>
    );
}