import { StyleSheet } from 'react-native';
import Colors from '../../../utils/Colors';

export const styles = StyleSheet.create({
    listItemContainer: {
        paddingVertical: 20,
        backgroundColor: '#065143',
        borderRadius: 5,
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        justifyContent: 'center',
        marginVertical: 5,
    },
    listItem: {
        fontSize: 14,
        color: Colors.white,
        paddingHorizontal: 10,
    },
});