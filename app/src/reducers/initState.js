const data = [
    {
        name: 'info',
        dir: true,
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

const
    //TODO fix here...
    extractTab = (list) => list.filter(e => !e.dir),
    flatten = list => list.reduce(
        (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []
    ),
    dataTabs = flatten(data.map(e => {
        if (e.dir && e.children.length) {
            return extractTab(e.children)
        }

        return {
            title: e.name
        };
    }));

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
