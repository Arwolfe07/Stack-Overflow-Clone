import React from 'react'
import Widget from './Widget';
import WidgetTags from './WidgetTags';
import './RightsideBar.css';
const RightsideBar = () => {
    return (
        <aside className='right-sidebar'>
            <Widget />
            <WidgetTags />
        </aside>
    )
}

export default RightsideBar;