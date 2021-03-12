import React from 'react';

function App() {
  const pdf = <embed type='application/pdf' width="100%" height="99.5%" src="./invoice.pdf" />;
  //const pdf = <embed src="https://sumanbogati.github.io/tiny.pdf" width="600px" height="500px" />;
  return (
    <div class="container">
      <div class="row headerRow">
        <div class="col align-self-start titleCol">
          Bamert Seed Company
      </div>
        <div class="col-4 agingcontainer align-self-end">
          <div class="agingCol aging01Col">20</div>
          <div class="agingCol aging02Col">30</div>
          <div class="agingCol aging03Col">40</div>
          <div class="agingCol aging04Col">50</div>
          <div class="agingCol aging05Col">6</div>
        </div>
      </div>
      <div class="row" style={{ minHeight: "600px" }}>
        <div class="col-sm-8 pdfCol" style={{ padding: "0px" }}>
          {pdf}
        </div>
        <div class="col-sm formCol">
          form
      </div>
      </div>
    </div>
  );
}

export default App;
