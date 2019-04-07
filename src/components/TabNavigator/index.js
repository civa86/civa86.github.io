import React from 'react'
import Tabs, { Tab } from './Tabs'
// Style
import './style.scss'

const TabNavigator = props => {
  const { tabs, tabIcons, activeTab, onTabSwitch, onTabClose, onTabPositionChange } = props

  return (
    <div className={`TabNavigator ${tabs.length === 0 ? 'TabNavigator-empty' : ''}`}>
      <Tabs
        active={activeTab}
        onTabSwitch={tab => onTabSwitch(tab)}
        onTabClose={tab => onTabClose(tab)}
        onTabPositionChange={(a, b) => onTabPositionChange(a, b)}
        draggable={true}>
        {tabs.map((value, index) => (
          <Tab key={index} title={value} icon={tabIcons[value]} showClose={true} />
        ))}
      </Tabs>
    </div>
  )
}

export default TabNavigator
