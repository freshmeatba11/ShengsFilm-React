import React from "react";
import data from "../project.json";

const Trailer02Page = () => {
  const project = {
    url: data[11].url,
    title: data[11].title,
    description: [],
    credit: data[11].credit,
  };
  //將字串分割成陣列
  const credit = project.credit.split("\n");
  return (
    <div className="galleryDetailPage">
      <section className="top">
        <div className="videoBox">
          <iframe
            src={project.url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      <section className="bottom">
        <div className="titleWrap">
          {project.title.map((title, index) => {
            return <h2 key={index}>{title}</h2>;
          })}
        </div>
        {project.description.length > 0 && (
          <h3>
            {project.description.map((description, index) => {
              return <p key={index}>{description}</p>;
            })}
          </h3>
        )}
        <p>
          {credit.map((credit, index, arr) => {
            if (index === arr.length - 1)
              return <React.Fragment key={index}>{credit}</React.Fragment>;
            return (
              <>
                <React.Fragment key={index}>{credit}</React.Fragment>
                <br />
              </>
            );
          })}
        </p>
      </section>
    </div>
  );
};

export default Trailer02Page;
