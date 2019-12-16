package entity;

import java.sql.Time;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class Produto {

	private Integer id_produto;
	private String NomeProduto;
	private LocalDate validade;
	private String marca;
	private TipoProduto tipo;
	private LocalDate entrada;
	private String valor;  
	private String quantidade;
	
	public String getQuantidade() {
		return quantidade;
	}
	public void setQuantidade(String quantidade) {
		this.quantidade = quantidade;
	}

	public Integer getId_produto() {
		return id_produto;
	}
	public void setId_produto(Integer id_produto) {
		this.id_produto = id_produto;
	}
	public String getNomeProduto() {
		return NomeProduto;
	}
	public void setNomeProduto(String nomeProduto) {
		NomeProduto = nomeProduto;
	}
	public LocalDate getValidade() {
		return validade;
	}
	public void setValidade(LocalDate validade) {
		this.validade = validade;
	}
	public String getMarca() {
		return marca;
	}
	public void setMarca(String marca) {
		this.marca = marca;
	}
	public TipoProduto getTipo() {
		return tipo;
	}
	public void setTipo(TipoProduto tipo) {
		this.tipo = tipo;
	}
	public LocalDate getEntrada() {
		return entrada;
	}
	public void setEntrada(LocalDate entrada) {
		this.entrada = entrada;
	}
	public String getValor() {
		return valor;
	}
	public void setValor(String Valor) {
		this.valor = Valor;
	}



	@Override
	public String toString() {
		return this.NomeProduto;
	}

	
}
