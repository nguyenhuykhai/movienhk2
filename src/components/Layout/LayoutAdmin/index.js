import Header from '../components/Header';
import Footer from '../../../pages/Footer';

function LayoutAdmin({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}

export default LayoutAdmin;