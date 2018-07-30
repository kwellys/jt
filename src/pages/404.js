import React from 'react'
import Link from 'gatsby-link'
import Title from '../assets/images/titles/404.png'
import Helmet from "react-helmet";
const NotFoundPage = () => (
  <section className="not-found-page">
    <Helmet title='Page Not Found | JetTechnical '/>
    <img src={Title} alt="404 | Page not found"/>
    <h2 className="not-found-page__title">Page not found</h2>
    <Link className="not-found-page__link" to="/">Back to home page</Link>
  </section>
);

export default NotFoundPage
