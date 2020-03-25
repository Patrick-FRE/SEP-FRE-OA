import React from 'react';
import './App.css';
import Layout from './Layout/Layout';

const Content1 = () => <div>Content1</div>
const Content2 = () => <div>Content2</div>
class App extends React.Component {
  render() {

    return(
    <Layout>
      <Content1 />
      <Content2 />
    </Layout>
    )
  };
}

export default App;
