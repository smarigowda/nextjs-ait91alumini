import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

// const data = fs.readFileSync("data/data.csv");

// console.log(data);

console.log(d3);

/* Component */
export const MyD3Component = ({ data }) => {
  /* The useRef Hook creates a variable that "holds on" to a value across rendering
       passes. In this case it will hold our component's SVG DOM element. It's
       initialized null and React will assign it later (see the return statement) */
  const d3Container = useRef(null);

  /* The useEffect Hook is for running side effects outside of React,
       for instance inserting elements into the DOM using D3 */
  useEffect(
    () => {
      if (data && d3Container.current) {
        const svg = d3.select(d3Container.current);

        // Bind D3 data
        // const update = svg.append("g");

        // // Enter new D3 elements
        // update
        //   .enter()
        //   .append("text")
        //   .attr("x", (d, i) => i * 25)
        //   .attr("y", 40)
        //   .style("font-size", 24)
        //   .text((d) => d);

        // // Update existing D3 elements
        // update.attr("x", (d, i) => i * 40).text((d) => d);

        // // Remove old D3 elements
        // update.exit().remove();

        // set the dimensions and margins of the graph
        let margin = { top: 30, right: 25, bottom: 30, left: 140 },
          width = 1500 - margin.left - margin.right,
          height = 450 - margin.top - margin.bottom;

        // append the svg object to the body of the page
        svg
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
          .append("g")
          .attr(
            "transform",
            "translate(" + margin.left + "," + margin.top + ")"
          );

        // //Read the data
        // d3.csv("data/data.csv", function (data) {
        //   console.log("----- data ------");
        //   console.log(data);

        //   // data = window.finalDataForHeatMap;

        //   data = data.filter((d) => d.group !== "");
        //   // Labels of row and columns -> unique identifier of the column called 'group' and 'variable'
        //   let myGroups = d3
        //     .map(data, function (d) {
        //       return d.group;
        //     })
        //     .keys();
        //   let myVars = d3
        //     .map(data, function (d) {
        //       return d.variable;
        //     })
        //     .keys();

        //   // Build X scales and axis:
        //   let x = d3
        //     .scaleBand()
        //     .range([0, width])
        //     .domain(myGroups)
        //     .padding(0.05);
        //   svg
        //     .append("g")
        //     .style("font-size", 15)
        //     .attr("transform", "translate(0," + height + ")")
        //     .call(d3.axisBottom(x).tickSize(0))
        //     .select(".domain")
        //     .remove();

        //   // Build Y scales and axis:
        //   let y = d3
        //     .scaleBand()
        //     .range([height, 0])
        //     .domain(myVars)
        //     .padding(0.05);
        //   svg
        //     .append("g")
        //     .style("font-size", 15)
        //     .call(d3.axisLeft(y).tickSize(0))
        //     .select(".domain")
        //     .remove();

        //   // Build color scale
        //   let myColor = d3
        //     .scaleSequential()
        //     .interpolator(d3.interpolateInferno)
        //     .domain([1, 100]);

        //   // create a tooltip
        //   let tooltip = d3
        //     .select("#my_dataviz-2")
        //     .append("div")
        //     .style("opacity", 0)
        //     .attr("class", "tooltip")
        //     .style("background-color", "white")
        //     .style("border", "solid")
        //     .style("border-width", "2px")
        //     .style("border-radius", "5px")
        //     .style("padding", "5px");

        //   // Three function that change the tooltip when user hover / move / leave a cell
        //   let mouseover = function (d) {
        //     tooltip.style("opacity", 1);
        //     d3.select(this).style("stroke", "black").style("opacity", 1);
        //   };
        //   let mousemove = function (d) {
        //     tooltip
        //       .html(`Progress = ${d.value}%. ${d.description}`)
        //       .style("left", d3.mouse(this)[0] + 70 + "px")
        //       .style("top", d3.mouse(this)[1] + "px");
        //   };
        //   let mouseleave = function (d) {
        //     tooltip.style("opacity", 0);
        //     d3.select(this).style("stroke", "none").style("opacity", 0.8);
        //   };

        //   // add the squares
        //   svg
        //     .selectAll()
        //     .data(data, function (d) {
        //       return d.group + ":" + d.variable;
        //     })
        //     .enter()
        //     .append("rect")
        //     .attr("x", function (d) {
        //       return x(d.group);
        //     })
        //     .attr("y", function (d) {
        //       return y(d.variable);
        //     })
        //     .attr("rx", 4)
        //     .attr("ry", 4)
        //     .attr("width", x.bandwidth())
        //     .attr("height", y.bandwidth())
        //     .style("fill", function (d) {
        //       return myColor(d.value);
        //     })
        //     .style("stroke-width", 4)
        //     .style("stroke", "none")
        //     .style("opacity", 0.8)
        //     .on("mouseover", mouseover)
        //     .on("mousemove", mousemove)
        //     .on("mouseleave", mouseleave);
        // });
      }
    },

    /*
            useEffect has a dependency array (below). It's a list of dependency
            variables for this useEffect block. The block will run after mount
            and whenever any of these variables change. We still have to check
            if the variables are valid, but we do not have to compare old props
            to next props to decide whether to rerender.
        */
    [data, d3Container.current]
  );

  return (
    <svg className="d3-component" width={400} height={200} ref={d3Container} />
  );
};

/* App */
export const MyApp = ({ data }) => {
  console.log("props in MyApp");
  console.log(data);
  return (
    <div className="my-app">
      <MyD3Component data={data} />
    </div>
  );
};
