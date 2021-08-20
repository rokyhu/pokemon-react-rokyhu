import React from 'react'
import PageHeader from './PageHeader';
import PageBody from './PageBody';
import PageFooter from './PageFooter';

export default function MainContainer() {
    return (
        <div className="Main-container">
            <PageHeader />
            <PageBody />
            <PageFooter />
        </div>
    )
}
