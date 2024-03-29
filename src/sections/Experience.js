import React from 'react';
import WorkItem from './WorkItem.js';
import WI1 from './work_items/WI1.jsx';
import WI2 from './work_items/WI2.jsx';
import WI3 from './work_items/WI3.jsx';

let parser = require('ua-parser-js');
let ua = parser();
const WORKITEMS = [WI1, WI2, WI3];
const THRESHOLD = 0.75;
const ISIEBROWSER = ua.browser.name.toLowerCase() === "ie" || ua.browser.name.toLowerCase() === "edge";

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemInView: 0,
      prevIntersectionRatios: [0,0,0]
    }
    this.workItemsRef = React.createRef();
    this.singleWorkItemRefs = WORKITEMS.map((elem, i) => {
      return {
        workItemId: i,
        ref: React.createRef(),
      };
    });
  }

  componentDidMount() {
    const callback = entries => {
      entries.forEach( entry => {
        let itemId = entry.target.id;
        let prevRatios = this.state.prevIntersectionRatios.slice();
          if (entry.intersectionRatio >= THRESHOLD && entry.intersectionRatio >= prevRatios[itemId]) {
            this.setState({
              itemInView: parseInt(entry.target.id),
            });
          }
          prevRatios[itemId] = entry.intersectionRatio;
          this.setState({prevIntersectionRatios: prevRatios});
        }
      );
    };

    if (!ISIEBROWSER) {
      this.observer = new IntersectionObserver(callback, {
        threshold: THRESHOLD,
        root: this.workItemsRef.current,
      });

      Object.values(this.singleWorkItemRefs).forEach(item =>
        this.observer.observe(item.ref.current)
      );
    }
  }

  toggleScrollButton(side) {
    return (this.state.itemInView === 2 && side === "R") ? " hidden" : (this.state.itemInView === 0 && side === "L") ? " hidden" : "";
  }

  doScroll(side) {
    if (!ISIEBROWSER) {
      let itemToScrollTo = null;
      let scrollByY = 0;
      if (typeof side === "string") {
        if (side === "L") {
          itemToScrollTo = this.state.itemInView - 1;
        } else if (side === "R") {
          itemToScrollTo = this.state.itemInView + 1;
        }
      } else {
        itemToScrollTo = side;
      }

      if (itemToScrollTo < this.singleWorkItemRefs.length && itemToScrollTo >= 0) {
        scrollByY = this.singleWorkItemRefs[itemToScrollTo].ref.current.offsetWidth;
        scrollByY = side === "L" || side < this.state.itemInView ? -scrollByY : scrollByY;
        if (typeof side === "number") scrollByY = scrollByY * Math.abs(this.state.itemInView - side);
        this.workItemsRef.current.scrollBy({top: 0, left: scrollByY, behavior: "smooth"});
      }
    }
  }

  render() {
    return (
      <section id="experience" className="experience">
        <span className="experience__header">
          <h2>Experience</h2>
        </span>
        <span className={"scroll-button scroll-button__previous" + this.toggleScrollButton("L")} onClick={() => this.doScroll("L")}><i className="fas fa-7x fa-chevron-left"></i></span>
        <span className={"scroll-button scroll-button__next" + this.toggleScrollButton("R")} onClick={() => this.doScroll("R")}><i className="fas fa-7x fa-chevron-right"></i></span>
        <div className="work-items" ref={this.workItemsRef}>
          {
            WORKITEMS.map( (workItem, i) => {
              return <WorkItem key={i} ref={this.singleWorkItemRefs[i].ref}
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
        <div className="circle-indicators" aria-hidden="true">
          <i className={(this.state.itemInView === 0 ? "fas" : "far") + " fa-circle"} onClick={() => this.doScroll(0)}></i>&nbsp;
          <i className={(this.state.itemInView === 1 ? "fas" : "far") + " fa-circle"} onClick={() => this.doScroll(1)}></i>&nbsp;
          <i className={(this.state.itemInView === 2 ? "fas" : "far") + " fa-circle"} onClick={() => this.doScroll(2)}></i>
        </div>
        <span className="experience__work-item-index" aria-hidden="true">{this.state.itemInView + 1} of 3</span>
      </section>
    );
  }
}

export default Experience;
