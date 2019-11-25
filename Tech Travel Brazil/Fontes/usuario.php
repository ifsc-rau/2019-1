<html>
<head>
 <title>TechTravelBrazil - Cadastro de Usuarios</title>
 <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
 <style>
div.container {
	width: 400px;
	height: auto;
    text-align: left;
}

.a {
	text-align: center;
}

.form-group {
    align: left;
	height: center;
    width: 300px;
    
}
.logout {
    align: left;
	height: center;
    width: 300px;
}
</style>

</head>
<body>

<div class="container-fluid">
<div class="a">
<h1 class='a'>TechTravelBrazil - Cadastro de Usuarios</h1>

</div>

<?php
include('config.php');
 
try {
    $con = new PDO("mysql:host=".SERVIDOR.";dbname=".BANCO,USUARIO,SENHA);
} catch (PDOException $e) {
    echo "Erro!: " . $e->getMessage() . "<br>";
    die();
}
 
if (isset($_GET['action'])) {
    switch ($_GET['action']) {
        case 'listar':
            ?>
            <div class="container">
            <table class="table-dark">
            <tr>
            <th scope="col">cod</th>
            <th scope="col">email</th>
            </tr>
            <?php
 
            $qUsuario = "SELECT * FROM usuario";
            try {
                $pre = $con->prepare($qUsuario);
                $pre->execute();
                $rUsuario = $pre->fetchAll(PDO::FETCH_OBJ);
 
                foreach($rUsuario as $aUsuario) {
                    ?>
                    <tr>
                    <td><?=$aUsuario->cod_usuario?></td>
                    <td><?=$aUsuario->email?></td>
                    <td><a href='<?=$_SERVER['PHP_SELF']."?action=show_upd_form&cod_usuario=$aUsuario->cod_usuario"?>'><button type="button" class="btn btn-primary">editar</button></a></td>
                    <td><a href='<?=$_SERVER['PHP_SELF']."?action=show_del_form&cod_usuario=$aUsuario->cod_usuario"?>'><button type="button" class="btn btn-warning">excluir</button></a></td>
                    </tr>
                    <?php
                }
                ?>
                <th colspan='4'><a href='<?=$_SERVER['PHP_SELF']."?action=show_ins_form"?>'><button type="button" class="btn btn-success">incluir novo</button></a></th>
                </table>
            </div>
                <?php
                 
            } catch (PDOException $e) {
                echo "Erro!: " . $e->getMessage() . "<br>";
                die();
            }
            break;
 
 
 
        case 'show_ins_form':
            // mostrar formulario de inclusao
            ?>
            <div class="container">
              <h3>Novo Usuário</h3>
              </div>
              <form method="POST" action='<?=$_SERVER['PHP_SELF']."?action=insert"?>'>
            
                <div class="form-group">
                <label for="email">Email</label>
                <input type="email" name='email' class="form-control" placeholder="Digite seu email">
                <label for="email">Senha</label>
                <input type="password" name='senha' class="form-control" placeholder="Digite sua senha">
                <button type='submit' class='btn btn-primary'>Salvar</button>
                
              </form>
        </div>
            <?php
            break;
 
        case 'show_upd_form':
            // mostrar formulario de inclusao
            $qUsuario = "SELECT * 
                FROM  usuario 
                WHERE cod_usuario=? ";
            try {
                $pre = $con->prepare($qUsuario);
                $pre->execute([
                    $_GET['cod_usuario']
                ]);
                $rUsuario = $pre->fetchAll(PDO::FETCH_OBJ);
                $aUsuario = $rUsuario[0];
            }
            catch (PDOException $e) {
                echo "Erro!: " . $e->getMessage() . "<br>";
                die();
            }
            finally {
                ?>

<div class="container">
                <form method="POST" action='<?=$_SERVER['PHP_SELF']."?action=update"?>'>
                    <div class="form-group">
                        <label for="cod_usuario">Código</label>
                        <input type="text" class="form-control" name="cod_usuario" value="<?=$aUsuario->cod_usuario?> " readonly/>
                        <br>
                        <label for="email">Email</label>
                        <input type="text" class="form-control" name="email" value="<?=$aUsuario->email?>"/>
                        <br>
                        <label for="senha">Senha</label>
                        <input type="password" class="form-control" name="senha" />
                        <br>
                        <button type="submit" class="btn btn-primary">Enviar</button>
                        <br>
                    </div>    
                </form>
            </div>
                <?php
            }
            break;
 
        case 'show_del_form':
            // mostrar confirmacao de exlusao
            $qUsuario = "SELECT * 
                FROM  usuario 
                WHERE cod_usuario=? ";
            try {
                $pre = $con->prepare($qUsuario);
                $pre->execute([
                    $_GET['cod_usuario']
                ]);
                $rUsuario = $pre->fetchAll(PDO::FETCH_OBJ);
                $aUsuario = $rUsuario[0];
            }
            catch (PDOException $e) {
                echo "Erro!: " . $e->getMessage() . "<br>";
                die();
            }
            finally {
                ?>
                <div class="container">
                <h2>Confirma Exclusão do Usuário?</h2>
                

                <form>
                <div class="form-group">
                    <label for="cod_usuario">Código</label>
                    <input type="text" class="form-control" name="cod_usuario" value="<?=$aUsuario->cod_usuario?>" readonly>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" name="email" value="<?=$aUsuario->email?>" readonly>
                </div>
                </form>
                 
                <form method="POST" action='<?=$_SERVER['PHP_SELF']."?action=delete"?>'>
                <input type='hidden' name='cod_usuario' value='<?=$aUsuario->cod_usuario?>'>
                <button type='submit' class='btn btn-primary'>Confirmar</button>
                </form>
 
                <form method="POST" action='<?=$_SERVER['PHP_SELF']."?action=listar"?>'>
                <button type='submit' class='btn btn-warning'>Cancelar</button>
                </form>
            </div>
                <?php
            }
            break;
 
     
 
 
        case 'insert':
            // inclui o registro no BD, tabela usuario
            // print_r($_POST);
            $qUsuario = "INSERT INTO usuario (email,senha) VALUES (?,?)";
            try {
                $pre = $con->prepare($qUsuario);
                $pre->execute([
                    $_POST['email'],
                    md5($_POST['senha'])
                ]);   
                header('Location: '.$_SERVER['PHP_SELF'].'?action=listar');
                 
            } catch (PDOException $e) {
                echo "Erro!: " . $e->getMessage() . "<br>";
                die();
            }
            break;
 
        case 'update':
            // modifica o registro no BD, tabela usuario
 
            $qUsuario = "UPDATE usuario 
                SET email=?,
                    senha=? 
                WHERE cod_usuario = ?";
            try {
                $pre = $con->prepare($qUsuario);
            } catch (Exception $e) {
                echo "Erro!: " . $e->getMessage() . "<br>"; die();
            }
 
            try {
                $pre->execute([
                    $_POST['email'],
                    md5($_POST['senha']),
                    $_POST['cod_usuario']
                ]);
            } catch (Exception $e) {
                echo "Erro!: " . $e->getMessage() . "<br>"; die();
            }
            ?>
            <div class="container">
            <h2>Registro Alterado</h2>
            <a href='<?=$_SERVER['PHP_SELF']?>?action=listar'>Continue...</a>
        </div>
            <?php
            break;
         
        case 'delete':
            // modifica o registro no BD, tabela usuario
            $qUsuario = "DELETE FROM usuario 
                WHERE cod_usuario = ?";
            try {
                $pre = $con->prepare($qUsuario);
                $pre->execute([
                    $_POST['cod_usuario']
                ]);   
                header('Location: '.$_SERVER['PHP_SELF'].'?action=listar');
                 
            } catch (PDOException $e) {
                echo "Erro!: " . $e->getMessage() . "<br>";
                die();
            }
            break;
    }
}
else {
    //print('sem action');
}
?>

<div class="logout">
<a class="btn btn-outline-success" href='menu.php'>Início</a>
<a href='logout.php'><button type="button" class="btn btn-danger">Logout</button></a><br>
</div>
</body>


</html>