package controller;


import java.io.IOException;
import java.net.URL;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.ResourceBundle;

import Mask.MaskNuber;
import com.jfoenix.controls.*;

import database.ClienteDAO;
import database.ProdutoDAO;
import database.VendaDAO;
import entity.Cliente;
import entity.Produto;
import entity.Venda;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.event.ActionEvent;
import javafx.event.Event;
import javafx.event.EventHandler;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.fxml.Initializable;
import javafx.scene.Node;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.scene.control.cell.PropertyValueFactory;
import javafx.scene.input.MouseEvent;
import javafx.scene.layout.AnchorPane;
import javafx.stage.Stage;

public class ControllerVenda<QuantidadeVendida> implements Initializable {

    @FXML
    private AnchorPane AnchorPaneVenda;

    @FXML
    private TableView<Venda> TableViewVenda;

    @FXML
    private TableColumn<Venda, String > tableColunNomeCliente;

    @FXML
    private TableColumn<Venda, String> tableColunTelefone;

    @FXML
    private TableColumn<Venda, String> tableColunProduto;

    @FXML
    private TableColumn<Venda, String> tableColunqUANTID;

    @FXML
    private TableColumn<Venda, String> tableColunVALORvENDA;

    @FXML
    private TableColumn<Venda, String> tableColunDataCompra;

    @FXML
    private JFXButton JBTSalvar;

    @FXML
    private JFXButton JBTRemover;

    @FXML
    private JFXComboBox<Cliente> JFXComboNomeComprador;

    @FXML
    private JFXComboBox<Produto> JFXComboEscoProduto;

    @FXML
    private JFXTextField JTFXQuantidadeVenda;

    @FXML
    private JFXTextField JTFXTelefone;

    @FXML
    private Label LabelQNTDdisponivel;

    @FXML
    private JFXDatePicker DataCompra;

    @FXML
    private JFXTextField JTFXValor;

    @FXML
    private Label LabelValor;

    @FXML
    private JFXButton JBTEditar;

    @FXML
    private JFXCheckBox jfxCheckVEZES;

    private ProdutoDAO ProdutoDAO = new ProdutoDAO();
    private ClienteDAO ClienteDAO = new ClienteDAO();
    private List<Cliente> listaCliente;
    private ObservableList<Cliente> observableListCliente;
    private List<Produto> listaProduto;
    private ObservableList<Produto> observableListProduto;
    private Venda venda;
    private VendaDAO VendaDAO = new VendaDAO();
    private ProdutoDAO produtoDAO = new ProdutoDAO();
    private Stage dialogStage;

    private List<Venda> listaVenda;
    private ObservableList<Venda> observableListVenda;


    Venda Venda =  new Venda();
    Produto produto = new Produto();
    Cliente cliente = new Cliente();

    private boolean confirmarClick;
    private ButtonBase OnACtionCheckVEZES;
    private Produto setQuantidade;


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
    private ControllerVenda ControllerDialogVenda = null;




