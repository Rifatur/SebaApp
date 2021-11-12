import React from 'react';
import { View, Text,StyleSheet, SafeAreaView } from 'react-native';
import { useState } from 'react/cjs/react.development';

const DoctorDetails = (props) =>{

    const { id,name,} = props.route.params.item
  return(
    <SafeAreaView>
        <Text style={{marginTop:40,}}>{name}</Text>
    </SafeAreaView>
  );
}






export default DoctorDetails;