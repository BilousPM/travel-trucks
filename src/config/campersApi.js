import axios from 'axios';

const camperApi = axios.create({
  baseURL: 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io',
});

export const getCampers = async FD => {
  const response = await camperApi.get('campers', {
    params: {
      // page: 1,
      // limit: 4,
      location: FD.search,
    },
  });
  return response.data.items;
};

// export const getFilteredCampers = async filteredData => {
//   const response = await camperApi.get('campers', {
//     params: {
//       page: 1,
//       limit: 4,
//       location: filteredData.selectLocation,
//     },
//   });
//   return response.data.items;
// };

export const getCamperById = async id => {
  const response = await camperApi.get(`campers/${id}`);
  return response.data;
};

// export const getCampers = async () => {
//   const response = await axios.get(
//     'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers?page=3&limit=5',
//   );
//   return response.data.items;
// };

// export const getCamperById = async id => {
//   const response = await axios.get(
//     `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`,
//   );
//   return response.data;
// };
