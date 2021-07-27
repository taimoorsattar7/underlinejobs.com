import React from 'react'

export default function Company({ data }: any) {
  return (
    <>
      <div className="profile-card-hover">
        <div className="profile-card__content">
          <div className="about-company">
            {' '}
            <a className="profile-card__avatar" href="#">
              <img src="https://image.ibb.co/h8LN9K/ea.png" alt="Company Avatar" />
            </a>
            <div className="row-wrapper">
              <a className="profile-card__company-name" href="#">
                {data.name}
              </a>
              <p className="profile-card__company-bio">
                Electronic Arts (EA) • Amesterdam Netherlands • 400,589 follwers{' '}
              </p>

              <a className="btn browse-jobs-btn" href="#">
                See jobs
              </a>
            </div>
            <div className="user-actions">
              <button className="btn btn-small follow-btn" type="button">
                <i className="icon plus-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 32 40"
                    enableBackground="new 0 0 32 32"
                    xmlSpace="preserve"
                  >
                    <polygon points="32,14.5 17.5,14.5 17.5,0 14.5,0 14.5,14.5 0,14.5 0,17.5 14.5,17.5 14.5,32 17.5,32 17.5,17.5 32,17.5 "></polygon>
                  </svg>
                </i>
                <span>Follow </span>
              </button>
            </div>
          </div>
          <div className="row-wrapper">
            <span>3 friends are interested:</span>
            <div className="friends-avatars">
              <a href="#">
                <img src="" alt="User Avatar" />
              </a>
              <a href="#">
                <img src="" alt="User Avatar" />
              </a>

              <a href="#">
                <img src="" alt="User Avatar" />
              </a>
            </div>

            <a className="see-all-btn" href="#">
              See All
            </a>
          </div>
          <a className="ellipsis-horizontal-icon" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 100 125"
              x="0px"
              y="0px"
              fill="#9ba1ad"
              width="60px"
              height="60px"
            >
              <circle cx="31.14" cy="50" r="6.14"></circle>
              <circle cx="50" cy="50" r="6.14"></circle>
              <circle cx="68.86" cy="50" r="6.14"></circle>
            </svg>
          </a>
        </div>
      </div>
    </>
  )
}
