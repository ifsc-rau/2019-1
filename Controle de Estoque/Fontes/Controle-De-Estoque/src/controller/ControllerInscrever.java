package controller;

import java.io.IOException;
import java.net.URL;
import java.util.List;
import java.util.ResourceBundle;

import Mask.MaskNuber;
import database.UsuarioDAO;
import entity.Usuario;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.fxml.Initializable;
import javafx.scene.Node;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Alert;
import javafx.scene.control.PasswordField;
import javafx.scene.control.TextField;
import javafx.scene.control.TextInputControl;
import javafx.scene.control.Alert.AlertType;
import javafx.scene.control.Button;
import javafx.scene.input.MouseEvent;
import javafx.stage.Stage;

public class ControllerInscrever implements Initializable {


	@FXML
    private TextField txtEmail;

    @FXML
    private TextField txtNomeCadastro;

    @FXML
    private PasswordField txtSenha;

	@FXML
	private TextField txtTelefone;

	@FXML
	private TextField txtIdade;

	@FXML
	private TextField txtNomeReal;

    @FXML
    private Button btnCadastro;
    
    private static Usuario usuario;
   	private UsuarioDAO usuarioDAO = new UsuarioDAO();
   	
    @FXML
    void btnCadastro(MouseEvent event) {

    }

    @FXML
    void Cadastro(ActionEvent event) throws IOException {

		if (verificarTxt()) {
			usuario = new Usuario();
			if(verificaEmail()) {
				
				usuario.setEmail(txtEmail.getText());
				usuario.setNome(txtNomeCadastro.getText());
				usuario.setSenha(txtSenha.getText());
				usuario.setTelefone(txtTelefone.getText());
				usuario.setIdade(txtIdade.getText());
				usuario.setNomereal(txtNomeReal.getText());


				if (usuarioDAO.save(usuario)) {
					txtEmail.setText("");
					txtNomeCadastro.setText("");
					txtSenha.setText("");
					txtTelefone.setText("");
					txtIdade.setText("");
					txtNomeReal.setText("");
					
					
				
				}
			}	
		}
	}

	public boolean verificaEmail() {
		int contador = 0;
		
		List<Usuario> listaUsuarios = usuarioDAO.getAll();
		for(int i=0;i<listaUsuarios.size();i++) {
			if(listaUsuarios.get(i).getEmail().equals(this.txtEmail.getText())) {
				contador++;
				return false;
			}
		}
		if(contador > 0) {
			Alert alert = new Alert(AlertType.WARNING);
			alert.setTitle("Campo invalido");
			alert.setHeaderText("E-mail invalido, tente outro por favor.");
			alert.setContentText(null);
			alert.show();
			return false;
			
		}else {
			return true;
		}
	}
				
		
	public boolean verificarTxt() {
		String mensagemDeErro = "";
		
		if (txtEmail.getText() == null || txtEmail.getText().length() == 0) {
			mensagemDeErro += "Email inválido\n";
		}
		if (txtNomeCadastro.getText() == null || txtNomeCadastro.getText().length() == 0) {
			mensagemDeErro += "Nome de usuário inválido\n";
		}
	
		if (txtSenha.getText() == null || txtSenha.getText().length() == 0) {
			mensagemDeErro += "Senha inválida\n";
		}

		if (txtTelefone.getText() == null){
			mensagemDeErro += "Telefone Invalido\n";
		}
		if (txtNomeReal.getText() == null){
			mensagemDeErro += "Campo 'nome' invalido\n";
		}
		if (txtIdade.getText() == null){
			mensagemDeErro += "Campo 'idade' invalido\n";
		}
		if (mensagemDeErro.length() == 0) {
			return true;
		} else {
			Alert alert = new Alert(AlertType.WARNING);
			alert.setTitle("Campos inválidos");
			alert.setHeaderText(null);
			alert.setContentText(mensagemDeErro);
			alert.show();
			return false;
		}
	}

   
	
   
    @FXML
    void login(MouseEvent event) throws IOException {
		Parent root = FXMLLoader.load(getClass().getResource("/view/LoginFXML.fxml"));
		Node node =  (Node) event.getSource();
		Stage stage = (Stage) node.getScene().getWindow();
		stage.setScene(new Scene(root));
		
	} 

    

	@Override
	public void initialize(URL arg0, ResourceBundle arg1) {
		// TODO Auto-generated method stub
		txtNomeCadastro.requestFocus();

	}
}

