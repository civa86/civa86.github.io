const GooglePlace = (addressComp) => {
    const addressComponent = parseInput(addressComp);

    function parseInput (addressComponent) {
        if (typeof addressComponent === 'string') {
            return JSON.parse(addressComponent);
        } else if (typeof addressComponent === 'object') {
            return addressComponent;
        } else {
            return null;
        }
    }

    function getState () {
        const country = addressComponent
            .filter(e => e.types.indexOf('country') !== -1)
            .pop();

        let result = null;

        if (country) {
            result = {
                longName: country.long_name,
                shortName: country.short_name
            }
        }

        return result;
    }

    function getCity () {
        const city = addressComponent
            .filter(e => e.types.indexOf('locality') !== -1)
            .pop();

        let result = null;

        if (city) {
            result = {
                longName: city.long_name,
                shortName: city.short_name
            }
        }

        return result;
    }

    return {
        getState,
        getCity
    }
};

export default GooglePlace;
