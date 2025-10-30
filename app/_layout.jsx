import { Drawer } from 'expo-router/drawer';
import { View, Image, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function Layout() {
      const router = useRouter();

  return (
    <Drawer screenOptions={{ 
        headerStyle: { 
        backgroundColor: '#000000ff',
        height: 75,
        }, 
        headerTintColor: '#ffffffff',
        
        headerTitleStyle: {
          fontSize: 15,          // change title font size here
          fontWeight: '700',     // bold or normal
          letterSpacing: 0.5,    // optional
          color: '#ffffffff',    // optional override
          textTransform: 'capitalize',
          width: '100%',
        },

        drawerLabelStyle: {
            fontSize: 15,
            fontWeight: '500',
            color: '#000000ff',
            textTransform: 'capitalize', // or 'uppercase'
            },

        headerRight: () => (
          <Pressable
            onPress={() => router.push('/')}
            style={{ marginRight: 15, marginBottom: 9 }}
          >
            <Image
              source={require('../assets/Logo-2.png')}
              style={{ width: 40, height: 40, borderRadius: 10 }}
              resizeMode="contain"
            />
          </Pressable>
        ),

        }}>
      <Drawer.Screen name="index" options={{ title: 'Home', drawerLabel: 'Home' }} />
      <Drawer.Screen name="AboutScreen" options={{ title: 'About', drawerLabel: 'About' }} />
      <Drawer.Screen name="ContactScreen" options={{ title: 'Contact', drawerLabel: 'Contact' }} />
    </Drawer>
  );
}
