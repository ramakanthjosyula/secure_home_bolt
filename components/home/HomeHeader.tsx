import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Colors from '@/constants/Colors';
import { Bell } from 'lucide-react-native';

export default function HomeHeader() {
  const unreadNotifications = 3;
  
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.greeting}>Hello,</Text>
        <Text style={styles.name}>Jane Doe</Text>
      </View>
      
      <TouchableOpacity style={styles.notificationButton}>
        <Bell size={24} color={Colors.gray[700]} />
        {unreadNotifications > 0 && (
          <View style={styles.notificationBadge}>
            <Text style={styles.notificationCount}>{unreadNotifications}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  greeting: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.gray[600],
  },
  name: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 22,
    color: Colors.gray[800],
    marginTop: -4,
  },
  notificationButton: {
    position: 'relative',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  notificationBadge: {
    position: 'absolute',
    top: -2,
    right: -2,
    minWidth: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: Colors.error[500],
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4,
  },
  notificationCount: {
    fontFamily: 'Inter-Medium',
    fontSize: 10,
    color: Colors.white,
  },
});