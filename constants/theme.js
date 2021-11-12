import { Dimensions } from "react-native";
const {width, height} = Dimensions.get("window");

export const COLORS ={
    //base Color
    dark:'#000',
    light:'#a5a5a5',
    white:'#fff',
    primary: '#28388f',
    secondary: '#64beff',
    pink: '#ff2d5f',
    lightprimary:'rgba(139, 161, 191, 0.41)',
    lightprimary2:'rgba(139, 161, 191, 0.11)'
};

export const SIZES = {
    //global
    base:8,
    font:14,
    radius:12,
    padding: 24,

    //fontsize
    h1:30,
    h2:24,
    h3:16,
    h4:14,

    body1:30,
    body2:22,
    body3:15,
    body4:14,


    width,
    height

}

export const FONTS = {
    largeTitle:{fontFamily:"Poppins-Regular",fontSize:SIZES.h1,lineHeight:36},
}

const appTheme = {COLORS,SIZES,FONTS};
export default appTheme;