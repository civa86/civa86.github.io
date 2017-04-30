const data = {
    //TODO get from data.json??
    tabs: [
        {
            title: 'Info',
            panel: 'info'
        },
        {
            title: 'Skills',
            panel: 'skills'
        }
    ]
};
const initState = {
    editor: {
        allTabs: [...data.tabs],
        tabs: [...data.tabs],
        activeTab: 0
    }
};

export default initState;
