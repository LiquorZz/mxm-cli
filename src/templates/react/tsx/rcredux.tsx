import React, { Component, FC } from 'react';
import { connect } from 'react-redux';

interface Props {}

class rcredux extends Component {
  constructor(props: FC<Props>) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>rcredux</div>;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(rcredux);
