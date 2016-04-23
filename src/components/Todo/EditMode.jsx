import React from 'react';

import NewTodo from './NewTodo.jsx';

class EditMode extends React.Component {
  render() {
    return (
      <div>
        <NewTodo />
      </div>
    );
  }
}

export default EditMode;
