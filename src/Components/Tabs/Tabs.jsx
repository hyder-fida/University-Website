import React, { useState } from 'react';
import "./Tabs.css"
import { tabData } from './tabData';
const Tabs = () => {

    const [currentTab, setCurrentTab] = useState ('1');
    
    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

    return (
        <div className='container'>
            <div className='tabs'>
                {tabData.map((tab, i) =>
                    <button key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</button>
                )}
            </div>
            <div className='content'>
                {tabData.map((tab, i) =>
                    <div key={i}>
                        {currentTab === `${tab.id}` && <div><p className='title'>{tab.title}</p><p>{tab.content}</p></div>}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Tabs;