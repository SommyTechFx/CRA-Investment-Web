// import "./Title.css";
// export default function Title({ subtitle, title })=> {
//   return (
//
//   );
// }

import "./Title.css";

// eslint-disable-next-line react/prop-types
const Title = ({ subTitle, title }) => {
  return (
    <div className="title">
      <p>{subTitle}</p>
      <h2>{title}</h2>
    </div>
  );
};

export default Title;
