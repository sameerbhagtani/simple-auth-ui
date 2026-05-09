import { StyleSheet, Text, View } from "react-native";

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>
                Don't have an account?{" "}
                <Text style={styles.footerLink}>Sign Up.</Text>
            </Text>

            <Text style={[styles.footerText, styles.footerLink]}>
                Forgot your password?
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        alignItems: "center",
        gap: 5,
    },
    footerText: {
        fontSize: 14,
    },
    footerLink: {
        color: "#1eae19",
    },
});
