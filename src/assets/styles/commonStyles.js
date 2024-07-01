import {
    StyleSheet,
    Dimensions
} from 'react-native';
const windowWidth = Dimensions.get( 'window' ).width;
const windowHeight = Dimensions.get( 'window' ).height;
const commonStyles = StyleSheet.create( {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        height: 16,
        resizeMode: 'contain',
        width: 120
    },
    scrollViewContainer: {
        flex: 1
    },
    contentContainer: {
        minHeight: windowHeight,
        minWidth: windowWidth,
        justifyContent: 'center',
        alignItems: 'center'
    }
} );

export default commonStyles;