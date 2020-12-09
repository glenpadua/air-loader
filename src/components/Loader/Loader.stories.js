import React, { useState, useEffect } from "react";
import { Loader } from "./Loader";
// import "./SamplePost.css";

export default {
  title: "Loader",
  component: Loader,
};

export const LoaderState = () => {
  let config = {
    rows: 4,
    rowModifiers: {
      0: {
        height: "150px",
        boxes: ["60%", "40%"],
        placeHolders: [0],
      },
      3: {
        height: "25px",
        boxes: ["40%", "60%"], // Ideally adds up to 100%
        placeHolders: [0],
      },
    },
  };
  return <Loader config={config} loading={true} />;
};

// Example for a sample blog post
export const BlogPost = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let id = setTimeout(() => setLoading(false), 2000);
    return () => clearInterval(id);
  }, []);

  let config = {
    rows: 6,
    rowHeight: "20px", // optional - default 25px
    rowModifiers: {
      0: {
        height: "400px",
      },
      5: {
        height: "25px",
        boxes: ["40%", "60%"], // Ideally adds up to 100%
        placeHolders: [0],
      },
    },
    gutterHeight: "20px", // Optional, default - 10px
  };
  return (
    <div className="blog-wrapper">
      <Loader config={config} loading={loading}>
        <div className="cover" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta error
          eum officia autem, deserunt repellendus veniam nesciunt et voluptatum
          accusantium recusandae assumenda reprehenderit, architecto, numquam
          iusto optio dolorem cupiditate sed.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta error
          eum officia autem, deserunt repellendus veniam nesciunt et voluptatum
          accusantium recusandae assumenda reprehenderit, architecto, numquam
          iusto optio dolorem cupiditate sed.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta error
          eum officia autem, deserunt repellendus veniam nesciunt et voluptatum
          accusantium recusandae assumenda reprehenderit, architecto, numquam
          iusto optio dolorem cupiditate sed.
        </p>
      </Loader>
    </div>
  );
};

export const SampleComic = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let id = setTimeout(() => setLoading(false), 2000);
    return () => clearInterval(id);
  }, []);

  const data = {
    text:
      "If you don't have an extension cord I can get that too.  Because we're friends!  Right?",
    img: "https://imgs.xkcd.com/comics/woodpecker.png",
    title: "Woodpecker",
  };

  let config = {
    rows: 3,
    rowModifiers: {
      0: {
        height: "25px",
        boxes: ["40%", "20%", "40%"], // Ideally adds up to 100%
        placeHolders: [1],
      },
      1: {
        height: "600px",
        boxes: ["25%", "50%", "25%"], // Ideally adds up to 100%
        placeHolders: [1],
      },
      2: {
        height: "25px",
        boxes: ["20%", "60%", "20%"], // Ideally adds up to 100%
        placeHolders: [1],
      },
    },
    gutterHeight: "10px", // Optional, default - 10px
  };
  return (
    <div className="comic-wrapper">
      <Loader config={config} loading={loading}>
        <h1>{data.title}</h1>
        <img src={data.img} alt={data.alt} width="450" />
        <p>{data.text}</p>
      </Loader>
    </div>
  );
};
