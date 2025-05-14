import { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  FlatList
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '@/constants/Colors';
import ScreenHeader from '@/components/common/ScreenHeader';
import NotificationItem from '@/components/notifications/NotificationItem';

export default function NotificationsScreen() {
  const [notifications, setNotifications] = useState([
    {
      id: '1',
      title: 'Visitor Request',
      message: 'Michael Chen has requested access for tomorrow at 10:00 AM',
      time: '15 min ago',
      read: false,
      type: 'visitor'
    },
    {
      id: '2',
      title: 'Security Alert',
      message: 'Your front door was unlocked for more than 5 minutes',
      time: '2 hours ago',
      read: false,
      type: 'warning'
    },
    {
      id: '3',
      title: 'Building Announcement',
      message: 'Maintenance scheduled for lobby on Thursday from 9AM-12PM',
      time: '5 hours ago',
      read: true,
      type: 'announcement'
    },
    {
      id: '4',
      title: 'Package Delivered',
      message: 'A package was delivered to your doorstep',
      time: 'Yesterday',
      read: true,
      type: 'delivery'
    },
    {
      id: '5',
      title: 'Guest Access Used',
      message: 'Guest code 1234-AB was used to access your apartment',
      time: 'Yesterday',
      read: true,
      type: 'access'
    },
    {
      id: '6',
      title: 'Building Announcement',
      message: 'Fire alarm test will be conducted next Monday at 11:00 AM',
      time: '2 days ago',
      read: true,
      type: 'announcement'
    },
  ]);
  
  const markAsRead = (id) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };
  
  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, read: true })));
  };
  
  const clearAll = () => {
    setNotifications([]);
  };
  
  const unreadCount = notifications.filter(notification => !notification.read).length;

  // Render header for FlatList
  const renderListHeader = () => (
    <View style={styles.listHeader}>
      <View style={styles.listHeaderLeft}>
        <Text style={styles.notificationCount}>
          {unreadCount} Unread Notifications
        </Text>
      </View>
      <View style={styles.listHeaderRight}>
        <TouchableOpacity onPress={markAllAsRead} style={styles.headerAction}>
          <Text style={styles.headerActionText}>Mark All Read</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={clearAll} style={styles.headerAction}>
          <Text style={styles.headerActionText}>Clear All</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  
  // Render empty state
  const renderEmpty = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyTitle}>No Notifications</Text>
      <Text style={styles.emptyDescription}>
        You're all caught up! New notifications will appear here.
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScreenHeader title="Notifications" />
      
      <FlatList
        contentContainerStyle={styles.scrollContent}
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NotificationItem
            notification={item}
            onPress={() => markAsRead(item.id)}
          />
        )}
        ListHeaderComponent={renderListHeader}
        ListEmptyComponent={renderEmpty}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray[50],
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 32,
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray[200],
  },
  listHeaderLeft: {
    flex: 1,
  },
  listHeaderRight: {
    flexDirection: 'row',
  },
  notificationCount: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: Colors.gray[600],
  },
  headerAction: {
    marginLeft: 16,
  },
  headerActionText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: Colors.primary[600],
  },
  separator: {
    height: 1,
    backgroundColor: Colors.gray[200],
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingVertical: 64,
  },
  emptyTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: Colors.gray[700],
    marginBottom: 8,
  },
  emptyDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.gray[500],
    textAlign: 'center',
    lineHeight: 20,
  },
});