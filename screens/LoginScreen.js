import React from "react";
import { Text,View,TouchableOpacity,SafeAreaView,StyleSheet,ScrollView,Dimensions,Alert, TextInput} from "react-native";
import { COLORS, SIZES } from "../constants";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Login =({navigation})=>{
    return(
        <SafeAreaView style={loginstyle.RootContainerStyle}>
            <View style={{
                height:Dimensions.get('window').height/2.7,
                justifyContent:'center',
                alignItems:'center'
            }}>
                <Icon name="cupboard-outline" size={80} />
                <Text style={{fontSize:42,color:COLORS.white,fontWeight:'bold'}}>BESTSEBA</Text>
            </View>
            {/*Bottom View*/}
            <View style={loginstyle.BottomContainer}>

                    <View style={{height:60,width:"100%",paddingHorizontal:10, backgroundColor:COLORS.lightprimary2,borderRadius:10,marginBottom:20,flexDirection:'row',alignItems:'center'}}>
                        <Icon name="account-outline" size={30} />
                        <TextInput placeholder="Username" style={{flex:1,fontSize:20, fontWeight:'bold'}} />
                    </View>
                    <View style={{height:60,width:"100%",paddingHorizontal:10, backgroundColor:COLORS.lightprimary2,borderRadius:10,marginBottom:20,flexDirection:'row',alignItems:'center'}}>
                        <Icon name="lock" size={30} />
                        <TextInput placeholder="Password" style={{flex:1,fontSize:20, fontWeight:'bold'}} />
                    </View>

                    <TouchableOpacity activeOpacity={0.8} onPress={() =>{navigation.navigate('MainStack')}} style={{height:60,width:"100%", backgroundColor:COLORS.secondary,borderRadius:10,marginBottom:20,justifyContent:'center',alignItems:'center'}} activeOpacity={0.8}>
                        <Text style={{fontSize:22,color:COLORS.white,fontWeight:'bold'}}>Log In</Text>
                    </TouchableOpacity>
                
            </View>


        </SafeAreaView>
    );
}
const loginstyle = StyleSheet.create({
    RootContainerStyle:{
        flex:1,
        backgroundColor:COLORS.secondary,
    },
    BottomContainer:{
        flex:1.5,
        borderTopEndRadius:20,
        backgroundColor:COLORS.white,
        borderTopStartRadius:20,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:20,
    },
    InputContainer:{
        
    },  
});
export default Login;