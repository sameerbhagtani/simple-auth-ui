import { StyleSheet, Text, View } from "react-native";

import Logo from "../components/Logo";

export default function Header() {
    return (
        <View style={styles.header}>
            <Logo />
            <Text style={styles.title}>Sign In</Text>
            <Text style={styles.para}>
                A simple Auth UI made by Sameer Bhagtani
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        gap: 10,
    },
    title: {
        fontSize: 50,
        fontWeight: "600",
        textAlign: "center",
    },
    para: {
        textAlign: "center",
        color: "#6b7280",
        fontSize: 16,
    },
});
