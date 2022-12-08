import { StyleSheet } from 'react-native'

export const HomeStyle = (StyleSheet.createstyle = StyleSheet.create({
    container: {
        height: '100vh',
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e5e5e5',
    },
    scrollView: {
        width: '90%',
        height: '90vh',
        display: 'flex',
        flexWrap: 'wrap',
        marginHorizontal: 'auto',
        flexDirection: 'row',
        marginVertical: '5%',
        borderRadius: 25,
        justifyContent: 'space-around',
    },
    title: {
        marginVertical: 30,
    },
    inputSearch: {
        width: '70%',
        height: 50,
        borderWidth: 2,
        borderColor: '#14213D',
        borderRadius: 9,
        textIndent: 10,
        borderBottomStartRadius: 0,
        borderBottomEndRadius: 0,
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchButton: {
        backgroundColor: '#e5e5e5',
    },
    loader: {
        marginVertical: 40,
    },
}))
