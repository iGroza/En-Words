import React from 'react'
import ChooseScreen from '../Screens/ChooseScreen'
import LearnScreen from '../Screens/LearnScreen';
import CategoryScreen from '../Screens/CategoryScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements';
import InfoScreen from '../Screens/InfoScreen';


const routerConfig = {

    ChooseScreen: {
        screen: ChooseScreen,
        navigationOptions: {
            tabBarLabel: 'Слова',
            tabBarIcon: ({ focused }) => (<Icon focused={focused} name={'g-translate'} />)
        }
    },

    LearnScreen: {
        screen: LearnScreen,
        navigationOptions: {
            tabBarLabel: 'Учёба',
            tabBarIcon: ({ focused }) => (<Icon focused={focused} name={'school'} />)
        }
    },

    CategoryScreen: {
        screen: CategoryScreen,
        navigationOptions: {
            tabBarLabel: 'Категории',
            tabBarIcon: ({ focused }) => (<Icon focused={focused} name={'view-list'} />)
        }
    },

    InfoScreen: {
        screen: InfoScreen,
        navigationOptions: {
            tabBarLabel: 'Статистика',
            tabBarIcon: ({ focused }) => (<Icon focused={focused} name={'info'} />)
        }
    }
}

const Navigator = createBottomTabNavigator(routerConfig, { initialRouteName: 'CategoryScreen' })
export default createAppContainer(Navigator)