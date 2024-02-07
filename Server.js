import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import stripePackage from 'stripe';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

// Configure your Stripe secret key here
const stripeSecretKey = 'pk_test_51NfGAZF8l2z6vNNM4pkhdsFUanTwqSZiwCp1bqkbALf5eLJrQiFR0ngM4fbOf5g0KxMA8lARVoEyJ3Az8vDWPufC00OimsJE5E';
const stripeInstance = new stripePackage(stripeSecretKey);

// Serve static files
app.use(express.static(resolve(__dirname, 'public')));

const YOUR_DOMAIN = 'http://localhost:5173';

app.post('/create-checkout-session', async (req, res) => {
  try {
    const session = await stripeInstance.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          // Provide the Price ID of the product you want to sell
          price: '{{price_1NfGSaF8l2z6vNNMh5VYyXdL}}', // Replace this with the actual Price ID
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${YOUR_DOMAIN}?success=true`,
      cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    });

    res.redirect(303, session.url);
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
});

app.listen(4242, () => console.log('Running on port 4242'));
