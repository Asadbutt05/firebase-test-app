import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import signup from "../pages/auth/signup";
import home from "../pages/home/home";
import login from "../pages/auth/login";

// Add all screens for Home Stack
const homeStack = createStackNavigator({
  home,
});

const AppContainer = createAppContainer(homeStack);
export default AppContainer;
