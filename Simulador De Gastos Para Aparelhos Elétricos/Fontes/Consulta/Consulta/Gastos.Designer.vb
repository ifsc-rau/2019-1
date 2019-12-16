<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class frmGastos
    Inherits System.Windows.Forms.Form

    'Descartar substituições de formulário para limpar a lista de componentes.
    <System.Diagnostics.DebuggerNonUserCode()> _
    Protected Overrides Sub Dispose(ByVal disposing As Boolean)
        Try
            If disposing AndAlso components IsNot Nothing Then
                components.Dispose()
            End If
        Finally
            MyBase.Dispose(disposing)
        End Try
    End Sub

    'Exigido pelo Windows Form Designer
    Private components As System.ComponentModel.IContainer

    'OBSERVAÇÃO: o procedimento a seguir é exigido pelo Windows Form Designer
    'Pode ser modificado usando o Windows Form Designer.  
    'Não o modifique usando o editor de códigos.
    <System.Diagnostics.DebuggerStepThrough()> _
    Private Sub InitializeComponent()
        Dim resources As System.ComponentModel.ComponentResourceManager = New System.ComponentModel.ComponentResourceManager(GetType(frmGastos))
        Me.Label1 = New System.Windows.Forms.Label()
        Me.Label2 = New System.Windows.Forms.Label()
        Me.Label3 = New System.Windows.Forms.Label()
        Me.Label4 = New System.Windows.Forms.Label()
        Me.Label5 = New System.Windows.Forms.Label()
        Me.txtNDSerie = New System.Windows.Forms.TextBox()
        Me.txtTaxa = New System.Windows.Forms.TextBox()
        Me.txtPotencia = New System.Windows.Forms.TextBox()
        Me.txtDias = New System.Windows.Forms.TextBox()
        Me.txtHoras = New System.Windows.Forms.TextBox()
        Me.btnCalcular = New System.Windows.Forms.Button()
        Me.btnLimpar = New System.Windows.Forms.Button()
        Me.btnSair = New System.Windows.Forms.Button()
        Me.btnBuscar = New System.Windows.Forms.Button()
        Me.Label6 = New System.Windows.Forms.Label()
        Me.txtDescricao = New System.Windows.Forms.TextBox()
        Me.Label7 = New System.Windows.Forms.Label()
        Me.SuspendLayout()
        '
        'Label1
        '
        Me.Label1.AutoSize = True
        Me.Label1.Location = New System.Drawing.Point(7, 37)
        Me.Label1.Name = "Label1"
        Me.Label1.Size = New System.Drawing.Size(59, 13)
        Me.Label1.TabIndex = 11
        Me.Label1.Text = "N° de serie"
        '
        'Label2
        '
        Me.Label2.AutoSize = True
        Me.Label2.Location = New System.Drawing.Point(7, 61)
        Me.Label2.Name = "Label2"
        Me.Label2.Size = New System.Drawing.Size(85, 13)
        Me.Label2.TabIndex = 12
        Me.Label2.Text = "Taxa de Energia"
        '
        'Label3
        '
        Me.Label3.AutoSize = True
        Me.Label3.Location = New System.Drawing.Point(7, 87)
        Me.Label3.Name = "Label3"
        Me.Label3.Size = New System.Drawing.Size(78, 13)
        Me.Label3.TabIndex = 13
        Me.Label3.Text = "Potência(kWh)"
        '
        'Label4
        '
        Me.Label4.AutoSize = True
        Me.Label4.Location = New System.Drawing.Point(7, 111)
        Me.Label4.Name = "Label4"
        Me.Label4.Size = New System.Drawing.Size(63, 13)
        Me.Label4.TabIndex = 14
        Me.Label4.Text = "Dias Ligado"
        '
        'Label5
        '
        Me.Label5.AutoSize = True
        Me.Label5.Location = New System.Drawing.Point(7, 137)
        Me.Label5.Name = "Label5"
        Me.Label5.Size = New System.Drawing.Size(100, 13)
        Me.Label5.TabIndex = 15
        Me.Label5.Text = "Tempo Ligado(Hrs) "
        '
        'txtNDSerie
        '
        Me.txtNDSerie.Location = New System.Drawing.Point(113, 34)
        Me.txtNDSerie.Name = "txtNDSerie"
        Me.txtNDSerie.ReadOnly = True
        Me.txtNDSerie.Size = New System.Drawing.Size(100, 20)
        Me.txtNDSerie.TabIndex = 0
        '
        'txtTaxa
        '
        Me.txtTaxa.Location = New System.Drawing.Point(113, 58)
        Me.txtTaxa.Name = "txtTaxa"
        Me.txtTaxa.Size = New System.Drawing.Size(100, 20)
        Me.txtTaxa.TabIndex = 2
        '
        'txtPotencia
        '
        Me.txtPotencia.Location = New System.Drawing.Point(113, 84)
        Me.txtPotencia.Name = "txtPotencia"
        Me.txtPotencia.ReadOnly = True
        Me.txtPotencia.Size = New System.Drawing.Size(100, 20)
        Me.txtPotencia.TabIndex = 3
        '
        'txtDias
        '
        Me.txtDias.Location = New System.Drawing.Point(113, 108)
        Me.txtDias.Name = "txtDias"
        Me.txtDias.ReadOnly = True
        Me.txtDias.Size = New System.Drawing.Size(100, 20)
        Me.txtDias.TabIndex = 4
        '
        'txtHoras
        '
        Me.txtHoras.Location = New System.Drawing.Point(113, 134)
        Me.txtHoras.Name = "txtHoras"
        Me.txtHoras.ReadOnly = True
        Me.txtHoras.Size = New System.Drawing.Size(100, 20)
        Me.txtHoras.TabIndex = 5
        '
        'btnCalcular
        '
        Me.btnCalcular.Location = New System.Drawing.Point(97, 224)
        Me.btnCalcular.Name = "btnCalcular"
        Me.btnCalcular.Size = New System.Drawing.Size(75, 34)
        Me.btnCalcular.TabIndex = 7
        Me.btnCalcular.Text = "Calcular Tarifa"
        Me.btnCalcular.UseVisualStyleBackColor = True
        '
        'btnLimpar
        '
        Me.btnLimpar.Location = New System.Drawing.Point(178, 224)
        Me.btnLimpar.Name = "btnLimpar"
        Me.btnLimpar.Size = New System.Drawing.Size(75, 34)
        Me.btnLimpar.TabIndex = 8
        Me.btnLimpar.Text = "Limpar Campos"
        Me.btnLimpar.UseVisualStyleBackColor = True
        '
        'btnSair
        '
        Me.btnSair.Location = New System.Drawing.Point(259, 224)
        Me.btnSair.Name = "btnSair"
        Me.btnSair.Size = New System.Drawing.Size(75, 34)
        Me.btnSair.TabIndex = 9
        Me.btnSair.Text = "Voltar a tela de Cadastro"
        Me.btnSair.UseVisualStyleBackColor = True
        '
        'btnBuscar
        '
        Me.btnBuscar.Location = New System.Drawing.Point(219, 33)
        Me.btnBuscar.Name = "btnBuscar"
        Me.btnBuscar.Size = New System.Drawing.Size(101, 21)
        Me.btnBuscar.TabIndex = 1
        Me.btnBuscar.Text = "Buscar Aparelho"
        Me.btnBuscar.UseVisualStyleBackColor = True
        '
        'Label6
        '
        Me.Label6.AutoSize = True
        Me.Label6.Location = New System.Drawing.Point(79, 9)
        Me.Label6.Name = "Label6"
        Me.Label6.Size = New System.Drawing.Size(185, 13)
        Me.Label6.TabIndex = 10
        Me.Label6.Text = "TELA DE  SIMULAÇÃO DE GASTOS"
        '
        'txtDescricao
        '
        Me.txtDescricao.Location = New System.Drawing.Point(113, 160)
        Me.txtDescricao.Name = "txtDescricao"
        Me.txtDescricao.ReadOnly = True
        Me.txtDescricao.Size = New System.Drawing.Size(100, 20)
        Me.txtDescricao.TabIndex = 6
        '
        'Label7
        '
        Me.Label7.AutoSize = True
        Me.Label7.Location = New System.Drawing.Point(7, 163)
        Me.Label7.Name = "Label7"
        Me.Label7.Size = New System.Drawing.Size(55, 13)
        Me.Label7.TabIndex = 16
        Me.Label7.Text = "Descrição"
        '
        'frmGastos
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.ClientSize = New System.Drawing.Size(348, 270)
        Me.Controls.Add(Me.txtDescricao)
        Me.Controls.Add(Me.Label7)
        Me.Controls.Add(Me.Label6)
        Me.Controls.Add(Me.btnBuscar)
        Me.Controls.Add(Me.btnSair)
        Me.Controls.Add(Me.btnLimpar)
        Me.Controls.Add(Me.btnCalcular)
        Me.Controls.Add(Me.txtHoras)
        Me.Controls.Add(Me.txtDias)
        Me.Controls.Add(Me.txtPotencia)
        Me.Controls.Add(Me.txtTaxa)
        Me.Controls.Add(Me.txtNDSerie)
        Me.Controls.Add(Me.Label5)
        Me.Controls.Add(Me.Label4)
        Me.Controls.Add(Me.Label3)
        Me.Controls.Add(Me.Label2)
        Me.Controls.Add(Me.Label1)
        Me.Icon = CType(resources.GetObject("$this.Icon"), System.Drawing.Icon)
        Me.Name = "frmGastos"
        Me.Text = "Gastos"
        Me.ResumeLayout(False)
        Me.PerformLayout()

    End Sub

    Friend WithEvents Label1 As Label
    Friend WithEvents Label2 As Label
    Friend WithEvents Label3 As Label
    Friend WithEvents Label4 As Label
    Friend WithEvents Label5 As Label
    Friend WithEvents txtNDSerie As TextBox
    Friend WithEvents txtTaxa As TextBox
    Friend WithEvents txtPotencia As TextBox
    Friend WithEvents txtDias As TextBox
    Friend WithEvents txtHoras As TextBox
    Friend WithEvents btnCalcular As Button
    Friend WithEvents btnLimpar As Button
    Friend WithEvents btnSair As Button
    Friend WithEvents btnBuscar As Button
    Friend WithEvents Label6 As Label
    Friend WithEvents txtDescricao As TextBox
    Friend WithEvents Label7 As Label
End Class
