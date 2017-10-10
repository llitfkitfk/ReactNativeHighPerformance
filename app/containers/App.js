/**
 * Created by llitfkitfk on 2/10/17.
 */
import React from "react";
import { View, StatusBar } from "react-native";
import {
    Scene,
    Router,
    Actions,
    Reducer,
    ActionConst,
    Overlay,
    Tabs,
    Modal,
    Drawer,
    Stack,
    Lightbox,
} from "react-native-router-flux";
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
            <View style={{ flex: 1 }}>
                <StatusBar barStyle="dark-content" />
                <Router>
                    <Stack key="root">
                        <Scene key="home" component={HomeView} />
                    </Stack>
                </Router>
            </View>
        )
    }
}

export default App;