package entity;

import java.time.LocalDate;

public class Venda {




	private Integer id_venda;
	private Cliente nomeComprador;
	private String telefoneComprador;
	private Produto Produto;
	private String quantidade;
	private LocalDate dataCompra;
 	private String valor;

	public String getValor() {
		return valor;
	}

	public void setValor(String valor) {
		this.valor = valor;
	}

	public Produto getProduto() {
		return Produto;
	}

	public void setProduto(Produto produto) {
		this.Produto = produto;

	}

	public LocalDate getDataCompra() {
		return dataCompra;
	}
	public void setDataCompra(LocalDate dataCompra) {
		this.dataCompra = dataCompra;
	}
	public Integer getId_venda() {
		return id_venda;
	}
	public void setId_venda(Integer id_venda) {
		this.id_venda = id_venda;
	}

	public Cliente getNomeComprador() {
		return nomeComprador;
	}

	public void setNomeComprador(Cliente Cliente) {
		this.nomeComprador = Cliente;
	}

	public String getTelefoneComprador() {
		return telefoneComprador;
	}
	public void setTelefoneComprador(String telefoneComprador) {
		this.telefoneComprador = telefoneComprador;
	}



	public String getQuantidade() {
		return quantidade;
	}
	public void setQuantidade(String quantidade) {
		this.quantidade = quantidade;
	}




}
