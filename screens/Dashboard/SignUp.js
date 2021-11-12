/* @flow weak */

import React, {useState}from 'react';
import {
Text,
SafeAreaView,
TouchableOpacity,
Image,
TextInput,
Modal,
FlatList,
TouchableWithoutFeedback,
KeyboardAvoidingView,
ScrollView,
StatusBar,
Platform,
StyleSheet,
Keyboard,
View,
Dimensions
} from 'react-native';
import { RadioButton,Button  } from 'react-native-paper';

//Main Function
const SignUp = ({navigation}) =>{
//Manage States
const [Name, setName] = useState("");


return(
  <SafeAreaView style={styles.container}>
    <StatusBar backgroundColor="transparent" translucent={true}/>
    <View style={{height:30,backgroundColor:'#4F74FF'}}></View>

    <View style={styles.Innercontent}>
        <View style={{flex:1.4,alignItems:'center',justifyContent:'center'}}>
          <View style={{
              borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
              width: Dimensions.get('window').width * 0.7,
              height: Dimensions.get('window').width * 0.7,
              backgroundColor:'rgba(79, 116, 255, 0.03)',
              alignItems:'center',justifyContent:'center'
            }}>
            <View style={{
                borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                width: Dimensions.get('window').width * 0.6,
                height: Dimensions.get('window').width * 0.6,
                backgroundColor:'rgba(79, 116, 255, 0.04)',
                alignItems:'center',justifyContent:'center'
              }}>
              <View style={{
                  borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                  width: Dimensions.get('window').width * 0.5,
                  height: Dimensions.get('window').width * 0.5,
                  backgroundColor:'rgba(79, 116, 255, 0.06)',
                  alignItems:'center',justifyContent:'center'
                }}>
                <View style={{
                    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                    width: Dimensions.get('window').width * 0.4,
                    height: Dimensions.get('window').width * 0.4,
                    backgroundColor:'rgba(79, 116, 255, .9)',
                    alignItems:'center',justifyContent:'flex-end',overflow:'hidden',
                  }}>
                  <Image
                      source={require('../../assets/images/UserIcon.png')}
                      style={{
                      width: Dimensions.get('window').width * 0.3,
                      height: Dimensions.get('window').width * 0.3,

                      }}
                  />
                </View>
              </View>
            </View>

          </View>

        </View>


        <View style={{flex:1,backgroundColor:'#4F74FF',borderTopEndRadius:20,borderTopStartRadius:20}}>
            <View style={styles.PataintForm}>
                <TextInput value={Name} onChangeText={text => setName(text)} style={{backgroundColor:'#fff',paddingHorizontal:10,borderRadius:4, marginBottom:20,}} placeholder='রোগীর নাম'/>
                <View style={{flexDirection:'row',justifyContent:'space-between', marginBottom:20,}}>
                  <TextInput style={{backgroundColor:'#fff',paddingHorizontal:10,borderRadius:4, flex:1,}} placeholder='বয়স'/>
                  <TextInput style={{backgroundColor:'#fff',paddingHorizontal:10,borderRadius:4,flex:1,marginLeft:20,}} placeholder='জন্ম তারিখ'/>
                </View>

                <View style={{flexDirection:'row',justifyContent:'space-between', marginBottom:20,backgroundColor:'#fff',height:50,borderRadius:4}}>
                  <View style={{flexDirection:'row', height:'100%',alignItems:'center', paddingHorizontal:10,flex:1}}>
                    <RadioButton value="first" status='checked'/>
                    <Text>পুরুষ</Text>
                  </View>
                  <View style={{flexDirection:'row', height:'100%',marginLeft:20,alignItems:'center',paddingHorizontal:10,flex:1}}>
                    <RadioButton value="first" status='unchecked'/>
                    <Text>মহিলা</Text>
                  </View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'flex-end',}}>
                  <Text style={{color:'#fff',fontSize:18}}>রেফারেল কোড</Text>
                </View>


                <TouchableOpacity activeOpacity={0.8} onPress={() =>{navigation.navigate('MainStack')}} style={{height:60,backgroundColor:'#010319',marginTop:'5%',borderRadius:10,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{color:'#fff',fontSize:20,}}>নতুন অ্যাকাউন্ট তৈরি করুন</Text>
                </TouchableOpacity>

            </View>

        </View>

    </View>


  </SafeAreaView>
);
}
export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Innercontent:{
    flex:1,
  },
  PataintForm:{
    paddingHorizontal:20,
    marginTop:30,
    position:'relative',
  }
});
