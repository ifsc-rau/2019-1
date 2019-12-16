package entity;

public class Cliente {

		
		private Integer id_Cliente;
		private String NomeCliente;
		private String TelefoneCliente;
		private String enderecoCliente;
		private String emailCliente;
		
		public String getEmailCliente() {
			return emailCliente;
		}
		public void setEmailCliente(String emailCliente) {
			this.emailCliente = emailCliente;
		}
		public Integer getId_Cliente() {
			return id_Cliente;
		}
		public void setId_Cliente(Integer id_Cliente) {
			this.id_Cliente = id_Cliente;
		}

		public String getNomeCliente() {
			return NomeCliente;
		}
		public void setNomeCliente(String nomeCliente) {
			NomeCliente = nomeCliente;
		}
		public String getTelefoneCliente() {
			return TelefoneCliente;
		}
		public void setTelefoneCliente(String telefoneCliente) {
			TelefoneCliente = telefoneCliente;
		}
		public String getEnderecoCliente() {
			return enderecoCliente;
		}
		public void setEnderecoCliente(String enderecoCliente) {
			this.enderecoCliente = enderecoCliente;
		}
		@Override
		public String toString() {
			return this.NomeCliente;
		}
		
		
	}


