import { useEffect, useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  Platform 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Lock, Clock as Unlock, Video, MoveVertical as MoreVertical, Mail, Clock } from 'lucide-react-native';
import Colors from '@/constants/Colors';
import { BlurView } from 'expo-blur';
import HomeHeader from '@/components/home/HomeHeader';
import ActivityCard from '@/components/home/ActivityCard';
import QuickActionButton from '@/components/common/QuickActionButton';

export default function HomeScreen() {
  const [isLocked, setIsLocked] = useState(true);
  const [lastActivity, setLastActivity] = useState('');

  // Simulating a fetch of the door state and last activity
  useEffect(() => {
    // This would be an API call in a real app
    setTimeout(() => {
      setLastActivity(new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      }));
    }, 500);
  }, []);

  const toggleLock = () => {
    setIsLocked(prev => !prev);
    // In a real app, this would send a command to lock/unlock the door
    setLastActivity(new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    }));
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <HomeHeader />
      
      <ScrollView 
        style={styles.content}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Door Lock Control */}
        <View style={styles.doorCard}>
          <BlurView intensity={80} tint="light" style={styles.doorCardBlur}>
            <Text style={styles.doorCardTitle}>Front Door</Text>
            <View style={styles.doorStatusContainer}>
              <View style={[
                styles.statusIndicator, 
                {backgroundColor: isLocked ? Colors.success[500] : Colors.warning[500]}
              ]} />
              <Text style={styles.doorStatus}>
                {isLocked ? 'Locked' : 'Unlocked'}
              </Text>
              {lastActivity && (
                <View style={styles.lastActivity}>
                  <Clock size={14} color={Colors.gray[500]} />
                  <Text style={styles.lastActivityText}>{lastActivity}</Text>
                </View>
              )}
            </View>
            
            <View style={styles.doorControls}>
              <TouchableOpacity 
                style={[
                  styles.doorButton,
                  isLocked ? styles.doorButtonActive : styles.doorButtonInactive
                ]}
                onPress={toggleLock}
                activeOpacity={0.8}
              >
                <Lock 
                  size={24} 
                  color={isLocked ? Colors.white : Colors.gray[700]} 
                />
                <Text style={[
                  styles.doorButtonText,
                  isLocked ? styles.doorButtonTextActive : styles.doorButtonTextInactive
                ]}>Lock</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={[
                  styles.doorButton,
                  !isLocked ? styles.doorButtonActive : styles.doorButtonInactive
                ]}
                onPress={toggleLock}
                activeOpacity={0.8}
              >
                <Unlock 
                  size={24} 
                  color={!isLocked ? Colors.white : Colors.gray[700]} 
                />
                <Text style={[
                  styles.doorButtonText,
                  !isLocked ? styles.doorButtonTextActive : styles.doorButtonTextInactive
                ]}>Unlock</Text>
              </TouchableOpacity>
            </View>
          </BlurView>
        </View>
        
        {/* Quick Actions */}
        <View style={styles.quickActions}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.quickActionContainer}>
            <QuickActionButton 
              icon={Video} 
              label="View Camera" 
              onPress={() => {}} 
            />
            <QuickActionButton 
              icon={Mail} 
              label="Share Access" 
              onPress={() => {}} 
            />
            <QuickActionButton 
              icon={MoreVertical} 
              label="More" 
              onPress={() => {}} 
            />
          </View>
        </View>
        
        {/* Recent Activity */}
        <View style={styles.recentActivity}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <ActivityCard 
            title="Door Unlocked" 
            description="Front door was unlocked remotely"
            time="10:45 AM"
            type="unlock"
          />
          <ActivityCard 
            title="Visitor Access Granted" 
            description="Access code used by: John Smith"
            time="9:30 AM"
            type="visitor"
          />
          <ActivityCard 
            title="Package Delivered" 
            description="Package left at front door"
            time="Yesterday, 4:15 PM"
            type="delivery"
          />
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
  doorCard: {
    height: 220,
    borderRadius: 16,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    marginTop: 16,
    backgroundColor: Colors.primary[500], // Fallback for Android
  },
  doorCardBlur: {
    flex: 1,
    borderRadius: 16,
    padding: 20,
  },
  doorCardTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    color: Colors.primary[800],
    marginBottom: 16,
  },
  doorStatusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  statusIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  doorStatus: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: Colors.gray[800],
  },
  lastActivity: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  lastActivityText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.gray[600],
    marginLeft: 4,
  },
  doorControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  doorButton: {
    flex: 1,
    height: 56,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 6,
  },
  doorButtonActive: {
    backgroundColor: Colors.primary[600],
  },
  doorButtonInactive: {
    backgroundColor: Colors.gray[200],
  },
  doorButtonText: {
    marginLeft: 8,
    fontFamily: 'Inter-Medium',
    fontSize: 16,
  },
  doorButtonTextActive: {
    color: Colors.white,
  },
  doorButtonTextInactive: {
    color: Colors.gray[700],
  },
  quickActions: {
    marginTop: 24,
  },
  sectionTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: Colors.gray[800],
    marginBottom: 16,
  },
  quickActionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recentActivity: {
    marginTop: 24,
  },
});