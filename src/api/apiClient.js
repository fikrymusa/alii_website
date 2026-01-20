const BASE_URL = "/api";

const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    if (!response.ok) throw new Error("Network response error");
    return await response.json();
  } catch (error) {
    console.error("fetchData Error:", error);
    throw error;
  }
};

const postData = async (endpoint, data, isFormData = false) => {
  try {
    const options = {
      method: "POST",
      body: isFormData ? data : JSON.stringify(data),
    };

    if (!isFormData) {
      options.headers = {
        "Content-Type": "application/json",
      };
    }

    const response = await fetch(`${BASE_URL}${endpoint}`, options);
    if (!response.ok) throw new Error("Failed to send data");
    return await response.json();
  } catch (error) {
    console.error("postData Error:", error);
    throw error;
  }
};

const deleteData = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete data");
    return await response.json();
  } catch (error) {
    console.error("deleteData Error:", error);
    throw error;
  }
};

export { fetchData, postData, deleteData };
