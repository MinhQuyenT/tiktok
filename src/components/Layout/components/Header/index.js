import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import image from '~/assets/images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { useEffect } from 'react';

import { Wrapper as PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);

function Header() {
    const [searchresult, setSearchresult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchresult([1, 2]);
        }, 0);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={image} alt="Tiktok" />
                </div>
                <Tippy
                    interactive={true}
                    visible={searchresult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <div>Kết quả</div>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="search accounts and video" spellCheck="false" />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('action')}></div>
            </div>
        </header>
    );
}
export default Header;
