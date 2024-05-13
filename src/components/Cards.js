import { Link } from "react-router-dom";

const Cards = () => {
    return (
        <>
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-12">
                            <div className="card">
                                <img src="https://images.pexels.com/photos/18717344/pexels-photo-18717344/free-photo-of-the-treasury-behind-canyon-in-petra.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Homepage</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link className='stretched-link' to="../">Explore the Homepage</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="card">
                                <img src="https://images.pexels.com/photos/23279639/pexels-photo-23279639/free-photo-of-a-solar-eclipse-is-seen-in-the-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">About us</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link className='stretched-link' to="../about">Know more about us</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="card">
                                <img src="https://images.pexels.com/photos/22669930/pexels-photo-22669930/free-photo-of-a-building-with-windows-and-balconies-in-the-city.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Contact us</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link className='stretched-link' to="../contact">Contact us now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Cards;