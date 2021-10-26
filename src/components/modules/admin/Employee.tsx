import { ProjectData } from "../../../types/main";

export default function Employee(props: {
  projectData: ProjectData;
  setProjectData: React.Dispatch<React.SetStateAction<ProjectData>>;
  title: string;
}) {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
}