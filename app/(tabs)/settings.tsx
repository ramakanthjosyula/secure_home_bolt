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
import { Bell, Shield, CircleUser as UserCircle, Lock as LockIcon, CircleHelp as HelpCircle, ChevronRight, LogOut } from 'lucide-react-native';
import Colors from '@/constants/Colors';
import ScreenHeader from '@/components/common/ScreenHeader';

export default function SettingsScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [biometricsEnabled, setBiometricsEnabled] = useState(true);
  const [autoLockEnabled, setAutoLockEnabled] = useState(true);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScreenHeader title="Settings" />
      
      <ScrollView 
        style={styles.content}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Summary */}
        <View style={styles.profileSection}>
          <View style={styles.profileAvatar}>
            <Text style={styles.profileInitials}>JD</Text>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Jane Doe</Text>
            <Text style={styles.profileAddress}>Apt 42, Golden Tower</Text>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>
        </View>
        
        {/* Settings Groups */}
        <View style={styles.settingsGroup}>
          <Text style={styles.groupTitle}>Notifications</Text>
          
          <View style={styles.settingsCard}>
            <View style={styles.settingItem}>
              <Bell size={20} color={Colors.primary[600]} style={styles.settingIcon} />
              <View style={styles.settingContent}>
                <Text style={styles.settingTitle}>Push Notifications</Text>
                <Text style={styles.settingDescription}>
                  Receive alerts for security events
                </Text>
              </View>
              <Switch
                value={notificationsEnabled}
                onValueChange={setNotificationsEnabled}
                trackColor={{ false: Colors.gray[300], true: Colors.primary[400] }}
                thumbColor={notificationsEnabled ? Colors.primary[600] : Colors.white}
              />
            </View>
            
            <TouchableOpacity style={styles.settingItem} activeOpacity={0.7}>
              <Bell size={20} color={Colors.primary[600]} style={styles.settingIcon} />
              <View style={styles.settingContent}>
                <Text style={styles.settingTitle}>Notification Preferences</Text>
                <Text style={styles.settingDescription}>
                  Choose which events trigger notifications
                </Text>
              </View>
              <ChevronRight size={20} color={Colors.gray[400]} />
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.settingsGroup}>
          <Text style={styles.groupTitle}>Security</Text>
          
          <View style={styles.settingsCard}>
            <View style={styles.settingItem}>
              <LockIcon size={20} color={Colors.primary[600]} style={styles.settingIcon} />
              <View style={styles.settingContent}>
                <Text style={styles.settingTitle}>Biometric Authentication</Text>
                <Text style={styles.settingDescription}>
                  Use Face ID or fingerprint to access app
                </Text>
              </View>
              <Switch
                value={biometricsEnabled}
                onValueChange={setBiometricsEnabled}
                trackColor={{ false: Colors.gray[300], true: Colors.primary[400] }}
                thumbColor={biometricsEnabled ? Colors.primary[600] : Colors.white}
              />
            </View>
            
            <View style={styles.settingItem}>
              <Shield size={20} color={Colors.primary[600]} style={styles.settingIcon} />
              <View style={styles.settingContent}>
                <Text style={styles.settingTitle}>Auto-Lock Door</Text>
                <Text style={styles.settingDescription}>
                  Automatically lock door after 1 minute
                </Text>
              </View>
              <Switch
                value={autoLockEnabled}
                onValueChange={setAutoLockEnabled}
                trackColor={{ false: Colors.gray[300], true: Colors.primary[400] }}
                thumbColor={autoLockEnabled ? Colors.primary[600] : Colors.white}
              />
            </View>
            
            <TouchableOpacity style={styles.settingItem} activeOpacity={0.7}>
              <LockIcon size={20} color={Colors.primary[600]} style={styles.settingIcon} />
              <View style={styles.settingContent}>
                <Text style={styles.settingTitle}>Change PIN</Text>
                <Text style={styles.settingDescription}>
                  Update your security PIN
                </Text>
              </View>
              <ChevronRight size={20} color={Colors.gray[400]} />
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.settingsGroup}>
          <Text style={styles.groupTitle}>Account</Text>
          
          <View style={styles.settingsCard}>
            <TouchableOpacity style={styles.settingItem} activeOpacity={0.7}>
              <UserCircle size={20} color={Colors.primary[600]} style={styles.settingIcon} />
              <View style={styles.settingContent}>
                <Text style={styles.settingTitle}>Account Information</Text>
                <Text style={styles.settingDescription}>
                  Manage your profile details
                </Text>
              </View>
              <ChevronRight size={20} color={Colors.gray[400]} />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.settingItem} activeOpacity={0.7}>
              <HelpCircle size={20} color={Colors.primary[600]} style={styles.settingIcon} />
              <View style={styles.settingContent}>
                <Text style={styles.settingTitle}>Help & Support</Text>
                <Text style={styles.settingDescription}>
                  Contact building management
                </Text>
              </View>
              <ChevronRight size={20} color={Colors.gray[400]} />
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton} activeOpacity={0.7}>
          <LogOut size={18} color={Colors.error[500]} />
          <Text style={styles.logoutText}>Sign Out</Text>
        </TouchableOpacity>
        
        <Text style={styles.versionText}>Version 1.0.0</Text>
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
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 24,
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 16,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  profileAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.primary[100],
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInitials: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    color: Colors.primary[700],
  },
  profileInfo: {
    marginLeft: 16,
    flex: 1,
  },
  profileName: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: Colors.gray[800],
  },
  profileAddress: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.gray[600],
    marginTop: 2,
  },
  editButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    backgroundColor: Colors.primary[50],
  },
  editButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: Colors.primary[600],
  },
  settingsGroup: {
    marginBottom: 24,
  },
  groupTitle: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: Colors.gray[700],
    marginBottom: 8,
    paddingLeft: 4,
  },
  settingsCard: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray[200],
  },
  settingIcon: {
    marginRight: 16,
  },
  settingContent: {
    flex: 1,
  },
  settingTitle: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: Colors.gray[800],
  },
  settingDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    color: Colors.gray[500],
    marginTop: 2,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.error[50],
    padding: 14,
    borderRadius: 8,
    marginTop: 16,
  },
  logoutText: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: Colors.error[600],
    marginLeft: 8,
  },
  versionText: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: Colors.gray[500],
    textAlign: 'center',
    marginTop: 24,
  },
});