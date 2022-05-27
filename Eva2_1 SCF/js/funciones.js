window.onload = iniciar;

var conductores = [];
conductores.push(new Conductor("12345","ANDRES","CALAMARO","RODRÍGUEZ","TOLCUATO 345","RANCAGUA","MASCULINO",992345123,25, "CAMIONES", "NOCTURNA","TRANSFER"))
conductores.push(new Conductor("23456","CELESTE","CARVALLO","SOUZA","LA RIOJA 1256","RENGO","FEMENINO",976341035,13, "TAXIS", "VESPERTINA", "TAXI"))

function iniciar() {
    // HTMLFormElement.reset();
    // document.getElementById('txtId').reset();
    var btnConsultar = document.getElementById('btnConsultar');
    btnConsultar.addEventListener('click',clickConsultar);
    

    var btnRegistrar = document.getElementById('btnRegistrar');
    btnRegistrar.addEventListener('click',clickRegistrar);

    var btnModificar = document.getElementById('btnModificar');
    btnModificar.addEventListener('click',clickModificar);

    var btnEliminar = document.getElementById('btnEliminar');
    btnEliminar.addEventListener('click',clickEliminar);

    listarConductores();
}

function listarConductores(){
    var fila="";
    for(var i=0; i<conductores.length;i++){
        var e=conductores[i];
        fila+="<tr>";
            fila+="<td>"+e.id+"</td>";
            fila+="<td>"+e.nome+"</td>";
            fila+="<td>"+e.apat+"</td>";
            fila+="<td>"+e.amat+"</td>";
            fila+="<td>"+e.dire+"</td>";
            fila+="<td>"+e.comu+"</td>";
            fila+="<td>"+e.sexo+"</td>";
            fila+="<td>"+e.fono+"</td>";
            fila+="<td>"+e.expe+"</td>";
            fila+="<td>"+e.lice+"</td>";
            fila+="<td>"+e.jorn+"</td>";
            fila+="<td>"+e.serv+"</td>";
        fila+="</tr>";
    }
    document.getElementById("lista_conductores").innerHTML=fila;
    console.log(conductores);
}

function clickConsultar()
{   
    var id = document.getElementById('txtId').value;
    debugger;
    if (validarVacios(id)){lanzarMensaje("Recuerde, para consultar debe digitar un Id (alfanumérico y de no más de 5 caracteres), gracias!","danger"); limpiarRegistro(1);}
    else if(validarMaxChar(id,5)){lanzarMensaje("Recuerde, el largo del Id no debe superar los 5 caracteres!","danger"); limpiarRegistro(1);}
    // else if(validarUnicidad(id)){lanzarMensaje("Este Id ya está registrado","warning");}
    else
    {   
        sw=0; 
        for(var i=0; i < conductores.length;i++)
        {   
            var c=conductores[i];
            if(id===c.id)
            {   
                sw=1;
                // document.getElementById("txtId").value=c.id;
                document.getElementById("txtNome").value=c.nome;
                document.getElementById("txtApat").value=c.apat;
                document.getElementById("txtAmat").value=c.amat;
                document.getElementById("txtDire").value=c.dire;
                document.getElementById("selComu").value=c.comu;
                if(c.sexo=="MASCULINO"){
                    document.getElementById("masc").checked=true;}
                else if(c.sexo=="FEMENINO"){
                    document.getElementById("feme").checked=true};
                document.getElementById("numFono").value=c.fono;
                document.getElementById("numExpe").value=c.expe;
                document.getElementById("selLice").value=c.lice;
                if(c.jorn=="MAÑANA"){
                    document.getElementById("maña").checked=true}
                else if(c.jorn=="VESPERTINA"){
                    document.getElementById("vesp").checked=true}
                else if(c.jorn=="NOCTURNA"){
                    document.getElementById("noct").checked=true};
                document.getElementById("selServ").value=c.serv;
                lanzarMensaje("Registro encontrado, puede Modificar o Eliminar!!","success");
                break;
            }
        }
        if (sw==0){lanzarMensaje("Registro no encontrado, puede Registrarlo!!","warning");}
    }   
   
}

