import React from 'react'

function PageHero({ title }) {
    return (
        <div className='page-hero'>
            <div className='container'>
                <h2 className='title'>{title}</h2>
            </div>
        </div>
    )
}
export default PageHero;