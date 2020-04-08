import React from 'react';

export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            f: []
        }
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
            <div key={e.id}>
                <span>{e.title}</span>
            </div>
        )
    )
    return (
        <div className="DATA">{data}</div>
    );
  }
}
  
