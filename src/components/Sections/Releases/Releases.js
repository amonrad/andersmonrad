import MaerskVinyl from "./contents/MaerskVinyl";
import ApopheniaVinyl from "./contents/ApopheniaVinyl";
import AdvancedVinyl from "./contents/AdvancedVinyl";
import TemsonVinyl from "./contents/TemsonVinyl";
import EMPsamlet from "./contents/EMPsamlet";


export default function Releases() {
    const releasesText = "Releases";

    return (
        <div className="p-4 text-black bg-white bg-opacity-35 text-center">
            <MaerskVinyl/>
            <ApopheniaVinyl/>
            <AdvancedVinyl/>
            <TemsonVinyl/>
            <EMPsamlet/>   
        </div>
    );
}