function clickRegistrar()
{   var id=document.getElementById('txtId').value;
    var nome=document.getElementById('txtNome').value.toUpperCase();
    var apat=document.getElementById('txtApat').value.toUpperCase();
    var amat=document.getElementById('txtAmat').value.toUpperCase();
    var dire=document.getElementById('txtDire').value.toUpperCase();
    var comu=document.getElementById('selComu').value;
    var sexo="";
    if(document.getElementById('masc').checked){sexo="MASCULINO"}
    else if(document.getElementById('feme').checked){sexo="FEMENINO"}
    
    var fono=document.getElementById('numFono').value;
    var expe=document.getElementById('numExpe').value;
    var lice=document.getElementById('selLice').value;
    var jorn="";
    if(document.getElementById('maña').checked){jorn="MAÑANA"}
    else if(document.getElementById('vesp').checked){jorn="VESPERTINA"}
    else if(document.getElementById('noct').checked){jorn="NOCTURNA"}
    
    var serv=document.getElementById('selServ').value;

    // VALIDACIONES

    debugger;
    let errores="";

    var rep =0;

    if(validarUnicidad(id)){ }
    else
    {   errores += "Ups este registro ya existe!! debes ingresar otro para consultar!!\n";
        lanzarMensaje(errores,"danger");
        limpiarRegistro(1);
        rep=1;
    }
    if(rep==0)
    {
        if (validarVacios(id)){errores +="El Id no debe estar en blanco!!, \n";}
        if(validarMaxChar(id,5)){errores += "El Id puede tener hasta 5 caracteres!!\n";}
        
        
        if(validarVacios(nome)){errores +="El Nombre no debe estar en blanco!! \n";}
        if (validarMaxChar(nome,30)){errores += "El Nombre puede tener hasta 30 caracteres!! \n";}

        if(validarVacios(apat)){errores +="El A.Paterno no debe estar en blanco!! \n";}
        if (validarMaxChar(apat,30)){errores += "El A.Paterno puede tener hasta 30 caracteres!! \n";}

        if(validarVacios(amat)){errores +="El A.Materno no debe estar en blanco!! \n";}
        if (validarMaxChar(amat,30)){errores += "El A.Materno puede tener hasta 30 caracteres!! \n";}

        if(validarVacios(dire)){errores +="La dirección no debe estar en blanco!! \n";}
        if (validarMaxChar(dire,30)){errores += "La dirección puede tener hasta 30 caracteres!! \n";}

        if (comu!=="Desabled"){}else{errores +="Debes escoger una comuna!! \n";}

        if(validarVacios(sexo)){errores +="Debes escoger un sexo!! \n";}

        if(validarVacios(fono)){errores +="El teléfono no debe estar en blanco!! \n";}
        if(validarMaxChar(fono,9)){errores +="El teléfono no debe tener más de 9 dígitos!! \n";}
        if(validarMinChar(fono,9)){errores +="El teléfono no debe tener menos de 9 dígitos!! \n";}

        if(expe<0){errores +="La experiencia no puede ser menor a 0 años!! \n";}

        if (lice!=="Desabled"){}else{errores +="Debes escoger un tipo de licencia!! \n";}

        if(validarVacios(jorn)){errores +="Debe contar con un tipo de Jornada!! \n";}

        if (serv!=="Desabled"){}else{errores +="Debes escoger el tipo servicio que presta!! \n";}
        

        if (errores!=="")
        {   
            lanzarMensaje(errores,"danger");
            // limpiarRegistro(1);
        }
        else
        {
            var c=new Conductor(id,nome,apat,amat,dire,comu,sexo,fono,expe,lice,jorn,serv)
            conductores.push(c);
            lanzarMensaje("Registro exitoso!!","success");
            listarConductores();
            limpiarRegistro(1);
        }
    }
}

