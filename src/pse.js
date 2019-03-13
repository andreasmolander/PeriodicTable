/*
PERIODIC TABLE OF THE ELEMENTS
*/

var pse = new function () {
    var self = this;

    var elements = [{ "symbol": "H", "number": 1, "period": 1, "xpos": 1, "ypos": 1 }, { "symbol": "He", "number": 2, "period": 1, "xpos": 18, "ypos": 1 }, { "symbol": "Li", "number": 3, "period": 2, "xpos": 1, "ypos": 2 }, { "symbol": "Be", "number": 4, "period": 2, "xpos": 2, "ypos": 2 }, { "symbol": "B", "number": 5, "period": 2, "xpos": 13, "ypos": 2 }, { "symbol": "C", "number": 6, "period": 2, "xpos": 14, "ypos": 2 }, { "symbol": "N", "number": 7, "period": 2, "xpos": 15, "ypos": 2 }, { "symbol": "O", "number": 8, "period": 2, "xpos": 16, "ypos": 2 }, { "symbol": "F", "number": 9, "period": 2, "xpos": 17, "ypos": 2 }, { "symbol": "Ne", "number": 10, "period": 2, "xpos": 18, "ypos": 2 }, { "symbol": "Na", "number": 11, "period": 3, "xpos": 1, "ypos": 3 }, { "symbol": "Mg", "number": 12, "period": 3, "xpos": 2, "ypos": 3 }, { "symbol": "Al", "number": 13, "period": 3, "xpos": 13, "ypos": 3 }, { "symbol": "Si", "number": 14, "period": 3, "xpos": 14, "ypos": 3 }, { "symbol": "P", "number": 15, "period": 3, "xpos": 15, "ypos": 3 }, { "symbol": "S", "number": 16, "period": 3, "xpos": 16, "ypos": 3 }, { "symbol": "Cl", "number": 17, "period": 3, "xpos": 17, "ypos": 3 }, { "symbol": "Ar", "number": 18, "period": 3, "xpos": 18, "ypos": 3 }, { "symbol": "K", "number": 19, "period": 4, "xpos": 1, "ypos": 4 }, { "symbol": "Ca", "number": 20, "period": 4, "xpos": 2, "ypos": 4 }, { "symbol": "Sc", "number": 21, "period": 4, "xpos": 3, "ypos": 4 }, { "symbol": "Ti", "number": 22, "period": 4, "xpos": 4, "ypos": 4 }, { "symbol": "V", "number": 23, "period": 4, "xpos": 5, "ypos": 4 }, { "symbol": "Cr", "number": 24, "period": 4, "xpos": 6, "ypos": 4 }, { "symbol": "Mn", "number": 25, "period": 4, "xpos": 7, "ypos": 4 }, { "symbol": "Fe", "number": 26, "period": 4, "xpos": 8, "ypos": 4 }, { "symbol": "Co", "number": 27, "period": 4, "xpos": 9, "ypos": 4 }, { "symbol": "Ni", "number": 28, "period": 4, "xpos": 10, "ypos": 4 }, { "symbol": "Cu", "number": 29, "period": 4, "xpos": 11, "ypos": 4 }, { "symbol": "Zn", "number": 30, "period": 4, "xpos": 12, "ypos": 4 }, { "symbol": "Ga", "number": 31, "period": 4, "xpos": 13, "ypos": 4 }, { "symbol": "Ge", "number": 32, "period": 4, "xpos": 14, "ypos": 4 }, { "symbol": "As", "number": 33, "period": 4, "xpos": 15, "ypos": 4 }, { "symbol": "Se", "number": 34, "period": 4, "xpos": 16, "ypos": 4 }, { "symbol": "Br", "number": 35, "period": 4, "xpos": 17, "ypos": 4 }, { "symbol": "Kr", "number": 36, "period": 4, "xpos": 18, "ypos": 4 }, { "symbol": "Rb", "number": 37, "period": 5, "xpos": 1, "ypos": 5 }, { "symbol": "Sr", "number": 38, "period": 5, "xpos": 2, "ypos": 5 }, { "symbol": "Y", "number": 39, "period": 5, "xpos": 3, "ypos": 5 }, { "symbol": "Zr", "number": 40, "period": 5, "xpos": 4, "ypos": 5 }, { "symbol": "Nb", "number": 41, "period": 5, "xpos": 5, "ypos": 5 }, { "symbol": "Mo", "number": 42, "period": 5, "xpos": 6, "ypos": 5 }, { "symbol": "Tc", "number": 43, "period": 5, "xpos": 7, "ypos": 5 }, { "symbol": "Ru", "number": 44, "period": 5, "xpos": 8, "ypos": 5 }, { "symbol": "Rh", "number": 45, "period": 5, "xpos": 9, "ypos": 5 }, { "symbol": "Pd", "number": 46, "period": 5, "xpos": 10, "ypos": 5 }, { "symbol": "Ag", "number": 47, "period": 5, "xpos": 11, "ypos": 5 }, { "symbol": "Cd", "number": 48, "period": 5, "xpos": 12, "ypos": 5 }, { "symbol": "In", "number": 49, "period": 5, "xpos": 13, "ypos": 5 }, { "symbol": "Sn", "number": 50, "period": 5, "xpos": 14, "ypos": 5 }, { "symbol": "Sb", "number": 51, "period": 5, "xpos": 15, "ypos": 5 }, { "symbol": "Te", "number": 52, "period": 5, "xpos": 16, "ypos": 5 }, { "symbol": "I", "number": 53, "period": 5, "xpos": 17, "ypos": 5 }, { "symbol": "Xe", "number": 54, "period": 5, "xpos": 18, "ypos": 5 }, { "symbol": "Cs", "number": 55, "period": 6, "xpos": 1, "ypos": 6 }, { "symbol": "Ba", "number": 56, "period": 6, "xpos": 2, "ypos": 6 }, { "symbol": "La", "number": 57, "period": 6, "xpos": 3, "ypos": 9 }, { "symbol": "Ce", "number": 58, "period": 6, "xpos": 4, "ypos": 9 }, { "symbol": "Pr", "number": 59, "period": 6, "xpos": 5, "ypos": 9 }, { "symbol": "Nd", "number": 60, "period": 6, "xpos": 6, "ypos": 9 }, { "symbol": "Pm", "number": 61, "period": 6, "xpos": 7, "ypos": 9 }, { "symbol": "Sm", "number": 62, "period": 6, "xpos": 8, "ypos": 9 }, { "symbol": "Eu", "number": 63, "period": 6, "xpos": 9, "ypos": 9 }, { "symbol": "Gd", "number": 64, "period": 6, "xpos": 10, "ypos": 9 }, { "symbol": "Tb", "number": 65, "period": 6, "xpos": 11, "ypos": 9 }, { "symbol": "Dy", "number": 66, "period": 6, "xpos": 12, "ypos": 9 }, { "symbol": "Ho", "number": 67, "period": 6, "xpos": 13, "ypos": 9 }, { "symbol": "Er", "number": 68, "period": 6, "xpos": 14, "ypos": 9 }, { "symbol": "Tm", "number": 69, "period": 6, "xpos": 15, "ypos": 9 }, { "symbol": "Yb", "number": 70, "period": 6, "xpos": 16, "ypos": 9 }, { "symbol": "Lu", "number": 71, "period": 6, "xpos": 17, "ypos": 9 }, { "symbol": "Hf", "number": 72, "period": 6, "xpos": 4, "ypos": 6 }, { "symbol": "Ta", "number": 73, "period": 6, "xpos": 5, "ypos": 6 }, { "symbol": "W", "number": 74, "period": 6, "xpos": 6, "ypos": 6 }, { "symbol": "Re", "number": 75, "period": 6, "xpos": 7, "ypos": 6 }, { "symbol": "Os", "number": 76, "period": 6, "xpos": 8, "ypos": 6 }, { "symbol": "Ir", "number": 77, "period": 6, "xpos": 9, "ypos": 6 }, { "symbol": "Pt", "number": 78, "period": 6, "xpos": 10, "ypos": 6 }, { "symbol": "Au", "number": 79, "period": 6, "xpos": 11, "ypos": 6 }, { "symbol": "Hg", "number": 80, "period": 6, "xpos": 12, "ypos": 6 }, { "symbol": "Tl", "number": 81, "period": 6, "xpos": 13, "ypos": 6 }, { "symbol": "Pb", "number": 82, "period": 6, "xpos": 14, "ypos": 6 }, { "symbol": "Bi", "number": 83, "period": 6, "xpos": 15, "ypos": 6 }, { "symbol": "Po", "number": 84, "period": 6, "xpos": 16, "ypos": 6 }, { "symbol": "At", "number": 85, "period": 6, "xpos": 17, "ypos": 6 }, { "symbol": "Rn", "number": 86, "period": 6, "xpos": 18, "ypos": 6 }, { "symbol": "Fr", "number": 87, "period": 7, "xpos": 1, "ypos": 7 }, { "symbol": "Ra", "number": 88, "period": 7, "xpos": 2, "ypos": 7 }, { "symbol": "Ac", "number": 89, "period": 7, "xpos": 3, "ypos": 10 }, { "symbol": "Th", "number": 90, "period": 7, "xpos": 4, "ypos": 10 }, { "symbol": "Pa", "number": 91, "period": 7, "xpos": 5, "ypos": 10 }, { "symbol": "U", "number": 92, "period": 7, "xpos": 6, "ypos": 10 }, { "symbol": "Np", "number": 93, "period": 7, "xpos": 7, "ypos": 10 }, { "symbol": "Pu", "number": 94, "period": 7, "xpos": 8, "ypos": 10 }, { "symbol": "Am", "number": 95, "period": 7, "xpos": 9, "ypos": 10 }, { "symbol": "Cm", "number": 96, "period": 7, "xpos": 10, "ypos": 10 }, { "symbol": "Bk", "number": 97, "period": 7, "xpos": 11, "ypos": 10 }, { "symbol": "Cf", "number": 98, "period": 7, "xpos": 12, "ypos": 10 }, { "symbol": "Es", "number": 99, "period": 7, "xpos": 13, "ypos": 10 }, { "symbol": "Fm", "number": 100, "period": 7, "xpos": 14, "ypos": 10 }, { "symbol": "Md", "number": 101, "period": 7, "xpos": 15, "ypos": 10 }, { "symbol": "No", "number": 102, "period": 7, "xpos": 16, "ypos": 10 }, { "symbol": "Lr", "number": 103, "period": 7, "xpos": 17, "ypos": 10 }, { "symbol": "Rf", "number": 104, "period": 7, "xpos": 4, "ypos": 7 }, { "symbol": "Db", "number": 105, "period": 7, "xpos": 5, "ypos": 7 }, { "symbol": "Sg", "number": 106, "period": 7, "xpos": 6, "ypos": 7 }, { "symbol": "Bh", "number": 107, "period": 7, "xpos": 7, "ypos": 7 }, { "symbol": "Hs", "number": 108, "period": 7, "xpos": 8, "ypos": 7 }, { "symbol": "Mt", "number": 109, "period": 7, "xpos": 9, "ypos": 7 }, { "symbol": "Ds", "number": 110, "period": 7, "xpos": 10, "ypos": 7 }, { "symbol": "Rg", "number": 111, "period": 7, "xpos": 11, "ypos": 7 }, { "symbol": "Cn", "number": 112, "period": 7, "xpos": 12, "ypos": 7 }, { "symbol": "Nh", "number": 113, "period": 7, "xpos": 13, "ypos": 7 }, { "symbol": "Fl", "number": 114, "period": 7, "xpos": 14, "ypos": 7 }, { "symbol": "Mc", "number": 115, "period": 7, "xpos": 15, "ypos": 7 }, { "symbol": "Lv", "number": 116, "period": 7, "xpos": 16, "ypos": 7 }, { "symbol": "Ts", "number": 117, "period": 7, "xpos": 17, "ypos": 7 }, { "symbol": "Og", "number": 118, "period": 7, "xpos": 18, "ypos": 7 }]

    self.elementWidth = 74;
    self.elementHeight = 64;
    self.elementMargin = 4;
    var svgPadding = 1;

    function elementId(d) {
            return d.symbol + d.number;
        }

    function elementName(d) {
            return d.symbol;
        }

    function elementXPos(d) {
            var x = d.xpos - 1;
            if (x > 1) x++;
            if (d.number == 71 || d.number == 103) x = 3;
            return x * (self.elementWidth + self.elementMargin);
        }

    function elementYPos(d) {
            var y = d.ypos - 1;
            if (d.number == 71) y = 5;
            if (d.number == 103) y = 6;
            return y * (self.elementHeight + self.elementMargin);
        }

    self.init = function (c) {
            var container = d3.select(c);
            self.svg = container
                .append("div").style("height", "100%")
                    .append("svg")
                        .attr("width", "100%")
                        .attr("height", "100%")
                        .attr("viewBox", "0, -" + svgPadding + ", " + (19 * (self.elementWidth + self.elementMargin)) + ", " + (10 * (self.elementHeight + self.elementMargin) + 2 * svgPadding));
            self.defs = self.svg.append("defs");
    }

    self.click = null;
    self.elementFill = function (d) {
            return "transparent";
    }

    self.draw = function (data) {
    
            var view = self.svg.append("g");
    
            function elementIsActive(z) {
                if (data) {
                    return data.some(function (tt) {
                        return tt.Z == z;
                    });
                } else {
                    return false;
                }
            }
    
            var element = view.selectAll("g")
                .data(elements)
                .enter()
                .append("g")
                    .attr("id", function (d) { return elementId(d); });
    
            element.append("rect")
                .attr("x", function (d) { return elementXPos(d); })
                .attr("y", function (d) { return elementYPos(d); })
                .attr("width", self.elementWidth)
                .attr("height", self.elementHeight)
                .style("fill", self.elementFill)
                .style("stroke", "grey")
                .style("stroke-width", 1)
                .style("shape-rendering", "crispEdges");
    
            element.append("text")
                .text(function (d) { return elementName(d); })
                .attr("x", function (d) { return elementXPos(d) + self.elementWidth / 2; })
                .attr("y", function (d) { return elementYPos(d) + self.elementHeight - 12; })
                .attr("font-size", 24)
                .attr("text-anchor", "middle")
                .style("fill", function (d) { return elementIsActive(d.number) ? "black" : "grey" });
    
            element.append("text")
                .text(function (d) { return d.number; })
                .attr("x", function (d) { return elementXPos(d) + self.elementWidth / 2; })
                .attr("y", function (d) { return elementYPos(d) + 24; })
                .attr("font-size", 18)
                .attr("text-anchor", "middle")
                .style("fill", function (d) { return elementIsActive(d.number) ? "black" : "grey" });
    
            element.filter(function (d) { return elementIsActive(d.number); })
                .classed("activeElement", true)
                .style("cursor", "pointer")
                .on("click", self.click)
    
            view.append("text")
                .attr("x", function (d) { return 2 * (self.elementWidth + self.elementMargin) + self.elementWidth / 2; })
                .attr("y", function (d) { return 5 * (self.elementHeight + self.elementMargin) + self.elementHeight / 2; })
                .attr("font-size", 24)
                .attr("text-anchor", "middle")
                .attr("alignment-baseline", "middle")
                .text("*")
                .style("fill", "grey");;
    
            view.append("text")
                .attr("x", function (d) { return 2 * (self.elementWidth + self.elementMargin) + self.elementWidth / 2; })
                .attr("y", function (d) { return 6 * (self.elementHeight + self.elementMargin) + self.elementHeight / 2; })
                .attr("font-size", 24)
                .attr("text-anchor", "middle")
                .attr("alignment-baseline", "middle")
                .text("**")
                .style("fill", "grey");;
    
            view.append("text")
                .attr("x", function (d) { return 2 * (self.elementWidth + self.elementMargin) + self.elementWidth / 2; })
                .attr("y", function (d) { return 8 * (self.elementHeight + self.elementMargin) + self.elementHeight / 2; })
                .attr("font-size", 24)
                .attr("text-anchor", "middle")
                .attr("alignment-baseline", "middle")
                .text("*")
                .style("fill", "grey");;
    
            view.append("text")
                .attr("x", function (d) { return 2 * (self.elementWidth + self.elementMargin) + self.elementWidth / 2; })
                .attr("y", function (d) { return 9 * (self.elementHeight + self.elementMargin) + self.elementHeight / 2; })
                .attr("font-size", 24)
                .attr("text-anchor", "middle")
                .attr("alignment-baseline", "middle")
                .text("**")
                .style("fill", "grey");;
        }
}

