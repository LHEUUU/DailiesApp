import { Animated, SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, Alert, ImageBackground, ScrollView } from 'react-native';
import {React, useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/MaterialIcons';


export default function App() {
  const [currentTab, setCurrentTab] = useState("Home");
  const [showMenu, setShowMenu] = useState(false);

  const offsetValue = useRef (new Animated.Value(0)).current;
  const scaleValue = useRef (new Animated.Value(1)).current;
  const closeButtonOffset = useRef (new Animated.Value(0)).current;

  return (

    <SafeAreaView style={styles.container}>

        {/* view do side menu */}
        <View style={{justifyContent:'flex-start', paddingLeft: 20, paddingTop: 50,}}>

            <Image
                source = {{uri: 'https://img1.oastatic.com/img2/51289722/600x300r/t.jpg'}}
                style={{width:60, height: 60, borderRadius:10,}}
            />

            <Text style={{fontSize:24, fontWeight:'bold', marginTop:15, color:'white',}}>Leolito Johny</Text>
            
            <TouchableOpacity>
              <Text style={{color:'white', fontSize: 12,}}>@leolitos88</Text>
            </TouchableOpacity>

           
            <View style={{flexGrow: 1, marginTop: 50,}}>
                {BotoesMenu(currentTab, setCurrentTab, "Settings", 'cog')}
                {BotoesMenu(currentTab, setCurrentTab, "Edit Profile", 'account-edit')}
                {BotoesMenu(currentTab, setCurrentTab, "Friends", 'account-group')}
                {BotoesMenu(currentTab, setCurrentTab, "Memories", 'archive-star')}
            </View>

            <View style={{marginBottom: 20,}}>
                {BotoesMenu(currentTab, setCurrentTab,"LogOut", 'logout')}
            </View>

        </View>

        {/* view do perfil */}
        <Animated.View style = {{
          backgroundColor: '#111224', 
          height: "100%",
          flexGrow: 1,
          position: 'absolute',
          width: '100%',
          borderRadius: showMenu ? 20 : 0,
          // transformando a view
          transform: [
            {scale: scaleValue},
            {translateX: offsetValue}
          ]
          }}>

          <Animated.View style={{
            transform: [
            {translateY: closeButtonOffset}
          ]
          }}>
            <Image
              source = {{uri: 'https://img1.oastatic.com/img2/51289722/600x300r/t.jpg'}}
              style={{width:'100%', height: "15%",}}
            />
            <View style = {[StyleSheet.absoluteFillObject]}>
              <TouchableOpacity onPress={() => {
                
                if (showMenu) {
                  Animated.timing(scaleValue, {
                  toValue: 1,
                  duration: 150,
                  useNativeDriver: true,
                  })
                  .start()

                  setShowMenu(!showMenu);

                  Animated.timing(offsetValue, {
                  toValue: 0,
                  duration: 150,
                  useNativeDriver: true,
                  })
                  .start()
                  setShowMenu(!showMenu);

                  Animated.timing(closeButtonOffset, {
                  toValue: 0,
                  duration: 150,
                  useNativeDriver: true,
                })
                  .start()
                  setShowMenu(!showMenu);
                } else {

                };
                
              }}>
                <Icon name={showMenu ? "close" : "arrow-left"} style={{color: 'white', top: 30, left:20,}} size={30}/>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {
                Animated.timing(scaleValue, {
                  toValue: showMenu ? 1 : 0.88,
                  duration: 150,
                  useNativeDriver: true,
                })
                  .start()
                
                setShowMenu(!showMenu);

                Animated.timing(offsetValue, {
                  toValue: showMenu ? 0 : 220,
                  duration: 150,
                  useNativeDriver: true,
                })
                  .start()
                
                setShowMenu(!showMenu);

                Animated.timing(closeButtonOffset, {
                  toValue: showMenu ? 0 : 0,
                  duration: 150,
                  useNativeDriver: true,
                })
                  .start()
                
                setShowMenu(!showMenu);
              }}>
                <Icon name="menu" style={{position: "absolute", color: 'white', right:20,}} size={30}/>
              </TouchableOpacity>
            </View>



            <View style={{marginTop: '-10%', left: 25,}}>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    style ={styles.profilepic}
                    source = {{uri: 'https://i.ebayimg.com/images/g/wt8AAOSw42dZLN7L/s-l1600.jpg'}}
                  />
                  <View style={{alignItems: 'center', marginTop: '8%', marginLeft:'36%'}}>
                    <TouchableOpacity onPress={() => Alert.alert("edit profile", "not working yet")} style={styles.botao}>
                      <Text style = {styles.textob}>Edit profile</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={{marginTop: 10, flexDirection:'row'}}>
                  <Text style={styles.texto1}>Leonardo Brito</Text>
                  <Icon name="fire" style={{fontSize: 28, color: '#fff', left:6,}}/>
                  <Text style={{fontWeight:'bold', fontSize: 14, color:'black', marginTop: '1.5%', marginLeft: '-3.2%'}}>8</Text>
                </View>

              <View style={{flexDirection: 'row', marginTop:5,}}>
                <Icons name="location-pin" style={{fontSize: 22, color: '#9F9F9F', marginRight: 5}}/>
                <Text style={styles.texto2}>Câmara de Lobos</Text>
              </View>
            </View>


            <View style={{alignItems: 'center', marginTop:'25%',}}>
              <Text style ={styles.texto3}>Today's Challenge</Text>
            </View>
                
              <TouchableOpacity>
                <View style={{alignItems:"center"}}>
                  <Image
                    style ={styles.challenge}
                    source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Pessoa_chapeu.jpg'}}
                  />
                </View>
              </TouchableOpacity>

          </Animated.View>
      
        </Animated.View>

    </SafeAreaView>
  );
}

//função botoes do side menu
const BotoesMenu = (currentTab, setCurrentTab, titulo, iconName) => {
  return (
    <TouchableOpacity onPress={() => {
      if (titulo == "LogOut"){
        //navigate para outra cena
      }else {
        setCurrentTab(titulo)
      }
    }}>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        backgroundColor: 'white',
        backgroundColor: currentTab == titulo ? 'white' : 'transparent',
        borderRadius: 8,
        marginTop: 10,
      }}>
        <Icon name={iconName} style={{fontSize:25, color: currentTab == titulo ? '#5359D1' : 'white'}}></Icon>
        <Text style={{paddingLeft: 10, fontSize:15, fontWeight:'bold', color: currentTab == titulo ? '#5359D1' : 'white'}}>{titulo}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5359D1',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  profilepic: {
    width: 90,
    height: 90,
    borderRadius: 100,
    borderWidth:3,
    borderColor: '#111224',
  },
  challenge: {
    width: '85%',
    height: '70%',
    borderRadius: 10,
    marginTop: 20,
  },
  texto1:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  texto2:{
    fontSize: 13,
    color: '#9F9F9F',
  },
  textob:{
    fontSize: 13,
    color: '#fff',
  },
  texto3:{
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff',
  },
  botao:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: 110,
    height: 35,
    borderRadius: 10,
    backgroundColor: '#9D39DE',
  },
});
