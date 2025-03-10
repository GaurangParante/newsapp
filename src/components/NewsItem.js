import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, publishedAt, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={
            {
              display: 'flex',
              justifyContent: 'flex-end',
              position: 'absolute',
              right: '0'
            }
          }>
            <span
              className=" badge rounded-pill bg-danger"
            >
              {source}
            </span>
          </div>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://cdn.mos.cms.futurecdn.net/43PB2QTQXDHxfjotqfgHTj-1200-80.jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By <strong>{author}</strong> on{" "}
                <strong>{new Date(publishedAt).toGMTString()}</strong>
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
