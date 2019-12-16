package controller;

import java.io.IOException;
import java.net.URL;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.List;
import java.util.ResourceBundle;

import com.jfoenix.controls.JFXButton;
import com.jfoenix.controls.JFXTextField;

import Mask.MaskNuber;
import database.ClienteDAO;
import database.Conexao;
import database.ProdutoDAO;
import database.TipoProdutoDAO;
import entity.Cliente;
import entity.Produto;
import entity.TipoProduto;
import entity.Venda;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.fxml.Initializable;
import javafx.scene.Node;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Alert;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TableView;
import javafx.scene.control.Alert.AlertType;
import javafx.scene.control.cell.PropertyValueFactory;
import javafx.scene.layout.AnchorPane;
import javafx.stage.Stage;

public class ControllerCadastroDeCliente implements Initializable  {

    @FXML
    private AnchorPane JCBCliente;

    @FXML
    private TableView<Cliente> TableViewClientes;

    @FXML
    private TableColumn<Cliente, String> tableColunNomeCliente;

    @FXML
    private TableColumn<Cliente, String> tableColunTelefone;

    @FXML
    private TableColumn<Cliente, String> tableColunENDERECO;

    @FXML
    private TableColumn<Cliente, String> tableColunEMAIL;
    
    @FXML
    private JFXTextField JTFXNomeCliente;

    @FXML
    private JFXTextField JTFXEndereco;

    @FXML
    private JFXTextField JTFXTelefone;
    
    @FXML
    private JFXTextField JTFXEmailCliente;

    @FXML
    private JFXButton JBTSalvar;

    @FXML
    private JFXButton JBTRemover;

//	EM DESENVOLVIMENTO    ****************************************************
    
    private ClienteDAO ClienteDAO = new ClienteDAO();
    private List<Cliente> listaCliente;
	private ObservableList<Cliente> observableListCliente;
    private Cliente Cliente = new Cliente();
    private ObservableList<String> observableList;
    private Cliente cliente;
    
    
	private Stage dialogStage;

	public Stage getDialogStage() {
		return dialogStage;
	}

	public void setDialogStage(Stage dialogStage) {
		this.dialogStage = dialogStage;
	}
	
	public  Cliente getCliente() {
		return  Cliente;
	}
	public  void setCliente(Cliente cliente) {
		this.Cliente = Cliente;
	}


	
	private ControllerCadastroDeCliente ControllerDialogCadastroDeClientes;
	
    @FXML
   public void OnActionRemover() {
    	Cliente Cliente = this.TableViewClientes.getSelectionModel().getSelectedItem();

		if (Cliente != null) {
			if (ClienteDAO.delete(Cliente)) {
				populaTableViewCliente();
			}
			

		}else {
			Alert alert = new Alert(AlertType.ERROR);
			alert.setContentText("Selecione um Cliente por favor!");

			alert.showAndWait();
		}
	}

    @FXML
    void OnACJBTSalvarCliente(ActionEvent event) throws IOException {
		Cliente Cliente = new Cliente();

		if (validaDados()) {


			ControllerDialogCadastroDeClientes = new ControllerCadastroDeCliente();


			Cliente.setNomeCliente(this.JTFXNomeCliente.getText());
			Cliente.setTelefoneCliente(this.JTFXTelefone.getText());
			Cliente.setEnderecoCliente(this.JTFXEndereco.getText());
			Cliente.setEmailCliente(this.JTFXEmailCliente.getText());


			ClienteDAO.save(Cliente);


			Parent root = FXMLLoader.load(getClass().getClassLoader().getResource("./view/CadastroDeCliente.fxml"));
			Node node = (Node) event.getSource();
			Stage stage = (Stage) node.getScene().getWindow();
			stage.setTitle("Controle de estoque facil");
			stage.setScene(new Scene(root));
		}
	}

