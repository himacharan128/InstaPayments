### InstaPayments Checkout Experience

This repository contains the codebase for building a user-friendly and visually engaging checkout experience for InstaPayments, developed using Next.js. The project includes the final three steps of the checkout flow: Checkout, Payment Options, and Order Confirmation.

### Folder Structure
```bash
InstaPayments/
│
├── components/
│   ├── CheckoutSummary.js
│   ├── PaymentOptions.js
│   └── OrderConfirmation.js
│
├── pages/
│   ├── index.js
│   ├── checkout.js
│   ├── payment.js
│   └── confirmation.js
│
├── api/
│   ├── orderDetails.js
│   └── merchantMetadata.js
│
├── utils/
│   ├── cache.js
│   ├── validation.js
│   └── theme.js
│
├── store/
│   └── index.js
│
└── styles/
    ├── globals.css
    ├── theme-light.css
    └── theme-dark.css
```

### Components

- **CheckoutSummary.js**: Renders the summary of the order including delivery details, product list, and order summary.
- **PaymentOptions.js**: Displays payment methods for users to choose from and make payment.
- **OrderConfirmation.js**: Shows order details, selected payment method, and transaction status.

### Pages

- **index.js**: Landing page displaying the welcome message and a button to start the checkout process.
- **checkout.js**: Checkout page where users can review their order before proceeding to payment.
- **payment.js**: Payment options page allowing users to choose their preferred payment method.
- **confirmation.js**: Order confirmation page displaying the order details, selected payment method, and transaction status.

### APIs

- **orderDetails.js**: Fetches randomized cart data and payment methods.
- **merchantMetadata.js**: Fetches brand metadata including name, logo, and theme colors.

### Additional Features

- **Cache.js**: Implements local API caching as necessary.
- **Validation.js**: Provides form validation utilities for input validation.
- **Theme.js**: Manages theme switching between light and dark mode.

### How to Install and Run

1. Clone the repository:

```bash
git clone https://github.com/himacharan128/InstaPayments
```
2. Navigate to the project directory:
```bash
cd InstaPayments
```
3. Install dependencies with npm:
```bash
npm install
```
4. Run the development server:
```bash
npm run dev
```
5. Access the application on your browser at:
```bash
http://localhost:3000
```

### Design Choices and Challenges

- **Design**: The design focuses on simplicity and ease of use, adhering to modern UI/UX principles.
- **Challenges**: Handling asynchronous data fetching, implementing responsive design, and integrating dynamic theming were some of the challenges faced during implementation.

Feel free to explore the codebase and provide any feedback or suggestions. Thank you for reviewing!