/**
 * Created by llitfkitfk on 2/10/17.
 */
import React from "react";
import {Navigator, View, StatusBar} from "react-native";
import HomeView from "./HomeView";
import AppEventEmitter from "../common/AppEventEmitter";
import Constants from "../common/Constants";

class App extends React.Component {


    componentDidMount() {
        this.appClick = AppEventEmitter.addListener(Constants.EmitCode.AppClick, () => {
            console.log('app click');
        });
    }

    componentWillUnmount() {
        this.appClick.remove();
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar barStyle="dark-content"/>
                <Navigator
                    initialRoute={{name: 'TabBarView', component: HomeView}}
                    configureScene={()=>{
                        return  Navigator.SceneConfigs.PushFromRight;
                    }}
                    renderScene={(route, navigator) => {
                        let Component = route.component;
                        return (
                            <Component navigator = {navigator} route = {route} {...route.passProps} />
                        )
                    }}
                />
            </View>
        )
    }
}

export default App;