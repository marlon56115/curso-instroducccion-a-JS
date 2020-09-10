var parameters = {
    target: '#myFunction',
    data: [{
        fn: 'x^2',
        color: 'yellow'
    }],
    grid: true,
    yAxis: { domain: [-10, 10] },
    xAxis: { domain: [-10, 10] }
};

function graficar() {
    var xMin = document.querySelector("#xMin").value;
    var xMax = document.querySelector("#xMax").value;
    var yMin = document.querySelector("#yMin").value;
    var yMax = document.querySelector("#yMax").value;
    var color = document.querySelector("#color").value;
    var funcion = document.querySelector("#funcion").value;
    parameters.data[0].fn=funcion;
    parameters.data[0].color = color;
    parameters.yAxis.domain=[yMin,yMax];
    parameters.xAxis.domain=[xMin,xMax];
    functionPlot(parameters);
}
