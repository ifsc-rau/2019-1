<html>
<head>
 <title>TechTravelBrazil - Cadastro de Links</title>
 <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
 <style>
div.container {
	
}

.a {
	text-align: center;
}

.form-group {
    align: left;
	height: center;
    width: 300px;
}

</style>

</head>
<body>

<h1 class='a'>TechTravelBrazil - Cadastro de Links</h1>

<?php
include('config.php');
session_start();
if (!isset($_SESSION['login']) && !isset($_SESSION['senha']) ) {
    header('location:index.php?msg=É necessário fazer login');
}

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
            <div class="b">
            <table width="100%" class="table-dark">
            <tr>
            <th scope="col">cod</th>
            <th scope="col">descrição</th>
            <th scope="col">url</th>
            </tr>
            </div>
            <?php
 
            $qLink = "SELECT * FROM link WHERE cod_usuario=?";
            try {
                $pre = $con->prepare($qLink);
                $pre->execute([$_SESSION['cod_usuario']]);
                $rLink = $pre->fetchAll(PDO::FETCH_OBJ);
 
                foreach($rLink as $aLink) {
                    ?>
                    <tr>
                    <td><?=$aLink->cod_link?></td>
                    <td><?=$aLink->des_link?></td>
                    <td><?=$aLink->url_link?></td>
                    <td><a href='<?=$_SERVER['PHP_SELF']."?action=show_upd_form&cod_link=$aLink->cod_link"?>'><button type="button" class="btn btn-primary">editar</button></a></td>
                    <td><a href='<?=$_SERVER['PHP_SELF']."?action=show_del_form&cod_link=$aLink->cod_link"?>'><button type="button" class="btn btn-warning">excluir</button></a></td>
                    </tr>
                    <?php
                }
            ?>
                <th colspan='4'><a href='<?=$_SERVER['PHP_SELF']."?action=show_ins_form"?>'><button type="button" class="btn btn-success">incluir novo</button></a></th>
                </table>
            </div>
            <?php
                 
            } catch (Exception $e) {
                echo "Erro!: " . $e->getMessage() . "<br>";
                die();
            }
            break;
 
 
 
        case 'show_ins_form':
            // mostrar formulario de inclusao
            ?>
            <div class="container justify-content-center">
              <h3>Novo Link</h3>
              <form method="POST" action='<?=$_SERVER['PHP_SELF']."?action=insert"?>'>
            
                <div class="form-group">
                
                <label for="des_link"><h5>Descrição</h5></label>
                <input type="text" name='des_link' class="form-control" placeholder="Digite o nome do link">
                
                <label for="url_link"><h5>URL</h5></label>
                <input type="url" name='url_link' class="form-control" placeholder="Digite a URL">
                
                <button type='submit' class='btn btn-primary'>Salvar</button>
                <a class="btn btn-outline-danger" href='<?=$_SERVER['PHP_SELF']?>?action=listar'>Voltar</a>
            
              </form>
            </div>
            <?php
            break;
 
        case 'show_upd_form':
            // mostrar formulario de inclusao
            $qLink = "SELECT * 
                FROM  link 
                WHERE cod_link=? ";
            try {
                $pre = $con->prepare($qLink);
                $pre->execute([
                    $_GET['cod_link']
                ]);
                $rLink = $pre->fetchAll(PDO::FETCH_OBJ);
                $aLink = $rLink[0];
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
                        <label for="cod_link">Código</label>
                        <input type="text" class="form-control" name="cod_link" value="<?=$aLink->cod_link?> " readonly/>
                        <br>
                        <label for="des_link">Descrição</label>
                        <input type="text" class="form-control" name="des_link" value="<?=$aLink->des_link?>"/>
                        <br>
                        <label for="url_link">URL</label>
                        <input type="text" class="form-control" name="url_link" value="<?=$aLink->url_link?>"/>
                        <br>
                        <button type="submit" class="btn btn-primary">Enviar</button>
                        <a class="btn btn-outline-danger" href='<?=$_SERVER['PHP_SELF']?>?action=listar'>Voltar</a>
                        <br>
                    </div>    
                </form>
            </div>
                <?php
            }
            break;
 
        case 'show_del_form':
            // mostrar confirmacao de exlusao
            $qLink = "SELECT * 
                FROM  link 
                WHERE cod_link=? ";
            try {
                $pre = $con->prepare($qLink);
                $pre->execute([
                    $_GET['cod_link']
                ]);
                $rLink = $pre->fetchAll(PDO::FETCH_OBJ);
                $aLink = $rLink[0];
            }
            catch (Exception $e) {
                echo "Erro!: " . $e->getMessage() . "<br>";
                die();
            }
            finally {
                ?>
                <div class="container">
                <h2>Confirma Exclusão do Link?</h2>
                <h5>Código</h5> <?=$aLink->cod_link?><br>
                <h5>Descrição</h5> <?=$aLink->des_link?><br>
                <h5>URL</h5> <?=$aLink->url_link?><br>
                 
                <form method="POST" action='<?=$_SERVER['PHP_SELF']."?action=delete"?>'>
                <input type='hidden' name='cod_link' value='<?=$aLink->cod_link?>'>
                <input type='submit' class='btn btn-danger' value='Confirmar Exclusão'>
                </form>
 
                <form method="POST" action='<?=$_SERVER['PHP_SELF']."?action=listar"?>'>
                <input type='submit' class='btn btn-success' value='Cancelar'>
                </form>
            </div>
                <?php
            }
            break;
 
     
 
 
        case 'insert':
            // inclui o registro no BD, tabela Link
            // print_r($_POST);
            $qLink = "INSERT INTO link (des_link,url_link,cod_usuario) VALUES (?,?,?)";
            try {
                $pre = $con->prepare($qLink);
                $pre->execute([
                    $_POST['des_link'],
                    $_POST['url_link'],
                    $_SESSION['cod_usuario']
                ]);   
                header('Location: '.$_SERVER['PHP_SELF'].'?action=listar');
                 
            } catch (Exception $e) {
                echo "Erro!: " . $e->getMessage() . "<br>";
                die();
            }
            break;
 
        case 'update':
            // modifica o registro no BD, tabela Link
 
            $qLink = "UPDATE link 
                SET des_link=?,
                    url_link=? 
                WHERE cod_link = ?";
            try {
                $pre = $con->prepare($qLink);
            } catch (Exception $e) {
                echo "Erro!: " . $e->getMessage() . "<br>"; die();
            }
 
            try {
                $pre->execute([
                    $_POST['des_link'],
                    $_POST['url_link'],
                    $_POST['cod_link']
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
            // modifica o registro no BD, tabela Link
            $qLink = "DELETE FROM link 
                WHERE cod_link = ?";
            try {
                $pre = $con->prepare($qLink);
                $pre->execute([
                    $_POST['cod_link']
                ]);   
                header('Location: '.$_SERVER['PHP_SELF'].'?action=listar');
                 
            } catch (Exception $e) {
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
</div>
<a class="btn btn-outline-success" href='menu.php'>Início</a>
<a href='logout.php'><button type="button" class="btn btn-danger">Logout</button></a><br>


</body>

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
</html>