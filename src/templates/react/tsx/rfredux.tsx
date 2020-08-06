import React, { FC } from 'react';
import { connect } from 'react-redux';

interface PageProps {}

const rfredux: FC<PageProps> = () => {
  return <div></div>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(rfredux);
