import { Card, CardActionArea, CardMedia } from "@mui/material";

const ProjectCard = ({ title, img, year, desc }) => {
  return (
    <Card className="w-full p-10 border-none shadow-none">
      <CardActionArea>
        <div className="float-left w-1/2 block">
          <CardMedia
            component="img"
            height="140"
            image={process.env.PUBLIC_URL + "/img/" + img}
            alt={title}
          />
        </div>
        <div className="float-right w-1/2 block pl-5">
          <h2>{title}</h2>
          <p>{year}</p>
          <p className="text-justify">{desc}</p>
        </div>
      </CardActionArea>
    </Card>
  );
};

export default ProjectCard;
