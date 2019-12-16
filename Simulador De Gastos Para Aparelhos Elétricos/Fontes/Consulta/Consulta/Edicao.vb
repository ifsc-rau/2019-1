Public Class frmEdicao
    Private Sub txtNDSerie_Leave(sender As Object, e As EventArgs) Handles txtNDSerie.Leave
        If (txtNDSerie.Text <> "") Then
            If IsNumeric(Me.txtNDSerie.Text) Then
                btnAtualizar.Enabled = true
                btnExcluir.Enabled = True
                Dim conexao As New SqlClient.SqlConnection("Server=FELPPS\SQLEXPRESS;dataBase=master;Uid=sa;Password=123")
                conexao.Open()
                Dim strSQL As String = ""
                strSQL = "SELECT nSerie,Sala,Bloco,potencia,Dias,tempo,descricao FROM especificacoes Where nSerie=" & Me.txtNDSerie.Text
                Dim comando As New SqlClient.SqlCommand
                comando.Connection = conexao
                comando.CommandText = strSQL
                Dim dr As IDataReader = comando.ExecuteReader()
                Dim count As Integer = 0
                While dr.Read

                    Dim nSerie As String = dr("nSerie")
                    Dim Sala As String = dr("Sala")
                    Dim Bloco As String = dr("bloco")
                    Dim Potencia As String = dr("Potencia")
                    Dim Tempo As String = dr("Tempo")
                    Dim Dias As String = dr("Dias")
                    Dim descricao As String = dr("descricao")

                    txtNDSerie.Text = nSerie
                    txtSala.Text = Sala
                    txtBloco.Text = Bloco
                    txtPotencia.Text = Potencia
                    txtTempo.Text = Tempo
                    txtDias.Text = Dias
                    txtDescricao.Text = descricao

                End While
                dr.Close()
                conexao.Close()
            End If
        End If
    End Sub

    Public Sub frmEdicao_Load(sender As Object, e As EventArgs) Handles MyBase.Load
        Me.dgvEdicao.Rows.Clear()
        Dim conexao As New SqlClient.SqlConnection("Server=FELPPS\SQLEXPRESS;dataBase=master;Uid=sa;Password=123")
        conexao.Open()
        Dim strSQL As String = ""
        strSQL = "SELECT nSerie,bloco,sala,descricao From especificacoes ORDER BY ID"
        Dim seleciona As New SqlClient.SqlCommand
        seleciona.Connection = conexao
        seleciona.CommandText = strSQL
        Dim dr As IDataReader = seleciona.ExecuteReader
        While dr.Read

            Dim descricao As String = dr("descricao")
            Dim nSerie As Integer = dr("nSerie")
            Dim bloco As String = dr("bloco")
            Dim sala As String = dr("sala")

            Dim count As Integer = Me.dgvEdicao.Rows.Add()

            Me.dgvEdicao.Item("descricao", count).Value = descricao
            Me.dgvEdicao.Item("nSerie", count).Value = nSerie
            Me.dgvEdicao.Item("bloco", count).Value = bloco
            Me.dgvEdicao.Item("sala", count).Value = sala

        End While
        dr.Close()
        conexao.Close()
    End Sub

    Sub Limpacampos()
        txtNDSerie.Text = ""
        txtBloco.Text = ""
        txtSala.Text = ""
        txtPotencia.Text = ""
        txtTempo.Text = ""
        txtDias.Text = ""
        txtDescricao.Text = ""
    End Sub

    Private Sub btnLimpar_Click(sender As Object, e As EventArgs) Handles btnLimpar.Click
        Me.Limpacampos()
    End Sub

    Private Sub btnSair_Click(sender As Object, e As EventArgs) Handles btnSair.Click
        frmConsulta.Show()
        Me.Close()
    End Sub

    Private Sub btnAtualizar_Click(sender As Object, e As EventArgs) Handles btnAtualizar.Click
        Dim conexao As New SqlClient.SqlConnection("Server=FELPPS\SQLEXPRESS;dataBase=master;Uid=sa;Password=123")
        Dim strSQL As String = ""
        Dim existe As Boolean = False
        conexao.Open()
        If Me.txtNDSerie.Text <> "" Then
            strSQL = "SELECT ID FROM especificacoes Where nSerie=" & Me.txtNDSerie.Text
            Dim comandoVerifica As New SqlClient.SqlCommand
            comandoVerifica.Connection = conexao
            comandoVerifica.CommandText = strSQL
            Dim dr As IDataReader = comandoVerifica.ExecuteReader
            If dr.Read Then
                existe = True
            End If
            dr.Close()
            If existe Then
                strSQL = "UPDATE especificacoes SET nSerie='" & Me.txtNDSerie.Text & "', Bloco='" & Me.txtBloco.Text & "', Sala='" & Me.txtSala.Text & "', Potencia='" & Me.txtPotencia.Text & "', Tempo='" & Me.txtTempo.Text & "', descricao ='" & Me.txtDescricao.Text & "' WHERE nSerie= " & Me.txtNDSerie.Text
                Dim comandoUpdate As New SqlClient.SqlCommand
                comandoUpdate.Connection = conexao
                comandoUpdate.CommandText = strSQL
                comandoUpdate.ExecuteNonQuery()
                MessageBox.Show("A Tabela foi atualizada com Sucesso!!", "ATUALIZAÇÃO BEM SUCEDIDA!!!", MessageBoxButtons.OK)
                Limpacampos()
                Me.Close()
                Me.dgvEdicao.Rows.Clear()
                frmConsulta.Show()
            End If

        End If
    End Sub

    Private Sub dgvEdicao_CellDoubleClick(sender As Object, e As DataGridViewCellEventArgs) Handles dgvEdicao.CellDoubleClick
        Limpacampos()
        If MsgBox("Deseja mesmo Editar esse Item?", MsgBoxStyle.YesNo, "Questionamento!") = Windows.Forms.DialogResult.Yes Then
            Dim doubleID As Integer = Me.dgvEdicao.Item("nSerie", e.RowIndex).Value
            If doubleID > 0 Then
                Me.txtNDSerie.Text = doubleID
                Me.frmEdicao_Load(sender, e)
                Me.txtNDSerie.Select()
            End If
        End If
    End Sub

    Private Sub btnExcluir_Click(sender As Object, e As EventArgs) Handles btnExcluir.Click
        If txtNDSerie.Text <> "" And txtBloco.Text <> "" And txtSala.Text <> "" And txtPotencia.Text <> "" And txtTempo.Text <> "" And txtDias.Text <> "" And txtDescricao.Text <> "" Then
            Dim conexao As New SqlClient.SqlConnection("Server=FELPPS\SQLEXPRESS;dataBase=master;Uid=sa;Password=123")
            Dim strSQL As String = ""
            Dim existe As Boolean = False
            conexao.Open()
            strSQL = "SELECT ID FROM especificacoes Where nSerie=" & Me.txtNDSerie.Text
            Dim comandoVerifica As New SqlClient.SqlCommand
            comandoVerifica.Connection = conexao
            comandoVerifica.CommandText = strSQL
            Dim dr As IDataReader = comandoVerifica.ExecuteReader
            If dr.Read Then
                existe = True
            End If
            dr.Close()
            If existe Then
                strSQL = "DELETE FROM especificacoes WHERE nSerie='" & Me.txtNDSerie.Text & "'"
                Dim comandoDelete As New SqlClient.SqlCommand
                comandoDelete.Connection = conexao
                comandoDelete.CommandText = strSQL
                comandoDelete.ExecuteNonQuery()
                MessageBox.Show("O item Foi Excluido da Tabela", "EXCLUSÃO BEM SUCEDIDA!!!", MessageBoxButtons.OK)
                Limpacampos()
                Me.Close()
                Me.dgvEdicao.Rows.Clear()
                frmConsulta.Show()
            End If
        End If
    End Sub

    Private Sub txtNDSerie_Enter(sender As Object, e As EventArgs) Handles txtNDSerie.Enter
        If IsNumeric(Me.txtNDSerie.Text) Then
            btnAtualizar.Enabled = True
            btnExcluir.Enabled = True
            Dim conexao As New SqlClient.SqlConnection("Server=FELPPS\SQLEXPRESS;dataBase=master;Uid=sa;Password=123")
            conexao.Open()
            Dim strSQL As String = ""
            strSQL = "SELECT nSerie,Sala,Bloco,potencia,Dias,tempo,descricao FROM especificacoes Where nSerie=" & Me.txtNDSerie.Text
            Dim comando As New SqlClient.SqlCommand
            comando.Connection = conexao
            comando.CommandText = strSQL
            Dim dr As IDataReader = comando.ExecuteReader()
            Dim count As Integer = 0
            While dr.Read

                Dim nSerie As String = dr("nSerie")
                Dim Sala As String = dr("Sala")
                Dim Bloco As String = dr("bloco")
                Dim Potencia As String = dr("Potencia")
                Dim Tempo As String = dr("Tempo")
                Dim Dias As String = dr("Dias")
                Dim descricao As String = dr("descricao")

                txtNDSerie.Text = nSerie
                txtSala.Text = Sala
                txtBloco.Text = Bloco
                txtPotencia.Text = Potencia
                txtTempo.Text = Tempo
                txtDias.Text = Dias
                txtDescricao.Text = descricao

            End While
            dr.Close()
            conexao.Close()
        End If

    End Sub
End Class