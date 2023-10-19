// stripe.js
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51NzIaCSJIpB3aTBWfN9k4xuje2t2Lr2ZRcNXSum1IaRBJA7JBA2AtSytok1zIQfrDDJIDyEQEn6nFRnKCUKp0HxE00r3yv2Wzl'); // Use your actual key here

export default stripePromise;
