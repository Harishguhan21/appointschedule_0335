import axios from "axios";

export const chatPost = (data: any) => {
  return axios.post(
    "https://7fb0-2401-4900-3601-9594-18d1-fffe-40a3-1515.ngrok-free.app/",
    {
      userMessage: data,
    }
  );
};

export const chatGet = () => {
  let options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMjMsInVzZXJuYW1lIjoiam9obl9kb2UiLCJyb2xlIjoiQWRtaW4iLCJleHAiOjE2OTg2NzQxNDh9.gqKymMDE33wEsVJdo4kF9VkzlevvPtmlIJb25XpawCM`,
    },
  };
  return axios.get(
    "https://7fb0-2401-4900-3601-9594-18d1-fffe-40a3-1515.ngrok-free.app/role",
    options
  );
};
