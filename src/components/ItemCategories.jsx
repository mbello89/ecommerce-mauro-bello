import { ProductionQuantityLimitsSharp } from '@mui/icons-material'
import React from 'react'
import { Card, Row, Col, Icon, CardTitle } from 'react-materialize'
import { Link } from 'react-router-dom'

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
                <Link to={`/category/remeras`}>
                    See More
                </Link>
            ]}
            closeIcon={<Icon>close</Icon>}
            header={<CardTitle image="https://picsum.photos/200">Remeras</CardTitle>}
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
                <Link to={`/category/buzos`}>
                    See More
                </Link>
            ]}
            closeIcon={<Icon>close</Icon>}
            header={<CardTitle image="https://picsum.photos/201">Buzos</CardTitle>}
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
                <Link to={`/category/pantalones`}>
                    See More
                </Link>
            ]}
            closeIcon={<Icon>close</Icon>}
            header={<CardTitle image="https://picsum.photos/201">Pantalones</CardTitle>}
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
            header={<CardTitle image="https://picsum.photos/201">Proximamente</CardTitle>}
            revealIcon={<Icon>more_vert</Icon>}
            >
            Here should be the description.
            </Card>
        </Col>
    </Row>
  )
}

export default ItemCategories