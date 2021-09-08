import React from "react";
import NewMerchForm from "./NewMerchForm";
import MerchList from "./MerchList";

class MerchControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterMerchList: []
    };
  }
  
  handleAddingNewMerchToList = (newMerch) => {
    const newMasterMerchList = this.state.masterMerchList.concat(newMerch);
    this.setState({
      masterMerchList: newMasterMerchList,
      formVisibleOnPage: false,
    });
  };

  handleClick = () => {
    this.setState(prevState => 
      ({formVisibleOnPage: !prevState.formVisibleOnPage}));
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewMerchForm onNewMerchCreation={this.handleAddingNewMerchToList} />
      buttonText = 'Return to Merch List';
    } else {
      currentlyVisibleState = <MerchList merchList = {this.state.masterMerchList} />
      buttonText = 'Add Merch';
    }
    return (
      <>
        {currentlyVisibleState}
        <button className="btn btn-success" onClick={this.handleClick}>{buttonText}</button>
      </>
    );
  }
}

export default MerchControl;