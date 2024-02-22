import {useFonts} from "expo-font";
import {SplashScreen} from "expo-router";
import React, {useEffect} from "react";
import {TamaguiProvider} from "@tamagui/core";
import tamaguiConfig from "@/tamagui.config";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Auth from "@/app/index";
import Homepage from "@/app/(screens)/homepage";
import Sampahku from "@/app/(screens)/sampahku";
import Rekening from "@/app/(screens)/rekening";
import Transfer from "@/app/(screens)/transfer";
import TransferVisa from "@/app/(screens)/(transfer)/visa";

SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

export default () => {
    const [fontLoaded] = useFonts({
        Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
        InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
        GabaritoSemibold: require('../assets/fonts/Gabarito-SemiBold.ttf'),
        GabaritoBold: require('../assets/fonts/Gabarito-Bold.ttf'),
        GabaritoExtraBold: require('../assets/fonts/Gabarito-ExtraBold.ttf'),
        GabaritoMedium: require('../assets/fonts/Gabarito-Medium.ttf'),
        GabaritoRegular: require('../assets/fonts/Gabarito-Regular.ttf'),
        GabaritoBlack: require('../assets/fonts/Gabarito-Black.ttf')
    })

    useEffect(() => {
        if (fontLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontLoaded])

    if (!fontLoaded) {
        return null;
    }

    return (
        <TamaguiProvider config={tamaguiConfig}>
            <Stack.Navigator>
                <Stack.Screen
                    name="index"
                    component={Auth}
                    options={{
                        title: "Auth",
                        headerShown: false
                    }}/>
                <Stack.Screen
                    name={"(screens)/homepage"} component={Homepage}
                    options={{title: "Homepage", headerShown: false}}/>
                <Stack.Screen
                    name={"(screens)/sampahku"} component={Sampahku}
                    options={{title: "Sampahku", headerShown: false}}/>
                <Stack.Screen
                    name={"(screens)/rekening"} component={Rekening}
                    options={{title: "Rekening", headerShown: false}}/>

                <Stack.Screen
                    name={"(screens)/transfer"} component={Transfer}
                    options={{title: "Transfer", headerShown: false}}/>

                <Stack.Screen
                    name={"(screens)/(transfer)/visa"} component={TransferVisa}
                    options={{title: "TransferVisa", headerShown: false}}/>

            </Stack.Navigator>
        </TamaguiProvider>
    )
}

// function useFont(arg0: {Inter: any;InterBold: any}):[any] {
//     throw new Error('Function not implemented.');
// }