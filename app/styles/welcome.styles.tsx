// welcome.styles.js
import { StyleSheet } from 'react-native';

const WelcomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
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
    marginBottom: 20,
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
  buttonView: {
    flexDirection: 'column',
    gap: 10,
    alignItems: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
});

export default WelcomeStyles;
