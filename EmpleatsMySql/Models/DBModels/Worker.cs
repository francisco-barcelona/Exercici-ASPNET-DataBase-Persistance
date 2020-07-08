using System;
using System.Collections.Generic;

namespace EmpleatsMySql.Models.DBModels
{
    public partial class Worker
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Job { get; set; }
        public float Salary { get; set; }
    }
}
