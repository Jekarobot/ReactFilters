/* eslint-disable react/prop-types */
const ProjectList = ({ projects }) => {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <div key={`${project.url}-${index}`}>
          <img src={project.img} alt={project.category} />
        </div>
      ))}
    </div>
  );
};

export default ProjectList