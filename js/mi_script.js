function enviartexto()
{
    //alert("dsfkljfhsdkjfhskd");
    
    document.getElementById("enviado").innerHTML="texto desde un archivo js";
}


function sumar()
{
    let n1=document.getElementById("id_n1").value;
    console.log(n1);
    let n2=document.getElementById("id_n2").value;

    let res=parseInt(n1)+parseInt(n2);

    document.getElementById("resultado").innerHTML=res
}


function longitudtexto()
{
    let texto=document.getElementById("nom").value;
    if (texto.length<3)
    {
        document.getElementById("help_nom").innerHTML="⚠ Debe tener al menos 3 letras"
    }

    
}
