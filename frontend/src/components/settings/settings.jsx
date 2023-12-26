import CategorySettings from "./categorySettings/categorySettings";
import ColorSetting from "./colorSettings/colorSettings";

const Settings = () => {
    return ( <>
    <ColorSetting />
    <hr className="border border-2 shadow border-light mx-5 my-4 rounded-5"/>
    <CategorySettings />
    </> );
}
 
export default Settings;