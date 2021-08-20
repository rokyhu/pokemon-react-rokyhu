import React from 'react'
import PageHeader from './PageHeader';
import PageBody from './PageBody';
import PageFooter from './PageFooter';

export default class MainContainer extends React.Component {
    render() {
        return (
            <div className="Main-container">
                <PageHeader menuItems = {this.props.menuItems}/>
                <PageBody />
                <PageFooter />
            </div>
        )
    }
    
}
