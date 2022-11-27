export const dateTime = (type) => {
    let d = new Date(),
    year = d.getFullYear(),
    month = parseInt(d.getMonth()) + 1,
    day = d.getDate(),
    hour = d.getHours(),
    minute = d.getMinutes(), 
    second = d.getSeconds(); 
    if(month < 10 ) { month = `0${month}` }
    if(day < 10 ) { day = `0${day}` }
    if(hour < 10 ) { hour = `0${hour}` }
    if(minute < 10 ) { minute = `0${minute}` }
    if(second < 10 ) { second = `0${second}` }
    if(type == "time") return `${hour}:${minute}:${second}`
    if(type == "date") return `${year}-${month}-${day}`

    return `${year}/${month}/${day} ${hour}:${minute}:${second}`
}