import React from 'react';

function App() {
  const aType = "2";

  if (aType === "1") {
    //const pdf = <embed type='application/pdf' width="100%" height="99.5%" src="./invoice.pdf" />;
    const pdf = <embed src="https://sumanbogati.github.io/tiny.pdf" width="600px" height="500px" />;
    return getDivLayout(pdf);
  }

  if (aType === "2") {
    return (<div className="panel-group" id="accordion">
    <div className="panel panel-default">
      <div className="panel-heading">
        <h4 className="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
          Collapsible Group 1</a>
        </h4>
      </div>
      <div id="collapse1" className="panel-collapse collapse in">
        <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.</div>
      </div>
    </div>
    <div className="panel panel-default">
      <div className="panel-heading">
        <h4 className="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">
          Collapsible Group 2</a>
        </h4>
      </div>
      <div id="collapse2" className="panel-collapse collapse">
        <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.</div>
      </div>
    </div>
    <div className="panel panel-default">
      <div className="panel-heading">
        <h4 className="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">
          Collapsible Group 3</a>
        </h4>
      </div>
      <div id="collapse3" className="panel-collapse collapse">
        <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.</div>
      </div>
    </div>
  </div>);
  }

}
export default App;

function getDivLayout(pdf) {
  return (
    <div className="container">
      <div className="row headerRow">
        <div className="col align-self-start titleCol">
          Bamert Seed Company
        </div>
        <div className="col-4 agingcontainer align-self-end">
          <div className="agingCol aging01Col">20</div>
          <div className="agingCol aging02Col">30</div>
          <div className="agingCol aging03Col">40</div>
          <div className="agingCol aging04Col">50</div>
          <div className="agingCol aging05Col">6</div>
        </div>
      </div>
      <div className="row" style={{ minHeight: "600px" }}>
        <div className="col-sm-8 pdfCol" style={{ padding: "0px" }}>
          {pdf}
        </div>
        <div className="col-sm formCol">
          form
        </div>
      </div>
    </div>
  );
}

