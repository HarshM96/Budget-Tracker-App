let total = 0;
let incomeTotal = 0;
let expenseTotal = 0;
let entries = {};  // Store data by month/year

document.getElementById('addBtn').addEventListener('click', function() {
    const type = document.getElementById('type').value;
    const description = document.getElementById('description').value;
    const value = parseFloat(document.getElementById('value').value);
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;

    if (description && !isNaN(value)) {
        const entry = { type, description, value };

        const dateKey = `${month}-${year}`;

        if (!entries[dateKey]) {
            entries[dateKey] = { income: [], expense: [] };
        }

        if (type === 'income') {
            entries[dateKey].income.push(entry);
            addIncome(description, value);
        } else if (type === 'expense') {
            entries[dateKey].expense.push(entry);
            addExpense(description, value);
        }

        updateBudget();
    }
});

function addIncome(description, value) {
    const incomeList = document.getElementById('incomeList');
    const li = document.createElement('li');
    li.textContent = `${description}: + ${value.toFixed(2)}`;
    incomeList.appendChild(li);
    incomeTotal += value;
}

function addExpense(description, value) {
    const expenseList = document.getElementById('expenseList');
    const li = document.createElement('li');
    li.textContent = `${description}: - ${value.toFixed(2)}`;
    expenseList.appendChild(li);
    expenseTotal += value;
}

function updateBudget() {
    total = incomeTotal - expenseTotal;
    document.getElementById('total').textContent = total.toFixed(2);
    document.getElementById('income').textContent = `+ ${incomeTotal.toFixed(2)}`;
    document.getElementById('expenses').textContent = `- ${expenseTotal.toFixed(2)}`;
}

document.getElementById('downloadData').addEventListener('click', function() {
    const csvContent = convertToCSV(entries);
    downloadCSV(csvContent, 'budget_data.csv');
});

function convertToCSV(objArray) {
    const rows = [];
    for (const dateKey in objArray) {
        const { income, expense } = objArray[dateKey];
        income.forEach(entry => rows.push([dateKey, entry.type, entry.description, entry.value].join(',')));
        expense.forEach(entry => rows.push([dateKey, entry.type, entry.description, entry.value].join(',')));
    }
    return "Date,Type,Description,Value\n" + rows.join("\n");
}

function downloadCSV(csvContent, filename) {
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

document.getElementById('signOut').addEventListener('click', () => {
    sessionStorage.removeItem('authenticated'); // Clear session info
    window.location.href = '/'; // Redirect to login page
  });

  // Protect Dashboard
  if (!sessionStorage.getItem('authenticated')) {
    window.location.href = '/'; // Redirect if not logged in
  }
// document.addEventListener('DOMContentLoaded', async () => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       alert('Please log in first!');
//       window.location.href = '/login.html'; // Redirect to login if not logged in
//       return;
//     }
  
//     // Fetch budget data
//     const response = await fetch('/api/budget', {
//       headers: {
//         Authorization: token, // Include token in request
//       },
//     });
  
//     if (response.ok) {
//       const data = await response.json();
//       document.getElementById('budget-data').innerText = JSON.stringify(data);
//     } else {
//       alert('Failed to fetch budget data');
//     }
//   });
  
//   // Logout functionality
//   document.getElementById('logout').addEventListener('click', () => {
//     localStorage.removeItem('token'); // Remove token
//     window.location.href = '/login.html'; // Redirect to login
//   });
  