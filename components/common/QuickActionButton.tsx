import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';
import { Video as LucideIcon } from 'lucide-react-native';

interface QuickActionButtonProps {
  icon: LucideIcon;
  label: string;
  onPress: () => void;
}

export default function QuickActionButton({ 
  icon: Icon, 
  label, 
  onPress 
}: QuickActionButtonProps) {
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Icon size={24} color={Colors.primary[600]} />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
    height: 100,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  label: {
    fontFamily: 'Inter-Medium',
    fontSize: 13,
    color: Colors.gray[600],
    marginTop: 8,
    textAlign: 'center',
  },
});