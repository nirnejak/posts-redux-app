import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createPost } from '../store/actions/postActions'

class PostForm extends Component {
  state = {
    title: '',
    body: ''
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault()

    this.props.createPost(this.state)
  }

  render() {
    return (
      <div className="row">
        <div className="column">
          <h1 style={{ marginTop: 30 }}>Add Post</h1>
          <form onSubmit={this.onSubmit}>
            <div>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Enter Post Title"
                value={this.state.title}
                onChange={this.onChange}
              />
            </div>
            <div>
              <label htmlFor="body">Body</label>
              <textarea
                name="body"
                id="body"
                cols="30"
                placeholder="Enter Post Body"
                value={this.state.body}
                onChange={this.onChange}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(PostForm)