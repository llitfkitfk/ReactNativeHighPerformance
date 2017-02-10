/**
 * Created by llitfkitfk on 2/10/17.
 */
import React from "react";
import {View, TouchableOpacity, Text} from "react-native";
import AppEventEmitter from "../common/AppEventEmitter";
import Constants from "../common/Constants";

export default class HomeView extends React.Component {

    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    render() {

        return (
            <View style={{flex: 1, justifyContent: 'center'}}>
                <TouchableOpacity onPress={() => this.onClick()}>
                    <Text>Click Me</Text>
                </TouchableOpacity>
            </View>
        )
    }
    onClick() {
        AppEventEmitter.emit(Constants.EmitCode.AppClick);
    }
}