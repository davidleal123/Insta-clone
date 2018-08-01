import { createBottomTabNavigator } from 'react-navigation';
import { StackHome } from './StackHome';
import Add from './Add';
import Follow from './Follow';
import Profile from './Profile';
import { StackSearch } from './StackSearch';
import { TabFollow } from './TabFollow';
import { StackFollow } from './StackFollow';


const RutasAutenticadas = createBottomTabNavigator({
    Home: {
        screen: StackHome,
    },
    Search: {
        screen: StackSearch,
    },
    Add: {
        screen: Add,
    },
    Follow: {
        screen: StackFollow,
    },
    Profile: {
        screen: Profile,
    },
}, {
    animationEnabled: true,
});

export { RutasAutenticadas };
