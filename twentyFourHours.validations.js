const _ = require("lodash");
const moment = require('moment');
let timeSlotDetails = [
    {
        "timeSlots": [
            {
                "startsAt": {
                    "day": "Sunday",
                    "time": "10:01"
                },
                "endsAt": {
                    "day": "Sunday",
                    "time": "23:59"
                }
            },
            {
                "startsAt": {
                    "day": "Monday",
                    "time": "01:03"
                },
                "endsAt": {
                    "day": "Monday",
                    "time": "09:59"
                }
            },
            {
                "startsAt": {
                    "day": "Monday",
                    "time": "09:59"
                },
                "endsAt": {
                    "day": "Monday",
                    "time": "10:15"
                }
            }
        ]
    },
    {
        "timeSlots": [
            {
                "startsAt": {
                    "day": "Monday",
                    "time": "10:01"
                },
                "endsAt": {
                    "day": "Monday",
                    "time": "15:59"
                }
            },
            {
                "startsAt": {
                    "day": "Tuesday",
                    "time": "01:03"
                },
                "endsAt": {
                    "day": "Tuesday",
                    "time": "09:59"
                }
            },
            {
                "startsAt": {
                    "day": "Tuesday",
                    "time": "01:03"
                },
                "endsAt": {
                    "day": "Tuesday",
                    "time": "09:59"
                }
            }
        ]
    },
    {
        "timeSlots": [
            {
                "startsAt": {
                    "day": "Tuesday",
                    "time": "10:01"
                },
                "endsAt": {
                    "day": "Tuesday",
                    "time": "15:59"
                }
            },
            {
                "startsAt": {
                    "day": "Wednesday",
                    "time": "01:03"
                },
                "endsAt": {
                    "day": "Wednesday",
                    "time": "09:59"
                }
            }
        ]
    },
    {
        "timeSlots": [
            {
                "startsAt": {
                    "day": "Wednesday",
                    "time": "10:01"
                },
                "endsAt": {
                    "day": "Wednesday",
                    "time": "15:59"
                }
            },
            {
                "startsAt": {
                    "day": "Thursday",
                    "time": "01:03"
                },
                "endsAt": {
                    "day": "Thursday",
                    "time": "09:59"
                }
            }
        ]
    },
    {
        "timeSlots": [
            {
                "startsAt": {
                    "day": "Thursday",
                    "time": "10:01"
                },
                "endsAt": {
                    "day": "Thursday",
                    "time": "15:59"
                }
            },
            {
                "startsAt": {
                    "day": "Friday",
                    "time": "01:03"
                },
                "endsAt": {
                    "day": "Friday",
                    "time": "09:59"
                }
            }
        ]
    },
    {
        "timeSlots": [
            {
                "startsAt": {
                    "day": "Friday",
                    "time": "10:01"
                },
                "endsAt": {
                    "day": "Friday",
                    "time": "15:59"
                }
            },
            {
                "startsAt": {
                    "day": "Saturday",
                    "time": "01:03"
                },
                "endsAt": {
                    "day": "Saturday",
                    "time": "09:59"
                }
            }
        ]
    },
    {
        "timeSlots": [
            {
                "startsAt": {
                    "day": "Saturday",
                    "time": "10:01"
                },
                "endsAt": {
                    "day": "Saturday",
                    "time": "15:59"
                }
            },
            {
                "startsAt": {
                    "day": "Sunday",
                    "time": "01:03"
                },
                "endsAt": {
                    "day": "Sunday",
                    "time": "09:59"
                }
            }
        ]
    }
]

for (let i in timeSlotDetails) {
    let startTime = moment(timeSlotDetails[i].timeSlots[0].startsAt.time, "HH:mm:ss a");
    let endTime = moment(timeSlotDetails[i].timeSlots[timeSlotDetails[i].timeSlots.length - 1].endsAt.time, "HH:mm:ss a");
    endTime = moment(endTime).add(1, 'day');
    let duration = moment.duration(endTime.diff(startTime,));
    let hours = parseInt(duration.asHours());
    var minutes = parseInt(duration.asMinutes()) % 60;
    // Basically 10:01 of today and 10:15 of tmr will hr difference of 24 only.
    // Since we need to neglect both are same time so we cant check more than 24 hrs..
    // SO only checking if there is minute associated with past 24 hrs.. if any minutes difference is there
    // then considering like the 24 hrs validation is failed.e
    if (minutes > 0) {
        console.log(`It failed the 24hrs validation for the weekday starts at ${timeSlotDetails[i].timeSlots[0].startsAt.day}`);
        break;
    }
}
// var startTime = moment('10:01 am', 'HH:mm:ss a');
// var endTime = moment('10:15 am', 'HH:mm:ss a');
// endTime = moment(endTime).add(1,'day');
// var duration = moment.duration(endTime.diff(startTime));
// var hours = parseInt(duration.asHours());
// console.log(hours)

