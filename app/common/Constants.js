/**
 * Created by llitfkitfk on 2/10/17.
 */
import {Dimensions} from "react-native";

const Constants = {
    Dimension: {
        ScreenWidth(percent = 1) {
            return Dimensions.get('window').width * percent;
        },
        ScreenHeight(percent = 1) {
            return Dimensions.get('window').height * percent;
        },
    },
    EmitCode: {
        AppClick: 'AppClick',
    },
};

export default Constants;