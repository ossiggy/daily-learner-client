import React, { Component } from 'react';
import {connect} from 'react-redux';
import ArticleForm from './article-form';
import {fetchAllArticles} from '../actions/';

export default function Dashboard(props) {
 return (
    <div className="dashboard">
      <ArticleForm />
    </div>
  );
}