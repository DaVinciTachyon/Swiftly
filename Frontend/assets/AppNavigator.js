import { createStackNavigator,createAppContainer} from "react-navigation";
import HomeScreen from "./Home";
import DriverMainOrders from './DriverMainOrders';
import OrderScreen from './OrderScreen';
import DriverMap from './DriverMap';
import AvailableOrdersScreen from './AvailableOrdersScreen';
import SelectedOrdersMap from './SelectedOrdersMap';

const AppNavigator = createStackNavigator({
	Driver: DriverMainOrders,
	Order: OrderScreen,
	Map: DriverMap,
	AvailableOrders: AvailableOrdersScreen,
	OrdersMap: SelectedOrdersMap
},{
	initialRouteName: 'Driver'
});

export default createAppContainer(AppNavigator);