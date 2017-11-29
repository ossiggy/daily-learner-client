import React from 'react';

export default function Article(props){
  return (
    <article>
      <header>{props.title}</header>
      <main>{props.content}</main>
      <footer>
        <span>{props.dateCreated}</span>
        <span>{props.tag}</span>
      </footer>
    </article>
  )
}