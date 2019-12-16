package controller;

import java.io.Console;
import java.io.IOException;
import java.net.URL;
import java.sql.Connection;
import java.sql.Time;
import java.time.format.DateTimeFormatter;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.ResourceBundle;

import database.ProdutoDAO;
import database.TipoProdutoDAO;
import entity.Produto;
import entity.TipoProduto;


import com.jfoenix.controls.JFXButton;
import com.jfoenix.controls.JFXComboBox;
import com.jfoenix.controls.JFXDatePicker;
import com.jfoenix.controls.JFXTextField;

import Mask.MaskNuber;
import database.DAO;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
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
import javafx.scene.input.MouseEvent;
import javafx.scene.layout.AnchorPane;
import javafx.stage.Stage;

public class ControllerCadastroProduto implements Initializable {

    @FXML
    private TableView<Produto> TableViewPRODUTOS;

    @FXML
    private TableColumn<Produto, String> tableColunNomeProdu;

    @FXML
    private TableColumn<Produto, Time> tableColunValidade;

    @FXML
    private TableColumn<Produto, Produto> tableColunMarca;

    @FXML
    private TableColumn<Produto, String> tableColunTipo;

    @FXML
    private TableColumn<Produto, Time> tableColunEntrada;

    @FXML
    private TableColumn<Produto, String> tableColunQuantidade;
    
    @FXML
    private TableColumn<Produto, Float> tableColunVALOR;

    @FXML
    private JFXDatePicker JDTvalidade;

    @FXML
    private JFXDatePicker JDTentrada;

    @FXML
    private JFXTextField JTFXnome;

    @FXML
    private JFXTextField  JTFXPreco;

    @FXML
    private JFXTextField JTFXMarca;

    @FXML
    private JFXComboBox<TipoProduto> JFXTipoProduto;

    @FXML
    private JFXTextField JTFXForne;

    @FXML
    private JFXTextField JTFXQuantidade;
    
    @FXML
    private JFXButton JBTSalvar;

    @FXML
    private JFXButton JBTEditar;

    @FXML
    private JFXButton JBTRemover;

    private List<Produto> listProdutos;
    private ObservableList<Produto> observableListProdutos;
    
    private ProdutoDAO produtoDAO = new ProdutoDAO();
    private Stage dialogStage;
     
    private boolean confirmarClick;

	public boolean isConfirmarClick() {
		return confirmarClick;
	}

	public void setConfirmarClick(boolean confirmarClick) {
		this.confirmarClick = confirmarClick;
		
	}
	
	 
    public Stage getDialogStage() {
    	return dialogStage;
    }
    
    
    public void setDialogStage(Stage dialogStage) {
		this.dialogStage = dialogStage;
	}
    
    private TipoProdutoDAO tipoProdutoDAO = new TipoProdutoDAO();
    private TipoProduto tipoProduto = new TipoProduto();
    private ProdutoDAO ProdutoDAO = new ProdutoDAO();
    private List<TipoProduto> listaTipoProduto;
    private ObservableList<TipoProduto> observableListTipoProduto;
    private ObservableList<String> observableList;
    private List<Produto> listaProduto;
    private ObservableList<Produto> observableListProduto;
    private Produto produto;





	private ControllerCadastroProduto ControllerDialogCadastrodeProdutos = null;
    
    public Produto getProduto() {
    	return produto;
    }
    	public void setProduto(Produto produto) {
    		this.produto = produto;
    	}
    	
    	public List<TipoProduto> getListaTipoProduto() {
    		return listaTipoProduto;
    	}
  
    	
        @FXML
        void OnACJBTSalvar(ActionEvent event) throws IOException {

			if (validaDados()) {

				TipoProduto tipoProduto = new TipoProduto();

				ControllerDialogCadastrodeProdutos = new ControllerCadastroProduto();

				Produto produto = new Produto();
				System.out.println(this.JTFXnome.getText());

				produto.setNomeProduto(this.JTFXnome.getText());
				produto.setValidade(this.JDTvalidade.getValue());
				produto.setMarca(this.JTFXMarca.getText());

				produto.setTipo(tipoProdutoDAO.buscarTipoProduto(this.JFXTipoProduto.getSelectionModel().getSelectedItem().toString()));


				produto.setEntrada(this.JDTentrada.getValue());
				produto.setQuantidade(this.JTFXQuantidade.getText());
				produto.setValor(this.JTFXPreco.getText());

				int dispoEstoque = Integer.parseInt(produto.getQuantidade());

				if (dispoEstoque > 0) {


					produtoDAO.save(produto);

					Parent root = FXMLLoader.load(getClass().getClassLoader().getResource("./view/VerProdutos2.fxml"));
					Node node = (Node) event.getSource();
					Stage stage = (Stage) node.getScene().getWindow();
					stage.setTitle("Controle de estoque facil");
					stage.setScene(new Scene(root));
					//confirmarClick = true;
					//	dialogStage.close();


					} else {
						Alert alert = new Alert(Alert.AlertType.WARNING);
						alert.setContentText("Olá, Usuário estamos vendo aqui que você colocou um valor 0 ou negativo não precisamos explicar que isto não funciona né...");

						alert.showAndWait();


			}

			}
		}
        
