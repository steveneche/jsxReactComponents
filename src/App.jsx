// Import Bootstrap CSS for styling
import 'bootstrap/dist/css/bootstrap.min.css';
// Import custom CSS styles
import './App.css'
// Import Bootstrap components for UI
import { Button, Card } from 'react-bootstrap';
// Import custom components for product display
import Name from './components/Name';
import Description from './components/Description';
import Price from './components/Price';
import Image from './components/Image';
// Import product data
import product from './product';

function App() {
  // Prompt user to enter their first name
  let firstname = prompt("Enter your first name")
  
  return (
    <>
    {/* Product card component using Bootstrap Card */}
    <Card style={{ width: '18rem' }}>
      {/* Product image component */}
      <Image/>
      <Card.Body>
        {/* Product name as card title */}
        <Card.Title><Name/></Card.Title>
        <Card.Text>
          {/* Product description */}
          <Description/>
        </Card.Text>
        {/* Product price component */}
        <Price/>
      </Card.Body>
    </Card>
    
    {/* Greeting message - shows firstname or "there" if no name provided */}
    <h1>Hello {firstname || "there"}</h1>

    {/* Conditionally render product image only if user provided a name */}
    {firstname && <img src={product.imgUrl}/>}
    </>
  )
}

export default App
