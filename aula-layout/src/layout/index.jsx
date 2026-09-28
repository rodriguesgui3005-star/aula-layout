import Footer from "../components/footer"
import Headers from "../components/header"

export default function Layout({ contant }) {
    return (
        <>
            <Headers />
            {contant}
            <Footer />
        </>

    )
}