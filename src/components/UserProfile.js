const UserProfile = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>User Profile</Text>
      <Image
        source={profileImage}
        style={styles.profileImage}
      />
      <Text style={styles.userName}>Sam Anderson</Text>
      <Text style={styles.infoText}>Email: sam.anderson@example.com</Text>
      <Text style={styles.infoText}>Member since: Jan 2023</Text>
      <Text style={styles.infoText}>Contact No.: +123 456 7890</Text>
      
      {/* Address Section */}
      <Text style={styles.subTitle}>Address</Text>
      <Text style={styles.infoText}>123 Main St, Cityville, ST, 12345</Text>
      
      {/* Preferences Section */}
      <Text style={styles.subTitle}>Preferences</Text>
      <Text style={styles.infoText}>Notifications: Enabled</Text>
      <Text style={styles.infoText}>Theme: Dark Mode</Text>
      
      {/* Bio Section */}
      <Text style={styles.subTitle}>Bio</Text>
      <Text style={styles.infoText}>
        "Software developer with a passion for creating beautiful and functional applications. Enjoys hiking and photography in spare time."
      </Text>

      {/* Account Settings Section */}
      <Text style={styles.subTitle}>Account Settings</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Delete Account</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    backgroundColor: '#444',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    width: '90%', // Responsive width
    alignSelf: 'center', // Center on the page
  },
  sectionTitle: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  profileImage: {
    width: '30%', // Responsive width for mobile
    height: undefined, // Maintain aspect ratio
    aspectRatio: 1, // Keep the image square
    borderRadius: 50,
    marginVertical: 10,
  },
  userName: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  infoText: {
    color: '#aaa',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 5,
  },
  subTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginVertical: 10,
    alignSelf: 'flex-start',
    width: '100%',
  },
  button: {
    backgroundColor: '#e74c3c',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    width: '100%', // Full width button
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutButton: {
    width: '100%', // Full width button
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#555',
    alignItems: 'center',
    marginTop: 20,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default UserProfile;