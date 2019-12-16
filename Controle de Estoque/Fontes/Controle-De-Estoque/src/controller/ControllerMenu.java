package controller;

import java.io.IOException;

import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Node;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.input.MouseEvent;
import javafx.stage.Stage;

public class ControllerMenu {

    @FXML
    void BTNForncedor(MouseEvent event) throws IOException {

        Parent root = FXMLLoader.load(getClass().getClassLoader().getResource("./view/CadastroDeFornecedores.fxml"));
        Node node = (Node) event.getSource();
        Stage stage = (Stage) node.getScene().getWindow();
        stage.setTitle("Controle de estoque facil");
        stage.setScene(new Scene(root));
    }



    @FXML
    void btnCalc(MouseEvent event) {

    }



    @FXML
    void btnCliente(MouseEvent event) throws IOException {

                Parent root = FXMLLoader.load(getClass().getClassLoader().getResource("./view/CadastroDeCliente.fxml"));
                Node node = (Node) event.getSource();
                Stage stage = (Stage) node.getScene().getWindow();
                stage.setTitle("Controle de estoque facil");
                stage.setScene(new Scene(root));
            }


    @FXML
    void btnADC(MouseEvent event) throws IOException {

        Parent root = FXMLLoader.load(getClass().getClassLoader().getResource("./view/VerProdutos2.fxml"));
        Node node = (Node) event.getSource();
        Stage stage = (Stage) node.getScene().getWindow();
        stage.setTitle("Controle de estoque facil");
        stage.setScene(new Scene(root));
	}

    @FXML
    void BTNVenda(MouseEvent event) throws IOException {

        Parent root = FXMLLoader.load(getClass().getClassLoader().getResource("./view/Venda.fxml"));
        Node node = (Node) event.getSource();
        Stage stage = (Stage) node.getScene().getWindow();
        stage.setTitle("Controle de estoque facil");
        stage.setScene(new Scene(root));
    }

}