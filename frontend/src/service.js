class SessionsService {
    constructor() {
      this.axios = require("axios");
    }
  
    getSessions(userId) {
      const url = `https://api.sportsee.com/users/${userId}/sessions`;
  
      const response = await this.axios.get(url);
  
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error(response.statusText);
      }
    }
  }
  