



function Notes() {

    const notesContainerStyle ={
        width: "100%",
        display:"flex",
        flexDirection: "column",
        
    }

    const userNotesContainerStyle = {
        backgroundColor: "rgba(255,255,255,0.3)",
        borderRadius: "5px",
        minHeight:"250px",
    }

    return (
        <section style={notesContainerStyle}>
            <h2>Notepad</h2>
            <main style={userNotesContainerStyle}>
          enter notes here
            </main>
        </section>
        );
}

export default Notes;
