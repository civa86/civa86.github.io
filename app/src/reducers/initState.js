import dataRaw from '../../data.json';

function flattenFiles (list) {
    return list.reduce((res, e) => {
        if (e.dir !== true) {
            res.push(e.name)
        } else if (e.children.length > 0) {
            return flattenFiles(e.children, res);
        }
        return res;
    }, []);
}

const
    data = JSON.parse(dataRaw),
    dataTabs = flattenFiles(data, []),
    initState = {
        editor: {
            fileTree: {
                items: [...data],
                selected: 'bio.html'
            },
            allTabs: [...dataTabs],
            tabs: [...dataTabs],
            activeTab: 0
        }
    };

export default initState;
