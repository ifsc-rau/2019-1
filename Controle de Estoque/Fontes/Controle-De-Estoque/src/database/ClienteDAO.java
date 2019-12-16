package database;

import java.sql.Connection;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import database.DAO;

import entity.Cliente;
import entity.Produto;
import database.Conexao;

public class ClienteDAO implements DAO<Cliente> {

	
	@Override
	public List<Cliente> getAll() {

		List<Cliente> clientes = new ArrayList<Cliente>();


		String sql = "select * from Cliente";
		Connection conexao = null;
		PreparedStatement stm = null;
		ResultSet rset = null;

		try {
			conexao = new Conexao().getConnection();
			stm = conexao.prepareStatement(sql);
			rset = stm.executeQuery();
			
			while(rset.next()) {
				Cliente cliente = new Cliente();


				cliente.setId_Cliente(rset.getInt("id_cliente"));
				cliente.setNomeCliente(rset.getString("nome"));
				cliente.setTelefoneCliente(rset.getString("telefoneCliente"));
				cliente.setEnderecoCliente(rset.getString("endereco"));
				cliente.setEmailCliente(rset.getString("email"));
			
				clientes.add(cliente);
			}
			
		}catch (Exception e) {
			e.printStackTrace();
		}finally {
			try {
				if(rset != null) {
					rset.close();

				}if(conexao != null) {
					conexao.close();
				}
			}catch(Exception e) {
				e.printStackTrace();
			}
		}
		return clientes;
	}
	
	@Override
	public Cliente get(Cliente cliente) {
		String sql = "select * from cliente where id_cliente = ?";
		Connection conexao = null;
		PreparedStatement stm = null;
		ResultSet rset = null;
		Cliente Cliente = new Cliente();

		try {
			conexao = new Conexao().getConnection();
			stm = conexao.prepareStatement(sql);
			stm.setInt(1, cliente. getId_Cliente());
			rset = stm.executeQuery();
			
			

			if (rset.next()) {
				

				cliente.setId_Cliente(rset.getInt("id_cliente"));
				cliente.setNomeCliente(rset.getString("nome"));
				cliente.setTelefoneCliente(rset.getString("telefoneCliente"));
				cliente.setEnderecoCliente(rset.getString("endereco"));
				cliente.setEmailCliente(rset.getString("email"));

				Cliente = cliente;
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {

			try {
				if (stm != null) {
					stm.close();
				}
				if (conexao != null) {
					conexao.close();
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return Cliente;
	}



	@Override
	public boolean save(Cliente cliente) {
		String sql = "insert into cliente( nome, telefoneCliente, endereco, email) values( ?, ?, ?, ?)";
		Connection conexao = null;
		PreparedStatement stm = null;

		try {
			conexao = new Conexao().getConnection();
			stm = conexao.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);

			stm.setInt(1, 1 );

			stm.setString(1, cliente.getNomeCliente());
			stm.setString(2, cliente.getTelefoneCliente());
			stm.setString(3, cliente.getEnderecoCliente());
			stm.setString(4, cliente.getEmailCliente());
			
			stm.executeUpdate();

			ResultSet rs = stm.getGeneratedKeys();
			rs.next();
			int retornaId = rs.getInt(1);
			cliente.setId_Cliente(retornaId);
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		} finally {
			try {
				if (stm != null) {
					stm.close();
				}
				if (conexao != null) {
					conexao.close();
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return false;
	}

	@Override
	public boolean update(Cliente cliente) {
		String sql = "UPDATE cliente set nome = ?, telefoneCliente = ?, endereco = ?, email = ? where id_cliente = ?";
		PreparedStatement stm = null;
		Connection conexao = null;
		
		try {
			conexao = new Conexao().getConnection();
			stm = conexao.prepareStatement(sql);
			stm.setString(1, cliente.getNomeCliente());
			stm.setString(2, cliente.getTelefoneCliente());
			stm.setString(3, cliente.getEnderecoCliente());
			stm.setString(4, cliente.getEmailCliente());;
			stm.setInt(5, cliente.getId_Cliente());

			stm.execute();
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		} finally {

			try {
				if (stm != null) {
					stm.close();
				}
				if (conexao != null) {
					conexao.close();
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}

	

	@Override
	public boolean delete(Cliente cliente) {
		String sql = "DELETE FROM cliente where id_cliente = ?";
		Connection conexao = null;
		PreparedStatement stm = null;
		
		try {
			conexao = new Conexao().getConnection();
			stm = conexao.prepareStatement(sql);
			stm.setInt(1, cliente. getId_Cliente());
			stm.execute();
			return true;
		}catch (Exception e) {
			e.printStackTrace();
			return false;
		} finally {

			try {
				if (stm != null) {
					stm.close();
				}
				if (conexao != null) {
					conexao.close();
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		
	}

	public Cliente buscarCliente(String nomeCliente) {
		System.out.println("a"+ nomeCliente);

		String sql = "select * from cliente where nome  = ?";
		Produto Produto = null;
		Cliente Cliente = null;
		Connection conexao = null;
		PreparedStatement stm = null;
		ResultSet rset = null;
		
		try {
			conexao = new Conexao().getConnection();
			stm = conexao.prepareStatement(sql);

			stm.setString(1, nomeCliente);
			rset = stm.executeQuery();


			if(rset.first()) {
				Cliente = new Cliente();
				
				Cliente.setId_Cliente(rset.getInt("id_cliente"));
				Cliente.setNomeCliente(rset.getString("nome"));
				Cliente.setTelefoneCliente(rset.getString("telefoneCliente"));
				Cliente.setEnderecoCliente(rset.getString("endereco"));
				Cliente.setEmailCliente(rset.getString("email"));


				System.out.println(nomeCliente.toString());
			}
		}catch(Exception e) {
			e.printStackTrace();
		}finally {
			
			try {
				if(stm != null) {
					stm.close();
				}if(conexao != null) {
					conexao.close();
				}
			}catch(Exception e) {
				e.printStackTrace();
			}
	} 
		
		return Cliente;
	}


}
