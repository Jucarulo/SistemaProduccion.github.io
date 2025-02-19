const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
    host: '127.0.0.1:3306',
    user: 'root', // Replace with your MySQL username
    password: 'sistemaconfeccion123', // Replace with your MySQL password
    database: 'project_systemproduction' // Replace with your database name
});

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

// Function to create a new user
function createUser(nombre, email, password, area) {
    const query = 'INSERT INTO Users (nombre, email, password, area) VALUES (?, ?, ?, ?)';
    connection.query(query, [nombre, email, password, area], (err, results) => {
        if (err) {
            console.error('Error creating user:', err);
            return;
        }
        console.log('User created with ID:', results.insertId);
    });
}

// Function to add production entry
function addProductionEntry(fecha_hora, nombre_usuario, unidades, observaciones) {
    const query = 'INSERT INTO Production (fecha_hora, nombre_usuario, unidades, observaciones) VALUES (?, ?, ?, ?)';
    connection.query(query, [fecha_hora, nombre_usuario, unidades, observaciones], (err, results) => {
        if (err) {
            console.error('Error adding production entry:', err);
            return;
        }
        console.log('Production entry added with ID:', results.insertId);
    });
}

// Function to delete a user
function deleteUser(id) {
    const query = 'DELETE FROM Users WHERE id = ?';
    connection.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error deleting user:', err);
            return;
        }
        console.log('User deleted with ID:', id);
    });
}

// Function to edit a user
function editUser(id, nombre, email, area) {
    const query = 'UPDATE Users SET nombre = ?, email = ?, area = ? WHERE id = ?';
    connection.query(query, [nombre, email, area, id], (err, results) => {
        if (err) {
            console.error('Error editing user:', err);
            return;
        }
        console.log('User updated with ID:', id);
    });
}

// Export the functions for use in other files
module.exports = {
    createUser,
    addProductionEntry,
    deleteUser,
    editUser
};
