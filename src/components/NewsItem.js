import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, publishedAt } = this.props;
    return (
      <div className="my-3">
        <div className="card">
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
            <h5 className="card-title">{title}<span class="badge bg-secondary">New</span></h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By <strong>{author}</strong> on <strong>{new Date(publishedAt).toGMTString()}</strong>
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
