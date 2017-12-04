import React from 'react';

export default function Article(props){
  return (
    <article>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <section>
        <span>{props.dateCreated}</span>
        <span>{props.tag}</span>
      </section>
    </article>
  )
}