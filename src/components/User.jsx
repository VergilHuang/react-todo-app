import React from 'react';
import {connect} from 'react-redux';
import {modifyUser} from '../actions/actions.js';

class User extends React.Component{ 
  constructor(props){
    super(props);
    this.state = {
      inputFocus: false,
      mottoStyle: {
        fontSize: '16px',
        fontWeight: 400,
        paddingTop: '8px',
        letterSpacing: 0
      }
    }
  }
  componentDidUpdate(){
    console.log('updated : '+this.state.inputFocus);
  }
  handleMottoChange = (event) => {
    this.props.dispatch(modifyUser(event.target.value));

  };
  toggleMottoElement = () => {
    this.setState({
      inputFocus: !this.state.inputFocus
    })
    // setTimeout(()=>{
      if(this.state.inputFocus){
        document.getElementById('mInput').focus();
      }
    // },0)
    
  };
  render(){

    // throw new Error('I am crashed');

    let {name, motto} = this.props;
    return (
      <div className="user-view">
        <label>{name}</label>
        <br />
        {
          this.state.inputFocus 
          ? <input id="mInput" 
                   value={motto} 
                   onBlur={this.toggleMottoElement} 
                   onChange={this.handleMottoChange} 
                   style={this.state.mottoStyle}/>
          : <div onClick={this.toggleMottoElement}
                  style={this.state.mottoStyle}>
                  {motto}</div>
        }
      </div>
    );  
  }
};

const mapStateToProps = (state) => ({
  name: state.userInfo.name,
  motto: state.userInfo.motto
});

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
	
});


User = connect(mapStateToProps,mapDispatchToProps)(User);

export default User;
