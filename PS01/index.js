var width = document.getElementById('svg1').clientWidth;
var height = document.getElementById('svg1').clientHeight;

var marginLeft = 0;
var marginTop = 0;
//
var svg = d3.select('svg')
    .append('g')
    .attr('transform', 'translate(' + marginLeft + ',' + marginTop + ')');

// d3.json("bostonNeighborhoods.geojson", function (data) {
//
//   var group = svg.selectAll("g")
//       .data(data.features)
//       .enter()
//       .append("g")
//
//   var projection = d3.geoAlbersUsa();
//   var path = d3.geo.path().projection(projection);
//
//   var areas = group.append("path")
//       .attr("d", path)
//       .attr("class", "area")
//       .attr("fill", "steelblue");
//
// });
// // //set up the projection for the map
// // var albersProjection = d3.geoAlbersUsa()  //tell it which projection to use
// //     .scale(10,000)                           //tell it how big the map should be
// //     .translate([(width/2), (height/2)]);  //set the center of the map to show up in the center of the screen
// //
// // //set up the path generator function to draw the map outlines
// // path = d3.geoPath()
// //     .projection(albersProjection);        //tell it to use the projection that we just made to convert lat/long to pixels
// //
// // var areaLookup = d3.map();
// //
// // var colorScale = d3.scaleLinear().range(['white','blue']);
// //
// queue()
//     .defer(d3.json, "./bostonNeighborhoods.json")
//     .defer(d3.csv, "./affordableUnits.csv")
//     .await(function(err, mapData, unitsData){
//
//     unitsData.forEach(function(d){
//         areaLookup.set(d.area, d.units);
//     });
//
// //
// //     colorScale.domain([0, d3.max(unitsData.map(function(d){return +d.units}))]);
// //


var canvas = d3.select("body").append("svg")
    .attr("width", 700)
    .attr("height", 700)

d3.json("bostonNeighborhoods.json", function (data) {

    var group = canvas.selectAll("g")
        .data(data.features)
        .enter()
        .append("g")

    var projection = d3.geoAlbers()
        .scale(700)
        .translate([(width/2), (height/2)]);

    path = d3.geoPath()
          .projection(projection);

    var area = group.append("path")
        .attr("d", path)
        .attr("class", "area")
        .attr("fill", "black")


});

    svg.selectAll("path")               //make empty selection
        .data(mapData.features)          //bind to the features array in the map data
        .enter()
        .append("path")                 //add the paths to the DOM
        .attr("d", path)                //actually draw them
        .attr("class", "feature")
        .attr('fill',function(d){
            return colorScale(areaLookup.get(d.properties.NAME));
        })
        .attr('stroke','black')
        .attr('stroke-width',.2);
