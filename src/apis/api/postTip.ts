import axiosInstance from '../utils/instance';

export const getPostLife = async () => {
  try {
    const response = await axiosInstance.get(
      `${import.meta.env.VITE_API_POST}/tip`
    );
    return response.data;
  } catch (error) {
    console.log('꿀팁 게시글 불러오기 실패' + error);
  }
};
