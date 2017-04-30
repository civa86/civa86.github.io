const data = {
    //TODO get from data.json??
    tabs: [
        {
            title: 'info'
        },
        {
            title: 'skills'
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
