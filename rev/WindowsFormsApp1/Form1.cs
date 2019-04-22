using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Data.SqlClient;

namespace WindowsFormsApp1
{
    public partial class Form1 : Form
    {


        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            LoadData();
        }

        private void LoadData()
        {
            label1.Text = "hotdog";
            var testString = "";
            try
            {
                Conn.testCon();
                Conn.sql = "SELECT * FROM tbl_user";
                Conn.cmd = new SqlCommand(Conn.sql, Conn.con);

                using (Conn.da = new SqlDataAdapter(Conn.cmd))
                {
                    Conn.dt = new DataTable();
                    Conn.da.Fill(Conn.dt);
                    dataGridView1.DataSource = Conn.dt;
                    

                    foreach(var xdt in Conn.dt.AsEnumerable())
                    {
                        testString += xdt["fldFirstName"].ToString();
                    }

                }

                label1.Text = testString;

            }
            catch (Exception ex)
            {

            }
        }

        private void button1_Click(object sender, EventArgs e)
        {
            string conn = "user id = root; password = '';Trusted_Connection=yes;server=localhost;database=testdb";
            SqlConnection con = new SqlConnection(conn);
            con.Open();

            string InsertStr = "INSERT INTO tbl_user (fldFirstName, fldLastName, fldMiddleName) VALUES ('" + textBox1.Text + "', '" + textBox2.Text + "', '" + textBox3.Text + "')";
            SqlCommand cmd = new SqlCommand(InsertStr, con);
            cmd.ExecuteNonQuery();
            LoadData();

        }
    }
}
