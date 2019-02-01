import React from 'react'
import { Platform, View, StatusBar } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import DeckListView from './components/DeckListView'
import DeckView from './components/DeckView'
import NewDeckView from './components/NewDeckView'
import NewCardView from './components/NewCardView'
import QuizView from './components/QuizVIew'
import { Constants } from 'expo'
import { createAppContainer,createBottomTabNavigator, createMaterialTopTabNavigator,createStackNavigator } from 'react-navigation'
import { setLocalNotification } from './utils/helpers'
import { purple, white } from './utils/styles'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

function UdaciStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}
const RouteConfigs = {
  DeckList: {
    screen: DeckListView,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    },
  },
  NewDeckView: {
    screen: NewDeckView,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    },
  }
};

const TabNavigatorConfig = {
  navigationOptions: {
      header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? purple : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : purple,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
};
const Tabs = Platform.OS === "ios"? createBottomTabNavigator(RouteConfigs, TabNavigatorConfig): createMaterialTopTabNavigator(RouteConfigs, TabNavigatorConfig);
const TabsContainer = createAppContainer(Tabs);

const MainNavigator = createStackNavigator({
  Home: {
    screen: TabsContainer,
    navigationOptions: {     
      header: null
    } 
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    }
  },
  NewCardView: {
    screen: NewCardView,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    }
  },
  QuizView: {
    screen: QuizView,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    }
  }
})
const MainNavigattionContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
          <MainNavigattionContainer />
        </View>
      </Provider>
    )
  }
}
