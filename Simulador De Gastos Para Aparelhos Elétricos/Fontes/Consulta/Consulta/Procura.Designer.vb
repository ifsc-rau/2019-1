<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class frmBuscar
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
        Dim resources As System.ComponentModel.ComponentResourceManager = New System.ComponentModel.ComponentResourceManager(GetType(frmBuscar))
        Me.txtProcura = New System.Windows.Forms.TextBox()
        Me.dgvSelecao = New System.Windows.Forms.DataGridView()
        Me.nSerie = New System.Windows.Forms.DataGridViewTextBoxColumn()
        Me.sala = New System.Windows.Forms.DataGridViewTextBoxColumn()
        Me.descricao = New System.Windows.Forms.DataGridViewTextBoxColumn()
        Me.Label1 = New System.Windows.Forms.Label()
        Me.btnProcurar = New System.Windows.Forms.Button()
        Me.Sair = New System.Windows.Forms.Button()
        Me.Label2 = New System.Windows.Forms.Label()
        CType(Me.dgvSelecao, System.ComponentModel.ISupportInitialize).BeginInit()
        Me.SuspendLayout()
        '
        'txtProcura
        '
        Me.txtProcura.Location = New System.Drawing.Point(11, 60)
        Me.txtProcura.Name = "txtProcura"
        Me.txtProcura.Size = New System.Drawing.Size(242, 20)
        Me.txtProcura.TabIndex = 0
        '
        'dgvSelecao
        '
        Me.dgvSelecao.AllowUserToOrderColumns = True
        Me.dgvSelecao.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize
        Me.dgvSelecao.Columns.AddRange(New System.Windows.Forms.DataGridViewColumn() {Me.nSerie, Me.sala, Me.descricao})
        Me.dgvSelecao.Location = New System.Drawing.Point(11, 86)
        Me.dgvSelecao.Name = "dgvSelecao"
        Me.dgvSelecao.ReadOnly = True
        Me.dgvSelecao.Size = New System.Drawing.Size(350, 379)
        Me.dgvSelecao.TabIndex = 4
        '
        'nSerie
        '
        Me.nSerie.HeaderText = "N° de Série"
        Me.nSerie.Name = "nSerie"
        Me.nSerie.ReadOnly = True
        '
        'sala
        '
        Me.sala.HeaderText = "Sala(s)"
        Me.sala.Name = "sala"
        Me.sala.ReadOnly = True
        '
        'descricao
        '
        Me.descricao.HeaderText = "Descrição do Aparelho"
        Me.descricao.Name = "descricao"
        Me.descricao.ReadOnly = True
        '
        'Label1
        '
        Me.Label1.AutoSize = True
        Me.Label1.Location = New System.Drawing.Point(12, 44)
        Me.Label1.Name = "Label1"
        Me.Label1.Size = New System.Drawing.Size(215, 13)
        Me.Label1.TabIndex = 5
        Me.Label1.Text = "Filtro de Procura de Aparelhos para Seleção"
        '
        'btnProcurar
        '
        Me.btnProcurar.Location = New System.Drawing.Point(259, 59)
        Me.btnProcurar.Name = "btnProcurar"
        Me.btnProcurar.Size = New System.Drawing.Size(102, 20)
        Me.btnProcurar.TabIndex = 1
        Me.btnProcurar.Text = "Procurar"
        Me.btnProcurar.UseVisualStyleBackColor = True
        '
        'Sair
        '
        Me.Sair.Location = New System.Drawing.Point(286, 471)
        Me.Sair.Name = "Sair"
        Me.Sair.Size = New System.Drawing.Size(75, 20)
        Me.Sair.TabIndex = 3
        Me.Sair.Text = "Cancelar"
        Me.Sair.UseVisualStyleBackColor = True
        '
        'Label2
        '
        Me.Label2.AutoSize = True
        Me.Label2.Location = New System.Drawing.Point(110, 8)
        Me.Label2.Name = "Label2"
        Me.Label2.Size = New System.Drawing.Size(183, 13)
        Me.Label2.TabIndex = 6
        Me.Label2.Text = "TELA DE SELEÇAO DE APARELHO"
        '
        'frmBuscar
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.ClientSize = New System.Drawing.Size(373, 498)
        Me.Controls.Add(Me.Label2)
        Me.Controls.Add(Me.Sair)
        Me.Controls.Add(Me.btnProcurar)
        Me.Controls.Add(Me.Label1)
        Me.Controls.Add(Me.dgvSelecao)
        Me.Controls.Add(Me.txtProcura)
        Me.Icon = CType(resources.GetObject("$this.Icon"), System.Drawing.Icon)
        Me.Name = "frmBuscar"
        Me.Text = "Seleção de Aparelhos"
        CType(Me.dgvSelecao, System.ComponentModel.ISupportInitialize).EndInit()
        Me.ResumeLayout(False)
        Me.PerformLayout()

    End Sub

    Friend WithEvents txtProcura As TextBox
    Friend WithEvents dgvSelecao As DataGridView
    Friend WithEvents Label1 As Label
    Friend WithEvents btnProcurar As Button
    Friend WithEvents Sair As Button
    Friend WithEvents nSerie As DataGridViewTextBoxColumn
    Friend WithEvents sala As DataGridViewTextBoxColumn
    Friend WithEvents descricao As DataGridViewTextBoxColumn
    Friend WithEvents Label2 As Label
End Class
