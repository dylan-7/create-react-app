import * as React from 'react';
import { connect, Dispatch, SubscriptionAPI } from 'dva';
import styled from 'styled-components';
import { HomeStore } from './Home.model';

const Layout = styled.div`
  .header {
    font-size: 40px;
    line-height: 80px;
    padding: 40px;
  }
  .content {
    padding: 40px;
  }
`;

@(connect(({ home }: any) => ({ home })) as any) // tslint:disable-line
export default class Home extends React.PureComponent<HomeProps, HomeState> {

  state: HomeState = {} ;

  componentDidMount() {
    const { dispatch } = this.props as SubscriptionAPI;
    dispatch({ type: 'home/query' });
  }

  render() {
    return (
      <Layout>
        <div className="header">
          Welcome to joys-react-h5-scripts
        </div>
        <div>
          <div className="content">
            <div>
              <h1>CSS 书写顺序</h1>
              <p>
                位置(position, top, right, bottom, left, z-index)<br/>
                尺寸(display，width, height, padding, margin, overflow)<br/>
                文字(font, line-height, letter-spacing, color, text-align)<br/>
                视觉(cursor, background, border, content, opacity, transform)<br/>
                动画(animation, transition)<br/>
                <a href="https://github.com/twitter/recess/blob/master/lib/lint/strict-property-order.js#L36">
                  完整顺序 (twitter)
                </a>
              </p>
            </div>
            <div>
              <h1>日志格式</h1>
              <p>
                [F] Fixed #2245: 修复一项 BUG<br/>
                [A] Feature #1190: new feature added. 添加了一项新功能<br/>
                [A] Added #2108: same as feature. 添加了一项新功能<br/>
                [R] Removed #985: 移除<br/>
                [I] Improved #186: 改进/提升<br/>
              </p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

interface HomeProps {
  home?: HomeStore;
  dispatch?: Dispatch;
}
interface HomeState {
}
