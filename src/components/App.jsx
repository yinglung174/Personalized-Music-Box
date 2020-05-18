import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {
  const playlist = [
    { name: 'Branch', src: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/zhiya.mp3' },
    { name: 'Freedom', src: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/ziyounvshen.mp3' },
    { name: 'Normal', src: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/wuyuwuqing.mp3' },
    { name: 'Stuff', src: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/suipian.mp3' },
    { name: 'Bay', src: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/yonghengdegangwan.mp3' },
  ];
  

  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      {notes.map((noteItem, index) => {
        if(index===0){
        return (
          <Footer hasSong="true" content={noteItem.content} index={index} playlist={playlist} />
        );
        }
        }
      )}
      <Footer hasSong="false" />

    </div>
  );
}

export default App;
