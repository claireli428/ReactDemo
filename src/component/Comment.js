import React from 'react';

class Comment extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            editing : false
        };
        this.edit = this.edit.bind(this);
        this.remove = this.remove.bind(this);
        this.save = this.save.bind(this);
    }

    edit() {
        this.setState({editing: true});
    }

    remove() {
        console.log('removing')
        this.props.removeComment(this.props.index);
    }

    save(){
        this.setState({editing: false});
        this.props.updateComment(this.refs.newComment.value, this.props.index);
    }

    saveMode() {
        return (
            <div>
                <h2>{this.props.children}</h2>
                <button onClick={this.edit}>edit</button>
                <button onClick={this.remove}>remove</button>
            </div>
        )
    }

    editMode() {
        return (
            <div>
                <textarea ref="newComment" defaultValue={this.props.children}></textarea>
                <button onClick={this.save}>save</button>
            </div>

        );
    }

    render() {
        return this.state.editing ? this.editMode() : this.saveMode();

    }

}

export default  Comment