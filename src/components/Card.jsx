import React, { useState } from "react";
import "../styles/Card.css";

const Card = ({ searchValue, pages }) => {
  const newPages = pages.filter((page) =>
    page.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      {newPages.length > 0 ? (
        newPages.map((page) => (
          <div
            key={page.id}
            className="page-card"
            style={{ backgroundImage: `url(${page.img})` }}
          >
            <a target="_blank" rel="noopener noreferrer" href={page.url}>
              <div className="card-content" title={page.url}>
                <h5 className="card-header">{page.name}</h5>
              </div>
            </a>
          </div>
        ))
      ) : (
        <div>
          <p>No pages match your search.</p>
        </div>
      )}
    </>
  );
};

export default Card;
