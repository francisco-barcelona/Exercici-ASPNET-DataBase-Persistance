        function AllEmployees(){
            var urlWorker = 'https://localhost:44391/api/Workers/'
            $.getJSON(urlWorker, function(data) {
                $.each(data, function() {
                    $(".mypanel").append($("<h5>").text(this.id + ' ' + this.name + ' ' + this.surname + ' ' +  this.job + ' ' +  this.salary));
                });
            });
        }
        
        function EmployerId() {
            var parametro = document.getElementById("valor").value;
            var urlWorker = 'https://localhost:44391/api/Workers/' + parametro;
            $.getJSON(urlWorker, function(data) {
        
            var text = `Name: ${data.name}<br>
                    Surname: ${data.surname}<br>
                    Job: ${data.job}<br>
                    Salary: ${data.salary}`
                    
        
            $(".mypanel2").html(text);
            });
        }

        function EmployerAdd() {

            var employee = {
                "Name":document.getElementById("name").value,
                "Surname":document.getElementById("surname").value,
                "Job":document.getElementById("job").value,
                "Salary":parseFloat(document.getElementById("salary").value)
            }

            $.ajax({
                type: 'post',
                url: 'https://localhost:44391/api/Workers/',
                data: JSON.stringify(employee),
                contentType: 'application/json',
                dataType: 'json'
            });
        }

        function EmployerMod() {

            var parametro = parseInt(document.getElementById("id_mod").value);

            var employee = {
                "Id":parseInt(document.getElementById("id_mod").value),
                "Name":document.getElementById("name_mod").value,
                "Surname":document.getElementById("surname_mod").value,
                "Job":document.getElementById("job_mod").value,
                "Salary":parseFloat(document.getElementById("salary_mod").value)
            }

            var urlWorker = 'https://localhost:44391/api/Workers/' + parametro;

            $.ajax({
                type: 'put',
                url: urlWorker,
                data: JSON.stringify(employee),
                contentType: 'application/json',
                dataType: 'json'
            });
        }

        function EmployerDel(){

            var parametro = parseInt(document.getElementById("id_del").value);

            var urlWorker = 'https://localhost:44391/api/Workers/' + parametro;

            $.ajax({
                type: 'delete',
                url: urlWorker,
                contentType: 'application/json',
                dataType: 'json'
            });

        }
    
