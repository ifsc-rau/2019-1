package entity;

public class TipoProduto {

	private Integer id_TipoProduto;
	private String Tipo;
	
	public Integer getId_TipoProduto() {
		return id_TipoProduto;
	}
	public void setId_TipoProduto(Integer id_TipoProduto) {
		this.id_TipoProduto = id_TipoProduto;
	}
	public String getTipo() { 
		return Tipo;
	}
	public void setTipo(String tipo) {
		Tipo = tipo;
	}
	
	@Override
	public String toString() {
		return this.Tipo; 
	}
}
