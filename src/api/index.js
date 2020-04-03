export const api = {
  getChatData: () => {
    return  new Promise(function(resolve, reject) {
      resolve(JSON.parse(localStorage.getItem('chatStore')));
    });
  },
  newMessagePost: (payload) => {
    return new Promise(function(resolve, reject) {
      const fromStore = JSON.parse(localStorage.getItem('chatStore')) || [];
      const arr = JSON.stringify([...fromStore, payload]);

      localStorage.setItem('chatStore', arr);

      resolve(201);
    });
  },
  newUserPost: (payload) => {
    return new Promise(function(resolve, reject) {
      // const fromStore = JSON.parse(sessionStorage.getItem('asd')) || {};

      sessionStorage.setItem('asd', JSON.stringify(payload));

      resolve(201);
    });
  },
  userGet: () => {
    return new Promise(function(resolve, reject) {
      const user = JSON.parse(sessionStorage.getItem('asd'));

      resolve(user);
    });
  }
};
