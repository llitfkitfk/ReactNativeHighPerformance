/**
 * Created by llitfkitfk on 2/10/17.
 */
import {AsyncStorage} from "react-native";

const Storage = {
    setObject: (key, value) => {
        const jsonValue = JSON.stringify(value);
        return AsyncStorage.setItem(key, jsonValue, (error) => {
            console.log(key + ' setOrRemoveObject error: ' + error);
        })
    },
    cachedObject: (key) => {
        return AsyncStorage.getItem(key).then((data, error) => {
            if (data) {
                return JSON.parse(data);
            }
            console.log(key + ' cachedObject error: ' + error);
            return null;
        })
    },
    clearCachedObject: (key) => {
        return AsyncStorage.removeItem(key);
    },
};

export default Storage;