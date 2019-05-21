import React from 'react'
import { Graph } from 'react-d3-graph'

const data = {
  nodes: [{ id: ' ' }, { id: 'Luann de Lesseps' }, { id: 'Bethenny Frankel' }, { id: 'Alex McCord' }, { id: 'Ramona Singer', svg: "../../assets/heads/ramona.svg" }, { id: 'Jill Zarin', svg: "../../assets/heads/iconmonstr-random-thin.svg" }, { id: 'Kelly Killoren Bensimon' }, { id: 'Sonja Morgan' }, { id: 'Cindy Barshop' }, { id: 'Aviva Drescher' }, { id: 'Carole Radziwill' }, { id: 'Heather Thomson' }, { id: 'Kristen Taekman' }, { id: 'Dorinda Medley' }, { id: 'Jules Wainstein' }, { id: 'Tinsley Mortimer' }],
  links: [
    { source: ' ', target: 'Bethenny Frankel', label: 'testing this shieettt' },
    { source: ' ', target: 'Luann de Lesseps' },
    { source: ' ', target: 'Alex McCord' },
    { source: ' ', target: 'Ramona Singer' },
    { source: ' ', target: 'Jill Zarin' },
    { source: ' ', target: 'Kelly Killoren Bensimon' },
    { source: ' ', target: 'Sonja Morgan' },
    { source: ' ', target: 'Cindy Barshop' },
    { source: ' ', target: 'Aviva Drescher' },
    { source: ' ', target: 'Carole Radziwill' },
    { source: ' ', target: 'Heather Thomson' },
    { source: ' ', target: 'Kristen Taekman' },
    { source: ' ', target: 'Dorinda Medley' },
    { source: ' ', target: 'Jules Wainstein' },
    { source: ' ', target: 'Tinsley Mortimer' },
    { source: 'Jules Wainstein', target: 'Tinsley Mortimer' }
  ]
};

const myConfig = {
  "automaticRearrangeAfterDropNode": false,
  "collapsible": false,
  "directed": false,
  "focusAnimationDuration": 0.75,
  "focusZoom": 3,
  "height": 1000,
  "highlightDegree": 1,
  "highlightOpacity": 0.2,
  "linkHighlightBehavior": true,
  "maxZoom": 8,
  "minZoom": 0.1,
  "nodeHighlightBehavior": true,
  "panAndZoom": false,
  "staticGraph": false,
  "width": 1300,
  "d3": {
    "alphaTarget": 0.05,
    "gravity": -100,
    "linkLength": 100,
    "linkStrength": 1
  },
  "node": {
    "color": "#d3d3d3",
    "fontColor": "black",
    "fontSize": 12,
    "fontWeight": "normal",
    "highlightColor": "red",
    "highlightFontSize": 12,
    "highlightFontWeight": "bold",
    "highlightStrokeColor": "SAME",
    "highlightStrokeWidth": 1.5,
    "labelProperty": "name",
    "mouseCursor": "pointer",
    "opacity": 1,
    "renderLabel": true,
    "size": 1000,
    "strokeColor": "none",
    "strokeWidth": 1.5,
    "svg": "",
    "symbolType": "circle"
  },
  "link": {
    "color": "#d3d3d3",
    "fontColor": "black",
    "fontSize": 8,
    "fontWeight": "normal",
    "highlightColor": "blue",
    "highlightFontSize": 8,
    "highlightFontWeight": "normal",
    "labelProperty": "label",
    "mouseCursor": "pointer",
    "opacity": 1,
    "renderLabel": true,
    "semanticStrokeWidth": false,
    "strokeWidth": 4
  }

}

class Cast extends React.Component {

  constructor() {
    super()
    this.onClick = this.onClick.bind(this)
  }

  onClick(source, target) {
    console.log('source', source, 'target', target)
  }

  render() {
    return (
      <Graph
        id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
        data={data}
        config={myConfig}
        onClickLink={this.onClick}
      />
    )
  }
}

export default Cast
