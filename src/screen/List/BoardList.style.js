import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonBoard:{
    alignItems:'center',
    backgroundColor: '#887390',
    padding: 10,
    marginLeft:40,
    marginRight: 40,
    marginTop:40,
    marginBottom: 50
  },
  image: {
    width: 50,
    height: 50,
  },
  containerLoading: {
    flex: 1,
    alignItems: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
  containerCell:{
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    alignItems: 'flex-start',
    marginTop: 10,
    marginBottom: 10

  },
  containerText:{
    flex:1,
    flexDirection:'column',
    flexWrap:'wrap',
    alignItems: 'flex-start',
    marginLeft: 10
  }
});

export default styles;