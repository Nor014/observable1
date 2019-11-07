import React from 'react';
import { connect } from 'react-redux';

class SkillsList extends React.Component {
  render() {
    const { skills } = this.props
    console.log(skills)

    if (skills.loading) {
      return <p>Loading...</p>
    }

    if (skills.error) {
      return <p>{skills.error}</p>
    }

    return (
      <React.Fragment>
        {skills.items.length > 0 &&
          <ul className='skills-list'>
            {skills.items.map(el => <li className='skill' key={el.id}>{el.name}</li>)}
          </ul>}
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  const { skillsStore } = state;
  return { skills: skillsStore }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillsList)