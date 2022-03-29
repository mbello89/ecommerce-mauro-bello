import React from 'react'
import { Card, Row, Col, Icon, CardTitle } from 'react-materialize'

const ItemCategories = () => {
  return (
    <Row>
        <h1>Productos</h1>
        <Col
            m={6}
            s={12}
        >
            <Card
            actions={[
                <a key="1" href="#">More</a>
            ]}
            closeIcon={<Icon>close</Icon>}
            header={<CardTitle image="https://picsum.photos/200">Producto 1</CardTitle>}
            revealIcon={<Icon>more_vert</Icon>}
            >
            Here should be the description.
            </Card>
        </Col>
        <Col
            m={6}
            s={12}
        >
            <Card
            actions={[
                <a key="1" href="#">More</a>
            ]}
            closeIcon={<Icon>close</Icon>}
            header={<CardTitle image="https://picsum.photos/201">Producto 2</CardTitle>}
            revealIcon={<Icon>more_vert</Icon>}
            >
            Here should be the description.
            </Card>
        </Col>
    </Row>
  )
}

export default ItemCategories