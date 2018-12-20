import React from 'react';
import ReactDOM from 'react-dom';
import Account from '../../../components/Account/Account';

it('renders without crashing', () => {
  const div = document.createElement('div');
  componentDidMount() {
    const user = getCurrentUser();
    const data = searchWiningProjects(user);
    console.log(user)

    this.setState({ projectList: data });
  };
  ReactDOM.render(<Account />, div);
  ReactDOM.unmountComponentAtNode(div);
});
