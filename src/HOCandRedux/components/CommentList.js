import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Comment from './Comment'

export default class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.array,
    onDelete: PropTypes.func
  }

  static defaultProps = {
    comments: []
  }
  
  
  handleDeleteComment (index) {
	
    if (this.props.onDelete) {
      this.props.onDelete(index)
    }
  }

  render() {
	console.log('comments:'+JSON.stringify(this.props.comments))  
    return (
      <div>
        {this.props.comments.map((comment, i) =>
          <Comment
            comment={comment}
            key={i}
            index={i}
            onDelete={this.handleDeleteComment.bind(this)} />
        )}
      </div>
    )
  }
}