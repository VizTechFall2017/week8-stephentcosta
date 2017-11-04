var width = document.getElementById('svg1').clientWidth;
var height = document.getElementById('svg1').clientHeight;

var marginLeft = 0;
var marginTop = 0;

var svg = d3.select('svg')
    .append('g')
    .attr('transform', 'translate(' + marginLeft + ',' + marginTop + ')');

//set up the projection for the map
var albersProjection = d3.geoAlbersUsa()  //tell it which projection to use
    .scale(50000)                           //tell it how big the map should be
    .translate([(width/2), (height/2)]);  //set the center of the map to show up in the center of the screen

//set up the path generator function to draw the map outlines
path = d3.geoPath()
    .projection(albersProjection);        //tell it to use the projection that we just made to convert lat/long to pixels

var nameLookup = d3.map();

var colorScale = d3.scaleLinear().range(['white','blue']);

queue()
    .defer(d3.json, "./boston.json")
    .defer(d3.csv, "./affordableUnits.csv")
    .await(function(err, mapData, unitsData){


    unitsData.forEach(function(d){
        nameLookup.set(d.area, d.units);
    });


    colorScale.domain([0, d3.max(unitsData.map(function(d){return +d.units}))]);

    svg.selectAll("path")               //make empty selection
        .data(mapData.features)          //bind to the features array in the map data
        .enter()
        .append("path")                 //add the paths to the DOM
        .attr("d", path)                //actually draw them
        .attr("class", "feature")
        .attr('fill',function(d){
            return colorScale(nameLookup.get(d.properties.NAME));
        })
        .attr('stroke','white')
        .attr('stroke-width',.2);

  });
