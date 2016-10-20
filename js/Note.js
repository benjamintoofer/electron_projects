
module.exports = class Note {

    constructor({title:title,
                date:date,
                time:time,
                repeat:repeat,
                priority:priority,
                note:note}) {
        this._title = title
        this._date = date
        this._time = time
        this._repeat = repeat
        this._priority = priority
        this._note = note
    }
}
