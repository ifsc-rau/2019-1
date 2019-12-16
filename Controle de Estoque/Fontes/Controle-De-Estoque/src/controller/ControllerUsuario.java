package controller;

import com.jfoenix.controls.JFXButton;
import database.UsuarioDAO;
import entity.Usuario;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.fxml.Initializable;
import javafx.scene.Node;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Label;
import javafx.scene.control.cell.PropertyValueFactory;
import javafx.scene.layout.AnchorPane;
import javafx.stage.Stage;

import java.io.IOException;
import java.net.URL;
import java.util.List;
import java.util.ResourceBundle;

public class ControllerUsuario implements Initializable {

    @FXML
    private AnchorPane JCBInformacao;

    @FXML
    private Label LabelNomeUsuario;

    @FXML
    private Label LabelIdade;

    @FXML
    private Label LabelEmail;

    @FXML
    private Label LabelTelefone;
    @FXML
    private JFXButton JBTMenu;

    private UsuarioDAO UsuarioDAO = new UsuarioDAO();
    private List<Usuario> listaUsuario;
    private ObservableList<Usuario> observableListUsuario;
    private ControllerCadastroProduto ControllerDialogCadastrodeProdutos;
    private Usuario usuario = new Usuario();
    private UsuarioDAO usuarioDAO = new UsuarioDAO();



    public void carregarLabel() {



        LabelNomeUsuario.setText(String.valueOf(usuario.getNomereal()));
        System.out.println(String.valueOf(usuario.getNomereal()));
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
        usuario.setId_usuario(1);
        usuario = usuarioDAO.get(usuario);
        carregarLabel();

    }
}
