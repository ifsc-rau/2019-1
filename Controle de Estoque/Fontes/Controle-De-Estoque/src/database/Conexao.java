package database;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import database.Conexao;

public class Conexao {
	
	private static final String LOGIN = "root";
	private static final String SENHA = "";
	private static final String URL = "jdbc:mysql://localhost:3306/estoque?user=root&password=";

	public Connection getConnection() {
		// TODO Auto-generated method stub
		Connection conexao = null;
		try {
			Class.forName("com.mysql.jdbc.Driver");
			conexao = DriverManager.getConnection(Conexao.URL, Conexao.LOGIN, Conexao.SENHA);
		}catch(SQLException e) {
			System.out.println("Erro ao conectar ao banco de dados " + e);
		}catch (ClassNotFoundException e) {
			System.out.println("Erro ao carregar a classe " + e);
		}
		
		return conexao;
	}

}
