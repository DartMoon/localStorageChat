export const api = {
  getChatData: () => {
    return  new Promise(function(resolve, reject) {
      resolve(JSON.parse(localStorage.getItem('chatStore')));
    });
  }
};