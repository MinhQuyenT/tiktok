import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

function wrapper({ children }) {
    return (
        <div className={cx('wrapper')} styles="inset: 0px auto auto 20px!important">
            {children}
        </div>
    );
}

export default wrapper;
