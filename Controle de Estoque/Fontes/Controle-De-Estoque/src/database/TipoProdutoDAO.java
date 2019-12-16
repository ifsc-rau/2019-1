package database;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import database.Conexao;
import database.DAO;
import entity.TipoProduto;
 
public class TipoProdutoDAO  implements DAO<TipoProduto>{

	@Override
	public List<TipoProduto> getAll() {
		List<TipoProduto> tipPro = new ArrayList<TipoProduto>();
		
		String sql = "Select * from TipoProduto";
		Connection conexao = null;
		PreparedStatement stm = null;
		ResultSet rset = null;
		
		try {
			conexao = new Conexao().getConnection();
			stm = conexao.prepareStatement(sql);
			rset = stm.executeQuery();
			
			while(rset.next()) {
				TipoProduto TipoProduto = new TipoProduto();
				
				TipoProduto.setId_TipoProduto(rset.getInt("id_TipoProduto"));
				TipoProduto.setTipo(rset.getString("tipo"));
				
				tipPro.add(TipoProduto);
			}
		}catch (Exception e) {
			e.printStackTrace();
		}finally {
			try {
				if(rset != null) {
					rset.close();
				}if(stm != null) {
					stm.close();
				}if(conexao != null) {
					conexao.close();
				}
			}catch(Exception e) {
				e.printStackTrace();
			}
		}
		return tipPro;
	}

	@Override
	public boolean save(TipoProduto t) {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean update(TipoProduto t) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean delete(TipoProduto t) {
		// TODO Auto-generated method stub
		return false;
	}
	
	public TipoProduto buscarTipoProduto(String tipo) {
		String sql = "select* from TipoProduto where tipo = ?";
		TipoProduto TipoProduto = null;
		Connection conexao = null;
		PreparedStatement stm = null;
		ResultSet rset = null;
		
		try {
			conexao = new Conexao().getConnection();
			stm = conexao.prepareStatement(sql);
			
			stm.setString(1, tipo.toString());
			
			rset = stm.executeQuery();
			
			while(rset.next()) {
				TipoProduto = new TipoProduto();
				TipoProduto.setId_TipoProduto(rset.getInt("id_TipoProduto"));
				TipoProduto.setTipo(rset.getString("tipo"));
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
		
		return TipoProduto;
	}

	@Override
	public TipoProduto get(TipoProduto TipoProduto) {
		String sql = "select * from TipoProduto where id_TipoProduto = ?";
		TipoProduto tipPro = new TipoProduto();
		Connection conexao = null;
		PreparedStatement stm = null; 
		ResultSet rset = null;
		
		try {
			conexao = new Conexao().getConnection();
			stm = conexao.prepareStatement(sql);
			stm.setInt(1, TipoProduto.getId_TipoProduto());
			rset = stm.executeQuery();
			
			if(rset.next()) {
				TipoProduto.setId_TipoProduto(rset.getInt("id_TipoProduto"));
				TipoProduto.setTipo(rset.getString("tipo"));
				 
				tipPro = TipoProduto;
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
		return tipPro;
	}

	
	

}

