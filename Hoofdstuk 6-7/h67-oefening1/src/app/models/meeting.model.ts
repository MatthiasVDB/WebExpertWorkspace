export class Meeting {
    description: string;
    date: Date;
    partOfDay: string;
    meetingType: string;
    reminder: boolean;

    constructor(description: string, date: Date, partOfDay: string, reminder = false, meetingType = 'assets/avatar.png') {
        this.description = description;
        this.date = date;
        this.partOfDay = partOfDay;
        this.reminder = reminder;
        this.meetingType = meetingType;
    }
}