import React from 'react';

export default class App extends React.Component{
  state = {
    f: []
  }

  componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/todos').then(
          result => result.json()
      ).then(
          data => {
              this.setState({f: data})
        }
      )
  }

  render(){
    let data = this.state.f.map(
        e => (
            <div className={e.id}>
                <span>{e.title}</span>
            </div>
        )
    )
    return (
        <div className="DATA">{data}</div>
    );
  }
}
  
