const data = [
    {
        name: 'info',
        dir: true,
        collapsed: true,
        children: [
            { name: 'bio' },
            { name: 'education' },
            { name: 'interests' }
        ]
    },
    {
        name: 'skills'
    }
];

const flattenFiles = list => list.reduce((res, e) => {
    if (e.dir !== true) {
        res.push(e.name)
    } else if (e.children.length > 0) {
        return flattenFiles(e.children, res);
    }
    return res;
}, []);

const dataTabs = flattenFiles(data, []);

const initState = {
    editor: {
        fileTree: {
            items: [...data],
            selected: null
        },
        allTabs: [...dataTabs],
        tabs: [...dataTabs],
        activeTab: 0
    }
};

export default initState;
