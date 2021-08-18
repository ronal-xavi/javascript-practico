//Código del Cuadrado
console.group("Cuadrado");
console.log("Hello word")
// const ladoCuadrado = 5;
// console.log("Lados lados del cuadreado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
} 

// console.log("El Perimetro del cuadrado es: " + perimetroCuadrado + "cm");

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
function areaCuadrado(lado){
    return lado * lado
}
// console.log("El área del Cuadrado es: " + areaCuadrado + "cm2");
// console.groupEnd();

//Código del Triángulo
console.group("Triangulo");
const ladoTriangulo1 = 6
const ladoTriangulo2 = 6
const baseTriangulo = 4

console.log(
    "Los lados del triangulo miden: " 
    + ladoTriangulo1 
    + "cm," 
    + ladoTriangulo2 
    + "cm," 
    + baseTriangulo 
    + "cm"
    ); 
    // const alturaTriangulo =5.5;
    // console.log("la Altura del Triangulo es de:" + alturaTriangulo + "cm");

    // const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
    // console.log("El perimetro del triangulo es: " + perimetroTriangulo);
    function perimetoTriangulo(lado1,lado2,base){
        return lado1 + lado2 + base
    }

//     const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
//     console.log("El área del triangulo es: " + areaTriangulo  + "cm*2" )
// console.groupEnd();

    function areaTriangulo(base, altura){
        return (base*altura)/2;
    }

// console.group("Circulo");
//     const radioCirculo = 4;
//     console.log("El radio del Circulo es: " + radioCirculo);

    // const diametroCirculo = radioCirculo * 2;
    // console.log("El diametro del Circulo es: " + diametroCirculo );
    function diametroCirculo(radio){
        return radio*2;
    }

    const PI = Math.PI;
    console.log("El valor de PI es: " + PI);

    // const perimetroCirculo = diametroCirculo * PI;
    // console.log("El perimetro del Circulo es: " + perimetroCirculo);
    function perimetroCirculo(radio){
        const diametro = diametroCirculo(radio);
        return diametro * PI;
    }   

    

//     const areaCirculo = (radioCirculo * radioCirculo) * PI; 
//     console.log("El área del ciculo es: "  + areaCirculo)
// console.groupEnd();
function areaCirculo(radio){
    return (radio*radio)*PI
}

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = perimetroCuadrado(value);
    alert(area);
}













