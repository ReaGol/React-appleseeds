
import React, { Component } from 'react'

class Todo extends Component {
    
  render() {
    return (
      <div>
        <div
          key={Date.now()}
          onClick={() => {
            const {name, completed} = this.props
            this.props.handleClick({name, completed });
          }}
          style={{
            textDecoration: this.props.completed ? "line-through" : "none",
          }}
        >
          <li>
            {this.props.name} {this.props.completed ? "V" : "X"}
          </li>
        </div>
      </div>
    );
  }
}

export default Todo;