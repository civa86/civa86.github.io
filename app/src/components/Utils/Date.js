import React from 'react';
import moment from 'moment';

/* Constants */
const MONTHS = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio',
    'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre',
    'Dicembre'];

const WEEKDAYS_LONG = ['Domenica', 'Lunedì', 'Martedì',
    'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];

const WEEKDAYS_SHORT = ['Do', 'Lu', 'Ma', 'Me', 'Gi', 'Ve', 'Sa'];

/* Utility Functions */

const isSameDay = (aDay, bDay) => {
    return moment(aDay).format('YYYY-MM-DD') === moment(bDay).format('YYYY-MM-DD');
};

/* REACT Components */

const Date = (props) => {

    let {
        value,
        locale,
        format
    } = props;

    if (!locale) {
        locale = 'en'
    }

    if (!format) {
        format = 'YYYY-MM-DD'
    }

    moment.locale(locale);

    return <span>{moment(value).format(format)}</span>;
};

const DateDiff = (props) => {

    const
        a = moment(props.to),
        b = moment(props.from);

    let years,
        months,
        days,
        result = '';

    years = a.diff(b, 'year');
    b.add(years, 'years');

    months = a.diff(b, 'months');
    b.add(months, 'months');

    days = a.diff(b, 'days');

    if (years > 0) {
        result += years + ((years === 1) ? ' anno ' : ' anni ')
    }
    if (months > 0) {
        result += (years > 0) ? ', ' : ' ';
        result += months + ((months === 1) ? ' mese' : ' mesi')
    }
    if (days > 0) {
        result += (months > 0) ? ', ' : ' ';
        result += days + ((days === 1) ? ' giorno ' : ' giorni ')
    }

    return <span>{result.trim() || 'in giornata'}</span>;
};

const FromNow = (props) => {
    const {
        value,
        locale
    } = props;

    moment.locale(locale);

    return <span>{moment(value).fromNow()}</span>;
};

export {
    MONTHS,
    WEEKDAYS_LONG,
    WEEKDAYS_SHORT,

    isSameDay,

    Date,
    DateDiff,
    FromNow
};
