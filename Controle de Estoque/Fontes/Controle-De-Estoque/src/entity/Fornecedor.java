package entity;

public class Fornecedor {
	
	private Integer id_Fornecedor;
	private String NomeFornecedor;
	private String Telefone;
	private String endereco;
	private String TipoProduto;

	public String getTipoProduto() {
		return TipoProduto;
	}

	public void setTipoProduto(String tipoProduto) {
		TipoProduto = tipoProduto;
	}

	public String getTelefone() {
		return Telefone;
	}
	public void setTelefone(String telefone) {
		Telefone = telefone;
	}
	public String getEndereco() {
		return endereco;
	}
	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}
	public Integer getId_Fornecedor() {
		return id_Fornecedor;
	}
	public void setId_Fornecedor(Integer id_Fornecedor) {
		this.id_Fornecedor = id_Fornecedor;
	}
	public String getNomeFornecedor() {
		return NomeFornecedor;
	}
	public void setNomeFornecedor(String nomeFornecedor) {
		NomeFornecedor = nomeFornecedor;
	}

	public void add(Fornecedor fornecedor) {
	}
}
