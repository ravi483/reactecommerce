// import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { Container, Row, Col, Card } from "react-bootstrap";

// const Dashboard = () => {
// //   const dispatch = useDispatch();
//   const { cartList } = useSelector((state) => state.cart);
//   const totalPrice = cartList.reduce(
//     (price, item) => price + item.qty * item.price,
//     0
//   );

//   // Simulating a data fetch for dashboard stats (e.g., users, orders, revenue)
//   const stats = {
//     totalProducts: cartList.length,
//     totalRevenue: totalPrice,
//     totalOrders: cartList.reduce((count, item) => count + item.qty, 0),
//   };

//   useEffect(() => {
//     window.scrollTo(0, 0);
//     // Fetch dashboard data if needed
//     // Example: dispatch(fetchDashboardData());
//   }, []);

//   return (
//     <Container className="dashboard">
//       <h1 className="text-center my-4">Dashboard</h1>
//       <Row className="mb-4">
//         {/* Cards for Summary Stats */}
//         <Col md={4}>
//           <Card className="text-center">
//             <Card.Body>
//               <Card.Title>Total Products</Card.Title>
//               <Card.Text>{stats.totalProducts}</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={4}>
//           <Card className="text-center">
//             <Card.Body>
//               <Card.Title>Total Revenue</Card.Title>
//               <Card.Text>${stats.totalRevenue}.00</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={4}>
//           <Card className="text-center">
//             <Card.Body>
//               <Card.Title>Total Orders</Card.Title>
//               <Card.Text>{stats.totalOrders}</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//       {/* Product List */}
//       <Row>
//         <Col>
//           <h3 className="mb-3">Products Overview</h3>
//           {cartList.length === 0 ? (
//             <p>No products available</p>
//           ) : (
//             <div className="product-list">
//               {cartList.map((item) => (
//                 <Card key={item.id} className="mb-3">
//                   <Row>
//                     <Col md={3}>
//                       <Card.Img src={item.imgUrl} alt={item.productName} />
//                     </Col>
//                     <Col md={9}>
//                       <Card.Body>
//                         <Card.Title>{item.productName}</Card.Title>
//                         <Card.Text>Price: ${item.price}.00</Card.Text>
//                         <Card.Text>Quantity: {item.qty}</Card.Text>
//                         <Card.Text>Total: ${item.qty * item.price}.00</Card.Text>
//                       </Card.Body>
//                     </Col>
//                   </Row>
//                 </Card>
//               ))}
//             </div>
//           )}
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Dashboard;

const Dashboard = () => {
  return <h2>Dashboard</h2>;
};

export default Dashboard;

