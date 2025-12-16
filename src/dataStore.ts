import type { DataStore } from './interface';

const STORAGE_KEY = 'dataStore';

export const dataStore: DataStore = {
    users: [],
    events: []
};

export const persistentSave = (dataStore: DataStore) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataStore, null, 2));
}

export const persistentLoad = (): DataStore => {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
        return JSON.parse(data) as DataStore;
    }
    return { users: [], events: [] };
}
