import React from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView, StyleSheet } from 'react-native';

const TermsAndConditionsModal = ({ modalVisible, closeModal }) => {

    const todayDate = React.useMemo(() => {
        const moment = require('moment');
        return moment().format('YYYY-MM-DD');
    }, []);
return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
    >
        <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.header}>Terms and Conditions of Use of the Dog Walkers App</Text>
                    <Text style={styles.sectionTitle}>1. Acceptance of Terms</Text>
                    <Text>By using the Dog Walkers App, you agree to these Terms and Conditions of Use ("Terms"). If you do not agree to these Terms, do not use the App.</Text>
                    <Text style={styles.sectionTitle}>2. User Information</Text>
                    <Text>When creating an account on the App, you will provide various information, such as name, address, phone number, email, photo, information about your pet, and other relevant data ("User Data").</Text>
                    <Text style={styles.sectionTitle}>3. Use of User Data</Text>
                    <Text>By accepting these Terms, you authorize the use of your User Data for the following purposes:</Text>
                    <Text style={styles.subsection}>- Service provision: to provide dog walking services, including pet search and delivery, user communication, and other related activities.</Text>
                    <Text style={styles.subsection}>- App improvement: to enhance the App and its services, including usage data analysis, development of new features, and customization of the user experience.</Text>
                    <Text style={styles.subsection}>- Marketing and advertising: to send information about products, services, and promotions from the App and its partners, including via email, SMS, push notifications, and other forms of communication.</Text>
                    <Text style={styles.subsection}>- Security and protection: to prevent fraud, protect the App and its users, and comply with legal obligations.</Text>
                    <Text style={styles.subsection}>- Other purposes: for other purposes that are informed to you at the time of User Data collection, or that are compatible with the purposes described above.</Text>
                    <Text style={styles.sectionTitle}>4. Sharing of User Data</Text>
                    <Text>The App may share your User Data with:</Text>
                    <Text style={styles.subsection}>- Service providers: so that dog walkers can perform the contracted services.</Text>
                    <Text style={styles.subsection}>- Partners: for marketing and advertising purposes, as described above.</Text>
                    <Text style={styles.subsection}>- Competent authorities: when necessary to fulfill legal obligations or to protect the rights of the App and its users.</Text>
                    <Text style={styles.sectionTitle}>5. User Data Security</Text>
                    <Text>The App uses security measures to protect your User Data against unauthorized access, misuse, disclosure, alteration, or destruction. However, no security measure is 100% effective, and the App cannot guarantee the total security of your User Data.</Text>
                    <Text style={styles.sectionTitle}>6. User Rights</Text>
                    <Text>You have the following rights regarding your User Data:</Text>
                    <Text style={styles.subsection}>- Access: request access to your User Data and obtain information about how it is being processed.</Text>
                    <Text style={styles.subsection}>- Correction: request the correction of your User Data if it is incorrect or incomplete.</Text>
                    <Text style={styles.subsection}>- Deletion: request the deletion of your User Data, when possible.</Text>
                    <Text style={styles.subsection}>- Limitation of processing: request that the processing of your User Data be limited in certain situations.</Text>
                    <Text style={styles.subsection}>- Objection to processing: request that the App stop processing your User Data for certain purposes.</Text>
                    <Text style={styles.subsection}>- Data portability: request that the App provide your User Data in a structured, commonly used, and machine-readable format, so that you can transmit it to another controller.</Text>
                    <Text>To exercise any of these rights, you can contact the App via email at [email address].</Text>
                    <Text style={styles.sectionTitle}>7. Changes to the Terms</Text>
                    <Text>The App may change these Terms at any time. The changes will take effect from the date of their publication on the App. If you do not agree with the changes, you may cancel your account on the App.</Text>
                    <Text style={styles.sectionTitle}>8. General Provisions</Text>
                    <Text>These Terms will be governed and interpreted in accordance with the laws of the Republic of Portugal.</Text>
                    <Text style={styles.sectionTitle}>9. Jurisdiction</Text>
                    <Text>The competent court to settle any dispute related to these Terms will be the District Court of Setúbal, Portugal.</Text>
                    <Text style={styles.sectionTitle}>10. Term</Text>
                    <Text>These Terms will remain in effect indefinitely.</Text>
                    <Text style={styles.sectionTitle}>11. Consent</Text>
                    <Text>By accepting these Terms, you declare that you have read, understood, and agreed to all of their provisions.</Text>
                    <Text style={styles.appName}>Dog Walkers</Text>
                    <Text style={styles.date}>{todayDate}</Text>
                </ScrollView>
                <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                    <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
            </View>
        </View>
    </Modal>
);
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '90%',
        maxHeight: '80%',
    },
    scrollView: {
        marginBottom: 20,
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 5,
    },
    subsection: {
        marginLeft: 10,
        marginBottom: 5,
    },
    appName: {
        fontSize: 14,
        marginTop: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    date: {
        fontSize: 12,
        marginTop: 10,
        textAlign: 'center',
        marginBottom: 20,
        textAlign: 'center',
    },
    closeButton: {
        backgroundColor: '#2196F3',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    closeButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default TermsAndConditionsModal;
