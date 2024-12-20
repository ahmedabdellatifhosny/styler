import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/styles.css";
import ScrollToTop from "../components/scroll/ScrollToTop";



export const metadata = {
  title: "Styler Store Egypt",
  description: "Styler Store Egypt",
  // icons: {
  //   icon: {
  //     url: "/favicon.ico",
  //     type: "image/x-icon",
  //   },
  // }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
