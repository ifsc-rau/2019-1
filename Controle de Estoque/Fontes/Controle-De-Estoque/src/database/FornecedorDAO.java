package database;


import entity.Fornecedor;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class FornecedorDAO implements DAO<Fornecedor> {



    @Override
    public Object get(Fornecedor fornecedor) {
        String sql = "select * from fornecedor where id_fornecedor = ?";
        Connection conexao = null;
        PreparedStatement stm = null;
        ResultSet rset = null;
        Fornecedor Fornecedor = new Fornecedor();

        try {
            conexao = new Conexao().getConnection();
            stm = conexao.prepareStatement(sql);
            stm.setInt(1, fornecedor. getId_Fornecedor());
            rset = stm.executeQuery();



            if (rset.next()) {


                fornecedor.setId_Fornecedor(rset.getInt("id_fornecedor"));
                fornecedor.setNomeFornecedor(rset.getString("nomeforn"));
                fornecedor.setTelefone(rset.getString("telefoneforn"));
                fornecedor.setEndereco(rset.getString("endereco"));
                fornecedor.setTipoProduto(rset.getString("produtovendidos"));

                Fornecedor = fornecedor;
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
        return Fornecedor;

    }

    @Override
    public List<Fornecedor> getAll() {
    List<Fornecedor> fornecedor = new ArrayList<Fornecedor>();


    String sql = "select * from fornecedor";
        Connection conexao = null;
        PreparedStatement stm = null;
        ResultSet rset = null;

        try {
            conexao = new Conexao().getConnection();
            stm = conexao.prepareStatement(sql);
            rset = stm.executeQuery();

            while(rset.next()) {
                Fornecedor fornecedor1 = new Fornecedor();


                fornecedor1.setId_Fornecedor(rset.getInt("id_fornecedor"));
                fornecedor1.setNomeFornecedor(rset.getString("nomeforn"));
                fornecedor1.setTelefone(rset.getString("telefoneforn"));
                fornecedor1.setEndereco(rset.getString("endereco"));
                fornecedor1.setTipoProduto(rset.getString("produtovendidos"));

               fornecedor.add(fornecedor1);
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
        return fornecedor;
    }

    @Override
    public boolean save(Fornecedor fornecedor) {
        String sql = "insert into fornecedor( nomeforn, telefoneforn, endereco, produtovendidos) values( ?, ?, ?, ?)";
        Connection conexao = null;
        PreparedStatement stm = null;

        try {
            conexao = new Conexao().getConnection();
            stm = conexao.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);

            stm.setInt(1, 1 );

            stm.setString(1, fornecedor.getNomeFornecedor());
            stm.setString(2, fornecedor.getTelefone());
            stm.setString(3, fornecedor.getEndereco());
            stm.setString(4, fornecedor.getTipoProduto());

            stm.executeUpdate();

            ResultSet rs = stm.getGeneratedKeys();
            rs.next();
            int retornaId = rs.getInt(1);
            fornecedor.setId_Fornecedor(retornaId);
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
    public boolean update(Fornecedor fornecedor) {
        String sql = "UPDATE fornecedor set nomeforn = ?, telefoneforn = ?, endereco = ?, produtovendidos = ? where id_fornecedor = ?";
        PreparedStatement stm = null;
        Connection conexao = null;

        try {
            conexao = new Conexao().getConnection();
            stm = conexao.prepareStatement(sql);
            stm.setString(1, fornecedor.getNomeFornecedor());
            stm.setString(2, fornecedor.getTelefone());
            stm.setString(3, fornecedor.getEndereco());
            stm.setString(4, fornecedor.getTipoProduto());
            stm.setInt(5, fornecedor.getId_Fornecedor());

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
    public boolean delete(Fornecedor fornecedor) {
        String sql = "DELETE FROM fornecedor where id_fornecedor = ?";
        Connection conexao = null;
        PreparedStatement stm = null;

        try {
            conexao = new Conexao().getConnection();
            stm = conexao.prepareStatement(sql);
            stm.setInt(1, fornecedor. getId_Fornecedor());
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
