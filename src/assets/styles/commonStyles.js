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
        // minHeight: windowHeight,
        minWidth: windowWidth,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 65,
        paddingLeft: 16
    },
    headerLeftArrow: {
        marginRight: 24
    },
    inputOuterContainer: {
        flexDirection: 'row',
        width: windowWidth * 0.88,
        borderRadius: 10,
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 8,
        marginTop: 6
    },
    input: {
        flex: 1,
    },

    rowSpaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },




    inputOuterContainer: {
        flexDirection: 'row',
        width: windowWidth * 0.88,
        borderRadius: 10,
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 8,
        marginTop: 6
    },

    input: {
        flex: 1,
    },
    inputHeader: {
        marginTop: 18
    },









    onBoardingSafeArea: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: 'pink'
    },
    onBoardingScroll: {
        backgroundColor: 'pink',
    },
    onBoardingOuter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
} );

export default commonStyles;