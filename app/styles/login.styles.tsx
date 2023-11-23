// login styles
import { StyleSheet } from "react-native";
export const LogInStyles = StyleSheet.create({
    backgroundImage: {
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        padding: 20,
        gap: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        gap: 5,
    },
    headerImage: {
        height: 16.02,
        width: 16.02,
        marginTop: 5,
    },
    headerText: {
        fontSize: 25,
    },
    mainText: {
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 15,
        gap: 8,
        width: 284,
    },
    heading: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: "bold",
        paddingVertical: 4
    },
    subHeading: {
        textAlign: 'center',
        paddingVertical: 8
    },
    inputContainer: {
        gap: 8,

    },
    inputField: {
        backgroundColor: '#E6E8EF',
        height: 50,
        padding: 6,
        width: 310,
        borderRadius: 5,
        textAlign: "center",

    },
    btnConatiner: {

    },

    // social links
    socialLinksContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 310,
        marginTop: 5,
        alignItems: "center"


    },
    socialLink: {
        borderWidth: 1.5,
        borderColor: '#97aabd',
        // height:35,
        width: 129,
        padding: 5,
        textAlign: "center",
        borderRadius: 5,
        color: '#97aabd',
    },
    socialIcon: {
        height: 16.2,
        width: 16.2,
    }

})