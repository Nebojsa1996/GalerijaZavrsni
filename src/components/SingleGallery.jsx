import React from "react";

export default function SingleGallery({
  id,
  title,
  description

}) {
  return (
    <div key={id}>
      <hr />
      <p>
        Title: <strong>{title}</strong>
      </p>
      <p>
        Description: <strong>{description}</strong>
      </p>

      <hr />
    </div>
  );
};
