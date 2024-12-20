export const baseUrl = "https://styler.develogs.com/api";
export async function getHomeSlider() {
  const res = await fetch(`${baseUrl}/slider`);
  const data = await res.json();
  return data.slider.slides;
}
export async function getHomeBrands() {
  const res = await fetch(`${baseUrl}/products/brands`);
  const data = await res.json();
  return data.brands;
}

export async function getHomeSpecialProduct() {
  const res = await fetch(`${baseUrl}/products/special-products`);
  const data = await res.json();
  return data.products;
}


export async function getHomeFeatureProduct() {
  const res = await fetch(`${baseUrl}/products/featured-products`);
  const data = await res.json();
  return data.products;
}

export async function getProductDetails(slug) {
  const res = await fetch(`${baseUrl}/products/details/${slug}`);
  const data = await res.json();
  return data.products;
}
