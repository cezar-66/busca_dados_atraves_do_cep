
//ao iniciar pagina esconde campos da div - conteudos
$( window ).on( "load", escondeConteudo);


$(document).ready(function(){
     
    $("#txtCep").focusout(function(){
        //Quando clicado fora do campo CEP, é realizado uma consulta na api  
        let cep = $("#txtCep").val();
        cep = cep.replace("-", "");

       
        let urlString = "https://viacep.com.br/ws/" + cep + "/json/";
    
        $.ajax({
            
            url : urlString,
            type : "get",
            dataType : "json",
            success : function(data){ 
                $("#txtEstado").val(data.uf);
                $("#txtCidade").val(data.localidade);
                $("#txtBairro").val(data.bairro);
                $("#txtRua").val(data.logradouro);
                $("#txtComplemento").val(data.complemento);
                
                $( document ).ready(apresentaConteudo);
            },
            
            error :  function(erro){
                alert("Não foi possível identificar seu endereço através do CEP informado")
            }
            
        });
    });
});

function limpaCamposConteudo(){
    
    $("#txtCep").val("");
    $("#txtCidade").val("");
    $("#txtEstado").val("");
    $("#txtBairro").val("");
    $("#txtRua").val("");
    $("#txtComplemento").val("");
    escondeConteudo();
}

function escondeConteudo(){
    $("#conteudo").hide();
    $('#txtCep').mask('00000-000');
}

function apresentaConteudo(){
    $("#conteudo").show();
}







