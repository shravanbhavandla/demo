const employees = [
    {
        id: 1,
        name: 'Shravan',
        company: '',
        salary: 50000,
        address: {
            city: 'Hyderabad',
            area: 'Gajularamaram'
        }
    },
    {
        id: 2,
        name: 'Kumar',
        company: 'Wipro',
        salary: 60000,
        address: {
            city: 'Delhi',
            area: 'Devender nagar'
        }
    },
    {
        id: 3,
        name: 'Bhavandla',
        company: 'Amazon',
        salary: 60000,
        address: {
            city: 'Jujarat',
            area: 'Narsimha Basthi'
        }
    },
    {
        id: 4,
        name: 'Kumar',
        company: 'Wipro',
        salary: 60000,
        address: {
            city: 'Hyderabad',
            area: 'RNR Nagar'
        }
    },
    
];

function addRowsToTable(employees) {
    const tableBody = document.getElementById('employeeTable').getElementsByTagName('tbody')[0];
    
    employees.forEach(employee => {
        const row = document.createElement('tr');
        
        const idCell = document.createElement('td');
        idCell.textContent = employee.id;
        row.appendChild(idCell);
        
        const nameCell = document.createElement('td');
        nameCell.textContent = employee.name;
        row.appendChild(nameCell);
        
        const companyCell = document.createElement('td');
        companyCell.textContent = employee.company;
        row.appendChild(companyCell);
        
        const salaryCell = document.createElement('td');
        salaryCell.textContent = employee.salary;
        row.appendChild(salaryCell);
        
        const cityCell = document.createElement('td');
        cityCell.textContent = employee.address.city;
        row.appendChild(cityCell);
        
        const areaCell = document.createElement('td');
        areaCell.textContent = employee.address.area;
        row.appendChild(areaCell);
        
        tableBody.appendChild(row);
    });
}
addRowsToTable(employees);
