const express = require('express');
const app = express();

// Example array of objects representing cars
let cars = [
  { id: 1, make: 'Toyota', model: 'Camry', year: 2020 },
  { id: 2, make: 'Honda', model: 'Civic', year: 2019 },
  { id: 3, make: 'Ford', model: 'Mustang', year: 2021 },
  { id: 4, make: 'Chevrolet', model: 'Impala', year: 2018 },
  { id: 5, make: 'BMW', model: 'X5', year: 2022 },
  { id: 6, make: 'Mercedes-Benz', model: 'C-Class', year: 2021 },
  { id: 7, make: 'Audi', model: 'A4', year: 2019 },
  { id: 8, make: 'Lexus', model: 'RX', year: 2020 },
  { id: 9, make: 'Volkswagen', model: 'Golf', year: 2017 },
  { id: 10, make: 'Hyundai', model: 'Sonata', year: 2021 },
  { id: 11, make: 'Nissan', model: 'Altima', year: 2019 },
  { id: 12, make: 'Tesla', model: 'Model S', year: 2022 },
  { id: 13, make: 'Mazda', model: 'CX-5', year: 2020 },
  { id: 14, make: 'Subaru', model: 'Forester', year: 2021 },
  { id: 15, make: 'Jeep', model: 'Wrangler', year: 2020 },
  { id: 16, make: 'Kia', model: 'Optima', year: 2019 },
  { id: 17, make: 'Volvo', model: 'XC90', year: 2022 },
  { id: 18, make: 'Chevrolet', model: 'Equinox', year: 2018 },
  { id: 19, make: 'Honda', model: 'Accord', year: 2021 },
  { id: 20, make: 'Ford', model: 'Explorer', year: 2020 },
  { id: 21, make: 'Toyota', model: 'RAV4', year: 2019 },
  { id: 22, make: 'BMW', model: '3 Series', year: 2022 },
  { id: 23, make: 'Mercedes-Benz', model: 'E-Class', year: 2021 },
  { id: 24, make: 'Audi', model: 'Q5', year: 2018 },
  { id: 25, make: 'Lexus', model: 'ES', year: 2020 }

];

// GET /cars - Get all cars
app.get('/cars', (req, res) => {
  res.json(cars);
});

// GET /cars/:id - Get car by ID
app.get('/cars/:id', (req, res) => {
  const carId = Number(req.params.id);
  const car = cars.find(car => car.id === carId);
  if (car) {
    res.json(car);
  } else {
    res.status(404).json({ error: 'Car not found' });
  }
});

// POST /cars - Create a new car
app.post('/cars', (req, res) => {
  const newCar = req.body;
  // Assuming the request body contains the new car object
  cars.push(newCar);
  res.status(201).json(newCar);
});
cars.push(
  { id: 26, make: 'Ford', model: 'F-150', year: 2021 },
  { id: 27, make: 'Chevrolet', model: 'Silverado', year: 2022 },
  { id: 28, make: 'Volkswagen', model: 'Tiguan', year: 2020 },
  { id: 29, make: 'Tesla', model: 'Model 3', year: 2023 },
  { id: 30, make: 'Mercedes-Benz', model: 'GLC', year: 2022 },
);

// PUT /cars/:id - Update a car by ID
app.put('/cars/:id', (req, res) => {
  const carId = Number(req.params.id);
  const updatedCar = req.body;
  // Assuming the request body contains the updated car object
  const index = cars.findIndex(car => car.id === carId);
  if (index !== -1) {
    cars[index] = updatedCar;
    res.json(updatedCar);
  } else {
    res.status(404).json({ error: 'Car not found' });
  }
});

// Find the index of the car with ID 27
const index27 = cars.findIndex(car => car.id === 27);
if (index27 !== -1) {
  // Create a new car object with updated values
  const updatedCar27 = { id: 27, make: 'Toyota', model: 'Corolla', year: 2022 };
  // Replace the car object at index27 with the updated car object
  cars[index27] = updatedCar27;
}

// Find the index of the car with ID 28
const index28 = cars.findIndex(car => car.id === 28);
if (index28 !== -1) {
  // Create a new car object with updated values
  const updatedCar28 = { id: 28, make: 'Honda', model: 'CR-V', year: 2023 };
  // Replace the car object at index28 with the updated car object
  cars[index28] = updatedCar28;
}

// DELETE /cars/:id - Delete a car by ID
app.delete('/cars/:id', (req, res) => {
  const carId = Number(req.params.id);
  const index = cars.findIndex(car => car.id === carId);
  if (index !== -1) {
    const deletedCar = cars.splice(index, 1)[0];
    res.json(deletedCar);
  } else {
    res.status(404).json({ error: 'Car not found' });
  }
});

const axios = require('axios');

axios.delete('http://localhost:3000/cars/30')
  .then(response => {
    console.log('Car deleted:', response.data);
  })
  .catch(error => {
    console.error('Error deleting car:', error.response.data);
  });

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});