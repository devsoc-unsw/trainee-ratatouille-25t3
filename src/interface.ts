// User Interface
// User should have a username, email, password, date joined, last login, and a list of groups they are apart of. 
export interface User {
    userId: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    dateJoined: Date;
    lastLogin: Date;
}


// Event Interface
// Event should have an eventId, name, description, date, time, location, and a list of users that are apart of the event.
export interface Event {
    eventId: number;
    eventName: string;
    eventDescription: string;
    eventDate: Date;
    eventTime: Date;
    eventLocation: string;
    eventUsers: User[];
}


export interface DataStore {
    users: User[];
    events: Event[];
}