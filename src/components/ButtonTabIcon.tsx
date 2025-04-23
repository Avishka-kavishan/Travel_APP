import { View, Text } from 'react-native';
import React from 'react';
import HomeIcon from '../assets/svg/home.svg';
import HotelIcon from '../assets/svg/hotel.svg';
import HealthIcon from '../assets/svg/health.svg';
import AccomoIcon from '../assets/svg/accommo.svg';
import ShoppingIcon from '../assets/svg/shopping.svg';


type Props ={
    route: string;
    isFocused: boolean;
    
}

const ButtonTabIcon = ({route, isFocused}: Props) => {
    const renderIcon = (route: string, isFocused: boolean) => {
        let height = 34;
        let width = 34;

        switch (route) {
            case 'Home':
                return <HomeIcon width={width} height={height} fill={isFocused ? '#06530C' : '#9E9B9B'} />;

            case 'Transport':
                return <AccomoIcon width={width} height={height} fill={isFocused ? '#06530C' : '#9E9B9B'} />;

            case 'Health':
                return <HealthIcon width={width} height={height} fill={isFocused ? '#06530C' : '#9E9B9B'} />;

            case 'Accommodation':
              return <HotelIcon width={width} height={height} fill={isFocused ? '#06530C' : '#9E9B9B'} />;

            case 'Shopping':
              return <ShoppingIcon width={width} height={height} fill={isFocused ? '#06530C' : '#9E9B9B'} />;
        
            default:
                return null ;
          
        }
    }

  return (
    <View>
      {renderIcon (route, isFocused)}
    </View>
  )
}

export default ButtonTabIcon