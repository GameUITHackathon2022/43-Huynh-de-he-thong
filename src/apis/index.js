import axios from 'axios';

const API = axios.create({ baseURL: 'https://nft-charity.herokuapp.com/' });

// ==> token author
// API.interceptors.request.use((req) => {
//   if (localStorage.getItem('profile')) {
//     req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
//   }
//   return req;
// });

export const getCamp = () => API.get('/api/camp');
export const getCampById = (id) => API.get(`/api/camp/${id}`);
export const getAuction = () => API.get('/api/auction');
export const getAuctionById = (id) => API.get(`/api/auction/${id}`);
export const getAuctionInfor = () => API.get(`/api/auctionInfor`);
