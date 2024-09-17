# Shopify Checkout UI Extension - Edit Cart Button

This repository demonstrates how to implement a "Edit My Cart" button in the Shopify Checkout UI using a Checkout UI Extension. This extension allows merchants to provide their customers with a direct link to edit their cart items before finalizing their purchase.

## Overview

The "Edit My Cart" button is rendered through a Shopify Checkout UI Extension using React. This extension checks if the cart can be modified (i.e., it's not a draft order), and if modifications are not allowed, it provides a link back to the cart page where items can be added or removed.

## Features

- Utilizes Shopify's Checkout UI Extensions.
- Renders a conditional "Edit My Cart" button in the Shopify checkout flow.
- Dynamically constructs a URL to the cart page based on the items in the user's cart.
- Provides translated strings in English, German and French. More can be added in the /locales/ folder.

## Prerequisites

Before you begin, ensure you have the following:
- Node.js installed on your machine.
- A Shopify Partner account and development store.
- Access to Shopify CLI.

## Setup

To set up this project:

1. Create an extension-only app
   ```bash
   shopify app init
2. Create a new extension and replace the code of the Checkout.jsx file and the locale files. 
