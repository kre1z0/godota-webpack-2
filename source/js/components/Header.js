import React, { Component, PropTypes } from 'react'
import { Link, IndexLink } from 'react-router'
import { connect } from 'react-redux'
import * as routes from '../routes'

class Header extends Component {
  static propTypes = {
    twitch: PropTypes.array,
  }
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentDidMount() {
  }
  render() {
    return (
      <header className='header' >
        <ul>
          <li>
            <IndexLink to='/'>
              Godota
            </IndexLink>
          </li>
          <li>
            <Link to={routes.routeCodes.NEWS} activeClassName='active'>
              News
            </Link>
          </li>
          <li>
            <Link to={routes.routeCodes.FORM} activeClassName='active'>
              form
            </Link>
          </li>
        </ul>
      </header>
    )
  }
}

export default connect(
  state => ({

  }),
  { },
)(Header)
