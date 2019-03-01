import React from 'react';
import './index.scss';
import data from './data';

function Main() {
  return (
    <main>
      <section className="Section">
        <div className="Section--left">
          <h3>{data.education.en.label}</h3>
        </div>
        <div className="Section--right">
          <h3>{data.education.en.school}</h3>
          <p>
            <span>{`${data.education.en.major.label} `}</span>
            {data.education.en.major.value}
          </p>
          <p>
            <span>{`${data.education.en.minor.label} `}</span>
            {data.education.en.minor.value}
          </p>
        </div>
      </section>
      <section className="Section">
        <div className="Section--left">
          <h3>{data.skills.en.label}</h3>
        </div>
        <div className="Section--right">
          {data.skills.en.list.map(({ title, description }, index) => (
            <div key={index}>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="Section">
        <div className="Section--left">
          <h3>{data.experience.en.label}</h3>
        </div>
        <div className="Section--right">
          {data.experience.en.list.map(
            ({ title, subtitle, responsibilities }, index) => (
              <div key={index}>
                <div className="Section--right-job-title">
                  <h3>{title}</h3>
                  <span>{subtitle}</span>
                </div>
                <ul>
                  {responsibilities.map((value, i) => (
                    <li key={i}>{value}</li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </section>
      <section className="Section">
        <div className="Section--left">
          <h3>{data.hobies.en.label}</h3>
        </div>
        <div className="Section--right">
          <p>{data.hobies.en.summary}</p>
        </div>
      </section>
      <section className="Section">
        <div className="Section--left">
          <h3>{data.references.en.label}</h3>
        </div>
        <div className="Section--right">
          <p>{data.references.en.summary}</p>
        </div>
      </section>
    </main>
  );
}

export default Main;
