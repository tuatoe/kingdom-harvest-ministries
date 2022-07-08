import React, { Component } from 'react'

const Section = ({ title, children, addClasses }) => {
    return (
        <section className={`section ${addClasses}`}>
            <h3>{title}</h3>
            {children}
        </section>
    )
}

export default Section;