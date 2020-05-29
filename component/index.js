
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }


  render() {
    return (
      <div>
        {Head()}
        {Carousel()}
        {Nav()}
        {Facility()}
        {Collapse()}
        {Maps()}
        {Contact()}
        {Footer()}
      </div>
    );
  }
}

const domContainer = document.querySelector('.root');
ReactDOM.render(<App />, domContainer);