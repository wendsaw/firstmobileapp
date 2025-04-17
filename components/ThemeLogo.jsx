
import React from 'react';
import { Image, useColorScheme} from 'react-native';

//Images

import DarkLogo from '../assets/images/logo_dark.png'
import LightLogo from '../assets/images/logo_light.png'

const ThemeLogo = ({...props}) => {

    const colorScheme=useColorScheme()

    const logo= colorScheme ==='dark' ? DarkLogo:LightLogo

    return (
        <Image source={logo} {...props}/>
    );
}



export default ThemeLogo;