function addIonSourceLegend(pse, data) {
    var width = pse.elementWidth;
    var height = pse.elementHeight;
    var margin = pse.elementMargin;
    var left = 10 * (width + margin) - 2 * (width + margin);

    var legend = pse.svg.append("g")
        .attr("transform", function () { return "translate(" + left + ", 32)"; });

    legend.append("text")
        .text("Ion source")
        .attr("x", width + margin + width / 2)
        .attr("y", -6)
        .attr("font-size", 18)
        .attr("text-anchor", "middle")
        .attr("fill", "grey");

    var source = legend.selectAll("g").data(data).enter().append("g");

    source.append("rect")
        .attr("x", 0)
        .attr("y", function (d, i) { return i * (height / 2 + margin); })
        .attr("width", width)
        .attr("height", height / 2)
        .attr("fill", function (d) { return d.temp["hot"] || d.temp["default"] })
        .attr("stroke", "grey")
        .attr("stroke-width", 1);

    source.append("rect")
        .attr("x", width + margin)
        .attr("y", function (d, i) { return i * (height / 2 + margin); })
        .attr("width", width)
        .attr("height", height / 2)
        .attr("fill", function (d) { return d.temp["default"] })
        .attr("stroke", "grey")
        .attr("stroke-width", 1);

    source.append("rect")
        .attr("x", (width + margin) * 2)
        .attr("y", function (d, i) { return i * (height / 2 + margin); })
        .attr("width", width)
        .attr("height", height / 2)
        .attr("fill", function (d) { return d.temp["cold"] || d.temp["default"] })
        .attr("stroke", "grey")
        .attr("stroke-width", 1);

    source.append("text")
        .text(function (d) { return d.type; })
        .attr("x", width * 1.5 + margin)
        .attr("y", function (d, i) { return (i * (height / 2 + margin)) + 22; })
        .attr("font-size", 18)
        .attr("text-anchor", "middle")
        .attr("fill", "grey");

    source.append("text")
        .text(function (d, i) {
            return i == 0 ? "+" : i == 1 ? "hot" : "";
        })
        .attr("x", width / 2)
        .attr("y", function (d, i) { return (i * (height / 2 + margin)) + 22; })
        .attr("font-size", 18)
        .attr("text-anchor", "middle")
        .attr("fill", "grey");

    source.append("text")
        .text(function (d, i) {
            return i == 0 ? "-" : i == 1 ? "cold" : "";
        })
        .attr("x", 2.5 * width + 2 * margin)
        .attr("y", function (d, i) { return (i * (height / 2 + margin)) + 22; })
        .attr("font-size", 18)
        .attr("text-anchor", "middle")
        .attr("fill", "grey");
}
