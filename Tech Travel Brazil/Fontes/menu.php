<?php
session_start();
if (isset($_SESSION['login']) && isset($_SESSION['senha']) ) {
?>
<style>
div.container {
	width: 500px;
	height: auto;
}

.a {
	text-align: center;
}

div.form-group {
	height: center;
}

</style>
<html>
<head>
<title>Sistema CMS TechTravelBrazil</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<style>
.a {
	text-align: center;
}

.list-group {
	width: 200px;
}
</style>

</head>
<body>


<h1 class='a'>Sistema CMS TechTravelBrazil</h1>

<div class="container justify-content-center">
<h3>Acesso aos Cadastros</h3>
<div class="list-group">
	<a href="usuario.php?action=listar" class="list-group-item list-group-item-action list-group-item-info">Cadastro de Usuarios</a>
	<a href="link.php?action=listar" class="list-group-item list-group-item-action list-group-item-info">Cadastro de Links</a>
	<a href="livro.php?action=listar" class="list-group-item list-group-item-action list-group-item-info">Cadastro de Livros</a>
	<a href="evento.php?action=listar" class="list-group-item list-group-item-action list-group-item-info">Cadastro de Eventos</a>
</div>
</div>

<a href='logout.php'><button type="button" class="btn btn-danger">Logout</button></a><br>

<?php
include("rodape.php");

}
else {
	header('location:index.php?msg=É necessário fazer login');
}

?>