function clickModificar()
{   
    var id=document.getElementById('txtId').value.toUpperCase();
    var nome=document.getElementById('txtNome').value.toUpperCase();
    var apat=document.getElementById('txtApat').value.toUpperCase();
    var amat=document.getElementById('txtAmat').value.toUpperCase();
    var dire=document.getElementById('txtDire').value.toUpperCase();
    var comu=document.getElementById('selComu').value;
    var sexo="";
    if(document.getElementById('masc').checked==true){sexo="MASCULINO"}
    else if(document.getElementById('feme').checked==true){sexo="FEMENINO"};
    var fono=document.getElementById('numFono').value.toUpperCase();
    var expe=document.getElementById('numExpe').value.toUpperCase();
    var lice=document.getElementById('selLice').value;
    var jorn="";
    if(document.getElementById('maña').checked==true){jorn="MAÑANA"}
    else if(document.getElementById('vesp').checked==true){jorn="VESPERTINA"}
    else if(document.getElementById('noct').checked==true){jorn="NOCTURNA"};
    var serv=document.getElementById('selServ').value;

    // VALIDACIONES
    
    var errores = "";
    if(validarVacios(nome)){errores +="El Nombre no debe estar en blanco!! \n";}
    if (validarMaxChar(nome,30)){errores += "El Nombre puede tener hasta 30 caracteres!! \n";}

    if(validarVacios(apat)){errores +="El A.Paterno no debe estar en blanco!! \n";}
    if (validarMaxChar(apat,30)){errores += "El A.Paterno puede tener hasta 30 caracteres!! \n";}

    if(validarVacios(amat)){errores +="El A.Materno no debe estar en blanco!! \n";}
    if (validarMaxChar(amat,30)){errores += "El A.Materno puede tener hasta 30 caracteres!! \n";}

    if(validarVacios(dire)){errores +="La dirección no debe estar en blanco!! \n";}
    if (validarMaxChar(dire,30)){errores += "La dirección puede tener hasta 30 caracteres!! \n";}

    if (comu!=="Desabled"){}else{errores +="Debes escoger una comuna!! \n";}

    if(validarVacios(sexo)){errores +="Debes escoger un sexo!! \n";}

    if(validarVacios(fono)){errores +="El teléfono no debe estar en blanco!! \n";}
    if(validarMaxChar(fono,9)){errores +="El teléfono no debe tener más de 9 dígitos!! \n";}
    if(validarMinChar(fono,9)){errores +="El teléfono no debe tener menos de 9 dígitos!! \n";}

    if(expe<0){errores +="La experiencia no puede ser menor a 0 años!! \n";}

    if (lice!=="Desabled"){}else{errores +="Debes escoger un tipo de licencia!! \n";}

    if(validarVacios(jorn)){errores +="Debe contar con un tipo de Jornada!! \n";}

    if (serv!=="Desabled"){}else{errores +="Debes escoger el tipo servicio que presta!! \n";}

    debugger;
    if(errores!==""){lanzarMensaje(errores,"warning");}
    else
    {   
        var sw = 0;
        for(var i=0; i<conductores.length; i++)
        {   
            var e = conductores[i];
            if(id === e.id)
            {   
                var x = confirm("¿Está Seguro(a) De Querer Modificar Los Datos Del Registro Con Id: ("+id+")?");
                if(x === true)
                {   
                    sw = 1;
                    conductores[i].nome = nome;
                    conductores[i].apat = apat;
                    conductores[i].amat = amat;
                    conductores[i].dire = dire;
                    conductores[i].comu = comu;
                    conductores[i].sexo = sexo;
                    conductores[i].fono = fono;
                    conductores[i].expe = expe;
                    conductores[i].lice = lice;
                    conductores[i].jorn = jorn;
                    conductores[i].serv = serv;
                    lanzarMensaje("Datos Modificados con Exito!","success");
                    limpiarRegistro(1);           
                    break;
                }
                else
                {   
                    sw = 2;
                    lanzarMensaje("Se cancela la modificación","warning");
                    limpiarRegistro(1);
                    break;
                }
            }
        }
        listarConductores();
    }
}


function clickEliminar()
{
    var id = document.getElementById('txtId').value;
    sw=0;
    for(var i=0; i < conductores.length;i++)
    {
        var c=conductores[i];
        if(id===c.id)
        {
            var resp = confirm("Seguro de Querer Eliminar el Registro Seleccionado?");
            if (resp === true)
            {   
                sw=1;
                conductores.splice(i,1);
                lanzarMensaje("Se ha eliminado registro con éxito!!","success");
                limpiarRegistro(1);
                break;
            }
            else
            {   
                sw=2;
                lanzarMensaje("No se realiza eliminación de registro!!","success");
                limpiarRegistro();
                break;
            }
        }
        else
        {
            lanzarMensaje("Registro no existe, no se puede eliminar!!","warning");
            limpiarRegistro();
        }
    }
    listarConductores();        
}


function lanzarMensaje(msg,tmsg) {
    var ms='';
    ms+='<div class="alert alert-'+tmsg+' alert-dismissible fade show" role="alert">';
    ms+='<strong>Moovet : </strong> '+msg+'';
    ms+='<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
    ms+='</div>';
    document.getElementById("msgs").innerHTML=ms;

}


function limpiarRegistro(x)
    {
        if(x==1)
        {
            document.getElementById("txtId").value = "";
        }
        document.getElementById("txtNome").value = "";
        document.getElementById("txtApat").value = "";
        document.getElementById("txtAmat").value = "";
        document.getElementById("txtDire").value = "";
        document.getElementById("selComu").value = "Desabled";
        document.getElementById("masc").checked = false;
        document.getElementById("feme").checked = false;
        document.getElementById("numFono").value = "";
        document.getElementById("numExpe").value = "";
        document.getElementById("selLice").value = "Desabled";
        document.getElementById("maña").checked=false;
        document.getElementById("vesp").checked=false;
        document.getElementById("noct").checked=false;
        document.getElementById("selServ").value = "Desabled";
        // document.reset();
        // document.getElementById("txtId").focus();
    }


function vaciarId()
{   
    // document.getElementById("txtId").value=null;
    limpiarRegistro(1);
}

function validarVacios(v) {if (v.trim().length==0) {return true} }

function validarMaxChar(v,maximo) {if (v.trim().length>maximo){return true}}

function validarMinChar(v,minimo) {if (v.trim().length<minimo){return true}}

function validarUnicidad(v)
{
    for(var i=0; i<conductores.length; i++)
    {
        var c = conductores[i];
        if(v === c.id)
            {
                return false;
                break;
            }
    }
    return true;
}

