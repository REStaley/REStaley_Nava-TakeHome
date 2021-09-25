import logo from './logo.svg';
import './App.css';
import React from 'react';
import { ReactDOM } from 'react';
import { render } from 'react-dom';

function App () {
  return(
    <div className="App">
      <div className="App-header">
         Marketplace
      </div>
      <div className="App-body">
        <div className="App-header-2">
          <p/>
          Your household
          <p/>
        </div>
        Welcome to The Marketplace! Review your household below:
        <p/>
        <Dashboard/>
      </div>
    </div>
  );
}

class Dashboard extends React.Component {
  state = {
    members: [
      {
        id: 1,
        name: "Bud Baxter",
        description: "Household contact",
        favFruit: "Apple"
      },
      {
        id: 2,
        name: "Andy Baxter",
        description: "Household contact",
        favFruit: "Apple"
      },
    ]
  }

  handleNewMember = (nName, nDescription, nFavFruit) => {
    this.addMember(nName, nDescription, nFavFruit);
  }

  addMember = (nName, nDescription, nFavFruit) => {
    const m = {
      id: Date.now(),
      name: nName,
      description: nDescription,
      favFruit: nFavFruit
    }

    this.setState({
      members: this.state.members.concat(m),
    })
  }

  deleteMember = (mId) => {
    this.setState({
      member: this.state.members.filter( m => m.id !== mId ),
    })
  }

  editMember = (attrs) => {
    this.setState({
      members: this.state.members.map((member) => {
        if (member.id === attrs.id) {
          return Object.assign({}, member, {
            name: attrs.name,
            description: attrs.description,
            favFruit: attrs.favFruit,
          });
        } else {
          return member;
        }
      }),
    })
  }

  render(){
    return(
    <div className="App">
      <MemberList
        members={this.state.members}
      />
      <p/>
      <ToggleNewMember
        handleNewMember={this.handleNewMember}
      />
    </div>
    );
  }
}

class MemberList extends React.Component {
  render(){
    return(
      <div className="container">
        {
          this.props.members.map((member) => {
            return(
              <MemberEntry
                name={member.name}
                description={member.description}
                favFruit={member.favFruit}
              />
          )})
        }
      </div>
    );
  }
}

class MemberEntry extends React.Component {
  render(){
    return(
      <div className="card-container">
      <div className="card">
        <div className="card-internal">
          <div className='card-header'>
            {this.props.name}
          </div>
          <p/>
          <div className="container">
            <div className="card-header-2">
              Description: &nbsp;
            </div>
            <div className="card-text">
              {this.props.description}
            </div>
          </div> 
          <p/>
          <div className="container">
            <div className="card-header-2">
              Favorite fruit: &nbsp;
            </div>
            <div className="card-text">
              {this.props.favFruit}
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

class ToggleNewMember extends React.Component {
  state = {
    isOpen: false,
  }

  toggleForm = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render(){
    if(this.state.isOpen){
      return(
        <NewMemberForm
          toggleForm={this.toggleForm}
          handleNewMember={this.props.handleNewMember}
        />
      )
    } else {
      return(
        <button onClick={() => {this.toggleForm()}}>Add new member</button>
      )
    }
  }
}

class NewMemberForm extends React.Component {
  state = {
    name: "",
    description: "",
    favFruit: "",
  }

  handleSubmit = () => {
    this.props.handleNewMember(this.state.name, this.state.description, this.state.favFruit);
    this.props.toggleForm();
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  }

  handleDescriptionChange = (e) => {
    this.setState({ description: e.target.value });
  }

  handleFruitChange = (e) => {
    let fruit = e.target.value;
    console.log("Fruit: ", fruit)
    this.setState({ favFruit: fruit }, () => {
      console.log("NewFruit: ", this.state.favFruit)
    });
    
  }

  render(){
    return(
      <div>
        <form>
          <label>Name</label>
          <input 
            type="text" 
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <label>Description</label>
          <input
            type="text"
            value={this.state.description}
            onChange={this.handleDescriptionChange}
          />
          <label>Favorite Fruit</label>
          <select id="fruit" onChange={this.handleFruitChange}>
            <option value="Apple">Apple</option>
            <option value="Banana">Banana</option>
            <option value="Orange">Orange</option>
            <option value="Mango">Mango</option>
            <option value="Kiwi">Kiwi</option>
            <option value="Durian">Durian</option>
          </select>
        
        <button onClick={() => {this.handleSubmit()}}>
          Submit
        </button>
        <button onClick={() => {this.props.toggleForm()}}>
          Cancel
        </button>
        </form>
      </div>
    )
  }
}

export default App;
