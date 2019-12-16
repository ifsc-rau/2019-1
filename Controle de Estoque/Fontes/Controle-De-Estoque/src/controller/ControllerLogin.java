package controller;

import java.io.IOException;
import java.net.URL;
import java.util.List;
import java.util.ResourceBundle;

import entity.Usuario;

import database.UsuarioDAO;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.fxml.Initializable;
import javafx.scene.Node;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Alert;
import javafx.scene.control.Button;
import javafx.scene.control.Labeled;
import javafx.scene.control.PasswordField;
import javafx.scene.control.TextField;
import javafx.scene.control.Alert.AlertType;
import javafx.scene.input.MouseEvent;
import javafx.stage.Stage;

public class ControllerLogin {


	@FXML
	private TextField txtEmail;

	@FXML
	private PasswordField txtSenha;

	@FXML
	private Button btnLogin;



	private UsuarioDAO usuarioDAO = new UsuarioDAO();



	@FXML
	void inscrever(MouseEvent event) throws IOException {
		Parent root = FXMLLoader.load(getClass().getResource("/view/cadastroLo.fxml"));
		Node node = (Node) event.getSource();
		Stage stage = (Stage) node.getScene().getWindow();
		stage.setScene(new Scene(root));

	}


	private boolean verificaDados() {
		int contador = 0;

		List<Usuario> listaUsuarios = usuarioDAO.getAll();
		for (int i = 0; i < listaUsuarios.size(); i++) {
			if (listaUsuarios.get(i).getEmail().equals(this.txtEmail.getText()) && listaUsuarios.get(i).getSenha().equals(this.txtSenha.getText())) {
				System.out.println("entrou");
				return true;
			}
		}

		if (contador == 0) {
			Alert alert = new Alert(AlertType.WARNING);
			alert.setTitle("Campos invalidos");
			alert.setHeaderText("Campos invalidos, corrija-os por favor.");
			alert.setContentText("E-mail ou senha invalidos");
			alert.show();
			return false;
		}else {
			return true;
		}

	}

	@FXML
	void actionlogin(ActionEvent event) throws IOException {
		if(verificaDados()) {
			Parent root = FXMLLoader.load(getClass().getClassLoader().getResource("./view/menu.fxml"));
			Node node = (Node) event.getSource();
			Stage stage = (Stage) node.getScene().getWindow();
			stage.setTitle("Controle de estoque fácil");
			stage.setScene(new Scene(root));
		}
	}

}
