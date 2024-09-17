import {
  reactExtension,
  Link,
  useInstructions,
  useCartLines,
  useApi,
  useTranslate
} from "@shopify/ui-extensions-react/checkout";

// 1. Choose an extension target
export default reactExtension("purchase.checkout.block.render", () => (
  <Extension />
));

function Extension() {

  const instructions = useInstructions();
  const cartLines = useCartLines();
  const translate = useTranslate();
  const {shop} = useApi();

  const cart = cartLines.map((line) => {
      return `${line.merchandise.id.split("/").pop()}:${line.quantity}`
  });

  
  var cartLink = `${shop.storefrontUrl}/cart/`
  for (var i=0;i<cart.length;i++) {
    cartLink = cartLink+`${cart[i]}`
    cartLink += (i<cart.length-1) ? "," : "?storefront=true";
  }


  // 2. Identify if draft order, then render the cart permalink
  if (!instructions.lines.canUpdateCartLine && cart.length > 0) {
    return (
      <Link to={cartLink}>
     {translate('edit_cart')}
    </Link>
    );
  }

  // For normal Checkout, return null, as this is not applicable there.
  return (
    null
  );

 
}