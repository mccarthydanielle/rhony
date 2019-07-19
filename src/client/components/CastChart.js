import React from 'react';
import { Graph } from 'react-d3-graph';
import castRelationships from '../../server/castRelationships';
import myConfig from './castChartConfig';

class CastChart extends React.Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick(source, target, label) {
    console.log('source', source, 'target', target, 'label', label);
  }

  render() {
    return (
      <div style={{ height: '90vh', border: 'red solid 2px' }}>
        <Graph
          id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
          data={castRelationships}
          config={myConfig}
          onClickLink={this.onClick}
        />
      </div>
    );
  }
}

export default CastChart;
