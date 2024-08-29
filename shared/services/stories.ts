import { axiosInstance } from './instance';
import { Story, StoryItem } from '@prisma/client';
export type IStory = Story & {
  items: StoryItem[];
};

export const getAll = async () => {
  return (await axiosInstance.get<IStory[]>('/stories')).data;
};