        @FXML
        void OnActionAdicionarTipoProduto(MouseEvent event) throws IOException {
        	TipoProduto TipoProduto = new TipoProduto();
        	boolean confirmaClick = carregarFXMLAdicionarProduto(TipoProduto);
        			if (confirmaClick) {
        				tipoProdutoDAO.save(TipoProduto);
        				populaComboBoxTipoProduto();
        			}
        		}


    private void populaComboBoxTipoProduto() {
    	listaTipoProduto = tipoProdutoDAO.getAll();

		TipoProduto TipoProduto = new TipoProduto();
		TipoProduto.setTipo("Tipo");
		listaTipoProduto.add(0, TipoProduto);

		observableListTipoProduto = FXCollections.observableArrayList(listaTipoProduto);
		JFXTipoProduto.setItems(observableListTipoProduto);
			
		}
	@FXML
	void PegaValorTi(MouseEvent event) {
		JFXTipoProduto.setOnAction(new EventHandler<ActionEvent>() {
			@Override
			public void handle(ActionEvent event) {
				System.out.println("oi");
				System.out.println(JFXTipoProduto.getValue().getTipo());


			}
		});

	}
 
	public boolean carregarFXMLAdicionarProduto(TipoProduto TipoProduto) throws IOException {
		FXMLLoader loader = new FXMLLoader();
		loader.setLocation(ControllerAdicionarNovosProdutos.class.getResource("./view/NovosTiposdeProduto.fxml"));
		AnchorPane page = (AnchorPane) loader.load();
		
		Stage dialogStage = new Stage();
		dialogStage.setTitle("Cadastrar novo tipo de produto");
		Scene scene = new Scene(page);
		dialogStage.setResizable(false);
		dialogStage.setScene(scene);

		ControllerAdicionarNovosProdutos controller = loader.getController();
		controller.setDialogStage(dialogStage);
		controller.setTipoProduto(TipoProduto);
		dialogStage.showAndWait();
		return controller.isConfirmarClick();
	}		
	

	public boolean validaDados() {
		String mensagemDeErro = "";

		if (this.JTFXnome.getText().length() == 0) {
			mensagemDeErro += "Nome invalido.\n";
		}
		if (JFXTipoProduto.getSelectionModel().getSelectedItem() == null) {
			mensagemDeErro += "tipo de produto invalido.\n";
		}
	
		if (JDTvalidade.getValue() == null) {
			mensagemDeErro += "Data de validade invalido.\n";
		}
		if (JDTentrada.getValue() == null) {
			mensagemDeErro += "Data da entrada inválida.\n";
		}
		if (this.JTFXMarca.getText().length() == 0) {
			mensagemDeErro += "Nome invalido.\n";
		}
		if (this.JTFXPreco.getText().length() == 0) {
			mensagemDeErro += "Valor Invalido.\n";
		}
		if (this.JTFXQuantidade.getText().length() == 0) {
			mensagemDeErro += "Quantidade Invalida.\n";
		}
		
		if (mensagemDeErro.length() == 0) {
			return true;
		} else {
			Alert alert = new Alert(AlertType.ERROR);
			alert.setTitle("Erro ao cadastrar o produto");
			alert.setHeaderText("Confira os seguintes campos, por favor.");
			alert.setContentText(mensagemDeErro);

			alert.showAndWait();
			return false;
		}
	}

	public void carregarTableViewPoduto() {
    	tableColunNomeProdu.setCellValueFactory(new PropertyValueFactory<>("NomeProduto"));
    	tableColunValidade.setCellValueFactory(new PropertyValueFactory<>("validade"));
    	tableColunMarca.setCellValueFactory(new PropertyValueFactory<>("marca"));
    	tableColunTipo.setCellValueFactory(new PropertyValueFactory<>("tipo"));
    	tableColunEntrada.setCellValueFactory(new PropertyValueFactory<>("Entrada"));
    	tableColunVALOR.setCellValueFactory(new PropertyValueFactory<>("Valor"));
    	tableColunQuantidade.setCellValueFactory(new PropertyValueFactory<>("quantidade"));


    	listProdutos = produtoDAO.getAll();
    	observableListProdutos = FXCollections.observableArrayList(listProdutos);
    	TableViewPRODUTOS.setItems(observableListProdutos);

    	System.out.println("oi");

    	
    for( Produto a: listProdutos) {
    	  System.out.println(a.getNomeProduto());

    }


    }
    
