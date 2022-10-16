
export function saveItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function loadItem(key) {
    const value = localStorage.getItem(key)
    return JSON.parse(value);
}

export function removeItem(key) {
    localStorage.removeItem(key)
}