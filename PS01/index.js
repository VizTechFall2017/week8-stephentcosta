var width = document.getElementById('svg1').clientWidth;
var height = document.getElementById('svg1').clientHeight;

var marginLeft = 0;
var marginTop = 0;
//
var svg = d3.select('svg')
    .append('g')
    .attr('transform', 'translate(' + marginLeft + ',' + marginTop + ')');

// var areaLookup = d3.map(mapData, function(d){
//   return d.units
// });
// //
// var colorScale = d3.scaleLinear().range(['white',"#00a6b4"]);
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
//     colorScale.domain([0, d3.max(unitsData.map(function(d){return +d.units}))]);
// //

//
// var canvas = d3.select("body").append("svg")
//     .attr("width", 700)
//     .attr("height", 700)

// var usChart = dc.geoChoroplethChart("#map");

// var color = d3.scale.threshold()
//       .domain([1000, 3000, 5000, 7000, 9000, 11000, 13000])
//       .range(["#f2f0f7", "#dadaeb", "#bcbddc", "#9e9ac8", "#756bb1", "#54278f", "#eafdff"]);
//
// d3.json("bostonNeighborhoods.json", function(error, boston) {
//             d3.csv("affordableUnits.csv", function(error, units) {
//                 var rateById = {};
//
//                 areaLookup.forEach(function(d) {
//                     rateById[d.id] = +d.id;
//                 });

// d3.csv("./affordableUnits.csv", function(error,data){
//   var facts = crossfilter(data);
// })

d3.json("./bostonNeighborhoods.json", function (data) {

    var group = svg.selectAll("g")
        .data(data.features)
        .enter()
        .append("g")

        var projection = d3.geoAlbers()
        .scale( 190000 )
        .rotate( [71.057,0] )
        .center( [0, 42.313] )
        .translate( [width/2,height/2] );

    path = d3.geoPath()
          .projection(projection);

    var area = group.append("path")
        .attr("d", path)
        .attr("class", "area")
        .attr("stroke", "white")
        .attr("fill", "#00a6b4")

        // .attr("stroke", "white")
        // .attr("fill", "#00a6b4")
        // .colors(d3.scale.quantize().range("#00a6b4", "#35d0dd", "#73dae2", "#91dbe0", "#c6fbff"))
        // .colorDomain(0,200)
        // .colorCalculator(function(d){return d ? usChart.color() })
        // .overlayGeoJson(bostonNeighborhoods.json,"area",function(d){
        //   return d.properties.NAME;
        // })


});
    //
    // svg.selectAll("path")               //make empty selection
    //     .data(mapData.features)          //bind to the features array in the map data
    //     .enter()
    //     .append("path")                 //add the paths to the DOM
    //     .attr("d", path)                //actually draw them
    //     .attr("class", "feature")
    //     .attr('stroke','black')
    //     .attr('stroke-width',.2);
