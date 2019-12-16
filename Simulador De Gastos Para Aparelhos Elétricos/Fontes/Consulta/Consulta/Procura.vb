Public Class frmBuscar
    Private Sub frmBuscar_Load(sender As Object, e As EventArgs) Handles MyBase.Load
        Me.txtProcura.Select()
        Dim conexao As New SqlClient.SqlConnection("Server=FELPPS\SQLEXPRESS;dataBase=master;Uid=sa;Password=123")
        conexao.Open()
        Dim strSQL As String = ""
        strSQL = "SELECT nSerie, sala, descricao FROM especificacoes WHERE nSerie LIKE '%" & Me.txtProcura.Text & "%' OR sala LIKE '%" & Me.txtProcura.Text & "%' OR descricao LIKE '%" & Me.txtProcura.Text & "%' ORDER BY ID"
        Dim comSeleciona As New SqlClient.SqlCommand
        comSeleciona.Connection = conexao
        comSeleciona.CommandText = strSQL
        Dim dr As IDataReader = comSeleciona.ExecuteReader
        While dr.Read


            Dim descricao As String = dr("descricao")
            Dim nSerie As Integer = dr("nSerie")
            Dim sala As String = dr("sala")

            Dim count As Integer = Me.dgvSelecao.Rows.Add()


            Me.dgvSelecao.Item("nSerie", count).Value = nSerie
            Me.dgvSelecao.Item("sala", count).Value = sala
            Me.dgvSelecao.Item("descricao", count).Value = descricao

        End While
        conexao.Close()
        dr.Close()
    End Sub

    Private Sub Sair_Click(sender As Object, e As EventArgs) Handles Sair.Click
        frmGastos.Show()
        Me.Hide()
    End Sub

    Private Sub btnProcurar_Click(sender As Object, e As EventArgs) Handles btnProcurar.Click
        Me.dgvSelecao.Rows.Clear()
        Dim conexao As New SqlClient.SqlConnection("Server=FELPPS\SQLEXPRESS;dataBase=master;Uid=sa;Password=123")
        conexao.Open()
        Dim strSQL As String = ""
        strSQL = "SELECT nSerie,descricao,Sala From especificacoes WHERE nSerie Like '%" & Me.txtProcura.Text & "%' OR sala LIKE '%" & Me.txtProcura.Text & "%' OR descricao LIKE '%" & Me.txtProcura.Text & "%' ORDER BY ID"
        Dim seleciona As New SqlClient.SqlCommand
        seleciona.Connection = conexao
        seleciona.CommandText = strSQL
        Dim dr As IDataReader = seleciona.ExecuteReader
        While dr.Read

            Dim nSerie As Integer = dr("nSerie")
            Dim descricao As String = dr("descricao")
            Dim sala As String = dr("sala")

            Dim count As Integer = Me.dgvSelecao.Rows.Add()

            Me.dgvSelecao.Item("nSerie", count).Value = nSerie
            Me.dgvSelecao.Item("descricao", count).Value = descricao
            Me.dgvSelecao.Item("sala", count).Value = sala

        End While
        dr.Close()
        conexao.Close()
        Limpacampos()
    End Sub

    Sub Limpacampos()
        Me.txtProcura.Text = ""
    End Sub

    Private Sub dgvSelecao_CellDoubleClick(sender As Object, e As DataGridViewCellEventArgs) Handles dgvSelecao.CellDoubleClick
        If MsgBox("Deseja mesmo selecionar esse aparelho?", MsgBoxStyle.YesNo, "Questionamento!") = Windows.Forms.DialogResult.Yes Then
            Dim doubleID As Integer = Me.dgvSelecao.Item("nSerie", e.RowIndex).Value
            If doubleID > 0 Then
                frmGastos.txtNDSerie.Text = doubleID
                frmGastos.frmGastos_Load(sender, e)
                frmGastos.Show()
                Me.Hide()
            End If
        End If
    End Sub
End Class