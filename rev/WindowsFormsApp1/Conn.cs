using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;
using System.Data;
using System.Windows.Forms;

namespace WindowsFormsApp1
{
    class Conn
    {
        public static string sql;
        public static SqlConnection con = new SqlConnection();
        public static DataSet ds;
        public static DataTable dt;
        public static SqlCommand cmd;
        public static SqlDataAdapter da;
        public static BindingSource bs;

        public static string ConnStr()
        {
            string conn = "user id = QIONPHNB-0001/Subic; password='';server=localhost;Trusted_Connection=yes;database=testdb";
            return conn;
        }

        public static void testCon()
        {
            con.Close();
            try
            {
                con.ConnectionString = ConnStr();
                con.Open();
                MessageBox.Show("Working");
            }

            catch(Exception e)
            {
                MessageBox.Show("Not Working with Error Code: " + e);
            }
            finally
            {
                MessageBox.Show(con.State.ToString());
            }

        }
    }
}
