import "../styles/tailwind.css";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className="h-screen text-center text-gray-100 bg-green-400">
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;