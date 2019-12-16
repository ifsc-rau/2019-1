<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class frmCadastro
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
        Dim resources As System.ComponentModel.ComponentResourceManager = New System.ComponentModel.ComponentResourceManager(GetType(frmCadastro))
        Me.txtNDSerie = New System.Windows.Forms.TextBox()
        Me.txtBloco = New System.Windows.Forms.TextBox()
        Me.txtTempo = New System.Windows.Forms.TextBox()
        Me.txtSala = New System.Windows.Forms.TextBox()
        Me.txtPotencia = New System.Windows.Forms.TextBox()
        Me.txtDias = New System.Windows.Forms.TextBox()
        Me.lblndeSerie = New System.Windows.Forms.Label()
        Me.Label1 = New System.Windows.Forms.Label()
        Me.Label2 = New System.Windows.Forms.Label()
        Me.Label3 = New System.Windows.Forms.Label()
        Me.Label4 = New System.Windows.Forms.Label()
        Me.Label5 = New System.Windows.Forms.Label()
        Me.btnCadastro = New System.Windows.Forms.Button()
        Me.btnLimpar = New System.Windows.Forms.Button()
        Me.btnSair = New System.Windows.Forms.Button()
        Me.dgvCadastro = New System.Windows.Forms.DataGridView()
        Me.nSerie = New System.Windows.Forms.DataGridViewTextBoxColumn()
        Me.bloco = New System.Windows.Forms.DataGridViewTextBoxColumn()
        Me.sala = New System.Windows.Forms.DataGridViewTextBoxColumn()
        Me.lblXingamento = New System.Windows.Forms.Label()
        Me.Label6 = New System.Windows.Forms.Label()
        Me.txtDescricao = New System.Windows.Forms.TextBox()
        CType(Me.dgvCadastro, System.ComponentModel.ISupportInitialize).BeginInit()
        Me.SuspendLayout()
        '
        'txtNDSerie
        '
        Me.txtNDSerie.Location = New System.Drawing.Point(115, 12)
        Me.txtNDSerie.Name = "txtNDSerie"
        Me.txtNDSerie.Size = New System.Drawing.Size(100, 20)
        Me.txtNDSerie.TabIndex = 0
        '
        'txtBloco
        '
        Me.txtBloco.Location = New System.Drawing.Point(115, 48)
        Me.txtBloco.Name = "txtBloco"
        Me.txtBloco.Size = New System.Drawing.Size(100, 20)
        Me.txtBloco.TabIndex = 1
        '
        'txtTempo
        '
        Me.txtTempo.Location = New System.Drawing.Point(115, 160)
        Me.txtTempo.Name = "txtTempo"
        Me.txtTempo.Size = New System.Drawing.Size(100, 20)
        Me.txtTempo.TabIndex = 4
        '
        'txtSala
        '
        Me.txtSala.Location = New System.Drawing.Point(115, 83)
        Me.txtSala.Name = "txtSala"
        Me.txtSala.Size = New System.Drawing.Size(100, 20)
        Me.txtSala.TabIndex = 2
        '
        'txtPotencia
        '
        Me.txtPotencia.Location = New System.Drawing.Point(115, 122)
        Me.txtPotencia.Name = "txtPotencia"
        Me.txtPotencia.Size = New System.Drawing.Size(100, 20)
        Me.txtPotencia.TabIndex = 3
        '
        'txtDias
        '
        Me.txtDias.Location = New System.Drawing.Point(115, 202)
        Me.txtDias.Name = "txtDias"
        Me.txtDias.Size = New System.Drawing.Size(100, 20)
        Me.txtDias.TabIndex = 5
        '
        'lblndeSerie
        '
        Me.lblndeSerie.AutoSize = True
        Me.lblndeSerie.Location = New System.Drawing.Point(12, 15)
        Me.lblndeSerie.Name = "lblndeSerie"
        Me.lblndeSerie.Size = New System.Drawing.Size(59, 13)
        Me.lblndeSerie.TabIndex = 12
        Me.lblndeSerie.Text = "N° de serie"
        '
        'Label1
        '
        Me.Label1.AutoSize = True
        Me.Label1.Location = New System.Drawing.Point(12, 51)
        Me.Label1.Name = "Label1"
        Me.Label1.Size = New System.Drawing.Size(34, 13)
        Me.Label1.TabIndex = 13
        Me.Label1.Text = "Bloco"
        '
        'Label2
        '
        Me.Label2.AutoSize = True
        Me.Label2.Location = New System.Drawing.Point(12, 86)
        Me.Label2.Name = "Label2"
        Me.Label2.Size = New System.Drawing.Size(28, 13)
        Me.Label2.TabIndex = 14
        Me.Label2.Text = "Sala"
        '
        'Label3
        '
        Me.Label3.AutoSize = True
        Me.Label3.Location = New System.Drawing.Point(12, 125)
        Me.Label3.Name = "Label3"
        Me.Label3.Size = New System.Drawing.Size(78, 13)
        Me.Label3.TabIndex = 15
        Me.Label3.Text = "Potência(kWh)"
        '
        'Label4
        '
        Me.Label4.AutoSize = True
        Me.Label4.Location = New System.Drawing.Point(12, 163)
        Me.Label4.Name = "Label4"
        Me.Label4.Size = New System.Drawing.Size(97, 13)
        Me.Label4.TabIndex = 16
        Me.Label4.Text = "Tempo Ligado(Hrs)"
        '
        'Label5
        '
        Me.Label5.AutoSize = True
        Me.Label5.Location = New System.Drawing.Point(12, 205)
        Me.Label5.Name = "Label5"
        Me.Label5.Size = New System.Drawing.Size(63, 13)
        Me.Label5.TabIndex = 17
        Me.Label5.Text = "Dias Ligado"
        '
        'btnCadastro
        '
        Me.btnCadastro.Location = New System.Drawing.Point(297, 308)
        Me.btnCadastro.Name = "btnCadastro"
        Me.btnCadastro.Size = New System.Drawing.Size(93, 39)
        Me.btnCadastro.TabIndex = 7
        Me.btnCadastro.Text = "Cadastrar"
        Me.btnCadastro.UseVisualStyleBackColor = True
        '
        'btnLimpar
        '
        Me.btnLimpar.Location = New System.Drawing.Point(396, 308)
        Me.btnLimpar.Name = "btnLimpar"
        Me.btnLimpar.Size = New System.Drawing.Size(93, 39)
        Me.btnLimpar.TabIndex = 8
        Me.btnLimpar.Text = "Limpar Informações"
        Me.btnLimpar.UseVisualStyleBackColor = True
        '
        'btnSair
        '
        Me.btnSair.Location = New System.Drawing.Point(495, 308)
        Me.btnSair.Name = "btnSair"
        Me.btnSair.Size = New System.Drawing.Size(93, 39)
        Me.btnSair.TabIndex = 9
        Me.btnSair.Text = "Voltar a tela de Consulta"
        Me.btnSair.UseVisualStyleBackColor = True
        '
        'dgvCadastro
        '
        Me.dgvCadastro.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize
        Me.dgvCadastro.Columns.AddRange(New System.Windows.Forms.DataGridViewColumn() {Me.nSerie, Me.bloco, Me.sala})
        Me.dgvCadastro.Location = New System.Drawing.Point(244, 37)
        Me.dgvCadastro.Name = "dgvCadastro"
        Me.dgvCadastro.ReadOnly = True
        Me.dgvCadastro.Size = New System.Drawing.Size(344, 252)
        Me.dgvCadastro.TabIndex = 10
        '
        'nSerie
        '
        Me.nSerie.HeaderText = "N° de serie"
        Me.nSerie.Name = "nSerie"
        Me.nSerie.ReadOnly = True
        '
        'bloco
        '
        Me.bloco.HeaderText = "Bloco"
        Me.bloco.Name = "bloco"
        Me.bloco.ReadOnly = True
        '
        'sala
        '
        Me.sala.HeaderText = "Sala"
        Me.sala.Name = "sala"
        Me.sala.ReadOnly = True
        '
        'lblXingamento
        '
        Me.lblXingamento.AutoSize = True
        Me.lblXingamento.Location = New System.Drawing.Point(217, 9)
        Me.lblXingamento.Name = "lblXingamento"
        Me.lblXingamento.Size = New System.Drawing.Size(114, 13)
        Me.lblXingamento.TabIndex = 11
        Me.lblXingamento.Text = "TELA DE CADASTRO"
        '
        'Label6
        '
        Me.Label6.AutoSize = True
        Me.Label6.Location = New System.Drawing.Point(12, 248)
        Me.Label6.Name = "Label6"
        Me.Label6.Size = New System.Drawing.Size(55, 13)
        Me.Label6.TabIndex = 18
        Me.Label6.Text = "Descrição"
        '
        'txtDescricao
        '
        Me.txtDescricao.AccessibleName = "txtDescricao"
        Me.txtDescricao.Location = New System.Drawing.Point(115, 245)
        Me.txtDescricao.Name = "txtDescricao"
        Me.txtDescricao.Size = New System.Drawing.Size(100, 20)
        Me.txtDescricao.TabIndex = 6
        '
        'frmCadastro
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.ClientSize = New System.Drawing.Size(598, 357)
        Me.Controls.Add(Me.Label6)
        Me.Controls.Add(Me.txtDescricao)
        Me.Controls.Add(Me.lblXingamento)
        Me.Controls.Add(Me.dgvCadastro)
        Me.Controls.Add(Me.btnSair)
        Me.Controls.Add(Me.btnLimpar)
        Me.Controls.Add(Me.btnCadastro)
        Me.Controls.Add(Me.Label5)
        Me.Controls.Add(Me.Label4)
        Me.Controls.Add(Me.Label3)
        Me.Controls.Add(Me.Label2)
        Me.Controls.Add(Me.Label1)
        Me.Controls.Add(Me.lblndeSerie)
        Me.Controls.Add(Me.txtDias)
        Me.Controls.Add(Me.txtPotencia)
        Me.Controls.Add(Me.txtSala)
        Me.Controls.Add(Me.txtTempo)
        Me.Controls.Add(Me.txtBloco)
        Me.Controls.Add(Me.txtNDSerie)
        Me.Icon = CType(resources.GetObject("$this.Icon"), System.Drawing.Icon)
        Me.Name = "frmCadastro"
        Me.Text = "Cadastro"
        CType(Me.dgvCadastro, System.ComponentModel.ISupportInitialize).EndInit()
        Me.ResumeLayout(False)
        Me.PerformLayout()

    End Sub

    Friend WithEvents txtNDSerie As TextBox
    Friend WithEvents txtBloco As TextBox
    Friend WithEvents txtTempo As TextBox
    Friend WithEvents txtSala As TextBox
    Friend WithEvents txtPotencia As TextBox
    Friend WithEvents txtDias As TextBox
    Friend WithEvents lblndeSerie As Label
    Friend WithEvents Label1 As Label
    Friend WithEvents Label2 As Label
    Friend WithEvents Label3 As Label
    Friend WithEvents Label4 As Label
    Friend WithEvents Label5 As Label
    Friend WithEvents btnCadastro As Button
    Friend WithEvents btnLimpar As Button
    Friend WithEvents btnSair As Button
    Friend WithEvents dgvCadastro As DataGridView
    Friend WithEvents lblXingamento As Label
    Friend WithEvents nSerie As DataGridViewTextBoxColumn
    Friend WithEvents bloco As DataGridViewTextBoxColumn
    Friend WithEvents sala As DataGridViewTextBoxColumn
    Friend WithEvents Label6 As Label
    Friend WithEvents txtDescricao As TextBox
End Class
