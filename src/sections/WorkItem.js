import React from 'react';

const WorkItem = React.forwardRef((props, ref) => {
  const [expanded, handleClick] = React.useState(false);

  let getDetailsToggleClass = () => {
    return "fas fa-2x fa-" + (expanded ? "compress" : "expand");
  };

  let getDetailsVisibleClass = () => {
    return expanded ? "" : "hidden ";
  };

  return (
    <div id={props.workItemId} className="work-item" ref={ref}>
      <span className="details-toggle" onClick={() => handleClick(!expanded)} title={(expanded ? "Hide " : "Show ") + "details"}><i className={getDetailsToggleClass()}></i></span>
      <h3>{props.company}</h3>
      <h4>
        {props.jobTitle}
        <small> | {props.jobDuration}</small>
      </h4>
      <div className={getDetailsVisibleClass() + "work-item__summary"}>
        {props.jobSummary}
      </div>
      <div className={getDetailsVisibleClass() + "work-item__description"}>
        {props.jobDescription}
      </div>
      <div className="work-item__technologies">
        <h5>Technologies used</h5>
        {props.jobTechnologies}
      </div>
    </div>
  );
});

export default WorkItem;
