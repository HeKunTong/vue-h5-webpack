const getUser = () => {
    try {
        return JSON.parse(localStorage.getItem('user')) || {};
    } catch (e) {
        return {};
    }
};

const setUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
};

export {
    getUser,
    setUser,
};
