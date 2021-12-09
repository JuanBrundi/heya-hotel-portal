import { AppBar, UserMenu, MenuItemLink, useTranslate } from 'react-admin';
import SettingsIcon from '@material-ui/icons/Settings';
import { forwardRef } from 'react';
import Web3 from 'web3';

const ConfigurationMenu = forwardRef<any, any>((props, ref) => {
    const translate = useTranslate();
    const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
    return (<MenuItemLink
        {...props}
        ref={ref}
        to="/metamaskLogin"
        primaryText={translate("MetaMask")}
        leftIcon={<SettingsIcon />}
        onClick={() => {web3.eth.requestAccounts().then(console.log);}}
    />)
});

const MyUserMenu = (props: any) => (
    <UserMenu {...props}>
        <ConfigurationMenu />
    </UserMenu>
);

export const MyAppBar = (props: any) => <AppBar {...props} userMenu={<MyUserMenu />} />;