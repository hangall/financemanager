import React, {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import KreissparkasseKoelnView from "./views/KreissparkasseKoelnView";

const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
            <div className="App">
                <Layout>
                    <Header className="header">
                        <div className="logo"/>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            style={{lineHeight: '64px'}}
                        >
                        </Menu>
                    </Header>
                    <Layout>

                        <Sider width={200} style={{background: '#fff'}}>

                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{height: '100%', borderRight: 0}}
                            >
                                <SubMenu key="sub1" title={<span><Icon type="user"/>Konten</span>}>
                                    <Menu.Item key="1">Kreissparkasse Köln</Menu.Item>
                                    <Menu.Item key="2">Sparda Bank</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" title={<span><Icon type="laptop"/>Baufinanzierung</span>}>
                                    <Menu.Item key="5">option5</Menu.Item>
                                    <Menu.Item key="6">option6</Menu.Item>
                                    <Menu.Item key="7">option7</Menu.Item>
                                    <Menu.Item key="8">option8</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" title={<span><Icon type="notification"/>Kredite</span>}>
                                    <Menu.Item key="9">option9</Menu.Item>
                                    <Menu.Item key="10">option10</Menu.Item>
                                    <Menu.Item key="11">option11</Menu.Item>
                                    <Menu.Item key="12">option12</Menu.Item>
                                </SubMenu>
                            </Menu>


                        </Sider>
                        <Layout style={{padding: '24px 24px 24px'}}>
                            <Content style={{background: '#fff', padding: 24, margin: 0, minHeight: 280}}>
                                <KreissparkasseKoelnView/>
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>

            </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
