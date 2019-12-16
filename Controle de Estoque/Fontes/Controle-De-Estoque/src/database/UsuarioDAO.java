package database;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import database.Conexao;

import entity.Usuario;

public class UsuarioDAO implements DAO<Usuario>{
	
	
	public List<Usuario> getAll() {
		List<Usuario> usuarios = new ArrayList<>();
				
				String sql = "select * from usuario";
				Connection conexao = null;
				PreparedStatement stm = null;
				
				ResultSet rset = null;
				
				try {
					conexao =  new Conexao().getConnection();
					stm = conexao.prepareStatement(sql);
					rset = stm.executeQuery();
					
					while(rset.next()) {
						Usuario usuario = new Usuario();
						usuario.setId_usuario(rset.getInt("id_usuario"));
						usuario.setEmail(rset.getString("email"));
						usuario.setNome(rset.getString("nome"));
						usuario.setSenha(rset.getString("senha"));
						usuario.setNomereal(rset.getString("nomereal"));
						usuario.setTelefone(rset.getString("telefone"));
						usuario.setIdade(rset.getString("idade"));



						usuarios.add(usuario);
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
				return usuarios;
			}

	public boolean save(Usuario usuario) {
		String sql = "insert into usuario( email, nome, senha, nomereal, telefone, idade) values( ?, ?, ?, ?, ?, ?)";
		Connection conexao = null;
		PreparedStatement stm = null;
		
		try {
			conexao = new Conexao().getConnection();
			stm = conexao.prepareStatement(sql);

			stm.setInt(1, 1 );

			stm.setString(1, usuario.getEmail());
			stm.setString(2, usuario.getNome());
			stm.setString(3, usuario.getSenha());
			stm.setString(4, usuario.getNomereal());
			stm.setString(5, usuario.getTelefone());
			stm.setString(6, usuario.getIdade());

			stm.execute();

		}catch(Exception e) {
			e.printStackTrace();
			return false;
		}finally {
			try {
				if(stm != null) {
					stm.close();
				}if(conexao != null) {
					conexao.close();
				}
				
			}catch (Exception e) {
				e.printStackTrace();
			}
		}
		return true;
	}

	public boolean update(Usuario usuario) {
		String sql = "update usuario set email = ?, nome = ?, senha = ?, nomereal = ?, telefone = ?, idade = ?  " + "where = ?";
		Connection conexao = null;
		PreparedStatement stm = null;
		try {
			conexao = new Conexao().getConnection();
			stm = conexao.prepareStatement(sql);


			stm.setString(1, usuario.getEmail());
			stm.setString(2, usuario.getNome());
			stm.setString(3, usuario.getSenha());
			stm.setString(4, usuario.getNomereal());
			stm.setString(5, usuario.getTelefone());
			stm.setString(6, usuario.getIdade());



		}catch (Exception e) {
			e.printStackTrace();
		}finally {
			try {
				if(stm != null) {
					stm.close();
				}if(conexao != null) {
					conexao.close();
				}
				return true;
			}catch (Exception e) {
				e.printStackTrace();
			}
		}
		return false;
	}

	public boolean delete(Usuario usuario) {
		String sql = "delete from usuario where id = ?";
		Connection conexao = null;
		PreparedStatement stm = null;
		
		try {
			conexao = new Conexao().getConnection();
			stm = conexao.prepareStatement(sql);
	
			stm.execute();
		}catch(Exception e) {
			e.printStackTrace();
		}finally {
			
			try {
				if(stm != null) {
					stm.close();
				}if(conexao != null) {
					conexao.close();
				}
				return true;
			}catch (Exception e) {
				e.printStackTrace();
			}
		}
		return false;
	}
	@Override
	public Usuario get(Usuario usuario) {
		String sql = "select * from usuario where id_usuario = ?";
		Connection conexao = null;
		PreparedStatement stm = null;
		ResultSet rset = null;
		Usuario usu = new Usuario();

		try {
			conexao = new Conexao().getConnection();
			stm = conexao.prepareStatement(sql);
			stm.setInt(1, usuario.getId_usuario());
			rset = stm.executeQuery();

			Usuario Usuario = new Usuario();

			if (rset.next()) {


				Usuario.setId_usuario(rset.getInt("id_usuario"));

				Usuario.setEmail(rset.getString("email"));

				Usuario.setNome(rset.getString("nome"));

				Usuario.setSenha(rset.getString("senha"));


				Usuario.setNomereal(rset.getString("nomereal"));

				Usuario.setTelefone(rset.getString("telefone"));
				Usuario.setIdade(rset.getString("idade"));


				usu = usuario;



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
		return usu;
	}

	public Usuario buscarUsuario(String nomereal) {
		String sql = "select* from usuario where nome = ?";
		Usuario Usuario = null;
		Connection conexao = null;
		PreparedStatement stm = null;
		ResultSet rset = null;

		try {
			conexao = new Conexao().getConnection();
			stm = conexao.prepareStatement(sql);

			stm.setString(1, nomereal);

			rset = stm.executeQuery();

			while(rset.next()) {


				Usuario = new Usuario();

				Usuario.setId_usuario(rset.getInt("id_usuario"));
				Usuario.setEmail(rset.getString("email"));
				Usuario.setNome(rset.getString("nome"));
				Usuario.setSenha(rset.getString("senha"));
				Usuario.setNomereal(rset.getString("nomereal"));
				Usuario.setTelefone(rset.getString("telefone"));
				Usuario.setIdade(rset.getString("idade"));

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

		return Usuario;
	}


}