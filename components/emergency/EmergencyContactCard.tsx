import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Phone, Shield, User } from 'lucide-react-native';
import Colors from '@/constants/Colors';

interface EmergencyContactCardProps {
  name: string;
  phone: string;
  relationship?: string;
  type: 'security' | 'contact';
}

export default function EmergencyContactCard({
  name,
  phone,
  relationship,
  type,
}: EmergencyContactCardProps) {
  const getIcon = () => {
    switch (type) {
      case 'security':
        return <Shield size={24} color={Colors.primary[600]} />;
      case 'contact':
        return <User size={24} color={Colors.secondary[600]} />;
      default:
        return <User size={24} color={Colors.secondary[600]} />;
    }
  };
  
  const getIconBackgroundColor = () => {
    switch (type) {
      case 'security':
        return Colors.primary[50];
      case 'contact':
        return Colors.secondary[50];
      default:
        return Colors.secondary[50];
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
      
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        {relationship && (
          <Text style={styles.relationship}>{relationship}</Text>
        )}
        <Text style={styles.phone}>{phone}</Text>
      </View>
      
      <TouchableOpacity 
        style={styles.callButton}
        activeOpacity={0.8}
      >
        <Phone size={20} color={Colors.white} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  info: {
    flex: 1,
  },
  name: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: Colors.gray[800],
  },
  relationship: {
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    color: Colors.gray[600],
    marginTop: 2,
  },
  phone: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.primary[700],
    marginTop: 4,
  },
  callButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.success[500],
    alignItems: 'center',
    justifyContent: 'center',
  },
});