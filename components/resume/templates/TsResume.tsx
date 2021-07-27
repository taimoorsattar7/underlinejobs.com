import React from 'react'

export default function Resume({ data }: any) {
  // console.log(data)
  return (
    <div className="wrapper wrapper--narrow">
      <header>
        <h1 className="headline">{data.name}</h1>
        <div className="m-b-20">
          <span className="headline headline__text headline--dull">{data.profession}</span>

          <span className="m-r-10 m-l-10">|</span>

          <span className="headline headline__text headline--dull">{data.website}</span>

          <div>
            <a className="headline headline__text" href={data.contact}>
              {data.contact}
            </a>
          </div>
        </div>

        <p className="headline headline__text headline--dull">{data.exerpt}</p>
      </header>

      <hr />

      <div className="flex">
        <main>
          <div>
            <h2 className="headline headline__text m-b-30">
              <b>Experience</b>
            </h2>

            <h3 className="headline headline__text">Stripe</h3>
            <p className="headline headline__text headline--dull m-b-10">
              Product Design Lead | 2017 – Present
            </p>
            <p className="headline headline__text">{data.content}</p>
          </div>
        </main>

        <aside>
          <div>
            <div className="m-b-30">
              <div className="m-b-30">
                <h2 className="headline headline__text m-b-30">
                  <b>Education</b>
                </h2>

                <h3 className="headline headline__text">Purdue University</h3>
                <p className="headline headline__text headline--dull">2009 - 2013</p>
                <p className="headline headline__text headline--dull">
                  Computer Science – Software Design
                </p>
              </div>
            </div>

            <div className="m-b-30">
              <h2 className="headline headline__text m-b-30">
                <b>Skills</b>
              </h2>

              <ul>
                <li className="headline headline__text m-b-30">Team leadership</li>
                <li className="headline headline__text m-b-30">Systems design</li>
              </ul>
            </div>
          </div>

          <div>
            <p className="headline headline__text">{data.content}</p>
            {/* <Icon name={'github'} /> */}
            <ul>
              {data.social.map((scl: any) => (
                <span className="user">
                  <a href={scl.url}>{scl.source}</a>
                </span>
              ))}
            </ul>
          </div>

          {data.social.map((scl: any) => (
            <span className="user">
              <a href={scl.url}>{scl.source}</a>
            </span>
          ))}
          <section className="media-card-3">
            <div className="profile profile-long">
              <div className="profile__info">
                <h3>Doggo Dogg</h3>
                <p className="profile__info__extra">
                  A very good boi that loves playing fetch and ice-cream! Gentle with everyone.
                  Scared of the rain.
                </p>
              </div>
              <div className="profile__stats">
                <p className="profile__stats__title">Type</p>
                <h5 className="profile__stats__info">Puppy</h5>
              </div>
              <div className="profile__stats">
                <p className="profile__stats__title">Size</p>
                <h5>Medium</h5>
              </div>
              <div className="profile__stats">
                <p className="profile__stats__title">Weight</p>
                <h5 className="profile__stats__info">45.85 lbs</h5>
              </div>
              <div className="profile__cta">
                <a className="button">Adopt Doggo!</a>
              </div>
            </div>
          </section>
        </aside>
      </div>
    </div>
  )
}
