import Cards from "../components/Cards";

const About = () => {
  return (
    <>
      <section className="bg-success">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="lead text-center text-light display-4 py-5 my-5">About Us</h1>
            </div>
          </div>
        </div>
      </section>
      <Cards />
    </>
  );
};

export default About;