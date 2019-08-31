import React from 'react';
import WorkItem from './WorkItem.js';
import WI1 from './work_items/WI1.jsx';
import WI2 from './work_items/WI2.jsx';
import WI3 from './work_items/WI3.jsx';

const WORKITEMS = [WI1, WI2, WI3];

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemInView: 0,
    }

    this.workItemRefs = WORKITEMS.map((elem, i) => {
      return {
        workItemId: i,
        ref: React.createRef(),
      };
    });

    const callback = entries => {
      entries.forEach( entry => {
          if (entry.isIntersecting) {
            this.setState({itemInView: parseInt(entry.target.id)});
          }
        }
      );
    };

    this.observer = new IntersectionObserver(callback, {
      threshold: 0.75
    });
  }

  componentDidMount() {
    Object.values(this.workItemRefs).forEach(item =>
      this.observer.observe(item.ref.current)
    );
  }

  toggleScrollButton(side) {
    return (this.state.itemInView === 2 && side ==="R") ? " hidden" : (this.state.itemInView === 0 && side ==="L") ? " hidden" : "";
  }

  doScroll(side) {
    let itemToScrollTo = null;
    if (side === "L") {
      itemToScrollTo = this.state.itemInView - 1;
    } else if (side === "R") {
      itemToScrollTo = this.state.itemInView + 1;
    }
    console.log("itemToScrollTo: " + itemToScrollTo);
    if (itemToScrollTo < this.workItemRefs.length && itemToScrollTo >= 0) {
      console.log("legal scroll");
    }
  }

  render() {
    return (
      <section className="experience">
        <span className="experience__header">
          <h2>Experience</h2>
        </span>
        <span className={"scroll-button scroll-button__previous" + this.toggleScrollButton("L")} onClick={() => this.doScroll("L")}><i className="fas fa-3x fa-chevron-left"></i></span>
        <span className={"scroll-button scroll-button__next" + this.toggleScrollButton("R")} onClick={() => this.doScroll("R")}><i className="fas fa-3x fa-chevron-right"></i></span>
        <div className="work-items">
          {
            WORKITEMS.map( (workItem, i) => {
              return <WorkItem key={i} ref={this.workItemRefs[i].ref}
              workItemId={i}
              company={workItem.company}
              jobTitle={workItem.jobTitle}
              jobDuration={workItem.jobDuration}
              jobSummary={workItem.jobSummary}
              jobDescription={workItem.jobDescription}
              jobTechnologies={workItem.jobTechnologies} />
            })
          }
        </div>
      </section>
    );
  }
}

export default Experience;
