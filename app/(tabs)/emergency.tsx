import { useEffect, useRef, useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity,
  Animated,
  Easing,
  Platform
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TriangleAlert as AlertTriangle, Phone, Shield, Users } from 'lucide-react-native';
import Colors from '@/constants/Colors';
import ScreenHeader from '@/components/common/ScreenHeader';
import EmergencyContactCard from '@/components/emergency/EmergencyContactCard';

export default function EmergencyScreen() {
  const [isAlerting, setIsAlerting] = useState(false);
  const pulseAnim = useRef(new Animated.Value(1)).current;
  
  const contacts = [
    {
      id: '1',
      name: 'Building Security',
      phone: '555-123-4567',
      type: 'security'
    },
    {
      id: '2',
      name: 'John Smith',
      phone: '555-987-6543',
      relationship: 'Family',
      type: 'contact'
    },
    {
      id: '3',
      name: 'Sarah Johnson',
      phone: '555-456-7890',
      relationship: 'Friend',
      type: 'contact'
    }
  ];

  useEffect(() => {
    if (isAlerting) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1.2,
            duration: 500,
            easing: Easing.out(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 500,
            easing: Easing.in(Easing.ease),
            useNativeDriver: true,
          })
        ])
      ).start();

      // In a real app, this would trigger actual alerts
      const timeout = setTimeout(() => {
        setIsAlerting(false);
      }, 5000);
      
      return () => clearTimeout(timeout);
    } else {
      pulseAnim.setValue(1);
    }
  }, [isAlerting, pulseAnim]);

  const triggerEmergencyAlert = () => {
    setIsAlerting(true);
    // In a real app, this would also:
    // 1. Send notifications to emergency contacts
    // 2. Alert building security
    // 3. Potentially call emergency services
    // 4. Add haptic feedback on supported devices
    
    if (Platform.OS !== 'web') {
      // This would use expo-haptics in a real implementation
      // Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScreenHeader title="Emergency" />
      
      <ScrollView 
        style={styles.content}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Emergency Alert Button */}
        <View style={styles.alertSection}>
          <Text style={styles.alertTitle}>
            Emergency Alert
          </Text>
          <Text style={styles.alertDescription}>
            Press the button below to immediately notify your emergency contacts and building security.
          </Text>
          
          <Animated.View style={{
            transform: [{ scale: pulseAnim }],
            marginTop: 24,
            marginBottom: 24,
          }}>
            <TouchableOpacity
              style={[
                styles.emergencyButton,
                isAlerting && styles.emergencyButtonActive
              ]}
              onPress={triggerEmergencyAlert}
              disabled={isAlerting}
              activeOpacity={0.8}
            >
              <AlertTriangle size={40} color={Colors.white} />
              <Text style={styles.emergencyButtonText}>
                {isAlerting ? 'Alerting...' : 'Trigger Alert'}
              </Text>
            </TouchableOpacity>
          </Animated.View>
          
          {isAlerting && (
            <View style={styles.alertingStatus}>
              <Text style={styles.alertingStatusText}>
                Sending alerts to your emergency contacts and building security...
              </Text>
            </View>
          )}
        </View>
        
        {/* Emergency Services */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Emergency Services</Text>
          
          <TouchableOpacity style={styles.emergencyService} activeOpacity={0.8}>
            <View style={[styles.serviceIcon, { backgroundColor: Colors.error[100] }]}>
              <Phone size={22} color={Colors.error[600]} />
            </View>
            <View style={styles.serviceContent}>
              <Text style={styles.serviceName}>Call 911</Text>
              <Text style={styles.serviceDescription}>
                Contact emergency services directly
              </Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.emergencyService} activeOpacity={0.8}>
            <View style={[styles.serviceIcon, { backgroundColor: Colors.primary[100] }]}>
              <Shield size={22} color={Colors.primary[600]} />
            </View>
            <View style={styles.serviceContent}>
              <Text style={styles.serviceName}>Building Security</Text>
              <Text style={styles.serviceDescription}>
                Call on-site security personnel
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        
        {/* Emergency Contacts */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Emergency Contacts</Text>
            <TouchableOpacity>
              <Text style={styles.sectionAction}>Add New</Text>
            </TouchableOpacity>
          </View>
          
          {contacts.map(contact => (
            <EmergencyContactCard
              key={contact.id}
              name={contact.name}
              phone={contact.phone}
              relationship={contact.relationship}
              type={contact.type}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray[50],
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  alertSection: {
    marginTop: 16,
    alignItems: 'center',
  },
  alertTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 22,
    color: Colors.gray[800],
    textAlign: 'center',
  },
  alertDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    color: Colors.gray[600],
    textAlign: 'center',
    marginTop: 8,
    maxWidth: '85%',
    lineHeight: 22,
  },
  emergencyButton: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: Colors.error[500],
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.error[500],
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 10,
  },
  emergencyButtonActive: {
    backgroundColor: Colors.error[600],
  },
  emergencyButtonText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: Colors.white,
    marginTop: 8,
  },
  alertingStatus: {
    backgroundColor: Colors.error[100],
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: Colors.error[500],
    marginBottom: 16,
  },
  alertingStatusText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: Colors.error[700],
  },
  section: {
    marginTop: 32,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: Colors.gray[800],
  },
  sectionAction: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: Colors.primary[600],
  },
  emergencyService: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  serviceIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  serviceContent: {
    flex: 1,
  },
  serviceName: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: Colors.gray[800],
    marginBottom: 4,
  },
  serviceDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.gray[600],
  },
});