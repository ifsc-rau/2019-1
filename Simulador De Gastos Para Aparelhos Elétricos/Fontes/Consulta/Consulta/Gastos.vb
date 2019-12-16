Public Class frmGastos
    Private Sub btnBuscar_Click(sender As Object, e As EventArgs) Handles btnBuscar.Click
        frmBuscar.Show()
        Me.Hide()
        Limpacampos()
    End Sub
    Private Sub btnCalcular_Click(sender As Object, e As EventArgs) Handles btnCalcular.Click
        Dim SomaTotal As String
        If Me.txtTaxa.Text <> "" Then
            SomaTotal = txtPotencia.Text * txtHoras.Text * txtDias.Text / 1000
            SomaTotal = SomaTotal * Me.txtTaxa.Text
            MessageBox.Show(
"Relatório de Dispesa:

Número de Série: " & txtNDSerie.Text & "            
Aparelho: " & txtDescricao.Text & " 
Potência: " & txtPotencia.Text & "(kWh)
Horas Ligado: " & txtHoras.Text & "(Hrs)
Dias De Uso: " & txtDias.Text & "

Com a tarifa embutida os gastos são de aproximadamente: " & FormatCurrency(SomaTotal), "STONKS!!")
            Limpacampos()
        ElseIf Me.txtTaxa.Text = "" Then
            SomaTotal = txtPotencia.Text * txtHoras.Text * txtDias.Text / 1000
            MessageBox.Show(
"Relatório de Dispesa:

Número de Série: " & txtNDSerie.Text & "            
Aparelho: " & txtDescricao.Text & " 
Potência: " & txtPotencia.Text & "(kWh)
Horas Ligado: " & txtHoras.Text & "(Hrs)
Dias De Uso: " & txtDias.Text & "

Sem a tarifa embutida os gastos são de aproximadamente: " & FormatCurrency(SomaTotal), "STONKS!!")
            Limpacampos()
        End If
    End Sub

    Private Sub btnSair_Click(sender As Object, e As EventArgs) Handles btnSair.Click
        frmConsulta.Show()
        Limpacampos()
        Me.Close()

    End Sub
    Sub Limpacampos()
        txtDias.Text = ""
        txtHoras.Text = ""
        txtPotencia.Text = ""
        txtNDSerie.Text = ""
        txtDescricao.Text = ""
    End Sub

    Private Sub btnLimpar_Click(sender As Object, e As EventArgs) Handles btnLimpar.Click
        Limpacampos()
        txtTaxa.Text = ""
    End Sub

    Public Sub frmGastos_Load(sender As Object, e As EventArgs) Handles MyBase.Load
        Me.txtNDSerie.Select()
        If (txtNDSerie.Text <> "") Then
            If IsNumeric(Me.txtNDSerie.Text) Then
                Dim conexao As New SqlClient.SqlConnection("Server=FELPPS\SQLEXPRESS;dataBase=master;Uid=sa;Password=123")
                conexao.Open()
                Dim strSQL As String = ""
                strSQL = "SELECT nSerie,potencia,Dias,tempo,descricao FROM especificacoes Where nSerie=" & Me.txtNDSerie.Text
                Dim comando As New SqlClient.SqlCommand
                comando.Connection = conexao
                comando.CommandText = strSQL
                Dim dr As IDataReader = comando.ExecuteReader()
                Dim count As Integer = 0
                While dr.Read

                    Dim nSerie As String = dr("nSerie")
                    Dim Potencia As String = dr("Potencia")
                    Dim Tempo As String = dr("Tempo")
                    Dim Dias As String = dr("Dias")
                    Dim descricao As String = dr("descricao")

                    txtNDSerie.Text = nSerie
                    txtPotencia.Text = Potencia
                    txtHoras.Text = Tempo
                    txtDias.Text = Dias
                    txtDescricao.Text = descricao

                End While
                dr.Close()
                conexao.Close()
            End If
        End If
    End Sub
End Class
