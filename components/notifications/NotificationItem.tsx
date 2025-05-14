import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { 
  Bell, 
  UserCheck, 
  ShieldAlert, 
  Package, 
  Lock 
} from 'lucide-react-native';
import Colors from '@/constants/Colors';

interface NotificationItemProps {
  notification: {
    id: string;
    title: string;
    message: string;
    time: string;
    read: boolean;
    type: 'visitor' | 'warning' | 'announcement' | 'delivery' | 'access';
  };
  onPress: () => void;
}

export default function NotificationItem({ 
  notification, 
  onPress 
}: NotificationItemProps) {
  const { title, message, time, read, type } = notification;
  
  const getIcon = () => {
    switch (type) {
      case 'visitor':
        return <UserCheck size={22} color={Colors.primary[600]} />;
      case 'warning':
        return <ShieldAlert size={22} color={Colors.warning[600]} />;
      case 'announcement':
        return <Bell size={22} color={Colors.secondary[600]} />;
      case 'delivery':
        return <Package size={22} color={Colors.success[600]} />;
      case 'access':
        return <Lock size={22} color={Colors.primary[600]} />;
      default:
        return <Bell size={22} color={Colors.secondary[600]} />;
    }
  };
  
  const getIconBackgroundColor = () => {
    switch (type) {
      case 'visitor':
        return Colors.primary[50];
      case 'warning':
        return Colors.warning[50];
      case 'announcement':
        return Colors.secondary[50];
      case 'delivery':
        return Colors.success[50];
      case 'access':
        return Colors.primary[50];
      default:
        return Colors.secondary[50];
    }
  };

  return (
    <TouchableOpacity 
      style={[
        styles.container, 
        read ? styles.containerRead : styles.containerUnread
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={[
        styles.iconContainer, 
        { backgroundColor: getIconBackgroundColor() }
      ]}>
        {getIcon()}
      </View>
      
      <View style={styles.content}>
        <Text style={[
          styles.title, 
          read ? styles.titleRead : styles.titleUnread
        ]}>
          {title}
        </Text>
        <Text style={styles.message}>{message}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
      
      {!read && <View style={styles.unreadDot} />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  containerUnread: {
    backgroundColor: Colors.primary[50],
  },
  containerRead: {
    backgroundColor: Colors.white,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  content: {
    flex: 1,
    marginRight: 8,
  },
  title: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    marginBottom: 4,
  },
  titleUnread: {
    color: Colors.gray[800],
  },
  titleRead: {
    color: Colors.gray[700],
  },
  message: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.gray[600],
    lineHeight: 20,
  },
  time: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: Colors.gray[500],
    marginTop: 6,
  },
  unreadDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.primary[600],
    marginLeft: 8,
  },
});