		private boolean validaDados () {
			String mensagemDeErro = "";

			if (this.JTFXNomeCliente.getText().length() == 0) {
				mensagemDeErro += "Nome invalido.\n";
			}
			if (JTFXEmailCliente.getText().length() == 0) {
				mensagemDeErro += "Email invalido\n";
			}

			if (JTFXEndereco.getText().length() == 0) {
				mensagemDeErro += "Endereço Invalido.\n";
			}
			if (JTFXTelefone.getText().length() == 0) {
				mensagemDeErro += "Telefone incoreto.\n";
			}


			if (mensagemDeErro.length() == 0) {
				return true;
			} else {
				Alert alert = new Alert(AlertType.ERROR);
				alert.setTitle("Erro ao cadastrar o cliente");
				alert.setHeaderText("Confira os seguintes campos, por favor.");
				alert.setContentText(mensagemDeErro);

				alert.showAndWait();
				return false;
			}
		}


		public void populaTableViewCliente () {
			tableColunNomeCliente.setCellValueFactory(new PropertyValueFactory<>("NomeCliente"));
			tableColunTelefone.setCellValueFactory(new PropertyValueFactory<>("TelefoneCliente"));
			tableColunENDERECO.setCellValueFactory(new PropertyValueFactory<>("enderecoCliente"));
			tableColunEMAIL.setCellValueFactory(new PropertyValueFactory<>("emailCliente"));

			System.out.println("oi");

			listaCliente = ClienteDAO.getAll();
			observableListCliente = FXCollections.observableArrayList(listaCliente);
			TableViewClientes.setItems(observableListCliente);

			for (Cliente a : listaCliente) {
				System.out.println(a.getNomeCliente());
			}
		}

		public void dadosTableViewClientes (Cliente Cliente){

			if (Cliente != null) {

				JTFXNomeCliente.setText(Cliente.getNomeCliente());
				JTFXEndereco.setText(Cliente.getEnderecoCliente());
				JTFXTelefone.setText(Cliente.getTelefoneCliente());
				JTFXEmailCliente.setText(Cliente.getEmailCliente());

			} else {

				JTFXNomeCliente.setText("");
				JTFXEndereco.setText("");
				JTFXTelefone.setText("");
				JTFXEmailCliente.setText("");
			}

		}

		public void OnACJBTEDITAR (ActionEvent event) throws IOException {
			Cliente Cliente = this.TableViewClientes.getSelectionModel().getSelectedItem();

			if (Cliente != null) {


				Cliente.setNomeCliente(JTFXNomeCliente.getText());

				Cliente.setEnderecoCliente(JTFXEndereco.getText());

				Cliente.setTelefoneCliente(JTFXTelefone.getText());
				Cliente.setEmailCliente(JTFXEmailCliente.getText());

				ClienteDAO.update(Cliente);
			} else {
				Alert alert = new Alert(Alert.AlertType.WARNING);
				alert.setContentText("Por favor, selecione uma Item!");

				alert.showAndWait();
			}
			Parent root = FXMLLoader.load(getClass().getClassLoader().getResource("./view/CadastroDeCliente.fxml"));
			Node node = (Node) event.getSource();
			Stage stage = (Stage) node.getScene().getWindow();
			stage.setTitle("Controle de estoque facil");
			stage.setScene(new Scene(root));
		}

		@FXML
		void menu (ActionEvent event) throws IOException {

			Parent root = FXMLLoader.load(getClass().getClassLoader().getResource("./view/menu.fxml"));
			Node node = (Node) event.getSource();
			Stage stage = (Stage) node.getScene().getWindow();
			stage.setTitle("Controle de estoque facil");
			stage.setScene(new Scene(root));
		}

		@Override
		public void initialize (URL location, ResourceBundle resources){

			populaTableViewCliente();
			MaskNuber.foneField(JTFXTelefone);
			TableViewClientes.getSelectionModel().selectedItemProperty().addListener((observable, oldValue, newValue) -> dadosTableViewClientes(newValue));
		}


	}
