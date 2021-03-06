import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';

import styles from './IndexPage.css';
import fetch from 'node-fetch';

class IndexPage extends React.Component {
  state = {
    list: '',
  }
  componentDidMount() {
    fetch('http://localhost:3000/')
    .then(res => res.json())
    .then(res => (this.setState({
      list: res
    })))
  }
  render() {
    console.log(this.state.list)
    return (
      <div className={styles.normal}>
        <p>
          {
            this.state.list && this.state.list.map(i => (
              <p><Link to={`/${i.id}`}>{i.title}</Link></p>
            ))
          }
        </p>
      </div>
    );
  }
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
