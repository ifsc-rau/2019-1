package database;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import database.DAO;
import entity.Cliente;
import entity.Produto;
import entity.TipoProduto;
import entity.Venda;


public class VendaDAO implements DAO<Venda> {

	
	
	@Override
	public Venda get(Venda venda) {

		String sql = "select * from Venda where id_venda = ?";

		Connection conexao = null;
		PreparedStatement stm = null;
		ResultSet rset = null;
		Produto Produto = new Produto(); 
		Cliente Cliente = new Cliente();
		Venda Venda = new Venda();
		
		try {
			conexao = new Conexao().getConnection();
			stm = conexao.prepareStatement(sql);
			stm.setInt(1, venda.getId_venda());
			rset = stm.executeQuery();

			if (rset.next()) {


				Venda.setId_venda(rset.getInt("id_venda"));
				Cliente.setId_Cliente(rset.getInt("id_cliente"));
				Produto.setId_produto(rset.getInt("id_Produto"));

				Venda.setTelefoneComprador(rset.getString("telefonecomprador"));
				Venda.setQuantidade(rset.getString("quantidadedesejada"));
				Venda.setDataCompra(rset.getDate("datadecompra").toLocalDate());
				Venda.setValor(rset.getString("valor"));





				ClienteDAO ClienteDAO = new ClienteDAO();
				Cliente = (Cliente) ClienteDAO.get(Cliente);
				Venda.setNomeComprador(Cliente);




				ProdutoDAO ProdutoDAO = new ProdutoDAO();
				Produto = (Produto) ProdutoDAO.get(Produto);
				Venda.setProduto(Produto);



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
		return venda;
	
	}

	private Cliente Cliente;
	
	public List<Venda> getAll() {
	List<Venda> venda = new ArrayList<Venda>();
		
		String sql = "select * from Venda";
		Connection conexao = null;
		PreparedStatement stm = null;
		ResultSet rset = null; 
		try {
			conexao = new Conexao().getConnection();
			stm = conexao.prepareStatement(sql);
			rset = stm.executeQuery();

			while (rset.next()) {
				Produto Produto = new Produto(); 
				Cliente Cliente = new Cliente();
				Venda Venda = new Venda();

				Venda.setId_venda(rset.getInt("id_venda"));
				Cliente.setId_Cliente(rset.getInt("id_cliente"));
				Produto.setId_produto(rset.getInt("id_Produto"));
				Venda.setTelefoneComprador(rset.getString("telefonecomprador"));
				Venda.setQuantidade(rset.getString("quantidadedesejada"));
				Venda.setDataCompra(rset.getDate("datadecompra").toLocalDate());
				Venda.setValor(rset.getString("valor"));

				ClienteDAO ClienteDAO = new ClienteDAO();
				Cliente = ClienteDAO.get(Cliente);
				Venda.setNomeComprador(Cliente);

				ProdutoDAO ProdutoDAO = new ProdutoDAO();
				Produto = ProdutoDAO.get(Produto);
				Venda.setProduto(Produto);

				System.out.println("Produto " + Produto.getId_produto());
				System.out.println("Produto " + Produto.getNomeProduto());

				venda.add(Venda);


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
		return venda;
	
	}


	public boolean save(Venda venda) {
		String sql = "insert into Venda(id_Produto, id_cliente,  telefonecomprador, datadecompra, quantidadedesejada, valor) values(?,?,?,?,?, ?)";
		Connection conexao = null;
		PreparedStatement stm = null;

		try {
			conexao = new Conexao().getConnection();
			stm = conexao.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);


			/*.setInt(1, 1);
			stm.setInt(2, 2);*/
			
			
			stm.setInt(1, venda.getProduto().getId_produto());
			stm.setInt(2, venda.getNomeComprador().getId_Cliente());
			stm.setString(3, venda.getTelefoneComprador());
			stm.setDate(4, Date.valueOf(venda.getDataCompra()));
			stm.setString(5, venda.getQuantidade());
			stm.setString(6, venda.getValor());

			stm.executeUpdate();

			ResultSet rs = stm.getGeneratedKeys();
			rs.next();
			int retornaId = rs.getInt(1);
			venda.setId_venda(retornaId);


			
				
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
		return true;
	}

	@Override
	public boolean update(Venda venda) {
		String sql = "UPDATE Venda set id_Produto = ?, id_cliente = ?, telefonecomprador = ?, quantidadedesejada = ?, datadecompra = ?, valor = ? where id_venda = ?";
		PreparedStatement stm = null;
		Connection conexao = null;

		try {
			conexao = new Conexao().getConnection();
			stm = conexao.prepareStatement(sql);

			stm.setInt(1, venda.getProduto().getId_produto());
			stm.setInt(2, venda.getNomeComprador().getId_Cliente());
			stm.setString(3, venda.getTelefoneComprador());
			stm.setDate(4, Date.valueOf(venda.getDataCompra()));
			stm.setString(5, venda.getQuantidade());
			stm.setString(6, venda.getValor());
			stm.setInt(7, venda.getId_venda());

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
	public boolean delete(Venda venda) {
		String sql = "DELETE FROM Venda where id_venda = ?";
		Connection conexao = null;
		PreparedStatement stm = null;
		try {
			conexao = new Conexao().getConnection();
			stm = conexao.prepareStatement(sql);
			stm.setInt(1, venda.getId_venda());
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


}
