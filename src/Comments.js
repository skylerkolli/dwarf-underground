import React, { Component} from 'react'
import "/.comments.css"

class Comments extends Component {
    constructor() {
        super()
        
        this.state = {
            comment:"",
            comments: []
        }
        this.updateComment = this.updateComment.bind(this)
        this.addComment = this.addComment.bind(this)
    }
    
    updateComment(ev) {
        this.setState({
            comment:ev.target.value
        })
    }
    addComment(ev) {
        const comment = {
            timestamp: new Date(),
            text: this.state.comment
        }
        const state = {...this.state}
        state.comment.push(comment)
        state.comment = ""
        this.setState(state)

    }
    
    
    render() {
        return(
            <div className="comments">
                <textarea value={this.state.comment} onChange={this.updateComment} placeholder= "Enter comment"></textarea>
                <button> onClick={this.addComment} className="button">Submit comment </button>
                {this.state.comments.map((comment, i) => <Comment comment={comment} key={i} />)}
            </div>
        )
        
    }
}
function Comment (props) {
    return (
        <div className="comment">
            <div>{props.comment.text}</div>
        </div>
    )
}

export default Comment