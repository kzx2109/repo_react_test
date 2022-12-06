import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon ,faSun} from '@fortawesome/free-solid-svg-icons';
import '../styles/_app.scss';
import '../../../styles/_dark-mode.scss';
// function Click(){
//   let isclick = false;
//   // isclick = !isclick;
//   if(isclick){
//     isclick=!isclick;
//     console.log(isclick);
//   }else if(!isclick){
//     isclick=!isclick;
//     console.log(isclick);
//   }
  // const isC = isclick;
  
// }

// class Click extends Component{
//   constructor(props){
//     super(props);
//     this.state = {isclick:false};

//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick(){
//       this.setState(prevState =>({
//       isclick:!prevState.isclick
//     }));
//   }
//   render(){
//     return (
//       <button className="app__dark-mode-btn icon level-right" onClick={this.handleClick}  >
//         {this.state.isclick? <FontAwesomeIcon icon={faMoon}/> : <FontAwesomeIcon icon={faSun}/>}
//       </button>
//     );
//   }
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Click />);

const clickbtn=()=>{
  var isclick = false;
  isclick = !isclick;
  console.log(isclick);
}

function App() {
  return (
    <div className="app">
      <div className="level">
        <div>
          <h1 className="title">Dark Mode Challenge</h1>
        </div>
        {/* --The button that should toggle dark mode-- */}
        {/* <button className="app__dark-mode-btn icon level-right" onClick={clickbtn}  >
          <FontAwesomeIcon icon={faMoon} />
        </button> */}
        <button className="app__dark-mode-btn icon level-right"  onClick={clickbtn}  >
          <FontAwesomeIcon icon={faSun} />
        </button>
       
      </div>
      <div className="columns">
        <div className="column">
          <p>Lollipop powder powder. Cotton candy caramels chupa chups halvah muffin caramels apple pie topping cake. Topping chocolate bar pastry chocolate cake. Cupcake tart jujubes dragée jelly-o icing sugar plum. Chocolate bar lollipop candy canes. Biscuit croissant apple pie pudding caramels wafer tart tootsie roll macaroon. Croissant tiramisu chocolate bar carrot cake lemon drops halvah.</p>
        </div>
        <div className="column">
          <p>Marshmallow tiramisu liquorice bear claw chocolate bar bear claw tart. Muffin chupa chups pie. Brownie apple pie topping lemon drops marzipan toffee. Pudding macaroon icing ice cream bonbon cake tart. Pudding sugar plum chocolate cake cake biscuit pastry pastry chocolate bar tart. Lemon drops dessert gummies icing.</p>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Name" />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Email" />
        </div>
      </div>

      <section className="section">
        <div className="buttons level-right">
          <a className="button is-primary">Save</a>
          <a className="button is-link">Submit</a>
        </div>
      </section>
    </div>
  );
}

export default App;

