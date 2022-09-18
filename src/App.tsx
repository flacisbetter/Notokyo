import { useState } from "react";

type Note = {
  id: number;
  date: number;
  completed: boolean;
  title: string;
  text: string;
};

function App() {
  const [id, setId] = useState(2);
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = () => {
    const note: Note = {
      id: id,
      date: 0,
      completed: false,
      title: "note added",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat orci lectus, nec pulvinar ex fermentum vel. Duis eget neque sollicitudin, ornare leo et, tincidunt ligula. Fusce maximus eu orci laoreet porttitor. Donec orci elit, congue in efficitur sed, varius in quam. Nullam varius elementum mi nec tincidunt. Mauris vitae vulputate velit. Nam nec quam magna. Nulla malesuada non eros vel lacinia. Nunc vestibulum odio vehicula pretium dapibus. Nullam euismod quam a turpis mattis ullamcorper. Suspendisse potenti. Praesent vitae malesuada lorem, at venenatis sem. ",
    };
    notes.push(note);

    setNotes(notes);
    setId(id + 1);
  };

  const notesList = notes.map((note) => (
    <li
      className="m-1 bg-green-600 hover:bg-green-300 text-white font-bold py-2 px-4 rounded"
      key={note.id}
    >
      <div>{note.title}</div>
      <div>{note.text}</div>
    </li>
  ));

  return (
    <div className="min-h-screen p-3">
      <h1 className="text-6xl pb-3">Notokyo</h1>
      <h2 className="text-2xl pb-5">The Simple Note Taking App.</h2>
      <header>
        <button
          className="m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            addNote();
          }}
        >
          Add Note
        </button>
      </header>
      <ul>{notesList}</ul>
    </div>
  );
}

export default App;
