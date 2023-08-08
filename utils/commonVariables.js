export const statuses = {
    finished: 'Ended',
    inprogress: 'Live',
    notstarted: 'Upcoming',
    canceled: 'Canceled'
}

export const filterData = [
    {
        key: 'All',
        value: 'all'
    },
    {
        key: 'Result',
        value: 'finished'
    },
    {
        key: 'Live',
        value: 'inprogress'
    },
    {
        key: 'Upcoming',
        value: 'notstarted'
    }
]

export const filterStatuses = {
    'All': '',
    'Result': 'finished',
    'Live': 'inprogress',
    'Upcoming': 'notstarted'
};

export const tableHeaders = [
    '#', 'Game', 'Score', 'Status', ''
]

export const mobileTableHeaders = [
    'Game', 'Score', '',
]