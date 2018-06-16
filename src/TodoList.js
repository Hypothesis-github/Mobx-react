import { observer } from "mobx-react";
import React from "react";

export default observer(
  class TodoList extends React.Component {

    handleAdd = (e) => {
      if(e.which === 13) {
        let objectMaker = { name: e.target.value , id : Date.now() }
        this.props.store.handleAdd(objectMaker)
        e.target.value = ''
      }
    }

    render() {
      const { data , id } = this.props.store;
      let listOf = data.map((single) => <li key={id}>{single.name}</li>)
      
      return (
        <div>
        <input placeholder='Add' onKeyPress={this.handleAdd} />
        <ul>{listOf}</ul>
        </div>
      );
    }
  }
)