    @FXML
    void OnACJBTSalvar(ActionEvent event) throws IOException {


        if (validaDados()) {


            ControllerDialogVenda = new ControllerVenda();
            Venda Venda = new Venda();

            System.out.println(this.JFXComboEscoProduto.getSelectionModel().getSelectedItem().toString());
            System.out.println(this.JFXComboEscoProduto.getSelectionModel().getSelectedItem().toString());

            System.out.println(this.JFXComboNomeComprador.getSelectionModel().getSelectedItem().toString());
            Venda.setProduto(ProdutoDAO.buscarProduto(this.JFXComboEscoProduto.getSelectionModel().getSelectedItem().toString()));
            Venda.setNomeComprador(ClienteDAO.buscarCliente(this.JFXComboNomeComprador.getSelectionModel().getSelectedItem().toString()));
            Venda.setTelefoneComprador(this.JTFXTelefone.getText());
            Venda.setQuantidade(this.JTFXQuantidadeVenda.getText());
            Venda.setDataCompra(this.DataCompra.getValue());
            Venda.setValor(this.JTFXValor.getText());

            System.out.println("Nome comprador" + Venda.getNomeComprador().getId_Cliente());

            Venda.setQuantidade(this.JTFXQuantidadeVenda.getText());

            int qntEstoque = Integer.parseInt(Venda.getProduto().getQuantidade());
            int qntVenda = Integer.parseInt(Venda.getQuantidade());

            Venda.getProduto().setQuantidade(String.valueOf(qntEstoque - qntVenda));

            if (qntEstoque >= qntVenda) {
                if (qntVenda > 0) {
                    VendaDAO.save(Venda);

                    Parent root = null;
                    try {
                        root = FXMLLoader.load(getClass().getClassLoader().getResource("./view/Venda.fxml"));
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                    Node node = (Node) event.getSource();
                    Stage stage = (Stage) node.getScene().getWindow();
                    stage.setTitle("Controle de estoque facil");
                    stage.setScene(new Scene(root));


                    //  System.out.println("oiiiiiii" + Venda.getProduto().getValidade());

                    ProdutoDAO.update(Venda.getProduto());
                } else {
                    Alert alert = new Alert(Alert.AlertType.WARNING);
                    alert.setContentText("Olá, Usuário estamos vendo aqui que você colocou um valor 0 ou negativo não precisamos explicar que isto não funciona né...");

                    alert.showAndWait();
                }

                } else{
                    Alert alert = new Alert(Alert.AlertType.WARNING);
                    alert.setContentText("Voce não tem quantidade disponivel para fazer esta venda!");

                    alert.showAndWait();
                }
            }
        }




    @FXML
   private void OnComboNome() {
        listaCliente = ClienteDAO.getAll();

        Cliente Cliente = new Cliente();
        Cliente.setNomeCliente("Nome do Cliente ");
        listaCliente.add(0, Cliente);

        observableListCliente = FXCollections.observableArrayList(listaCliente);
        JFXComboNomeComprador.setItems(observableListCliente);

    }

    @FXML
  private void OnComboProduto() {
        listaProduto = ProdutoDAO.getAll();

        Produto Produto = new Produto();
        Produto.setNomeProduto(" Nome do Produto");
     listaProduto.add(0, Produto);

        observableListProduto = FXCollections.observableArrayList(listaProduto);
        JFXComboEscoProduto.setItems(observableListProduto);
    }

    @FXML
    void pegavalor(MouseEvent event) {
        JFXComboNomeComprador.setOnAction(new EventHandler<ActionEvent>() {
            @Override
            public void handle(ActionEvent event) {
                System.out.println("oi");
                System.out.println(JFXComboNomeComprador.getValue().getNomeCliente());

                System.out.println(JFXComboNomeComprador.getValue().getTelefoneCliente());
                JTFXTelefone.setText(JFXComboNomeComprador.getValue().getTelefoneCliente());
            }
        });

    }
    @FXML
    void pegavalor1(MouseEvent event) {
        JFXComboEscoProduto.setOnAction(new EventHandler<ActionEvent>() {
            @Override
            public void handle(ActionEvent event) {
                System.out.println("produto");

                System.out.println(JFXComboEscoProduto.getValue().getQuantidade());
                LabelQNTDdisponivel.setText(JFXComboEscoProduto.getValue().getQuantidade());


               System.out.println(JFXComboEscoProduto.getValue().getValor());
                LabelValor.setText(JFXComboEscoProduto.getValue().getValor());




            }
        });

    }
   /* @FXML
    void pegaValor2(MouseEvent event) {
        OnACtionCheckVEZES.setOnAction(new EventHandler<ActionEvent>() {

            @Override
            public void handle(ActionEvent event) {

               // int qntEstoque = Integer.valueOf(produto.getQuantidade());

              //  int qntVenda = Integer.valueOf(Venda.getQuantidade());

               // int novoEstoque = qntEstoque - qntVenda;

             //   produto.setQuantidade(String.valueOf(novoEstoque));

           //     float valorpro = Integer.valueOf((produto.getValor()));

             //   JTFXValor.setText(String.valueOf(qntVenda * valorpro));


            }
        });
    }

*/

    @FXML
    void OnACtionCheckVEZES(ActionEvent event) {
        System.out.println("legal não deu erro AINDA");
    }

    private boolean validaDados() {
        String mensagemDeErro = "";

        if (this.JFXComboNomeComprador.getSelectionModel().getSelectedItem() == null) {
            mensagemDeErro += "Selecione o comprador.\n";
        }
        if (JFXComboEscoProduto.getSelectionModel().getSelectedItem() == null) {
            mensagemDeErro += "Selecione o produto que será vendido.\n";
        }

        if (DataCompra.getValue() == null) {
            mensagemDeErro += "Data da compra invalida.\n";
        }
        if (this.JTFXTelefone.getText().length() == 0) {
            mensagemDeErro += "Telefone Invalido.\n";
        }
        if (this.JTFXValor.getText().length() == 0) {
            mensagemDeErro += "Valor Invalido.\n";
        }
        if (this.JTFXQuantidadeVenda.getText().length() == 0) {
            mensagemDeErro += "Quantidade Invalida.\n";
        }
        if (this.JTFXQuantidadeVenda.getText().length() == 0) {
            mensagemDeErro += "Quantidade Invalida.\n";
        }

        if (mensagemDeErro.length() == 0) {
            return true;
        } else {
            Alert alert = new Alert(Alert.AlertType.ERROR);
            alert.setTitle("Erro ao cadastrar o produto");
            alert.setHeaderText("Confira os seguintes campos, por favor.");
            alert.setContentText(mensagemDeErro);

            alert.showAndWait();
            return false;
        }
	}
	
	

	@FXML
    void onActionApagaVenda(ActionEvent event) {
        Venda venda = TableViewVenda.getSelectionModel().getSelectedItem();

        if(venda != null) {
            VendaDAO.delete(venda);
            carregarTableViewVenda();
        }else {
            Alert alert = new Alert(Alert.AlertType.WARNING);
            alert.setContentText("Por favor, selecione uma Venda para excluir!");

            alert.showAndWait();
        }
    }

    public void carregarTableViewVenda() {

        tableColunNomeCliente.setCellValueFactory(new PropertyValueFactory<>("nomeComprador"));
        tableColunTelefone.setCellValueFactory(new PropertyValueFactory<>("telefoneComprador"));
        tableColunProduto.setCellValueFactory(new PropertyValueFactory<>("Produto"));
        tableColunqUANTID.setCellValueFactory(new PropertyValueFactory<>("quantidade"));
        tableColunDataCompra.setCellValueFactory(new PropertyValueFactory<>("dataCompra"));
        tableColunVALORvENDA.setCellValueFactory(new PropertyValueFactory<>("valor"));

        listaVenda = VendaDAO.getAll();
        observableListVenda = FXCollections.observableArrayList(listaVenda);
        TableViewVenda.setItems(observableListVenda);

        System.out.println("oi");


        for( Venda a: listaVenda) {
            System.out.println(a.getProduto());
        }

        for( Venda a: listaVenda) {
            System.out.println(a.getNomeComprador());

        }
    }



    public void DadosProdutoComItensDoProdutoTable(Venda Venda) {

        if(Venda != null) {
            JFXComboNomeComprador.setPromptText(Venda.getNomeComprador().toString());
            JTFXTelefone.setText(Venda.getTelefoneComprador().toString());
            JFXComboEscoProduto.setPromptText(Venda.getProduto().toString());
            JTFXQuantidadeVenda.setText(Venda.getQuantidade());
            DataCompra.setPromptText(String.valueOf(Venda.getDataCompra().format(DateTimeFormatter.ofPattern("dd-MM-yyyy"))));
            JTFXValor.setPromptText(Venda.getValor());

        }else {
            JFXComboNomeComprador.setPromptText("");
            JTFXTelefone.setText("");
            JFXComboEscoProduto.setPromptText("");
            JTFXQuantidadeVenda.setText("");
            DataCompra.setPromptText("");
            JTFXValor.setText("");
        }
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

        OnComboNome();
        OnComboProduto();
        MaskNuber.numericField(JTFXQuantidadeVenda);
        MaskNuber.foneField(JTFXTelefone);
        carregarTableViewVenda();
        TableViewVenda.getSelectionModel().selectedItemProperty().addListener((observable, oldValue, newValue) -> DadosProdutoComItensDoProdutoTable(newValue));
    }
}

   