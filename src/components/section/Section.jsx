import React from "react";
import css from '../section/Section.module.css'
import PropTypes from 'prop-types';



export const Section = ({title, children}) => {
 return (
    <section className={css.section}>
      <h2 className={css.title}>{title}</h2>
      {children}
    </section>
  );
};

Section.prototype = {
  title: PropTypes.string,
  children: PropTypes.element
}