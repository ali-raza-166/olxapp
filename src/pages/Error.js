import MainNavigation from "../components/MainNavigation/MainNavigation";
import Footer from "../components/Footer/Footer";
const ErrorPage = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>This is the error page</h1>
        <p>Could not find this Page</p>
      </main>
      <Footer />
    </>
  );
};

export default ErrorPage;
/*react-router-dom automatically generates an error when a person visits a URL that does not exist. Be it any nested
child component or wherever the control is. The error will bubble up and the errorElement in the root route props
renders a component of our choosing like Error component in this case */
