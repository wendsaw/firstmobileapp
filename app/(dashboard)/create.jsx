



import { StyleSheet} from 'react-native';

import  Spacer  from '../../components/Spacer';
import  ThemeText  from '../../components/ThemeText';
import  ThemedView  from '../../components/ThemedView';


const Create = () => {




    return (
        <ThemedView style={styles.container}>
            
            <ThemeText title={true} style={styles.heading}>
                add a new book  
            </ThemeText>
            <Spacer/>
            
        </ThemedView>
    );
}

export default Create;



const styles = StyleSheet.create({
    container:{

        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    heading:{
        textAlign:'center',
        fontSize:18,
        marginBottom:30,
    },
   

})


