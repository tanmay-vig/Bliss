import './Products.css'
import { Card , CardGroup } from 'react-bootstrap'
import Seo from '../assets/seo.jpg'
export default function Products() {
  return (
    <>
    <h1 className='products'>Our Products</h1>
    <hr/>
      <CardGroup >
        <Card  className='m-5'>
          <Card.Img src={Seo} variant='top'/>
            
          
          <Card.Body>
          <Card.Title>Desktops</Card.Title>
          <Card.Text>Starting from 10000</Card.Text>
          </Card.Body>
        </Card>
        <Card className='m-5'>
          <Card.Img src={Seo} variant='top'/>
          
          
          <Card.Body>
          <Card.Title>Laptops</Card.Title>
          <Card.Text>Starting from 15000</Card.Text>
          </Card.Body>
        </Card>
        <Card className='m-5'>
          <Card.Img src={Seo} variant='top' />
          <Card.Body>
          <Card.Title>Servers on Rent</Card.Title>
          <Card.Text>Starting from 20000</Card.Text>
          </Card.Body>
        </Card>
        <Card className='m-5'>
          <Card.Img src={Seo} variant='top'/>
            
          <Card.Body>
          <Card.Title>Marketing</Card.Title>
          <Card.Text>Starting from 25000</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      {/* 2nd Group */}
      <CardGroup>
        <Card className='m-5'>
          <Card.Img src={Seo} variant='top'/>
          <Card.Body>
          <Card.Title>Design Package</Card.Title>
          <Card.Text>Starting from 20000</Card.Text>
          </Card.Body>
        </Card>
        <Card className='m-5'>
          <Card.Img src={Seo} variant='top'/>
          <Card.Body>
          <Card.Title>Seo</Card.Title>
          <Card.Text>Starting from 20000</Card.Text>
          </Card.Body>
        </Card>
        <Card className='m-5'>
          <Card.Img src={Seo} variant='top'/>
          <Card.Body>
          <Card.Title>Mobile Sets</Card.Title>
          <Card.Text>Starting from 20000</Card.Text>
          </Card.Body>
        </Card>
        <Card className='m-5'>
          <Card.Img src={Seo} variant='top'/>
          <Card.Body>
          <Card.Title>Wifi Routers</Card.Title>
          <Card.Text>Starting from 20000</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  )
}
