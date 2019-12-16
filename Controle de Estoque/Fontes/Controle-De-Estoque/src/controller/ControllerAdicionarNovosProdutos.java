package controller;


import java.net.URL;
import java.util.ArrayList;
import java.util.ResourceBundle;

import com.jfoenix.controls.JFXButton;
import com.jfoenix.controls.JFXTextField;

import database.ProdutoDAO;
import database.TipoProdutoDAO;
import entity.Produto;
import entity.TipoProduto;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.Alert;
import javafx.scene.control.Alert.AlertType;
import javafx.stage.Stage;

public class ControllerAdicionarNovosProdutos implements Initializable {

	 @FXML
	    private JFXTextField JTFXnome;

	    @FXML
	    private JFXButton btnAdicionaTipoProduto;

	   

	    private Stage dialogStage;

		private boolean confirmarClick;

		private TipoProduto TipoProduto;
		private TipoProdutoDAO TipoProdutoDAO = new TipoProdutoDAO();

		public Stage getDialogStage() {
			return dialogStage;
		}

		public void setDialogStage(Stage dialogStage) {
			this.dialogStage = dialogStage;
		}
		public boolean isConfirmarClick() {
			return confirmarClick;
		}

		public void setConfirmarClick(boolean confirmarClick) {
			this.confirmarClick = confirmarClick;
		}

		public TipoProduto getTipoProduto() {
			return TipoProduto;
		}

		public void setTipoProduto(TipoProduto TipoProduto) {
			this.TipoProduto = TipoProduto;
		}
		
		 @FXML
		    void onActionAdicionarTipoProduto(ActionEvent event) {
			 if (validaDados()) {
					if (verificaSeOPRODUTOExiste(this.JTFXnome.getText())) {
						TipoProduto.setTipo(this.JTFXnome.getText());

						confirmarClick = true;
						dialogStage.close();
					}
				} 
			}
		 
		 public boolean verificaSeOPRODUTOExiste(String nomeDoProduto) {
				java.util.List<TipoProduto> listaProduto = TipoProdutoDAO.getAll();
				java.util.List<String> listaAux = new ArrayList<String>();
				for(TipoProduto a : listaProduto) {
					listaAux.add(a.getTipo());
				}
				
				if (listaAux.contains(nomeDoProduto)) {
					Alert alert = new Alert(AlertType.ERROR);
					alert.setTitle("Erro ao cadastrar o tipo do produto");
					alert.setHeaderText("Esse nome de tipo de produto  já existe, tente outro por favor.");

					alert.showAndWait();
					return false;
				} else {
					return true;
				}

			}

			public boolean validaDados() {
				String mensagemDeErro = "";

				if (this.JTFXnome.getText().length() == 0) {
					mensagemDeErro = "Nome invalido.\n";
				}

				if (mensagemDeErro.length() == 0) {
					return true;
				} else {
					Alert alert = new Alert(AlertType.ERROR);
					alert.setTitle("Erro ao cadastrar tipo de produto");
					alert.setHeaderText("Confira os seguintes campos, por favor.");
					alert.setContentText(mensagemDeErro);

					alert.showAndWait();
					return false;
				}
			}

			@Override
			public void initialize(URL arg0, ResourceBundle arg1) {
				// TODO Auto-generated method stub
				
			}

		
	}

