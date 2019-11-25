<html>
<head>
<title>Sistema CMS TechTravelBrazil</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<style>
div.a {
	text-align: center;
}

div.container {
	width: 400px;
	height: auto;
}

div.form-group {
	height: auto;
}

div.form-group form-check {
	height: auto;
}
</style>
</head>
<body>

<div class="a">
<h1>Sistema CMS TechTravelBrazil</h1>
</div>

<?php

session_start();
if (isset($_SESSION['login']) && isset($_SESSION['senha']) ) {
	header('location:menu.php');
}

include('config.php');
 
try {
	$con = new PDO("mysql:host=".SERVIDOR.";dbname=".BANCO,USUARIO,SENHA);	
} catch (Exception $e) {
    echo "Erro!: " . $e->getMessage() . "<br>";
    die();
}



if (isset($_GET['action'])) {
    switch ($_GET['action']) {
		case 'login':

			$qUsuario = "SELECT * FROM usuario WHERE email=? AND senha=? ";
            try {
                $pre = $con->prepare($qUsuario);
				$pre->execute([$_POST['email'], $_POST['senha']]);
				$rUsuario = $pre->fetchAll(PDO::FETCH_OBJ);
				print_r($rUsuario);
				
				if (count($rUsuario)>0) {
					// fazer login
					$_SESSION['login'] = $_POST['email'];
					$_SESSION['senha'] = md5($_POST['senha']);
					$_SESSION['cod_usuario'] = $rUsuario[0]->cod_usuario;
					header('location:menu.php');
				} 
				else {
					// mostrar mensagem login invalido e retornar para tela de login
					//header('location:index.php?msg=Login Invalido');
					print ("<center>Login Invalido</center>");
				}
			}
			catch (Exception $e) {
				print("Erro ". $e->getMessage());
				die();
			}
			break;
			
	}
}

?>

<div class="container">
  <h3>Login</h3>
  <form method="POST" action='<?=$_SERVER['PHP_SELF']."?action=login"?>'>
    <div class="form-group">
      <label for="exampleInputEmail1"><h5>Email</h5></label>
      <input type="email" name='email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite seu email">
    </div>
  
    <div class="form-group">
      <label for="exampleInputPassword1"><h5>Senha</h5></label>
      <input type="password" name='senha' class="form-control" id="exampleInputPassword1" placeholder="Digite sua senha">
    </div>
    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1"><h5>Mantenha-me logado</h5></label>
    </div>
    <button type="submit" class="btn btn-primary">Enviar</button>
  </form>
</div>
</body>
</html>
