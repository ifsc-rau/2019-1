<html>
<head>
 <title>TechTravelBrazil - Cadastro de Eventos</title>
 <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>

<div class="container-fluid">
<h1 class='a'>TechTravelBrazil - Cadastro de Eventos</h1>
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
            <table width="65%" style="margin: auto;" class="table-dark">
            <tr>
            <th scope="col">cod</th>
            <th scope="col">descrição</th>
            <th scope="col">data inicial</th>
            <th scope="col">hora inicial</th>
            <th scope="col">data final</th>
            <th scope="col">hora final</th>
            <th scope="col">conteúdo</th>

            </tr>
            </div>
            <?php
 
            $qEvento = "SELECT * FROM evento WHERE cod_usuario=?";
            try {
                $pre = $con->prepare($qEvento);
                $pre->execute([$_SESSION['cod_usuario']]);
                $rEvento = $pre->fetchAll(PDO::FETCH_OBJ);
 
                foreach($rEvento as $aEvento) {
                    ?>
                    <tr>
                    <td><?=$aEvento->cod_evento?></td>
                    <td><?=$aEvento->des_evento?></td>
                    <td><?=$aEvento->dat_inicial?></td>
                    <td><?=$aEvento->hor_inicial?></td>
                    <td><?=$aEvento->dat_final?></td>
                    <td><?=$aEvento->hor_final?></td>
                    <td><?=substr($aEvento->conteudo,0,50)?></td>
                    <td><a href='<?=$_SERVER['PHP_SELF']."?action=show_upd_form&cod_evento=$aEvento->cod_evento"?>'><button type="button" class="btn btn-primary">editar</button></a></td>
                    <td><a href='<?=$_SERVER['PHP_SELF']."?action=show_del_form&cod_evento=$aEvento->cod_evento"?>'><button type="button" class="btn btn-warning">excluir</button></a></td>
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
              <h3>Novo Evento</h3>
            </div>
            <div class="container">
              <form method="POST" action='<?=$_SERVER['PHP_SELF']."?action=insert"?>'>
            
                <div class="form-group">
                
                <label for="tit_livro"><h5>Descrição</h5></label>
                <input type="text" name='des_evento' class="form-control" placeholder="Digite a descrição do evento"/>
                
                <label for="autores"><h5>Data inicio</h5></label>
                <input type="date" name='dat_inicial' class="form-control"/>

                <label for="autores"><h5>Hora inicio</h5></label>
                <input type="time" name='hor_inicial' class="form-control"/>

                <label for="autores"><h5>Data final</h5></label>
                <input type="date" name='dat_final' class="form-control"/>

                <label for="autores"><h5>Hora final</h5></label>
                <input type="time" name='hor_final' class="form-control"/>
                
                <label for="conteudo"><h5>Conteúdo</h5></label>
                <textarea name='conteudo' class="form-control" placeholder="Conteúdo do evento"></textarea>

                <label for="cod_link"><h5>Link para o Site do Evento</h5></label>
                <select name='link_cod_link' class='form-control'>
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
                </div>
            <?php
            break;
 
        case 'show_upd_form':
            // mostrar formulario de alteracao
            $qEvento = "SELECT * 
                FROM  evento 
                WHERE cod_evento=? ";
            try {
                $pre = $con->prepare($qEvento);
                $pre->execute([
                    $_GET['cod_evento']
                ]);
                $rEvento = $pre->fetchAll(PDO::FETCH_OBJ);
                $aEvento = $rEvento[0];
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
                        <label for="cod_evento">Código</label>
                        <input type="text" class="form-control" name="cod_evento" value="<?=$aEvento->cod_evento?> " readonly/>
                        <br>
                        <label for="tit_livro">Descrição</label>
                        <input type="text" class="form-control" name="des_evento" value="<?=$aEvento->des_evento?>"/>
                        <br>
                        <label for="autores">Data Inicio</label>
                        <input type="date" class="form-control" name="dat_inicial" value="<?=$aEvento->dat_inicial?>"/>
                        <br>
                        <label for="autores"><h5>Hora inicio</h5></label>
                        <input type="time" name='hor_inicial' class="form-control" value="<?=$aEvento->hor_inicial?>"/>
                        <br>
                        <label for="autores">Data Final</label>
                        <input type="date" class="form-control" name="dat_final" value="<?=$aEvento->dat_final?>"/>
                        <br>
                        <label for="autores"><h5>Hora final</h5></label>
                        <input type="time" name='hor_final' class="form-control" value="<?=$aEvento->hor_final?>"/>
                        <br>
                        <label for="conteudo">Conteúdo</label>
                        <textarea name='conteudo' class="form-control"><?=$aEvento->conteudo?></textarea>
                        <br>
                        <label for="cod_link">Link para o Site do Livro</label>
                        <select name='link_cod_link' class='form-control'>
                            <?php
                            $qLink = "SELECT * FROM link WHERE cod_usuario=?";
                            $pLink = $con->prepare($qLink);
                            $pLink->execute([$_SESSION['cod_usuario']]);
                            $rLink = $pLink->fetchAll(PDO::FETCH_OBJ);
                            foreach ($rLink as $aLink) {
                                if ($aLink->cod_link == $aEvento->link_cod_link) {
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
            $qEvento = "SELECT * 
                FROM  evento
                WHERE cod_evento=? ";
            try {
                $pre = $con->prepare($qEvento);
                $pre->execute([
                    $_GET['cod_evento']
                ]);
                $rEvento = $pre->fetchAll(PDO::FETCH_OBJ);
                $aEvento = $rEvento[0];
            }
            catch (Exception $e) {
                echo "Erro!: " . $e->getMessage() . "<br>";
                die();
            }
            finally {
                ?>
                <div class="container">
                <h2>Confirma Exclusão do Livro?</h2>
                Código <?=$aEvento->cod_evento?><br>
                Descrição <?=$aEvento->des_evento?><br>
                Data inicio <?=$aEvento->dat_inicial?><br>
                 
                <form method="POST" action='<?=$_SERVER['PHP_SELF']."?action=delete"?>'>
                <input type='hidden' name='cod_evento' value='<?=$aEvento->cod_evento?>'>
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
            // inclui o registro no BD, tabela evento
            print_r($_POST);
            $qEvento = "INSERT INTO evento (des_evento,dat_inicial,dat_final,hor_inicial,hor_final,conteudo,cod_usuario,link_cod_link) VALUES (?,?,?,?,?,?,?,?)";
            $vEvento = [
                $_POST['des_evento'],
                $_POST['dat_inicial'],
                $_POST['dat_final'],
                $_POST['hor_inicial'],
                $_POST['hor_final'],
                $_POST['conteudo'],
                $_POST['link_cod_link'],
                $_SESSION['cod_usuario']
            ];
            print_r($vEvento);
            try {
                $pre = $con->prepare($qEvento);
                $pre->execute($vEvento);   
                header('Location: '.$_SERVER['PHP_SELF'].'?action=listar');
                 
            } catch (Exception $e) {
                echo "Erro!: " . $e->getMessage() . "<br>";
                die();
            }
            break;
 
        case 'update':
            // modifica o registro no BD, tabela evento
 
            $qEvento = "UPDATE evento 
                SET des_evento=?,
                    dat_inicial=?,
                    dat_final=?,
                    hor_inicial=?,
                    hor_final=?,
                    conteudo=?,
                    link_cod_link=?
                WHERE cod_evento = ?";
            try {
                $pre = $con->prepare($qEvento);
            } catch (Exception $e) {
                echo "Erro!: " . $e->getMessage() . "<br>"; die();
            }
 
            try {
                $pre->execute([
                    $_POST['des_evento'],
                    $_POST['dat_inicial'],
                    $_POST['dat_final'],
                    $_POST['hor_inicial'],
                    $_POST['hor_final'],
                    $_POST['conteudo'],
                    $_POST['link_cod_link'],
                    $_POST['cod_evento']
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
            // modifica o registro no BD, tabela evento
            $qEvento = "DELETE FROM evento 
                WHERE cod_evento = ?";
            try {
                $pre = $con->prepare($qEvento);
                $pre->execute([
                    $_POST['cod_evento']
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