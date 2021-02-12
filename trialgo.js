let inp = "R";
let c1, c2;

function draw() {
    c1=inp.charAt(0);
    c2=inp.charAt(inp.length-1);

    if(c1===c2) {
        console.log(c1);
    }
    
    if(c1==="G" && c2==="B") {
        console.log("R");
    } else if(c1==="G" && c2==="R") {
        console.log("B");
    }

    if(c1==="B" && c2==="R") {
        console.log("G");
    } else if(c1==="B" && c2==="G") {
        console.log("R");
    }

    if(c1==="R" && c2==="G") {
        console.log("B");
    } else if(c1==="R" && c2==="B") {
        console.log("G");
    }
}

const call = setInterval(draw, 1000);