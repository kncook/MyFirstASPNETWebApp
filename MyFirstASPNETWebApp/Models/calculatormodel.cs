using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;

namespace MyFirstASPNETWebApp.Models
{
    public class calculatormodel
    {
        [Key]
        public int Id { get; set; } //builds getters and setters for us so we do not waste our time

        //[Required(ErrorMessage = "Please enter Percentage Score in range 1-100")]
        //[StringLength(100)][MaxLength(25)]
        //makes it so input is 0-100 and if not will send an alert
        [Range(0, 100)]
        public int Projects { get; set; }

        [Range(0, 100)]
        public int Assignments { get; set; }

        [Range(0, 100)]
        public int Quizzes { get; set; }

        [Range(0, 100)]
        public int MidExam { get; set; }

        [Range(0, 100)]
        public int FinExam { get; set; }

        [Range(0, 100)]
        public int Intex { get; set; }
    }
}
