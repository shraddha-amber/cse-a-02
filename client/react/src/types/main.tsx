export type ProjectData = {
  name: string;
  type: string;
  numberOfMembers: number;
  cause: string;
  techUsed: string[];
  guide: string;
  docFile: string;
  pptFile: string;
  suggestionsByGuide: string;
  superGuide: string;
  suggestionsBySuperGuide: string;
  approved: boolean;
  rules: {
    maxMembers: number;
  };
};
