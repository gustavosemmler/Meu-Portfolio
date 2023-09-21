<?php

    $nome = addslashes($_POST['nome']);
    $email = addslashes($_POST['email']);
    $celular = addslashes($_POST['celular']);

    $para = "gordonitosdapaixao@gmail.com";
    $assunto = "coleta de dados - Gustavo"

    $corpo = "Nome: ".$nome."\n"."E-mail: ".$email."\n"."Telefone: ".$celular;

    $cabeca = "From: gustavosemmler@hotmail.com"."\n"."Reply-to: ".$email."\n"."X=Mailer:PHP/".phpversion();

    if(mail($para,$assunto,$corpo,$cabeca)){
        echo("E-mail enviado com sucesso!");
    } else{
        echo("Houve um erro ao enviar o email!");
    }

?>