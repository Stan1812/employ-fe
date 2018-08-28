import React, { Component } from 'react';
import { connect } from 'dva';

class Company extends Component {
  state = {};
  render() {
    return <div>fuick</div>;
  }
}

export default connect(company => {
  company;
})(Company);
