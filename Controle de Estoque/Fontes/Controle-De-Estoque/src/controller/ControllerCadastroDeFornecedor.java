package controller;

import Mask.MaskNuber;
import com.jfoenix.controls.JFXButton;
import com.jfoenix.controls.JFXTextField;

import database.FornecedorDAO;
import entity.Fornecedor;
import entity.Produto;
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
import javafx.scene.control.cell.PropertyValueFactory;
import javafx.scene.layout.AnchorPane;
import javafx.stage.Stage;

import java.io.IOException;
import java.net.URL;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.ResourceBundle;

public class ControllerCadastroDeFornecedor implements Initializable {

    @FXML
    private AnchorPane JCBForne;

    @FXML
    private TableView<Fornecedor> TableViewFornecedor;

    @FXML
    private TableColumn<Fornecedor, String> tableColunNomeForncedor;

    @FXML
    private TableColumn<Fornecedor, String> tableColunTelefoneFornecedor;

    @FXML
    private TableColumn<Fornecedor, String> tableColunENDERECOFornecedor;

    @FXML
    private TableColumn<Fornecedor, String> tableColunTipo;


    @FXML
    private JFXTextField JTFXNomeFornecedor;

    @FXML
    private JFXTextField JTFXEnderecoFornecedor;

    @FXML
    private JFXTextField JTFXTelefoneFornecedor;

    @FXML
    private JFXTextField JTFXTipo;

    @FXML
    private JFXButton JBTSalvar;

    @FXML
    private JFXButton JBTRemover;

    @FXML
    private JFXButton JBTMenu;


    private List<Fornecedor> listFornecedor;
    private ObservableList<Fornecedor> observableListFornecedor;
    private FornecedorDAO FornecedorDAO = new FornecedorDAO();

    @FXML
    void OnACJBTSalvar(ActionEvent event) throws IOException {
        Fornecedor fornecedor = new Fornecedor();
        if (validaDados()) {

            fornecedor.setNomeFornecedor(this.JTFXNomeFornecedor.getText());
            fornecedor.setTelefone(this.JTFXTelefoneFornecedor.getText());
            fornecedor.setEndereco(this.JTFXEnderecoFornecedor.getText());
            fornecedor.setTipoProduto(this.JTFXTipo.getText());

            FornecedorDAO.save(fornecedor);


            Parent root = FXMLLoader.load(getClass().getClassLoader().getResource("./view/CadastroDeFornedores.fxml"));
            Node node = (Node) event.getSource();
            Stage stage = (Stage) node.getScene().getWindow();
            stage.setTitle("Controle de estoque facil");
            stage.setScene(new Scene(root));
        }
    }

    private boolean validaDados() {
        String mensagemDeErro = "";

        if (this.JTFXNomeFornecedor.getText().length() == 0) {
            mensagemDeErro += "Nome invalido.\n";
        }


        if (JTFXTelefoneFornecedor.getText().length() == 0) {
            mensagemDeErro += "Telefone invalido.\n";
        }
        if (this.JTFXEnderecoFornecedor.getText().length() == 0) {
            mensagemDeErro += "Endereço invalido.\n";
        }
        if (this.JTFXTipo.getText().length() == 0) {
            mensagemDeErro += "Tipo incorreto.\n";
        }

        if (mensagemDeErro.length() == 0) {
            return true;
        } else {
            Alert alert = new Alert(Alert.AlertType.ERROR);
            alert.setTitle("Erro ao cadastrar o fornecedor");
            alert.setHeaderText("Confira os seguintes campos, por favor.");
            alert.setContentText(mensagemDeErro);

            alert.showAndWait();
            return false;
        }
    }



    public void carregarTableViewFornecedor() {

        tableColunNomeForncedor.setCellValueFactory(new PropertyValueFactory<>("NomeFornecedor"));
        tableColunTelefoneFornecedor.setCellValueFactory(new PropertyValueFactory<>("Telefone"));
        tableColunENDERECOFornecedor.setCellValueFactory(new PropertyValueFactory<>("endereco"));
        tableColunTipo.setCellValueFactory(new PropertyValueFactory<>("TipoProduto"));



        listFornecedor= FornecedorDAO.getAll();
        observableListFornecedor = FXCollections.observableArrayList(listFornecedor);
        TableViewFornecedor.setItems(observableListFornecedor);

        System.out.println("oi");


        for( Fornecedor a: listFornecedor) {
            System.out.println(a.getNomeFornecedor());
            System.out.println(a.getTelefone());
            System.out.println(a.getTipoProduto());




        }
    }

    public void DadosProdutoComItensDoFornecedorTable(Fornecedor Fornecedor) {
        if(Fornecedor!= null) {
            JTFXNomeFornecedor.setText(Fornecedor.getNomeFornecedor());
            JTFXTelefoneFornecedor.setText(Fornecedor.getTelefone().toString());
            JTFXEnderecoFornecedor.setText(Fornecedor.getEndereco().toString());
            JTFXTipo.setText(Fornecedor.getTipoProduto().toString());


        }else {
            JTFXNomeFornecedor.setText("");
            JTFXTelefoneFornecedor.setText("");
            JTFXEnderecoFornecedor.setText("");
            JTFXTipo.setText("");

        }
    }

    public void OnACJBTEDITAR(ActionEvent event) throws IOException {

            Fornecedor Fornecedor = TableViewFornecedor.getSelectionModel().getSelectedItem();

        if (Fornecedor != null) {

            Fornecedor.setNomeFornecedor(JTFXNomeFornecedor.getText());
            Fornecedor.setTelefone(JTFXTelefoneFornecedor.getText());

            Fornecedor.setEndereco(JTFXEnderecoFornecedor.getText());
            Fornecedor.setTipoProduto(JTFXTipo.getText());
            FornecedorDAO.update(Fornecedor);
        } else {
            Alert alert = new Alert(Alert.AlertType.WARNING);
            alert.setContentText("Por favor, selecione uma Item!");

            alert.showAndWait();
        }


        Parent root = FXMLLoader.load(getClass().getClassLoader().getResource("./view/CadastroDeFornecedores.fxml"));
        Node node = (Node) event.getSource();
        Stage stage = (Stage) node.getScene().getWindow();
        stage.setTitle("Controle de estoque facil");
        stage.setScene(new Scene(root));
    }

    @FXML
    void OnACJBTRemover(ActionEvent event) {
        Fornecedor Fornecedor = TableViewFornecedor.getSelectionModel().getSelectedItem();

        if(Fornecedor != null) {
           FornecedorDAO.delete(Fornecedor);
            carregarTableViewFornecedor();
        }else {
            Alert alert = new Alert(Alert.AlertType.WARNING);
            alert.setContentText("Por favor, selecione uma Item!");

            alert.showAndWait();
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
        carregarTableViewFornecedor();
        TableViewFornecedor.getSelectionModel().selectedItemProperty().addListener((observable, oldValue, newValue) -> DadosProdutoComItensDoFornecedorTable(newValue));
        MaskNuber.foneField(JTFXTelefoneFornecedor);
    }
}
