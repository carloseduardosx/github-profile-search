import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import { createStructuredSelector } from 'reselect';
import { connectivity, user } from '../../redux/modules';
import { callNames } from '../../api';
import { asJS } from '../../helper/immutableHelper';
import NotesForm from './NotesForm';
import Note from './Note';
import pureComponent from '../../helper/componentHelper';

@pureComponent
class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteText: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmitNote = this.onSubmitNote.bind(this);
  }

  onInputChange({ target: { value } }) {
    this.setState({
      noteText: value
    });
  }

  onSubmitNote({ requestApiCallAction, userName, notes }) {
    return () => {
      const message = this.state.noteText.trim();
      if (message.length) {
        requestApiCallAction(
          callNames.STORE_NOTE,
          {
            userName,
            message,
            noteId: notes.size
          },
          user.actions.STORE_USER_NOTE
        );
        this.setState({
          noteText: ''
        });
      }
    };
  }

  render(props) {
    return (
      <div>
        <NotesForm
          value={this.state.noteText}
          onInput={this.onInputChange}
          onSubmitNote={this.onSubmitNote(props)}
        />
        {asJS(props.notes.map((note, i) => <Note note={note} key={i} />))}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  notes: user.selectors.getOrderedUserNotes,
  userName: user.selectors.getUsername
});

const mapDispatchToProps = {
  requestApiCallAction: connectivity.actions.requestApiCall,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
