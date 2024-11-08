import axiosInstance from '../utils/instance';

export const getCounselorContent = async () => {
  try {
    const response = await axiosInstance.get(
      `${import.meta.env.VITE_API_HOME}/counselor-content`
    );
    return response.data;
  } catch (error) {
    console.log('상담사 콘텐츠 불러오기 실패' + error); // 임시
  }
};

export const getBestPosts = async () => {
  try {
    const response = await axiosInstance.get(
      `${import.meta.env.VITE_API_HOME}/best-posts`
    );
    return response.data;
  } catch (error) {
    console.log('베스트 커뮤니티 글 불러오기 실패' + error);
  }
};
