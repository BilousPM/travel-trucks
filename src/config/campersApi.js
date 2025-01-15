import axios from 'axios';

const camperApi = axios.create({
  baseURL: 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io',
});

export const getCampers = async (query, page = 1, limit = 3) => {
  // console.log(query, page);
  const response = await camperApi.get('campers', {
    params: {
      page,
      limit,
      ...query,
    },
  });

  return response.data.items;
};

export const getCamperById = async id => {
  const response = await camperApi.get(`campers/${id}`);
  return response.data;
};
