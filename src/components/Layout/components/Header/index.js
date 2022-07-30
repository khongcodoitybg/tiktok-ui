import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import routesConfig from '~/config/routes';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import { UploadIcon } from '~/components/Icons';
import Search from '../Search';
import Image from '~/components/Image';

const cx = classNames.bind(styles);
const currentUser = true;
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Languge',
            data: [
                {
                    type: 'languge',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'languge',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'languge':
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@quang',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routesConfig.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                <Search />

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload Video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary rounded>
                                Login
                            </Button>
                            {/* <Button rounded className={cx('custom')}>
                            oke
                        </Button> */}
                        </>
                    )}
                    <Menu item={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="data:image/jpeg;base64,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"
                                alt="Nguyen van a"
                                // fallback="" anh du phong
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
