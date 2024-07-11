import React from "react";
import "../styles/Card.css";

const Card = ({ searchValue, pages, displaySelector }) => {
  const newPages = pages.filter((page) =>
    page.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      {newPages.length > 0 ? (
        newPages.map((page) => (
          <div
            key={page.id}
            className={`page-card ${displaySelector}`}
            style={{ backgroundImage: `url(${page.img})` }}
          >
            <a target="_blank" rel="noopener noreferrer" href={page.url}>

            </a>
            <div className={`card-content ${displaySelector}`} title={page.url}>
                <h5 className={`card-header ${displaySelector}`}>{page.name}</h5>
              </div>
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
