import { Text, View } from '@/components/Themed';
import { Pressable, SafeAreaView, ScrollView, StyleSheet } from 'react-native';

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>How are you feeling today? 💭</Text>

          {/* Mood Selection Buttons */}
          <View style={styles.buttonContainer}>
            <Pressable style={[styles.moodButton, { backgroundColor: '#FF6B6B' }]}>
              <Text style={styles.buttonText}>😢 Sad</Text>
            </Pressable>
            <Pressable style={[styles.moodButton, { backgroundColor: '#FFD166' }]}>
              <Text style={styles.buttonText}>😐 Normal</Text>
            </Pressable>
            <Pressable style={[styles.moodButton, { backgroundColor: '#06D6A0' }]}>
              <Text style={styles.buttonText}>😊 Happy</Text>
            </Pressable>
          </View>

          {/* Tasks Section */}
          <Text style={styles.sectionTitle}>🚀 What do you want to do?</Text>
          <View style={styles.tasksContainer}>
            <Pressable style={styles.taskButton}>
              <Text style={styles.taskText}>📅 Today’s Task</Text>
            </Pressable>
            <Pressable style={styles.taskButton}>
              <Text style={styles.taskText}>📖 Write Journal</Text>
            </Pressable>
            <Pressable style={styles.taskButton}>
              <Text style={styles.taskText}>🏃‍♂️ Exercise</Text>
            </Pressable>
            <Pressable style={styles.taskButton}>
              <Text style={styles.taskText}>🎵 Listen to Spotify</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1a1a1a', // Dark background
  },
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60,
    paddingBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#ffffff', // Light text for dark mode
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginTop: 40,
    marginBottom: 20,
    color: '#ffffff', // Light text for dark mode
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  moodButton: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  tasksContainer: {
    width: '90%',
    alignItems: 'stretch',
  },
  taskButton: {
    backgroundColor: '#2d2d2d', // Darker task buttons
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  taskText: {
    fontSize: 16,
    color: '#ffffff', // Light text for dark mode
    fontWeight: '500',
  },
});
