import axios, { AxiosError } from "axios";

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

export async function getProducts(type, slug) {
  const res = await fetch(`${baseUrl}/products/${type}/${slug}`);
  const data = await res.json();
  return data.products.data;
}

export async function getCategories() {
  const res = await fetch(`${baseUrl}/products/categories`);
  const data = await res.json();
  return data.categories;
}


export async function register(name, email, password) {
  try {
    const res = await axios.post(`${baseUrl}/auth/register`, {
      name: name,
      email: email,
      password: password,
    });

    // إذا تم التسجيل بنجاح، إعادة البيانات
    return {
      status: true,
      message: res.data.message, // استخدم الرسالة من الاستجابة
      data: res.data,
    };
  } catch (err) {

    if (err.response) {

      return {
        status: false,
        message: err.response.data.message || "Unprocessable Entity: Invalid data.",
        data: err.response.data,
      };
    }

    return {
      status: false,
      message: "Network error: Unable to reach the server.",
      data: null,
    };
  }
}

