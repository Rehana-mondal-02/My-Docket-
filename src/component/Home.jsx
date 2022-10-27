import React, { useState, useEffect } from "react";
import Note from "../Note";
import CreateArea from "../CreateArea";


function getLocalItem(){
    let list=localStorage.getItem('lists')
    console.log(localStorage.getItem('lists'));
    if(list){
      return JSON.parse(localStorage.getItem('lists'));
    }
    else{
      return [];
    }
  }

function Home(){
    const [notes, setNotes] = useState(getLocalItem);
    function handleClick(newNote) {
      setNotes((prevNotes) => {
        return [...prevNotes, newNote];
  
      })
  
    }
    function handledelete(id) {
      setNotes((prevNotes) => {
        return prevNotes.filter((noteItem, index) => {
          return index !== id;
  });
  
      })
    }
  
    useEffect(() => {
      localStorage.setItem('lists', JSON.stringify(notes))
    }, [notes])
    return<>
       <CreateArea onsubmission={handleClick} />
      {notes.map((noteItem, index) => {
        return <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDeletion={handledelete}
        />;

      })}

    </>;
}

export default Home;