export default class GameService {
  static getAvailableGames = async () => {
    try {
      return await fetch(`${process.env.REACT_APP_SERVER_URL}/games`, {
        method: "GET",
      }).then((response) => {
        if (!response.ok) throw new Error("Failed to get available games");
        return response.json();
      });
    } catch (error) {
      throw new Error(error);
    }
  };
}
