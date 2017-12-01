import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import Dashboard from './Dashboard';
import registerServiceWorker from './registerServiceWorker';

const posts = [{
  title: 'hello',
  content: 'hello hello hello',
  dateCreated: '28 November 2017',
  tags: ['hi', 'hey']
},
{
  title: 'goodbye',
  content: 'bye bye bye',
  dateCreated: '28 November 2017',
  tags: ['later', 'bye']  
}]

ReactDOM.render(<Dashboard posts={posts} />, document.getElementById('root'));
registerServiceWorker();
