<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class frmEdicao
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
        Dim resources As System.ComponentModel.ComponentResourceManager = New System.ComponentModel.ComponentResourceManager(GetType(frmEdicao))
        Me.dgvEdicao = New System.Windows.Forms.DataGridView()
        Me.nSerie = New System.Windows.Forms.DataGridViewTextBoxColumn()
        Me.descricao = New System.Windows.Forms.DataGridViewTextBoxColumn()
        Me.bloco = New System.Windows.Forms.DataGridViewTextBoxColumn()
        Me.sala = New System.Windows.Forms.DataGridViewTextBoxColumn()
        Me.btnSair = New System.Windows.Forms.Button()
        Me.btnLimpar = New System.Windows.Forms.Button()
        Me.btnAtualizar = New System.Windows.Forms.Button()
        Me.Label5 = New System.Windows.Forms.Label()
        Me.Label4 = New System.Windows.Forms.Label()
        Me.Label3 = New System.Windows.Forms.Label()
        Me.Label2 = New System.Windows.Forms.Label()
        Me.Label1 = New System.Windows.Forms.Label()
        Me.lblndeSerie = New System.Windows.Forms.Label()
        Me.txtDias = New System.Windows.Forms.TextBox()
        Me.txtPotencia = New System.Windows.Forms.TextBox()
        Me.txtSala = New System.Windows.Forms.TextBox()
        Me.txtTempo = New System.Windows.Forms.TextBox()
        Me.txtBloco = New System.Windows.Forms.TextBox()
        Me.txtNDSerie = New System.Windows.Forms.TextBox()
        Me.Label6 = New System.Windows.Forms.Label()
        Me.Label7 = New System.Windows.Forms.Label()
        Me.txtDescricao = New System.Windows.Forms.TextBox()
        Me.btnExcluir = New System.Windows.Forms.Button()
        CType(Me.dgvEdicao, System.ComponentModel.ISupportInitialize).BeginInit()
        Me.SuspendLayout()
        '
        'dgvEdicao
        '
        Me.dgvEdicao.AllowUserToOrderColumns = True
        Me.dgvEdicao.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize
        Me.dgvEdicao.Columns.AddRange(New System.Windows.Forms.DataGridViewColumn() {Me.nSerie, Me.descricao, Me.bloco, Me.sala})
        Me.dgvEdicao.Location = New System.Drawing.Point(259, 33)
        Me.dgvEdicao.Name = "dgvEdicao"
        Me.dgvEdicao.ReadOnly = True
        Me.dgvEdicao.Size = New System.Drawing.Size(445, 316)
        Me.dgvEdicao.TabIndex = 10
        '
        'nSerie
        '
        Me.nSerie.HeaderText = "N° de serie"
        Me.nSerie.Name = "nSerie"
        Me.nSerie.ReadOnly = True
        '
        'descricao
        '
        Me.descricao.HeaderText = "Descrição do Aparelho"
        Me.descricao.Name = "descricao"
        Me.descricao.ReadOnly = True
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
        'btnSair
        '
        Me.btnSair.Location = New System.Drawing.Point(314, 355)
        Me.btnSair.Name = "btnSair"
        Me.btnSair.Size = New System.Drawing.Size(93, 39)
        Me.btnSair.TabIndex = 9
        Me.btnSair.Text = "Voltar a tela de Consulta"
        Me.btnSair.UseVisualStyleBackColor = True
        '
        'btnLimpar
        '
        Me.btnLimpar.Location = New System.Drawing.Point(413, 355)
        Me.btnLimpar.Name = "btnLimpar"
        Me.btnLimpar.Size = New System.Drawing.Size(93, 39)
        Me.btnLimpar.TabIndex = 8
        Me.btnLimpar.Text = "Limpar Informações"
        Me.btnLimpar.UseVisualStyleBackColor = True
        '
        'btnAtualizar
        '
        Me.btnAtualizar.Enabled = False
        Me.btnAtualizar.Location = New System.Drawing.Point(611, 355)
        Me.btnAtualizar.Name = "btnAtualizar"
        Me.btnAtualizar.Size = New System.Drawing.Size(93, 39)
        Me.btnAtualizar.TabIndex = 7
        Me.btnAtualizar.Text = "Atualizar Aparelho"
        Me.btnAtualizar.UseVisualStyleBackColor = True
        '
        'Label5
        '
        Me.Label5.AutoSize = True
        Me.Label5.Location = New System.Drawing.Point(13, 287)
        Me.Label5.Name = "Label5"
        Me.Label5.Size = New System.Drawing.Size(63, 13)
        Me.Label5.TabIndex = 17
        Me.Label5.Text = "Dias Ligado"
        '
        'Label4
        '
        Me.Label4.AutoSize = True
        Me.Label4.Location = New System.Drawing.Point(13, 237)
        Me.Label4.Name = "Label4"
        Me.Label4.Size = New System.Drawing.Size(97, 13)
        Me.Label4.TabIndex = 16
        Me.Label4.Text = "Tempo Ligado(Hrs)"
        '
        'Label3
        '
        Me.Label3.AutoSize = True
        Me.Label3.Location = New System.Drawing.Point(13, 187)
        Me.Label3.Name = "Label3"
        Me.Label3.Size = New System.Drawing.Size(78, 13)
        Me.Label3.TabIndex = 15
        Me.Label3.Text = "Potência(kWh)"
        '
        'Label2
        '
        Me.Label2.AutoSize = True
        Me.Label2.Location = New System.Drawing.Point(13, 137)
        Me.Label2.Name = "Label2"
        Me.Label2.Size = New System.Drawing.Size(28, 13)
        Me.Label2.TabIndex = 14
        Me.Label2.Text = "Sala"
        '
        'Label1
        '
        Me.Label1.AutoSize = True
        Me.Label1.Location = New System.Drawing.Point(13, 87)
        Me.Label1.Name = "Label1"
        Me.Label1.Size = New System.Drawing.Size(34, 13)
        Me.Label1.TabIndex = 13
        Me.Label1.Text = "Bloco"
        '
        'lblndeSerie
        '
        Me.lblndeSerie.AutoSize = True
        Me.lblndeSerie.Location = New System.Drawing.Point(13, 37)
        Me.lblndeSerie.Name = "lblndeSerie"
        Me.lblndeSerie.Size = New System.Drawing.Size(59, 13)
        Me.lblndeSerie.TabIndex = 12
        Me.lblndeSerie.Text = "N° de serie"
        '
        'txtDias
        '
        Me.txtDias.Location = New System.Drawing.Point(134, 284)
        Me.txtDias.Name = "txtDias"
        Me.txtDias.Size = New System.Drawing.Size(100, 20)
        Me.txtDias.TabIndex = 5
        '
        'txtPotencia
        '
        Me.txtPotencia.Location = New System.Drawing.Point(134, 184)
        Me.txtPotencia.Name = "txtPotencia"
        Me.txtPotencia.Size = New System.Drawing.Size(100, 20)
        Me.txtPotencia.TabIndex = 3
        '
        'txtSala
        '
        Me.txtSala.Location = New System.Drawing.Point(134, 134)
        Me.txtSala.Name = "txtSala"
        Me.txtSala.Size = New System.Drawing.Size(100, 20)
        Me.txtSala.TabIndex = 2
        '
        'txtTempo
        '
        Me.txtTempo.Location = New System.Drawing.Point(134, 234)
        Me.txtTempo.Name = "txtTempo"
        Me.txtTempo.Size = New System.Drawing.Size(100, 20)
        Me.txtTempo.TabIndex = 4
        '
        'txtBloco
        '
        Me.txtBloco.Location = New System.Drawing.Point(134, 84)
        Me.txtBloco.Name = "txtBloco"
        Me.txtBloco.Size = New System.Drawing.Size(100, 20)
        Me.txtBloco.TabIndex = 1
        '
        'txtNDSerie
        '
        Me.txtNDSerie.Location = New System.Drawing.Point(134, 34)
        Me.txtNDSerie.Name = "txtNDSerie"
        Me.txtNDSerie.Size = New System.Drawing.Size(100, 20)
        Me.txtNDSerie.TabIndex = 0
        '
        'Label6
        '
        Me.Label6.AutoSize = True
        Me.Label6.Location = New System.Drawing.Point(256, 9)
        Me.Label6.Name = "Label6"
        Me.Label6.Size = New System.Drawing.Size(95, 13)
        Me.Label6.TabIndex = 11
        Me.Label6.Text = "TELA DE EDIÇÃO"
        '
        'Label7
        '
        Me.Label7.AutoSize = True
        Me.Label7.Location = New System.Drawing.Point(13, 332)
        Me.Label7.Name = "Label7"
        Me.Label7.Size = New System.Drawing.Size(115, 13)
        Me.Label7.TabIndex = 18
        Me.Label7.Text = "Descrição do Aparelho"
        '
        'txtDescricao
        '
        Me.txtDescricao.Location = New System.Drawing.Point(134, 329)
        Me.txtDescricao.Name = "txtDescricao"
        Me.txtDescricao.Size = New System.Drawing.Size(100, 20)
        Me.txtDescricao.TabIndex = 6
        '
        'btnExcluir
        '
        Me.btnExcluir.Enabled = False
        Me.btnExcluir.Location = New System.Drawing.Point(512, 355)
        Me.btnExcluir.Name = "btnExcluir"
        Me.btnExcluir.Size = New System.Drawing.Size(93, 39)
        Me.btnExcluir.TabIndex = 19
        Me.btnExcluir.Text = "Excluir"
        Me.btnExcluir.UseVisualStyleBackColor = True
        '
        'frmEdicao
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.ClientSize = New System.Drawing.Size(720, 456)
        Me.Controls.Add(Me.btnExcluir)
        Me.Controls.Add(Me.Label7)
        Me.Controls.Add(Me.txtDescricao)
        Me.Controls.Add(Me.Label6)
        Me.Controls.Add(Me.dgvEdicao)
        Me.Controls.Add(Me.btnSair)
        Me.Controls.Add(Me.btnLimpar)
        Me.Controls.Add(Me.btnAtualizar)
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
        Me.Name = "frmEdicao"
        Me.Text = "Edição de Aparelho"
        CType(Me.dgvEdicao, System.ComponentModel.ISupportInitialize).EndInit()
        Me.ResumeLayout(False)
        Me.PerformLayout()

    End Sub

    Friend WithEvents dgvEdicao As DataGridView
    Friend WithEvents btnSair As Button
    Friend WithEvents btnLimpar As Button
    Friend WithEvents btnAtualizar As Button
    Friend WithEvents Label5 As Label
    Friend WithEvents Label4 As Label
    Friend WithEvents Label3 As Label
    Friend WithEvents Label2 As Label
    Friend WithEvents Label1 As Label
    Friend WithEvents lblndeSerie As Label
    Friend WithEvents txtDias As TextBox
    Friend WithEvents txtPotencia As TextBox
    Friend WithEvents txtSala As TextBox
    Friend WithEvents txtTempo As TextBox
    Friend WithEvents txtBloco As TextBox
    Friend WithEvents txtNDSerie As TextBox
    Friend WithEvents Label6 As Label
    Friend WithEvents nSerie As DataGridViewTextBoxColumn
    Friend WithEvents descricao As DataGridViewTextBoxColumn
    Friend WithEvents bloco As DataGridViewTextBoxColumn
    Friend WithEvents sala As DataGridViewTextBoxColumn
    Friend WithEvents Label7 As Label
    Friend WithEvents txtDescricao As TextBox
    Friend WithEvents btnExcluir As Button
End Class
