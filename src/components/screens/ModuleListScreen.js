import { useState } from 'react';
import {StyleSheet} from 'react-native';
import Screen from '../layout/Screen';
import initialeModules from "../../data/modules.js"
import ModuleList from '../entity/modules/ModuleLits.js';
import RenderCount from '../UI/RenderCount.js';
const ModuleListScreen = ({navigation}) =>   {
    //state ---------------
    const [modules, setModules] = useState(initialeModules);
    //handler------------------
      const handleSelect = (module) => navigation.navigate("ModuleViewScreen", {module});
      const handDelete = (module) =>  
      setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));
     //view--------------
  return(
    <Screen>
      <RenderCount/>
        <ModuleList modules = {modules} onSelect ={handleSelect}/>
        
    </Screen>
  );   
};

const styles = StyleSheet.create({
    container: {},
});
export default ModuleListScreen;
