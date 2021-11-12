import React, {useState} from 'react';
import { View,ScrollView, Text,Image,TouchableOpacity, SafeAreaView,FlatList ,Dimensions,StyleSheet} from 'react-native';

import { COLORS, SIZES,constants, FONTS } from '../../constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
const renderItem = ({item}) => {
  return <View><Text>{item.name}</Text></View> 
}
const numColumns= 4;

const Home = ({navigation}) =>{

  const categoriesGrid = [
    {id:'1',name:'ডাক্তার', Image:require("../../assets/icons/medical-assistance-64.png")},
    {id:'2',name:'অ্যাপয়েটমেন্ট', Image:require("../../assets/icons/appointment-64.png")},
    {id:'3',name:'প্রেসক্রিপশন', Image:require("../../assets/icons/prescription-128.png")},
    {id:'4',name:'জরুরী ডাক্তার', Image:require("../../assets/icons/medical-bag-96.png")},
    {id:'5',name:'হেলথ প্ল্যান', Image:require("../../assets/icons/monitor-128.png")},
    {id:'6',name:'সেবা শপ', Image:require("../../assets/icons/add-shopping-cart-96.png")},
    {id:'7',name:'ডায়াগনস্টিক', Image:require("../../assets/icons/hospital-128.png")},
    {id:'8',name:'ক্রেডিট যুক্ত করুন', Image:require("../../assets/icons/debit-card-96.png")},
    
  ];

  const categoriesGridTwo = [
    {name:'বীমা', Image:require("../../assets/icons/shield-128.png")},
    {name:'অ্যাম্বুলেন্স', Image:require("../../assets/icons/ambulance-96.png")},
    {name:'ব্লাড ব্যাংক', Image:require("../../assets/icons/transfusion-128.png")},
    {name:'ফার্মেসী', Image:require("../../assets/icons/medicine-128.png")},
    {name:'ডাক্তারকে জিজ্ঞাসা করুন', Image:require("../../assets/icons/medical-assistance-64.png")},
    {name:'ব্লগ ', Image:require("../../assets/icons/insurance-128.png")},
    {name:'হাসপাতাল', Image:require("../../assets/icons/hospital-96.png")},
    {name:'পরিবার', Image:require("../../assets/icons/medical-assistance-64.png")},
  ];
  
  const [selectCategoryIndex,setSelectCategoryIndex] = React.useState(0);

  return(
    
    <SafeAreaView style={{
      backgroundColor:COLORS.lightprimary2,
      flex:1,
      }}>
     { /* Content Header*/}
    <View style={style.Header}>
      <View style={{}}>
        <TouchableOpacity activeOpacity={0.8} onPress={() =>{navigation.navigate('Login')}}>
          <Text style={{fontSize:22,color:COLORS.primary,fontWeight:'bold'}}>BESTSEBA</Text>
        </TouchableOpacity>
        
      </View>
      <View style={{
          height:40,
          paddingHorizontal:10,
          alignItems:'center',
          backgroundColor:COLORS.
          lightprimary,borderRadius:20,
          justifyContent:'space-around',
          flexDirection:'row',
        }}>
        <View style={{height:30, width:45,borderRadius:15,backgroundColor:COLORS.primary,marginRight:10 , justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:16,color:COLORS.white,fontWeight:'bold'}}>৳</Text>
        </View>
        <Text style={{fontSize:16,fontWeight:'200',fontWeight:'bold',marginLeft:10,}}>ট্যাঁপ করুন </Text>
      </View>  
    </View>
    <ScrollView>
      <View style={style.HomeCategoriesCard}>

        <FlatList
          data = {categoriesGrid}
          renderItem={({item})=>     
          <TouchableOpacity style={style.item} activeOpacity={0.8} onPress={() =>{navigation.navigate('MainLayout')}}>
              
                <Image source={item.Image} style={{height:54,width:54}} />
                <Text style={{textAlign:'center',fontWeight:'bold',color:COLORS.dark,marginTop:10}}>{item.name}</Text>
          </TouchableOpacity> 
          
        }
        keyExtractor={item=>item.id}
        numColumns = {4}
        />

      </View>
      { /* Content Banner*/}
      <View style={style.HomeBannerSection}>
        <View style={style.BannerContent}>

          <View style={{paddingHorizontal:20}}>
            <Text style={{fontSize:SIZES.h2,color:'#f5054f',fontWeight:'bold',marginLeft:20,marginBottom:8,}}>হেল্প লাইন </Text>
            <View style={{height:35,paddingHorizontal:19,justifyContent:'center',alignItems:'center', backgroundColor:'#f5054f',borderRadius:15}}>
              <Text style={{fontSize:SIZES.h2,color:COLORS.white,fontWeight:'bold'}}>০১৯৫১-০০৯৬৭১</Text>
            </View>
          </View>

                  <Image
                      source={require('../../assets/images/hlepimage.png')}
                      style={{
                      width: Dimensions.get('window').width * 0.35,
                      height: Dimensions.get('window').width * 0.35,
                      marginBottom:-10,
                      }}
                  />

        </View>
      </View>
      { /* Content Banner end*/}
      <View style={style.HomeCategoriesCard}>

        {/* {categoriesGridTwo.map((categories, index) =>(
            <TouchableOpacity  activeOpacity={0.8} onPress={() =>{navigation.navigate('MainLayout')}}>
              <View style={{flexDirection:'row',width:Dimensions.get('window').width/numColumns,}}>
                <View style={style.item}>
                  <Image source={categories.Image} style={{height:64,width:64}} />
                  <Text style={{textAlign:'center',fontWeight:'bold'}}>{categories.name}</Text>
                </View>
              </View> 
            </TouchableOpacity>   
        ))} */}
          <FlatList
              data = {categoriesGridTwo}
              renderItem={({item})=>
                <View style={style.item}>
                    <Image source={item.Image} style={{height:54,width:54}} />
                    <Text style={{textAlign:'center',fontWeight:'bold',color:COLORS.dark,marginTop:10}}>{item.name}</Text>
                </View>              
            }
            numColumns = {4}
          /> 
      </View>
      { /* Content Banner*/}
      
    </ScrollView> 

    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  Header:{
    paddingVertical:15,
    flexDirection: 'row',
    justifyContent:'space-between',
    backgroundColor:COLORS.white,
    paddingHorizontal: 20,
    paddingTop:40,
  },
  HomeCategoriesCard:{
    paddingHorizontal: 20,
    marginVertical:10,
  },
  categoriesBox:{
    flex:1,
    marginVertical:20,
  },

  item:{
    flex: 1,
    justifyContent:"center",
    alignItems:'center',
    backgroundColor:COLORS.white,
    height:Dimensions.get('window').width/4,
    margin:4,
    borderRadius:8,
    padding:4,
  },
  HomeBannerSection:{
    paddingHorizontal: 20,
  },
  BannerContent:{
    backgroundColor:COLORS.white,
    height:180,
    borderRadius:8,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },

});

export default Home;