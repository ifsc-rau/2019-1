<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class frmConsulta
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
        Dim resources As System.ComponentModel.ComponentResourceManager = New System.ComponentModel.ComponentResourceManager(GetType(frmConsulta))
        Me.dgvSpec = New System.Windows.Forms.DataGridView()
        Me.btnConsulta = New System.Windows.Forms.Button()
        Me.lblNDSerie = New System.Windows.Forms.Label()
        Me.lblBloco = New System.Windows.Forms.Label()
        Me.lblSala = New System.Windows.Forms.Label()
        Me.MenuStrip1 = New System.Windows.Forms.MenuStrip()
        Me.CadastroToolStripMenuItem = New System.Windows.Forms.ToolStripMenuItem()
        Me.SairToolStripMenuItem = New System.Windows.Forms.ToolStripMenuItem()
        Me.txtNDSerie = New System.Windows.Forms.TextBox()
        Me.txtBloco = New System.Windows.Forms.TextBox()
        Me.txtSala = New System.Windows.Forms.TextBox()
        Me.ndSerie = New System.Windows.Forms.DataGridViewTextBoxColumn()
        Me.dgvBloco = New System.Windows.Forms.DataGridViewTextBoxColumn()
        Me.dtvSala = New System.Windows.Forms.DataGridViewTextBoxColumn()
        Me.dgvDias = New System.Windows.Forms.DataGridViewTextBoxColumn()
        Me.dgvTempo = New System.Windows.Forms.DataGridViewTextBoxColumn()
        Me.dgvPotencia = New System.Windows.Forms.DataGridViewTextBoxColumn()
        Me.txtDias = New System.Windows.Forms.TextBox()
        Me.lblDias = New System.Windows.Forms.Label()
        CType(Me.dgvSpec, System.ComponentModel.ISupportInitialize).BeginInit()
        Me.MenuStrip1.SuspendLayout()
        Me.SuspendLayout()
        '
        'dgvSpec
        '
        Me.dgvSpec.AllowUserToOrderColumns = True
        Me.dgvSpec.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize
        Me.dgvSpec.Columns.AddRange(New System.Windows.Forms.DataGridViewColumn() {Me.ndSerie, Me.dgvBloco, Me.dtvSala, Me.dgvDias, Me.dgvTempo, Me.dgvPotencia})
        Me.dgvSpec.Location = New System.Drawing.Point(12, 175)
        Me.dgvSpec.Name = "dgvSpec"
        Me.dgvSpec.Size = New System.Drawing.Size(776, 263)
        Me.dgvSpec.TabIndex = 0
        '
        'btnConsulta
        '
        Me.btnConsulta.Location = New System.Drawing.Point(636, 125)
        Me.btnConsulta.Name = "btnConsulta"
        Me.btnConsulta.Size = New System.Drawing.Size(152, 44)
        Me.btnConsulta.TabIndex = 1
        Me.btnConsulta.Text = "Consultar"
        Me.btnConsulta.UseVisualStyleBackColor = True
        '
        'lblNDSerie
        '
        Me.lblNDSerie.AutoSize = True
        Me.lblNDSerie.Location = New System.Drawing.Point(12, 33)
        Me.lblNDSerie.Name = "lblNDSerie"
        Me.lblNDSerie.Size = New System.Drawing.Size(59, 13)
        Me.lblNDSerie.TabIndex = 2
        Me.lblNDSerie.Text = "N° de série"
        '
        'lblBloco
        '
        Me.lblBloco.AutoSize = True
        Me.lblBloco.Location = New System.Drawing.Point(12, 59)
        Me.lblBloco.Name = "lblBloco"
        Me.lblBloco.Size = New System.Drawing.Size(34, 13)
        Me.lblBloco.TabIndex = 3
        Me.lblBloco.Text = "Bloco"
        '
        'lblSala
        '
        Me.lblSala.AutoSize = True
        Me.lblSala.Location = New System.Drawing.Point(12, 86)
        Me.lblSala.Name = "lblSala"
        Me.lblSala.Size = New System.Drawing.Size(28, 13)
        Me.lblSala.TabIndex = 4
        Me.lblSala.Text = "Sala"
        '
        'MenuStrip1
        '
        Me.MenuStrip1.Items.AddRange(New System.Windows.Forms.ToolStripItem() {Me.CadastroToolStripMenuItem, Me.SairToolStripMenuItem})
        Me.MenuStrip1.Location = New System.Drawing.Point(0, 0)
        Me.MenuStrip1.Name = "MenuStrip1"
        Me.MenuStrip1.Size = New System.Drawing.Size(800, 24)
        Me.MenuStrip1.TabIndex = 5
        Me.MenuStrip1.Text = "MenuStrip1"
        '
        'CadastroToolStripMenuItem
        '
        Me.CadastroToolStripMenuItem.Name = "CadastroToolStripMenuItem"
        Me.CadastroToolStripMenuItem.Size = New System.Drawing.Size(66, 20)
        Me.CadastroToolStripMenuItem.Text = "Cadastro"
        '
        'SairToolStripMenuItem
        '
        Me.SairToolStripMenuItem.Name = "SairToolStripMenuItem"
        Me.SairToolStripMenuItem.Size = New System.Drawing.Size(38, 20)
        Me.SairToolStripMenuItem.Text = "Sair"
        '
        'txtNDSerie
        '
        Me.txtNDSerie.Location = New System.Drawing.Point(78, 30)
        Me.txtNDSerie.Name = "txtNDSerie"
        Me.txtNDSerie.Size = New System.Drawing.Size(100, 20)
        Me.txtNDSerie.TabIndex = 6
        '
        'txtBloco
        '
        Me.txtBloco.Location = New System.Drawing.Point(78, 56)
        Me.txtBloco.Name = "txtBloco"
        Me.txtBloco.Size = New System.Drawing.Size(100, 20)
        Me.txtBloco.TabIndex = 7
        '
        'txtSala
        '
        Me.txtSala.Location = New System.Drawing.Point(78, 83)
        Me.txtSala.Name = "txtSala"
        Me.txtSala.Size = New System.Drawing.Size(100, 20)
        Me.txtSala.TabIndex = 8
        '
        'ndSerie
        '
        Me.ndSerie.HeaderText = "N° de série"
        Me.ndSerie.Name = "ndSerie"
        '
        'dgvBloco
        '
        Me.dgvBloco.HeaderText = "Bloco"
        Me.dgvBloco.Name = "dgvBloco"
        '
        'dtvSala
        '
        Me.dtvSala.HeaderText = "Sala(s)"
        Me.dtvSala.Name = "dtvSala"
        '
        'dgvDias
        '
        Me.dgvDias.HeaderText = "Dias Ligado"
        Me.dgvDias.Name = "dgvDias"
        '
        'dgvTempo
        '
        Me.dgvTempo.HeaderText = "Tempo Ligado"
        Me.dgvTempo.Name = "dgvTempo"
        '
        'dgvPotencia
        '
        Me.dgvPotencia.HeaderText = "Potência do Aparelho"
        Me.dgvPotencia.Name = "dgvPotencia"
        '
        'txtDias
        '
        Me.txtDias.Location = New System.Drawing.Point(78, 109)
        Me.txtDias.Name = "txtDias"
        Me.txtDias.Size = New System.Drawing.Size(100, 20)
        Me.txtDias.TabIndex = 10
        '
        'lblDias
        '
        Me.lblDias.AutoSize = True
        Me.lblDias.Location = New System.Drawing.Point(12, 112)
        Me.lblDias.Name = "lblDias"
        Me.lblDias.Size = New System.Drawing.Size(28, 13)
        Me.lblDias.TabIndex = 9
        Me.lblDias.Text = "Dias"
        '
        'frmConsulta
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.ClientSize = New System.Drawing.Size(800, 450)
        Me.Controls.Add(Me.txtDias)
        Me.Controls.Add(Me.lblDias)
        Me.Controls.Add(Me.txtSala)
        Me.Controls.Add(Me.txtBloco)
        Me.Controls.Add(Me.txtNDSerie)
        Me.Controls.Add(Me.lblSala)
        Me.Controls.Add(Me.lblBloco)
        Me.Controls.Add(Me.lblNDSerie)
        Me.Controls.Add(Me.btnConsulta)
        Me.Controls.Add(Me.dgvSpec)
        Me.Controls.Add(Me.MenuStrip1)
        Me.Icon = CType(resources.GetObject("$this.Icon"), System.Drawing.Icon)
        Me.MainMenuStrip = Me.MenuStrip1
        Me.Name = "frmConsulta"
        Me.Text = "Tela de Consulta dos Aparelhos"
        CType(Me.dgvSpec, System.ComponentModel.ISupportInitialize).EndInit()
        Me.MenuStrip1.ResumeLayout(False)
        Me.MenuStrip1.PerformLayout()
        Me.ResumeLayout(False)
        Me.PerformLayout()

    End Sub

    Friend WithEvents dgvSpec As DataGridView
    Friend WithEvents ndSerie As DataGridViewTextBoxColumn
    Friend WithEvents dgvBloco As DataGridViewTextBoxColumn
    Friend WithEvents dtvSala As DataGridViewTextBoxColumn
    Friend WithEvents dgvDias As DataGridViewTextBoxColumn
    Friend WithEvents dgvTempo As DataGridViewTextBoxColumn
    Friend WithEvents dgvPotencia As DataGridViewTextBoxColumn
    Friend WithEvents btnConsulta As Button
    Friend WithEvents lblNDSerie As Label
    Friend WithEvents lblBloco As Label
    Friend WithEvents lblSala As Label
    Friend WithEvents MenuStrip1 As MenuStrip
    Friend WithEvents CadastroToolStripMenuItem As ToolStripMenuItem
    Friend WithEvents SairToolStripMenuItem As ToolStripMenuItem
    Friend WithEvents txtNDSerie As TextBox
    Friend WithEvents txtBloco As TextBox
    Friend WithEvents txtSala As TextBox
    Friend WithEvents txtDias As TextBox
    Friend WithEvents lblDias As Label
End Class
