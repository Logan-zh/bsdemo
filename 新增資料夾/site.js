
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }


  render() {
    return (
      <div>
        <p>OK!</p>
        <p>{this.state.value}</p>
        {Carousel()}
        {Nav()}
        {Footer()}
      </div>
    );
  }
}

const domContainer = document.querySelector('.root');
ReactDOM.render(<App />, domContainer);