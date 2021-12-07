import { AppBar, UserMenu, MenuItemLink } from 'react-admin';
import SettingsIcon from '@material-ui/icons/Settings';
import { forwardRef } from 'react';

const ConfigurationMenu = forwardRef<any, any>((props, ref) => (
    <MenuItemLink
        ref={ref}
        to="/metamaskLogin"
        primaryText="MetaMask"
        leftIcon={<SettingsIcon />}
        // onClick={onClick} // close the menu on click
        // dense={true}
        onClick={props.onClick}
        sidebarIsOpen
    />
));

const MyUserMenu = (props: any) => (
    <UserMenu {...props}>
        <ConfigurationMenu />
    </UserMenu>
);

export const MyAppBar = (props: any) => <AppBar {...props} userMenu={<MyUserMenu />} />;