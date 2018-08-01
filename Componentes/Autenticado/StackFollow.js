
import { createStackNavigator } from 'react-navigation';

import { TabFollow } from './TabFollow';
import Publicacion from './Publicacion';
import Autor from './Profile';
import Comentarios from './Comentarios';

const StackFollow = createStackNavigator({
    TabFollow: {
        screen: TabFollow,
        navigationOptions: {
            header: null,
        },
    },
    Autor: {
        screen: Autor,
    },
    Publicaciones: {
        screen: Publicacion,
    },
    Comentarios: {
        screen: Comentarios,
    },
});

export { StackFollow };
