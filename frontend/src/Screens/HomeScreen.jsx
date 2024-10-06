import { Row, Col } from "react-bootstrap";

import { Product } from "../components/Product";
import { useGetProductsQuery } from "../slices/productApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";

const HomeScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error.error || error?.data?.message}
        </Message>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            {products.map((product) => {
              return (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              );
            })}
          </Row>
        </>
      )}
    </div>
  );
};

export default HomeScreen;
