import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { CircleCheck as CheckCircle2, Circle as XCircle, Clock } from 'lucide-react-native';
import Colors from '@/constants/Colors';

interface VisitorRequestCardProps {
  name: string;
  purpose: string;
  time: string;
  imageUrl: string;
}

export default function VisitorRequestCard({
  name,
  purpose,
  time,
  imageUrl,
}: VisitorRequestCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={{ uri: imageUrl }} 
          style={styles.image} 
        />
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.purpose}>{purpose}</Text>
        </View>
      </View>
      
      <View style={styles.timeContainer}>
        <Clock size={16} color={Colors.gray[500]} />
        <Text style={styles.time}>{time}</Text>
      </View>
      
      <View style={styles.actions}>
        <TouchableOpacity 
          style={[styles.actionButton, styles.rejectButton]}
          activeOpacity={0.8}
        >
          <XCircle size={20} color={Colors.error[500]} />
          <Text style={[styles.actionText, styles.rejectText]}>Reject</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.actionButton, styles.approveButton]}
          activeOpacity={0.8}
        >
          <CheckCircle2 size={20} color={Colors.white} />
          <Text style={[styles.actionText, styles.approveText]}>Approve</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    padding: 16,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: Colors.gray[800],
    marginBottom: 2,
  },
  purpose: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.gray[600],
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.gray[50],
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  time: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.gray[600],
    marginLeft: 8,
  },
  actions: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: Colors.gray[200],
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  rejectButton: {
    backgroundColor: Colors.white,
    borderRightWidth: 1,
    borderRightColor: Colors.gray[200],
  },
  approveButton: {
    backgroundColor: Colors.success[500],
  },
  actionText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    marginLeft: 8,
  },
  rejectText: {
    color: Colors.error[500],
  },
  approveText: {
    color: Colors.white,
  },
});