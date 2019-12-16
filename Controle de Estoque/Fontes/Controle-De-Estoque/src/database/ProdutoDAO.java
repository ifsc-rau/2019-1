package database;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import entity.Produto;
import entity.TipoProduto;


public class ProdutoDAO implements DAO<Produto> {

	private TipoProduto TipoProduto;

	public  List<Produto> getAll() {
		List<Produto> produto = new ArrayList<Produto>();
 
		
		String sql = "select * from Produto";
		Connection conexao = null;
		PreparedStatement stm = null;
		ResultSet rset = null; 
		try {
			conexao = new Conexao().getConnection();
			stm = conexao.prepareStatement(sql);
			rset = stm.executeQuery();

			while (rset.next()) {
				Produto Produto = new Produto(); 
				TipoProduto TipoProduto = new TipoProduto();
				
				Produto.setId_produto(rset.getInt("id_produto"));
				Produto.setNomeProduto(rset.getString("nome"));
				Produto.setValidade(rset.getDate("validade").toLocalDate());
				Produto.setMarca(rset.getString("marca"));
				TipoProduto.setId_TipoProduto(rset.getInt("id_TipoProduto"));
				Produto.setEntrada(rset.getDate("entrada").toLocalDate());
				Produto.setValor(rset.getString("valor")); 
				Produto.setQuantidade(rset.getString("quantidade"));

				TipoProdutoDAO TipoProdutoDAO = new TipoProdutoDAO();
				TipoProduto = (TipoProduto) TipoProdutoDAO.get(TipoProduto);
				Produto.setTipo(TipoProduto); 
				
		
				produto.add(Produto);
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
		return produto;
	}

	@Override
	public boolean save(Produto produto) {
		String sql = "insert into Produto(id_TipoProduto, nome, Validade, Marca, tipo, Entrada, valor, quantidade) values(?,?,?,?,?,?, ?, ?)";
		Connection conexao = null;
		PreparedStatement stm = null;

		try {
			conexao = new Conexao().getConnection();
			stm = conexao.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);

			stm.setInt(1, 1 );
			stm.setInt(2, 2);
			 
			stm.setString(2, produto.getNomeProduto());
			stm.setDate(3, Date.valueOf(produto.getValidade()));
			stm.setString(4, produto.getMarca());
			stm.setInt(5, produto.getTipo().getId_TipoProduto());
			stm.setDate(6, Date.valueOf(produto.getEntrada()));
			stm.setString(7, produto.getValor());
			stm.setString(8, produto.getQuantidade());

			stm.executeUpdate();

			ResultSet rs = stm.getGeneratedKeys();
			rs.next();
			int retornaId = rs.getInt(1);
			produto.setId_produto(retornaId);
			
			
				
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
	public boolean update(Produto produto) {
		String sql = "UPDATE Produto set nome = ?, Validade = ?, Marca = ?, id_TipoProduto = ?, Entrada = ?, valor = ?, quantidade = ? where id_Produto = ?";
		PreparedStatement stm = null;
		Connection conexao = null;

		try {
			conexao = new Conexao().getConnection();
			stm = conexao.prepareStatement(sql);


			stm.setString(1, produto.getNomeProduto());
			stm.setDate(2,Date.valueOf (produto.getValidade()));
			stm.setString(3, produto.getMarca());
			stm.setInt(4, produto.getTipo().getId_TipoProduto());
			stm.setDate(5, Date.valueOf(produto.getEntrada()));
			stm.setString(6, produto.getValor());;
			stm.setString(7, produto.getQuantidade());
			stm.setInt(8, produto.getId_produto());
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
	public boolean delete(Produto produto) {
		String sql = "DELETE FROM Produto where Id_produto = ?";
		Connection conexao = null;
		PreparedStatement stm = null;
		try {
			conexao = new Conexao().getConnection();
			stm = conexao.prepareStatement(sql);
			stm.setInt(1, produto.getId_produto());
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

	@Override
	public Produto get(Produto produto) {
		String sql = "select * from Produto where Id_produto = ?";
		Connection conexao = null;
		PreparedStatement stm = null;
		ResultSet rset = null;
		Produto retorno = new Produto();

		try {
			conexao = new Conexao().getConnection();
			stm = conexao.prepareStatement(sql);
			stm.setInt(1, produto.getId_produto());
			rset = stm.executeQuery();
			
			Produto Produto = new Produto();

			if (rset.next()) {

				
				Produto.setId_produto(rset.getInt("id_produto"));
				Produto.setNomeProduto(rset.getString("nome"));
				Produto.setValidade(rset.getDate("validade").toLocalDate());
				Produto.setMarca(rset.getString("marca"));
				TipoProduto = new TipoProduto();
				TipoProduto.setId_TipoProduto(rset.getInt("Id_TipoProduto"));
				Produto.setEntrada(rset.getDate("entrada").toLocalDate());
				Produto.setValor(rset.getString("valor"));
				Produto.setQuantidade(rset.getString("quantidade"));

				TipoProdutoDAO TipoProdutoDAO = new TipoProdutoDAO();
				TipoProduto = (TipoProduto) TipoProdutoDAO.get(TipoProduto);
				Produto.setTipo(TipoProduto);

				retorno = Produto;




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
		return retorno;
	}
	

	public Produto buscarProduto(String nomeproduto) {
		String sql = "select* from Produto where nome = ?";
		Produto Produto = null;
		Connection conexao = null;
		PreparedStatement stm = null;
		ResultSet rset = null;
		
		try {
			conexao = new Conexao().getConnection();
			stm = conexao.prepareStatement(sql);
			
			stm.setString(1, nomeproduto);
			
			rset = stm.executeQuery();
			
			while(rset.next()) {
				Produto = new Produto();
				Produto.setId_produto(rset.getInt("id_produto"));
				Produto.setNomeProduto(rset.getString("nome"));
				Produto.setValidade(rset.getDate("validade").toLocalDate());
				Produto.setMarca(rset.getString("marca"));

				TipoProduto = new TipoProduto();
				TipoProduto.setId_TipoProduto(rset.getInt("Id_TipoProduto"));
				Produto.setEntrada(rset.getDate("entrada").toLocalDate());
				Produto.setValor(rset.getString("Valor"));

				Produto.setQuantidade(rset.getString("quantidade"));

				TipoProdutoDAO TipoProdutoDAO = new TipoProdutoDAO();
				TipoProduto = (TipoProduto) TipoProdutoDAO.get(TipoProduto);
				Produto.setTipo(TipoProduto);
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
		
		return Produto;
	}



}
