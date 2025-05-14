import { View, Text, StyleSheet } from 'react-native';
import { Clock as Unlock, UserCheck, Package } from 'lucide-react-native';
import Colors from '@/constants/Colors';

interface ActivityCardProps {
  title: string;
  description: string;
  time: string;
  type: 'unlock' | 'visitor' | 'delivery';
}

export default function ActivityCard({ 
  title, 
  description, 
  time, 
  type 
}: ActivityCardProps) {
  const getIcon = () => {
    switch (type) {
      case 'unlock':
        return <Unlock size={22} color={Colors.primary[600]} />;
      case 'visitor':
        return <UserCheck size={22} color={Colors.secondary[600]} />;
      case 'delivery':
        return <Package size={22} color={Colors.warning[600]} />;
      default:
        return <Unlock size={22} color={Colors.primary[600]} />;
    }
  };
  
  const getIconBackgroundColor = () => {
    switch (type) {
      case 'unlock':
        return Colors.primary[50];
      case 'visitor':
        return Colors.secondary[50];
      case 'delivery':
        return Colors.warning[50];
      default:
        return Colors.primary[50];
    }
  };

  return (
    <View style={styles.container}>
      <View style={[
        styles.iconContainer, 
        { backgroundColor: getIconBackgroundColor() }
      ]}>
        {getIcon()}
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <Text style={styles.time}>{time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
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
  },
  title: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: Colors.gray[800],
    marginBottom: 2,
  },
  description: {
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    color: Colors.gray[600],
  },
  time: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: Colors.gray[500],
    marginLeft: 8,
  },
});