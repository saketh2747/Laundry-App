import {Stack} from "expo-router";

export default function Layout(){
    return (
        <>
        <Stack screenOption={{headerShown:false}}>
            <Stack.Screen name="index" options={{headerShown:false}} />
            <Stack.Screen name="address" options={{headerShown:false}}/>
            <Stack.Screen name="add"/>
        </Stack>
        </>
    )
}