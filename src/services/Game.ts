export default class GameService {
  static getAvailableGames = async () => {
    try {
      return await fetch(`${process.env.REACT_APP_SERVER_URL}/games`, {
        method: "GET",
      }).then((response) => response.json());
    } catch (error) {
      throw new Error(error);
    }
  };
}
