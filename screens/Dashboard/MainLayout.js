import React, {useState} from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    Image,
    Animated,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    TextInput,
    FlatList,
 } from 'react-native';
import { COLORS, SIZES,constants, FONTS } from '../../constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
    Home,
    Profile,
    Search
} from"../../screens";


const MainLayout = ({navigation}) =>{

  const categoriesItem = [
    {name:'Dentist', iconName:'seat-outline'},
    {name:'Allergist', iconName:'table-furniture'},
    {name:'Surgeon', iconName:'cupboard-outline'},
    {name:'Urologist', iconName:'bed-queen-outline'},
  ];
  const doctorsdata =[

    {
        id:'1',
        name: 'Mamun Hasan ',
        image : require('../../assets/images/doctorman.jpg'),
        price : '600',
        liked: 'true',
    },
    {
        id:'2',
        name: 'Hasan ali',
        image : require('../../assets/images/doctorman.jpg'),
        price : '600',
        liked: 'true',
    },
    {
        id:'3',
        name: 'Aushikur Rahman ',
        image : require('../../assets/images/doctorman.jpg'),
        price : '600',
        liked: 'true',
    },
    {
        id:'4',
        name: 'Ruma Kahn ',
        image : require('../../assets/images/doctorman.jpg'),
        price : '600',
        liked: 'true',
    },
    {
        id:'5',
        name: 'Rifatur Rahman ',
        image : require('../../assets/images/doctorman.jpg'),
        price : '600',
        liked: 'true',
    },
    {
        id:'6',
        name: 'Nusrat Jahan ',
        image : require('../../assets/images/doctorman.jpg'),
        price : '600',
        liked: 'true',
    },
    {
        id:'7',
        name: 'Sabbir hossain ',
        image : require('../../assets/images/doctorman.jpg'),
        price : '600',
        liked: 'true',
    },

];
  const CategorisList = ({navigation}) =>{
    const [selectCategoryIndex,setSelectCategoryIndex] = React.useState(0)
    return(
        <View style={styles.categoriesConatiner}>
          {categoriesItem.map((item, index) => (
            <TouchableOpacity key={index} activeOpacity={0.8} onPress={() =>setSelectCategoryIndex(index)}>
              <View style={[styles.categoriesBtn,{backgroundColor:selectCategoryIndex == index ? COLORS.primary:COLORS.lightprimary2 }]} >
                <Icon name={item.iconName}  size={20} color={selectCategoryIndex == index ? COLORS.white:COLORS.dark} />
                <Text style={[styles.categoriesText,{color:selectCategoryIndex == index ? COLORS.white:COLORS.dark}]}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
    );
  }


  return(
  <SafeAreaView style={{
      backgroundColor:COLORS.white,
      flex:1,
    }}>

     { /* Content Header*/}
    <View style={styles.Header}>
      <Icon name="sort-variant" size={28} color={COLORS.primary} />
      <Icon name="account-circle-outline"size={28} color={COLORS.primary} />
    </View>
    { /* Content ScrollView*/}  
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.headerTile}> Hello Rifat</Text>
      <Text style={styles.headerTile}> Good Morning</Text>
      { /* Search Content */} 
      <View style={styles.searchContent}>

        <View style={styles.searchInputContainer}>
          <Icon name="magnify" color={COLORS.lightprimary } size={25}  />
          <TextInput placeholder="Search" style={{flex: 1,fontSize:18, }} />
        </View>
        <View style={styles.sortbtn}>
          <Icon name="tune" color={COLORS.white} size={28}  />
        </View>
      </View>

        { /* Categories Content */} 
          <Text style={styles.title}>Categories</Text>
          <CategorisList/>
        { /* Fetures Content */} 
        <Text style={styles.Doctortitle}>Top Doctors</Text>
        
        <FlatList 
          data={doctorsdata}
          renderItem={({item})=>
            <TouchableOpacity activeOpacity={0.8} onPress={() =>navigation.navigate('DoctorDetails',{item})} style={{paddingHorizontal:20,}}>
              <View style={styles.Card}>
                <View  style={{width:'25%',borderRadius:10,overflow:'hidden',marginRight:15}}>
                  <Image style={{height:'100%', width:'100%',}} source={item.image} />
                </View>
                <Text style={{fontSize:20,}}>{item.name}</Text>
              </View>          
            </TouchableOpacity>
          }
          keyExtractor={item=>item.id}
        />
    
    </ScrollView>
  </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  Card:{
    height:130,
    backgroundColor:COLORS.lightprimary,    
    marginBottom:10,
    borderRadius:10,
    padding:10,
    flexDirection:'row',
  },
  Header:{
    paddingVertical:15,
    marginTop:20,
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingHorizontal: 20,
  },
  headerTile:{
    paddingHorizontal: 20,
    fontSize:SIZES.h2,
    width:"50%",
    fontWeight:'bold',
    lineHeight:30,
  },
  searchContent:{
    flexDirection: 'row',
    justifyContent:'space-between',
    padding:20,
  },
  searchInputContainer:{
    height:50,
    paddingHorizontal: 20,
    backgroundColor:COLORS.lightprimary2,
    borderRadius:10,
    flex: 1,
    flexDirection: 'row',
    alignItems:'center',
  },
  sortbtn:{
    height:50,
    width:50,
    borderRadius:10,
    backgroundColor:COLORS.primary,
    justifyContent:'center',
    alignItems:'center',
    marginLeft:10,
  },
  title:{
    paddingHorizontal:20,
    fontSize:SIZES.h3,
    fontWeight:'bold',

  },
  Doctortitle:{
    paddingHorizontal:20,
    fontSize:SIZES.h3,
    fontWeight:'bold',
    marginBottom:20,
  },
  categoriesConatiner:{
    flexDirection:'row',
    justifyContent :'space-between',
    padding:20,
  },
  categoriesBtn:{
    flexDirection:'row',
    backgroundColor:COLORS.lightprimary2,
    padding:10,
    borderRadius:7,
    alignItems:'center',
  },
  categoriesText:{
    fontSize:14,
    fontWeight:'bold',
    marginLeft:5,
  },

});
export default MainLayout;