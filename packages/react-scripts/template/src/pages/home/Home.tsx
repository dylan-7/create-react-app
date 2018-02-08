import * as React from 'react';
import { connect } from 'dva';
import * as styles from './Home.less';
import { Layout } from 'antd';
import Main from '../main/Main'

@(connect(({ login }: any) => ({ login })) as any)
export default class Home extends React.PureComponent<HomeProps, any> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {};
  }

  checkLogin(props: HomeProps) {
    if (!props.login || !props.login.hasLogin) {
      // props.dispatch(push({pathname: '/login'}));
    }
  }

  componentDidMount() {
    this.checkLogin(this.props);
  }

  componentWillReceiveProps(nextProps: HomeProps) {
    this.checkLogin(nextProps);
  }

  render() {
    return (
      <Layout className={styles.wrapper}>
        <Layout.Header className={styles.header}>
          header
        </Layout.Header>
        <Layout>
          <Layout.Sider>
          sider
          </Layout.Sider>
        </Layout>
        <Layout className={styles.container}>
          <Layout.Content>
            content
          </Layout.Content>
        </Layout>
        <Layout>
          <Layout.Footer>
            footer
          </Layout.Footer>
        </Layout>
      </Layout>
    );
  }
}

interface HomeProps {
  login?: any;
  dispatch?: any;
}
