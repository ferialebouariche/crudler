import {StyleSheet} from 'react-native';
import Screen from '../layout/Screen';
import initialeModules from "../../data/modules.js"
import ModuleList from '../entity/modules/ModuleLits.js';
const ModuleListScreen = () =>   {
    let modules = initialeModules;
    const handDelete = (module) => {
        modules = modules.filter((item) => item.ModuleID !== module.ModuleID);
    };
  return(
    <Screen>
        <ModuleList modules = {modules} onSelect ={handDelete}/>
        
    </Screen>
  );   
};

const styles = StyleSheet.create({
    container: {},
});
export default ModuleListScreen;
