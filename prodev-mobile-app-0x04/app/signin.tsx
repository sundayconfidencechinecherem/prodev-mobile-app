import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { styles } from "@/styles/_joinstyle";
import { useRouter } from 'expo-router';
import { Ionicons } from "@expo/vector-icons";

export default function SignIn() {
  const router = useRouter();

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
        <Text style={styles.titleText}>Sign in to your</Text>
        <Text style={styles.titleText}>Account</Text>
        <Text style={styles.subText}>
          Enter your email and password to sign in.
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
              placeholder="Enter your password"
              secureTextEntry
            />
          </View>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>

      <View style={styles.dividerGroup}>
        <View style={styles.divider}></View>
        <Text style={styles.dividerText}>OR</Text>
        <View style={styles.divider}></View>
      </View>

      <View style={styles.secondaryButtonGroup}>
        <TouchableOpacity style={[styles.secondaryButton, { borderColor: '#4285F4' }]}>
          <Image 
            source={require("@/assets/images/google.png")} 
            style={{ width: 24, height: 24 }}
          />
          <Text style={[styles.secondaryButtonText, { color: '#4285F4' }]}>
            Continue with Google
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.secondaryButton, { borderColor: '#1877F2' }]}>
          <Image 
            source={require("@/assets/images/facebook.png")} 
            style={{ width: 24, height: 24 }}
          />
          <Text style={[styles.secondaryButtonText, { color: '#1877F2' }]}>
            Continue with Facebook
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Dont have an account?</Text>
        <TouchableOpacity onPress={() => router.push('/join')}>
          <Text style={styles.signupSubTitleText}>Join now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}