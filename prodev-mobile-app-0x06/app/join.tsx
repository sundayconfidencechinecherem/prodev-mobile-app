import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { styles } from "@/styles/_join";
import { useRouter } from 'expo-router';
import { Ionicons } from "@expo/vector-icons";

export default function Join() {
  const router = useRouter();

  const handleSignUp = () => {
    // TODO: Add actual authentication logic here
    // For now, just navigate to home tabs
    router.replace('/(home)');
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconsection}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={25} />
        </TouchableOpacity>
        <Image 
          source={require('@/assets/images/logo-green.png')} 
          style={{ width: 100, height: 55 }}
          resizeMode="contain"
        />
        <View style={{ width: 25 }} />
      </View>
      
      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Create an account</Text>
        <Text style={styles.subText}>
          Join us! Please enter your details to get started
        </Text>
      </View>

      <View style={styles.formGroup}>
        <View>
          <Text style={styles.formLabel}>Email</Text>
          <TextInput 
            keyboardType="email-address" 
            style={styles.formControl} 
            placeholder="Enter your email"
          />
        </View>
        <View>
          <Text style={styles.formLabel}>Password</Text>
          <View style={styles.formPasswordControl}>
            <TextInput 
              style={styles.passwordControl} 
              placeholder="Create a password"
              secureTextEntry
            />
          </View>
        </View>
        <View>
          <Text style={styles.formLabel}>Confirm Password</Text>
          <View style={styles.formPasswordControl}>
            <TextInput 
              style={styles.passwordControl} 
              placeholder="Confirm your password"
              secureTextEntry
            />
          </View>
        </View>
      </View>

      <TouchableOpacity 
        style={styles.primaryButton}
        onPress={handleSignUp} // ADDED: Navigation to home tabs
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.dividerGroup}>
        <View style={styles.divider}></View>
        <Text style={styles.dividerText}>OR</Text>
        <View style={styles.divider}></View>
      </View>

      <View style={styles.secondaryButtonGroup}>
        <TouchableOpacity 
          style={[styles.secondaryButton, { borderColor: '#4285F4' }]}
          onPress={handleSignUp} // ADDED: Also navigate for social sign up
        >
          <Image 
            source={require("@/assets/images/google.png")} 
            style={{ width: 24, height: 24 }}
          />
          <Text style={[styles.secondaryButtonText, { color: '#4285F4' }]}>
            Sign up with Google
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.secondaryButton, { borderColor: '#1877F2' }]}
          onPress={handleSignUp} // ADDED: Also navigate for social sign up
        >
          <Image 
            source={require("@/assets/images/facebook.png")} 
            style={{ width: 24, height: 24 }}
          />
          <Text style={[styles.secondaryButtonText, { color: '#1877F2' }]}>
            Sign up with Facebook
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => router.push('/signin')}>
          <Text style={styles.signupSubTitleText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}