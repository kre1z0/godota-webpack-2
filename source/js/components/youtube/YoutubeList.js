import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { getYoutubeChannelsList, getYoutubeVideosFromChannel } from '../../actions/youtube'

class YoutubeList extends Component {
  static propTypes = {
    channels_list: PropTypes.array,
    getYoutubeChannelsList: PropTypes.func,
    getYoutubeVideosFromChannel: PropTypes.func,
    active_youtube_list: PropTypes.bool,
  }

  constructor(props) {
    super(props)
    this.state = {
      selectedIndex: '',
    }
  }

  componentDidMount() {
    this.props.getYoutubeChannelsList()
  }

  handleClick(item) {
    this.setState({ selectedIndex: item.id || item.youtubeId })
    this.props.getYoutubeVideosFromChannel(item)
  }

  render() {
    return (
      <div className='youtube-list' >
        <ul>
          {this.props.channels_list.map((item) => {
            const active = classNames({
              active: (this.state.selectedIndex === (item.id || item.youtubeId))
              && this.props.active_youtube_list === true,
            })
            return (
              <li className={active}
                onClick={() => this.handleClick(item)}
                title={item.title}
                key={item.id || item.youtubeId}
              >
                {item.name}
              </li>)
          })}
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({
    channels_list: state.Youtube.channels_list,
    active_youtube_list: state.Youtube.active_youtube_list,
  }),
  { getYoutubeChannelsList, getYoutubeVideosFromChannel },
)(YoutubeList)
