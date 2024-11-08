import axiosInstance from '../utils/instance';

export const getPostLife = async () => {
  try {
    const response = await axiosInstance.get(
      `${import.meta.env.VITE_API_POST}/life`
    );
    return response.data;
  } catch (error) {
    console.log('쀼생 게시글 불러오기 실패' + error);
  }
};
