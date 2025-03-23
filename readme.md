# Custom Node.js Web Framework

This is a minimal web framework built using Node.js `http` module, inspired by Express.js. It allows handling `GET` and `POST` requests with a simple API.

## Features
- Lightweight and minimal
- Supports `GET` and `POST` requests
- Simple route handling
- Custom response methods (`send`, `json`)

## Installation
Clone the repository and navigate into the project directory:
```sh
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO
```

## Usage

### 1. Import the framework
```js
const createServer = require('./cohort');
const app = createServer();
```

### 2. Define routes
```js
app.get('/', function(req, res) {
    console.log('Handling GET request');
    res.send('Welcome to the root directory');
});

app.get('/home', function(req, res) {
    console.log('Handling GET request');
    res.send('You are on the homepage');
});

app.post('/submit', function(req, res) {
    console.log('Handling POST request');
    res.json({ message: 'Form submitted successfully' });
});
```

### 3. Start the server
```js
const port = 8000;
app.listen(port, function() {
    console.log(`Server listening on port ${port}`);
});
```

## Testing
### Using cURL
#### GET Request
```sh
curl -X GET http://localhost:8000/
```
#### POST Request
```sh
curl -X POST http://localhost:8000/submit
```

## Project Structure
```
YOUR_REPO/
├── cohort.js  # Framework core
├── index.js   # Example usage
├── README.md  # Documentation
```

## License
This project is open-source and available under the MIT License.

