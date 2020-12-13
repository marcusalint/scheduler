import React from 'react';

export default function Empty(props) {

  return (
    <main className="appointment__add">
      <img
        className="appointment__add-buttom"
        src="images/add.png"
        alt="Add"
        onClick={props.onAdd}
        />
    </main>
  )
}