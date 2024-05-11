import {useState} from "react";

function NoteForm() {

    const [noteText, setNoteText] = useState("Notes go here.");

    const textAreaStyle = {
        width: "100%",
        backgroundColor: "transparent",
        border:"none",
        padding:"10px",
        
    }


    return (
        <form>
            <textarea 
                value={noteText}
                onChange={e => setNoteText(e.target.value)}
                style={textAreaStyle}
            >
            </textarea>
        </form>
        );
}

export default NoteForm;
