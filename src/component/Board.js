import React from 'react';
import Comment from './Comment';

class Board extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            comments: [
                'comment 1',
                'comment 2',
                'comment 3',
            ]
        };
        this.removeComment = this.removeComment.bind(this);
        this.updateComment = this.updateComment.bind(this);
        this.addComment = this.addComment.bind(this);
    }

    removeComment(i) {
        console.log(this.state);
        var arr = this.state.comments;
        arr.splice(i, 1);
        this.setState({comments: arr});
    }

    updateComment(comm, i) {
        var arr = this.state.comments;
        arr[i] = comm;
        this.setState({comments: arr});
    }

    addComment() {
        var arr = this.state.comments;
        arr.push("New Comment");
        this.setState({comments: arr});
    }

    renderComments() {
        return this.state.comments.map((c, i)=> {
            return (<Comment key={i} index={i} updateComment={this.updateComment} removeComment={this.removeComment}>
                {c}</Comment>);
        });
    }

    render() {


        return(
            <div>
                <button onClick={this.addComment}>add</button>
                <div>
                    {this.renderComments()}
                </div>
            </div>
        )
    }
}

export default Board