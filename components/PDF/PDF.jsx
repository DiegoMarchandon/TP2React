import {
    Document,
    Text,
    Page,
    StyleSheet,
    View,
    Image
} from '@react-pdf/renderer'

function Pdf({ apod }) {
    const nasaIcon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/512px-NASA_logo.svg.png'; 
    const styles = StyleSheet.create({
        page: {
            backgroundColor: '#1e3a8a',
            padding: 40,
            fontFamily: 'Helvetica',
        },
        header: {
            textAlign: 'center',
            marginBottom: 20,
        },
        title: {
            color: 'white',
            fontSize: 24,
            marginBottom: 10,
            fontWeight: 'bold',
        },
        subtitleContainer: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 30,
        },
        subtitleText: {
            color: 'white',
            fontSize: 14,
            marginLeft: 10,
        },
        icon: {
            width: 40,
            height: 40,
        },
        body: {
            color: 'white',
            fontSize: 12,
            lineHeight: 1.5,
            textAlign: 'justify',
        }
    });

    return (
        <Document>
            <Page style={styles.page}>
                <View style={styles.header}>
                    <Text style={styles.title}>{apod.title}</Text>
                    <View style={styles.subtitleContainer}>
                        <Image src={nasaIcon} style={styles.icon} />
                        <Text style={styles.subtitleText}>Datos proporcionados por la NASA</Text>
                    </View>
                </View>
                <Text style={styles.body}>{apod.explanation}</Text>
            </Page>
        </Document>
    );
}
export default Pdf;