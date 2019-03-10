import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Comment extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired,
    onDeleteComment: PropTypes.func,
    index: PropTypes.number
  }

  constructor () {
    super()
    this.state = { timeString: '' }
  }

  componentWillMount () {
    this._updateTimeString()
    this._timer = setInterval(
      this._updateTimeString.bind(this),
      5000
    )
  }

  componentWillUnmount () {
    clearInterval(this._timer)
  }

  _updateTimeString () {
    const comment = this.props.comment
    const duration = (+Date.now() - comment.createdTime) / 1000
    this.setState({
      timeString: duration > 3600
        ? `${Math.round(duration / 3600)} hours ago`
        : (duration > 60 ? `${Math.round(duration / 60)} minutes ago`:`${Math.round(Math.max(duration, 1))} seconds ago`)
    })
  }

 
  handleDeleteComment () {
    if (this.props.onDelete) {
      this.props.onDelete(this.props.index)
    }
  }

  render () {
    const comment = this.props.comment
    return (
      <div className='comment'>
        <div className='comment-user'>
          <span className='comment-username'>
            {comment.username}
          </span>：
		  
        </div>
		
		<span>{comment.content}</span>
        <span className='comment-createdtime'>
          {this.state.timeString}
        </span>
        <span
          onClick={this.handleDeleteComment.bind(this)}
          className='comment-delete'>
          Delete
        </span>
      </div>
    )
  }
}