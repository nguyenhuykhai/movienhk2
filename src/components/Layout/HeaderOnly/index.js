import Header from '../components/Header';
import Newsletter from '../../../pages/Newsletter';
import Footer from '../../../pages/Footer';
import Home from '../../../pages/Home';

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <Home />
            {children}
            <Newsletter />
            <Footer />
        </div>
    );
}

export default HeaderOnly;