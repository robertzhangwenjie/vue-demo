import moment from 'moment';

const dateFilter =  (dateStr, pattern='YYYY-MM-DD hh:mm:ss') => {
    return moment(dateStr).format(pattern)
}

export {dateFilter}