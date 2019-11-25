<html>
<head>
 <title>TechTravelBrazil - Cadastro de Livros</title>
 <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>

<div class="container-fluid">
<h1 class='a'>TechTravelBrazil - Cadastro de Livros</h1>
</div>
<?php
include('config.php');
session_start();
if (!isset($_SESSION['login']) && !isset($_SESSION['senha']) ) {
    header('location:index.php?msg=É necessário fazer login');
}

try {
    $con = new PDO("mysql:host=".SERVIDOR.";dbname=".BANCO,USUARIO,SENHA);
} catch (Exception $e) {
    echo "Erro!: " . $e->getMessage() . "<br>";
    die();
}
 
if (isset($_GET['action'])) {
    switch ($_GET['action']) {
        case 'listar':
            ?>
            
            <div class="b justify-content-center">
            <table width="50%" style="margin: auto;" class="table-dark">
            <tr>
            <th scope="col">cod</th>
            <th scope="col">titulo</th>
            <th scope="col">autores</th>
            <th scope="col">conteudo</th>
            </tr>
            </div>
            <?php
 
            $qLivro = "SELECT * FROM livro WHERE cod_usuario=?";
            try {
                $pre = $con->prepare($qLivro);
                $pre->execute([$_SESSION['cod_usuario']]);
                $rLivro = $pre->fetchAll(PDO::FETCH_OBJ);
 
                foreach($rLivro as $aLivro) {
                    ?>
                    <tr>
                    <td><?=$aLivro->cod_livro?></td>
                    <td><?=$aLivro->tit_livro?></td>
                    <td><?=$aLivro->autores?></td>
                    <td><?=substr($aLivro->conteudo,0,50)?></td>
                    <td><a href='<?=$_SERVER['PHP_SELF']."?action=show_upd_form&cod_livro=$aLivro->cod_livro"?>'><button type="button" class="btn btn-primary">editar</button></a></td>
                    <td><a href='<?=$_SERVER['PHP_SELF']."?action=show_del_form&cod_livro=$aLivro->cod_livro"?>'><button type="button" class="btn btn-warning">excluir</button></a></td>
                    </tr>
                    <?php
                }
                ?>
                <th colspan='4'><a href='<?=$_SERVER['PHP_SELF']."?action=show_ins_form"?>'><button type="button" class="btn btn-success">incluir novo</button></a></th>
                </table>
                <?php
                 
            } catch (Exception $e) {
                echo "Erro!: " . $e->getMessage() . "<br>";
                die();
            }
            break;
 
 
 
        case 'show_ins_form':
            // mostrar formulario de inclusao
            ?>
            <div class="container">
              <h3>Novo Livro</h3>
              </div>
              <form method="POST" action='<?=$_SERVER['PHP_SELF']."?action=insert"?>'>
            
                <div class="form-group">
                
                <label for="tit_livro"><h5>Título</h5></label>
                <input type="text" name='tit_livro' class="form-control" placeholder="Digite o título do livro">
                
                <label for="autores"><h5>Autores</h5></label>
                <input type="text" name='autores' class="form-control" placeholder="Digite o(s) autor(es)">
                
                <label for="conteudo"><h5>Conteúdo (Texto do Post) no Blog</h5></label>
                <textarea name='conteudo' class="form-control" placeholder="Conteúdo do Post"></textarea>

                <label for="cod_link"><h5>Link para o Site do Livro</h5></label>
                <select name='cod_link' class='form-control'>
                    <?php
                    $qLink = "SELECT * FROM link WHERE cod_usuario=?";
                    $pLink = $con->prepare($qLink);
                    $pLink->execute([$_SESSION['cod_usuario']]);
                    $rLink = $pLink->fetchAll(PDO::FETCH_OBJ);
                    foreach ($rLink as $aLink) {
                        ?>
                        <option value='<?=$aLink->cod_link?>'><?=$aLink->des_link?></option>
                        <?php
                    }
                    ?>
                </select>
                <button type='submit' class='btn btn-primary'>Salvar</button>
                <a class="btn btn-outline-danger" href='<?=$_SERVER['PHP_SELF']?>?action=listar'>Voltar</a>
              </form>
            
            <?php
            break;
 
        case 'show_upd_form':
            // mostrar formulario de alteracao
            $qLivro = "SELECT * 
                FROM  livro 
                WHERE cod_livro=? ";
            try {
                $pre = $con->prepare($qLivro);
                $pre->execute([
                    $_GET['cod_livro']
                ]);
                $rLivro = $pre->fetchAll(PDO::FETCH_OBJ);
                $aLivro = $rLivro[0];
            }
            catch (PDOException $e) {
                echo "Erro!: " . $e->getMessage() . "<br>";
                die();
            }
            finally {
                ?>

                <div class='container'>
                <form method="POST" action='<?=$_SERVER['PHP_SELF']."?action=update"?>'>
                    <div class="form-group">
                        <label for="cod_livro">Código</label>
                        <input type="text" class="form-control" name="cod_livro" value="<?=$aLivro->cod_livro?> " readonly/>
                        <br>
                        <label for="tit_livro">Título</label>
                        <input type="text" class="form-control" name="tit_livro" value="<?=$aLivro->tit_livro?>"/>
                        <br>
                        <label for="autores">Autores</label>
                        <input type="text" class="form-control" name="autores" value="<?=$aLivro->autores?>"/>
                        <br>
                        <label for="conteudo">Conteúdo (Texto do Post) no Blog</label>
                        <textarea name='conteudo' class="form-control" placeholder="Conteúdo do Post"><?=$aLivro->conteudo?></textarea>
                        <br>
                        <label for="cod_link">Link para o Site do Livro</label>
                        <select name='cod_link' class='form-control'>
                            <?php
                            $qLink = "SELECT * FROM link WHERE cod_usuario=?";
                            $pLink = $con->prepare($qLink);
                            $pLink->execute([$_SESSION['cod_usuario']]);
                            $rLink = $pLink->fetchAll(PDO::FETCH_OBJ);
                            foreach ($rLink as $aLink) {
                                if ($aLink->cod_link == $aLivro->link_cod_link) {
                                    ?>
                                    <option value='<?=$aLink->cod_link?>' SELECTED><?=$aLink->des_link?></option>
                                    <?php
                                }
                                else {
                                    ?>
                                    <option value='<?=$aLink->cod_link?>'         ><?=$aLink->des_link?></option>
                                    <?php
                               
                                }
                            }
                            ?>
                        </select>
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
            $qLivro = "SELECT * 
                FROM  livro
                WHERE cod_livro=? ";
            try {
                $pre = $con->prepare($qLivro);
                $pre->execute([
                    $_GET['cod_livro']
                ]);
                $rLivro = $pre->fetchAll(PDO::FETCH_OBJ);
                $aLivro = $rLivro[0];
            }
            catch (Exception $e) {
                echo "Erro!: " . $e->getMessage() . "<br>";
                die();
            }
            finally {
                ?>
                <div class="container">
                <h2>Confirma Exclusão do Livro?</h2>
                Código <?=$aLivro->cod_livro?><br>
                Título <?=$aLivro->tit_livro?><br>
                Autores <?=$aLivro->autores?><br>
                 
                <form method="POST" action='<?=$_SERVER['PHP_SELF']."?action=delete"?>'>
                <input type='hidden' name='cod_livro' value='<?=$aLivro->cod_livro?>'>
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
            // inclui o registro no BD, tabela Livro
            print_r($_POST);
            $qLivro = "INSERT INTO livro (tit_livro,autores,conteudo,link_cod_link,cod_usuario) VALUES (?,?,?,?,?)";
            $vLivro = [
                $_POST['tit_livro'],
                $_POST['autores'],
                $_POST['conteudo'],
                $_POST['cod_link'],
                $_SESSION['cod_usuario']
            ];
            print_r($vLivro);
            try {
                $pre = $con->prepare($qLivro);
                $pre->execute($vLivro);   
                header('Location: '.$_SERVER['PHP_SELF'].'?action=listar');
                 
            } catch (Exception $e) {
                echo "Erro!: " . $e->getMessage() . "<br>";
                die();
            }
            break;
 
        case 'update':
            // modifica o registro no BD, tabela Link
 
            $qLink = "UPDATE livro 
                SET tit_livro=?,
                    conteudo=?,
                    autores=?,
                    link_cod_link=? 
                WHERE cod_livro = ?";
            try {
                $pre = $con->prepare($qLink);
            } catch (Exception $e) {
                echo "Erro!: " . $e->getMessage() . "<br>"; die();
            }
 
            try {
                $pre->execute([
                    $_POST['tit_livro'],
                    $_POST['conteudo'],
                    $_POST['autores'],
                    $_POST['cod_link'],
                    $_POST['cod_livro']
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
            $qLink = "DELETE FROM livro 
                WHERE cod_livro = ?";
            try {
                $pre = $con->prepare($qLink);
                $pre->execute([
                    $_POST['cod_livro']
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