Public Class frmCadastro
    Public Sub Cadastro_Load(sender As Object, e As EventArgs) Handles MyBase.Load
        Me.txtNDSerie.Select()
        Me.dgvCadastro.Rows.Clear()
        Dim conexao As New SqlClient.SqlConnection("Server=FELPPS\SQLEXPRESS;dataBase=master;Uid=sa;Password=123")
        conexao.Open()
        Dim strSQL As String = ""
        strSQL = "SELECT nSerie,bloco,sala From especificacoes ORDER BY sala, bloco"
        Dim seleciona As New SqlClient.SqlCommand
        seleciona.Connection = conexao
        seleciona.CommandText = strSQL
        Dim dr As IDataReader = seleciona.ExecuteReader
        While dr.Read

            Dim nSerie As Integer = dr("nSerie")
            Dim bloco As String = dr("bloco")
            Dim sala As String = dr("sala")

            Dim count As Integer = Me.dgvCadastro.Rows.Add()

            Me.dgvCadastro.Item("nSerie", count).Value = nSerie
            Me.dgvCadastro.Item("bloco", count).Value = bloco
            Me.dgvCadastro.Item("sala", count).Value = sala

        End While
        dr.Close()
        conexao.Close()
        Limpacampos()

        conexao.Open()
        strSQL = "SELECT MAX(ID) FROM especificacoes"
        Dim comandoSel As New SqlClient.SqlCommand
        comandoSel.Connection = conexao
        comandoSel.CommandText = strSQL
        comandoSel.ExecuteReader()
        conexao.Close()

        Me.txtNDSerie.Select()

    End Sub

    Public Sub btnCadastro_Click(sender As Object, e As EventArgs) Handles btnCadastro.Click
        If IsNumeric(Me.txtNDSerie.Text) Then
            If IsNumeric(Me.txtPotencia.Text) Then
                If IsNumeric(Me.txtTempo.Text) Then
                    If IsNumeric(Me.txtDias.Text) Then
                        If txtBloco.Text = "" Or txtNDSerie.Text = "" Or txtSala.Text = "" Or txtDias.Text = "" Or txtPotencia.Text = "" Or txtTempo.Text = "" Then
                            MessageBox.Show("Preencha os campos Corretamente!!", "ERRO!!", MessageBoxButtons.OK)
                            Limpacampos()
                        Else
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
                            End If
                            If existe = False Then
                                strSQL = "SELECT MAX(ID) AS ID FROM especificacoes "
                                Dim comandomax As New SqlClient.SqlCommand
                                comandomax.Connection = conexao
                                comandomax.CommandText = strSQL
                                Dim drMax As IDataReader = comandomax.ExecuteReader
                                Dim proximoID As Integer = 0
                                If drMax.Read() Then
                                    proximoID = CInt(drMax("ID")) + 1
                                Else
                                    proximoID = 1
                                End If
                                drMax.Close()
                                strSQL = "INSERT INTO especificacoes VALUES (" & proximoID & ",'" & Me.txtNDSerie.Text & "','" & Me.txtDescricao.Text & "','" & Me.txtBloco.Text & "', " & Me.txtSala.Text & "," & Me.txtPotencia.Text & " ," & Me.txtTempo.Text & "," & Me.txtDias.Text & ")"
                                Dim comandoInsert As New SqlClient.SqlCommand
                                comandoInsert.Connection = conexao
                                comandoInsert.CommandText = strSQL
                                comandoInsert.ExecuteNonQuery()
                                MessageBox.Show("Os dados Foram Inseridos no Banco!!!", "CADASTRO BEM SUCEDIDO!!!!!", MessageBoxButtons.OK)
                                Limpacampos()
                                conexao.Close()
                                Me.Close()
                                Me.dgvCadastro.Rows.Clear()
                                frmConsulta.Show()
                            End If
                            conexao.Close()
                        End If
                    Else
                        MsgBox("Campo Dias Ligado Não Foi corretamente Preenchido", MessageBoxIcon.Error, "ERRO De Cadastro!!")
                    End If
            Else
                    MsgBox("Campo Tempo Ligado Não Foi corretamente Preenchido", MessageBoxIcon.Error, "ERRO De Cadastro!!")
                End If
        Else
                MsgBox("Campo Potência Não Foi corretamente Preenchido", MessageBoxIcon.Error, "ERRO De Cadastro!!")
            End If
        Else
            MsgBox("Campo Numero de série Não Foi corretamente Preenchido", MessageBoxIcon.Error, "ERRO De Cadastro!!")
        End If


    End Sub
    Sub Limpacampos()
        txtNDSerie.Text = ""
        txtBloco.Text = ""
        txtSala.Text = ""
        txtPotencia.Text = ""
        txtTempo.Text = ""
        txtDias.Text = ""
    End Sub

    Private Sub btnSair_Click(sender As Object, e As EventArgs) Handles btnSair.Click
        frmConsulta.Show()
        Me.Close()

    End Sub

    Private Sub txtNDSerie_Leave(sender As Object, e As EventArgs) Handles txtNDSerie.Leave

    End Sub

    Private Sub dgvCadastro_CellContentClick(sender As Object, e As DataGridViewCellEventArgs) Handles dgvCadastro.CellContentClick

    End Sub

    Private Sub dgvCadastro_CellContentDoubleClick(sender As Object, e As DataGridViewCellEventArgs) Handles dgvCadastro.CellContentDoubleClick
        Dim doubleID As Integer = Me.dgvCadastro.Item("nSerie", e.RowIndex).Value
        If doubleID > 0 Then
            Me.txtNDSerie.Text = doubleID
            Me.Cadastro_Load(sender, e)
        End If
    End Sub

    Private Sub btnLimpar_Click(sender As Object, e As EventArgs) Handles btnLimpar.Click
        Limpacampos()

    End Sub
End Class