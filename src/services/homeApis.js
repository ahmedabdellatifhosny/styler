export const baseUrl = "https://styler.develogs.com/api";
export default async function getHomeSlider() {
  const res = await fetch(`${baseUrl}/slider`);
  const data = await res.json();
  return data.slider.slides;
}
// export  async function getHomeBrands() {
//     const res = await fetch(`${baseUrl}/brands`);
//     const data = await res.json();
//     return data.slider.slides;
//   }
  