import {Stack} from "expo-router";

export default function Layout(){
    return (
        <>
        <Stack screenOption={{headerShown:false}}>
           
            <Stack.Screen name="select"/>
            <Stack.Screen name="cart"/>
        </Stack>
        </>
    )
}