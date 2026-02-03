const API_URL = "http://localhost:3000/api";

export const Integrations = {
  Products: {
    getAll: async () => {
      const response = await fetch(`${API_URL}/productos`);
      if (!response.ok) {
        throw new Error("Error al obtener productos");
      }
      return response.json();
    }
  }
};
