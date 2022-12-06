import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon ,faSun} from '@fortawesome/free-solid-svg-icons';
import AppContainer from './common/containers/App';
import './styles/_main.scss';
import Routes from './routes';
import './styles/_dark-mode.scss';



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

ReactDOM.render(
  <div className='dark-mode'>
    <AppContainer>
      <Routes />
    </AppContainer>
  </div>,
    
  document.getElementById('root')
);
