//CAPTURANDO EL OBJETO CANVAS
const canvas = document.getElementById("barChart");
const ctx = canvas.getContext("2d");

//DATOS O VALORES DE LA GRAFICA
const labels = ["Baloncesto","Beisbol","Futbol"];
const values = [300,200,400];
const colors = ["#E74C3C","#3498D8","#E67E22"];


const chartWidth = canvas.width - 100; //area horizontal utilizable del grafico
const chartHeight = canvas.height -100; //area vertical utilizable del grafico
const barWidth  = 50; //ancho de cada barra
const gap = (chartWidth - labels.length * barWidth) / (labels.length + 1); //ESPACIO ENTRE BARRAS
const maxValue = 500; //valor maximo del eje "y"
const numSteps = 5; //cantidad de diviones del eje "Y"
const stepValue = maxValue/numSteps;


function drawGrid(){
    //en esta funcion se dibuja un cuadricula
    ctx.strokeStyle = "#CCC";
    ctx.lineWidth = 1;

    for(let i = 0; i<= numSteps; i++){
        const y = canvas.height - 50 - (i * chartHeight/numSteps); //altura de cada linea en el eje y
        ctx.beginPath();
        ctx.moveTo(50,y);
        ctx.lineTo(canvas.width - 50, y); //posicion de la linea (cambiara de acuerdo al calculo anterior)
        ctx.stroke();

        ctx.fillStyle = "#000";
        ctx.font = "12px Arial";
        ctx.fillText(stepValue * i,20, y + 5); //se colocara una etiqueta del eje "y" en la posicion eje x=20, eje "y"=
    }


    ctx.beginPath();
    ctx.moveTo(50,50); //inicia el eje "y"
    ctx.lineTo(50,canvas.height - 50);
    ctx.moveTo(50,canvas.height - 50); //inicia el eje "x"
    ctx.lineTo(canvas.width - 50, canvas.height - 50);
    ctx.strokeStyle = "#000";
    ctx.stroke();
}

function drawBars(){
    for(let i=0;i<labels.length; i++){
        const x = 50 + gap * ( i + 1) + barWidth * i; //esta es la pocision de la barra en el eje "x"
        const barHeight = (values[i]/maxValue) * chartHeight; //esta es la altura proporcional considerando el bucle for
        const y = canvas.height - 50 - barHeight //esta es la pocision de la barra (puede considerarse como altura)

        ctx.fillStyle = colors[i];
        ctx.fillRect(x,y,barWidth,barHeight); //se dibuja el rectangulo de la barra con la pocision y la altura

        ctx.fillStyle = "#000";
        ctx.font = "12px Arial";
        ctx.fillText(values[i],x + barWidth/4, y - 10); // se coloca el valor de la barra sobre la misma

        ctx.fillText(labels[i],x + barWidth/4, canvas.height - 30); // se coloca la etiqueta o nombre de la barra
    }
}

function drawTitle(){
    ctx.font = "16px Arial";
    ctx.fillStyle = "#000";
    ctx.fillText("unidades vendidas en categorias deportivas", canvas.width/2 - 150 , 20); //se xoloca una leyenda o titulo
}
 
drawGrid();
drawBars();
drawTitle();