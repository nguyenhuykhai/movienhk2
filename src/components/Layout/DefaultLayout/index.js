import Header from '../components/Header';
import Home from '../../../pages/Home'
import Newsletter from '../../../pages/Newsletter'
import Coming from '../../../pages/Coming'
import Footer from '../../../pages/Footer'
import styles from './Default.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Home />
            {children}
            <Coming />
            <Newsletter />
            <Footer />
        </div>
    );
}

export default DefaultLayout;