import React from 'react';
import { connect } from 'react-redux';
import store from '../../store/store';
import { changeSearchField } from '../../actions/actionsCreaters'

class Input extends React.Component {
  onSearchInput = (event) => {
    const { value } = event.target
    this.props.changeSearch(value)
  }

  render() {
    return (
      <React.Fragment>
        <input type="search" className="search" style={style} onChange={this.onSearchInput}
          placeholder='Type something to search...' />
      </React.Fragment>
    )
  }
}

const style = {
  minWidth: '250px',
  padding: '8px',
  border: '1px solid #cdd3d9',
  borderRadius: '5px',
  marginRight: '10px',
  outline: 'none',
  marginRight: '50px'
}

const mapStateToProps = (state) => {
  const { skillsStore } = state;
  return { skills: skillsStore }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeSearch: (value) => dispatch(changeSearchField(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Input)