import React from 'react';
import { connect } from 'dva';
import { Route, Link, routerRedux } from 'dva/router';
import { Layout, Menu, Icon } from 'antd';
import Login from '../pages/Login/login';
import Job from '../pages/Job/job';
import Topic from '../pages/Topic/topic';
import Company from '../pages/Company/company';

const { Header, Sider, Content } = Layout;

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    if (!this.props.user.login) {
      return <Login />;
    } else
      return (
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Icon type="home" />
                <span>
                  <Link to={'/home'}>主页</Link>
                </span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="video-camera" />
                <Link to={'/topic'}>
                  <span>话题</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="upload" />
                <Link to={'/company'}>
                  <span>公司</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Icon type="user" />
                <Link to={'/topic'}>
                  <span>设置</span>
                </Link>{' '}
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
            </Header>
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                background: '#fff',
                minHeight: '100vh',
              }}
            >
              <Route path="/home" component={Job} />
              <Route path="/topic" component={Topic} />
              <Route path="/company" component={Company} />
            </Content>
          </Layout>
        </Layout>
      );
  }
}

App.propTypes = {};

export default connect(({ user }) => ({
  user,
}))(App);
