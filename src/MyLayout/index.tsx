// in src/MyLayout.js
import { Layout } from 'react-admin';
import { MyAppBar } from './MyAppBar';
// import AppBar from './MyAppBar';
// import Sidebar from './MySidebar';
// import Menu from './MyMenu';
// import Notification from './MyNotification';

export const MyLayout = (props: any) => <Layout
    {...props}
    appBar={MyAppBar}
    // sidebar={MySidebar}
    // menu={MyMenu}
    // notification={MyNotification}
/>;

export default MyLayout;