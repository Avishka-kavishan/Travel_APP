import { View, Text, Pressable,StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

const CustomBottomTab = ({state, navigation,descriptors} : BottomTabBarProps) => {
    const {width} = useWindowDimensions();
    const MARGIN = 20;
    const TAB_BAR_WIDTH = width - 2 * MARGIN;
    const TAB_WIDTH = TAB_BAR_WIDTH / state.routes.length;
    
  return (
    <View style={[styles.container, {width: TAB_BAR_WIDTH, bottom: MARGIN}]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Pressable
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <View style={styles.ButContainer}>
                
                <Text style={styles.tabText}>
                    {route.name}
                </Text>
            </View>
          </Pressable>
        );
      })}
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'row',
        height:87,
        position: 'absolute',
        alignSelf:'center',
        backgroundColor: '#ACD590',
        borderRadius:25,
        alignItems: 'center',
        justifyContent: 'space-between',
        overflow: 'hidden',
        
    },
    tabText:{

    },
    ButContainer:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    }
})

export default CustomBottomTab