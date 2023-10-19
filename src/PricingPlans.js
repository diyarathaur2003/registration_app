// // PricingPlans.js
// import React from 'react';
// import { Link } from 'react-router-dom'; // If using React Router for navigation
// import stripePromise from './stripe'; // Import the Stripe configuration

// const PricingPlans = () => {
//   const handlePremiumPlanClick = async () => {
//     const stripe = await stripePromise;
//     // Redirect the user to the Stripe Checkout page for the premium plan
//     const { error } = await stripe.redirectToCheckout({`1
//       items: [{ plan: 'YOUR_STRIPE_PLAN_ID', quantity: 1 }],
//     });

//     if (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h1>Pricing Plans</h1>
//       <div>
//         <h2>Free Plan</h2>
//         <p>Basic features</p>
//         <Link to="/payment">Upgrade to Premium</Link> {/* Use proper navigation */}
//       </div>
//       <div>
//         <h2>Premium Plan</h2>
//         <p>Customization features and more</p>
//         <button onClick={handlePremiumPlanClick}>Upgrade</button>
//       </div>
//     </div>
//   );
// };

// export default PricingPlans;
