    var Employees = [
        {
            Name: 'Agnish',
            Age: 27,
            Salary:"15L",
            City:"Bangalore",
            State:"Karnataka",
            Pin:"560034",
        },
    {
        Name: 'Shashank',
        Age: 28,
        Salary:"20L",
        City:"Pune",
        State:"Maharashtra",
        Pin:"400034",
    },
        {
            Name: 'Jayant',
            Age: 31,
            Salary:"30L",
            City:"Bangalore",
            State:"Karnataka",
            Pin:"560095",
        },
        {
            Name: 'Praveen',
            Age: 34,
            Salary:"10L",
            City:"Kolkata",
            State:"West Bengal",
            Pin:"700012",
        },
        {
            Name: 'Ankesh',
            Age: 28,
            Salary:"23L",
            City:"Bangalore",
            State:"Karnataka",
            Pin:"560011",
        }

    ];

    for(var i=0;i<Employees.length;i++)
    {
        console.log("---------Details of Employee # "+(i+1)+"----------")
        console.log("Employee Name " + Employees[i].Name);
        console.log("Employee Name " + Employees[i].Age);
        console.log("Employee Name " + Employees[i].Salary);
        console.log("Employee Name " + Employees[i].City);
        console.log("Employee Name " + Employees[i].State);
        console.log("Employee Name " + Employees[i].Pin);

    }