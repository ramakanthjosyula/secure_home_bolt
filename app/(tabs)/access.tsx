import { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity,
  Switch 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Key, Clock, UserPlus, ChevronRight, Mail, CircleCheck as CheckCircle2, Circle as XCircle } from 'lucide-react-native';
import Colors from '@/constants/Colors';
import ScreenHeader from '@/components/common/ScreenHeader';
import VisitorRequestCard from '@/components/access/VisitorRequestCard';

export default function AccessScreen() {
  const [autoUnlock, setAutoUnlock] = useState(false);

  const generateTempCode = () => {
    // In a real app, this would generate a secure temporary access code
    alert('Temporary access code generated: 4321-AB');
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScreenHeader title="Access Control" />
      
      <ScrollView 
        style={styles.content}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Access Options */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Access Options</Text>
          
          <View style={styles.optionCard}>
            <TouchableOpacity 
              style={styles.optionItem}
              onPress={generateTempCode}
              activeOpacity={0.7}
            >
              <View style={styles.optionIconContainer}>
                <Key size={20} color={Colors.primary[600]} />
              </View>
              <View style={styles.optionContent}>
                <Text style={styles.optionTitle}>Generate Guest Code</Text>
                <Text style={styles.optionDescription}>
                  Create a temporary access code for visitors
                </Text>
              </View>
              <ChevronRight size={20} color={Colors.gray[400]} />
            </TouchableOpacity>
            
            <View style={styles.divider} />
            
            <TouchableOpacity 
              style={styles.optionItem}
              activeOpacity={0.7}
            >
              <View style={styles.optionIconContainer}>
                <Clock size={20} color={Colors.primary[600]} />
              </View>
              <View style={styles.optionContent}>
                <Text style={styles.optionTitle}>Scheduled Access</Text>
                <Text style={styles.optionDescription}>
                  Set recurring access schedules
                </Text>
              </View>
              <ChevronRight size={20} color={Colors.gray[400]} />
            </TouchableOpacity>
            
            <View style={styles.divider} />
            
            <TouchableOpacity 
              style={styles.optionItem}
              activeOpacity={0.7}
            >
              <View style={styles.optionIconContainer}>
                <UserPlus size={20} color={Colors.primary[600]} />
              </View>
              <View style={styles.optionContent}>
                <Text style={styles.optionTitle}>Add Household Member</Text>
                <Text style={styles.optionDescription}>
                  Give permanent access to family members
                </Text>
              </View>
              <ChevronRight size={20} color={Colors.gray[400]} />
            </TouchableOpacity>
            
            <View style={styles.divider} />
            
            <View style={styles.optionItem}>
              <View style={styles.optionIconContainer}>
                <Mail size={20} color={Colors.primary[600]} />
              </View>
              <View style={styles.optionContent}>
                <Text style={styles.optionTitle}>Auto-Unlock</Text>
                <Text style={styles.optionDescription}>
                  Automatically unlock door when you approach
                </Text>
              </View>
              <Switch
                value={autoUnlock}
                onValueChange={setAutoUnlock}
                trackColor={{ false: Colors.gray[300], true: Colors.primary[400] }}
                thumbColor={autoUnlock ? Colors.primary[600] : Colors.white}
              />
            </View>
          </View>
        </View>
        
        {/* Pending Visitor Requests */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pending Visitor Requests</Text>
          
          <VisitorRequestCard 
            name="Sarah Johnson"
            purpose="Package Delivery"
            time="Today, 2:30 PM - 3:00 PM"
            imageUrl="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
          />
          
          <VisitorRequestCard 
            name="Michael Chen"
            purpose="Maintenance Request"
            time="Tomorrow, 10:00 AM - 11:00 AM"
            imageUrl="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
          />
        </View>
        
        {/* Recent Access Activity */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Access Activity</Text>
          
          <View style={styles.accessActivityCard}>
            <View style={styles.accessItem}>
              <View style={[styles.accessStatusIcon, styles.accessGranted]}>
                <CheckCircle2 size={16} color={Colors.white} />
              </View>
              <View style={styles.accessInfo}>
                <Text style={styles.accessName}>Emma Wilson</Text>
                <Text style={styles.accessTime}>Today, 11:23 AM</Text>
              </View>
              <Text style={styles.accessType}>Household Member</Text>
            </View>
            
            <View style={styles.divider} />
            
            <View style={styles.accessItem}>
              <View style={[styles.accessStatusIcon, styles.accessGranted]}>
                <CheckCircle2 size={16} color={Colors.white} />
              </View>
              <View style={styles.accessInfo}>
                <Text style={styles.accessName}>Guest Code: 9876-CD</Text>
                <Text style={styles.accessTime}>Today, 9:45 AM</Text>
              </View>
              <Text style={styles.accessType}>Temporary Access</Text>
            </View>
            
            <View style={styles.divider} />
            
            <View style={styles.accessItem}>
              <View style={[styles.accessStatusIcon, styles.accessDenied]}>
                <XCircle size={16} color={Colors.white} />
              </View>
              <View style={styles.accessInfo}>
                <Text style={styles.accessName}>Unknown</Text>
                <Text style={styles.accessTime}>Yesterday, 7:18 PM</Text>
              </View>
              <Text style={styles.accessType}>Invalid Code</Text>
            </View>
          </View>
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
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: Colors.gray[800],
    marginBottom: 16,
  },
  optionCard: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 8,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  optionIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.primary[50],
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  optionContent: {
    flex: 1,
  },
  optionTitle: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: Colors.gray[800],
    marginBottom: 2,
  },
  optionDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    color: Colors.gray[500],
  },
  divider: {
    height: 1,
    backgroundColor: Colors.gray[200],
    marginHorizontal: 12,
  },
  accessActivityCard: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 8,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  accessItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  accessStatusIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  accessGranted: {
    backgroundColor: Colors.success[500],
  },
  accessDenied: {
    backgroundColor: Colors.error[500],
  },
  accessInfo: {
    flex: 1,
  },
  accessName: {
    fontFamily: 'Inter-Medium',
    fontSize: 15,
    color: Colors.gray[800],
  },
  accessTime: {
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    color: Colors.gray[500],
  },
  accessType: {
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    color: Colors.primary[600],
  },
});