    public void DadosProdutoComItensDoProdutoTable(Produto Produto) {
    	if(Produto != null) {
    		JTFXnome.setText(Produto.getNomeProduto());
    		JDTvalidade.setPromptText(String.valueOf(Produto.getValidade().format(DateTimeFormatter.ofPattern("dd-MM-yyyy"))));
    	 	JTFXMarca.setText(Produto.getMarca().toString());
    		JFXTipoProduto.setPromptText(Produto.getTipo().toString());
    		JDTentrada.setPromptText(String.valueOf(Produto.getEntrada().format(DateTimeFormatter.ofPattern("dd-MM-yyyy"))));    	
    		JTFXQuantidade.setText(Produto.getQuantidade());

    		JTFXPreco.setText(Produto.getValor());
    		
    	}else {
    		JTFXnome.setText("");
    		JDTvalidade.setPromptText("");
    		JTFXMarca.setText("");
    		JFXTipoProduto.setPromptText("");
    		JDTentrada.setPromptText("");
    		JTFXQuantidade.setText("");
    		JTFXPreco.setText("");
    	}
    }

	public void OnACJBTEDITAR(ActionEvent event) throws IOException {

		Produto produto = TableViewPRODUTOS.getSelectionModel().getSelectedItem();

	if (produto != null) {

		produto.setNomeProduto(JTFXnome.getText());
		//  produto.setValidade(JDTvalidade.getPromptText());
		produto.setMarca(JTFXMarca.getText());
		//	produto.setTipo(JFXTipoProduto.setPromptText());
		//	produto.setEntrada(JDTentrada.setPromptText());
		produto.setQuantidade(JTFXQuantidade.getText());
		produto.setValor(JTFXPreco.getText());


		ProdutoDAO.update(produto);

		Parent root = null;
		try {
			root = FXMLLoader.load(getClass().getClassLoader().getResource("./view/VerProdutos2.fxml"));
		} catch (IOException e) {
			e.printStackTrace();
		}
		Node node = (Node) event.getSource();
		Stage stage = (Stage) node.getScene().getWindow();
		stage.setTitle("Controle de estoque facil");
		stage.setScene(new Scene(root));

	}else{
		Alert alert = new Alert(AlertType.WARNING);
		alert.setContentText("Por favor, selecione uma Item!");

		alert.showAndWait();
	}


	}

    @FXML
    void onActionApagaProduto(ActionEvent event) {
		Produto produto = TableViewPRODUTOS.getSelectionModel().getSelectedItem();

		if(produto != null) {
    		produtoDAO.delete(produto);
    		carregarTableViewPoduto();
    	}else {
    		Alert alert = new Alert(AlertType.WARNING);
			alert.setContentText("Por favor, selecione uma Item!");

			alert.showAndWait();
    	}
    } 
    @FXML
    void ADCMAISPRODU(MouseEvent event) throws IOException {

    	Parent root = FXMLLoader.load(getClass().getResource("./view/NovosTiposdeProduto.fxml"));
		Node node = (Node) event.getSource();
		Stage stage = (Stage) node.getScene().getWindow();
		stage.setTitle("Controle de estoque facil");
		stage.setScene(new Scene(root));
    }

	@FXML
	void menu(ActionEvent event) throws IOException {

		Parent root = FXMLLoader.load(getClass().getClassLoader().getResource("./view/menu.fxml"));
		Node node = (Node) event.getSource();
		Stage stage = (Stage) node.getScene().getWindow();
		stage.setTitle("Controle de estoque facil");
		stage.setScene(new Scene(root));
	}

    		
	@Override
	public void initialize(URL location, ResourceBundle resources) {

		MaskNuber.monetaryField(JTFXPreco);
		populaComboBoxTipoProduto();
		carregarTableViewPoduto();
		MaskNuber.numericField(JTFXQuantidade);

		TableViewPRODUTOS.getSelectionModel().selectedItemProperty().addListener((observable, oldValue, newValue) -> DadosProdutoComItensDoProdutoTable(newValue));


	}


}
