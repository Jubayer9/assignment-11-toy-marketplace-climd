import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './TabCard.css'
const TabCard = ({ category }) => {
    const { Category1, Category2, Category3, img1, img2, img3, img4, img5, img6, name1, name2, price1, price2, rating1, rating5, rating2, rating3, rating4 } = category;
    return (
        <div>

            <Tabs>
                <TabList>
                    <Tab style={{ marginLeft: "45%" }}>{Category1}</Tab>
                    <Tab>{Category2}</Tab>
                    <Tab>{Category3}</Tab>
                </TabList>
                <TabPanel style={{ marginLeft: "25%" }}>
                    <div className='flex'>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img className='IMG' src={img1} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{name1}</h2>
                                <div>
                                    <p>Price: ${price1}</p>

                                </div>
                                <div className="card-actions justify-end">
                                    <div>
                                        <span>
                                            <p>{rating1}</p>
                                        </span>
                                    </div>
                                    <button className="btn btn-primary">View Details </button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img className='IMG' src={img2} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{name2}</h2>
                                <div>
                                    <p>Price: ${price2}</p>

                                </div>
                                <div className="card-actions justify-end">
                                    <div>
                                        <span>
                                            <p>{rating2}</p>
                                        </span>
                                    </div>
                                    <button className="btn btn-primary">View Details </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel style={{ marginLeft: "25%" }}>
                    <div className='flex'>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img className='IMG' src={img3} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{name1}</h2>
                                <div>
                                    <p>Price: ${price1}</p>

                                </div>
                                <div className="card-actions justify-end">
                                    <div>
                                        <span>
                                            <p>{rating3}</p>
                                        </span>
                                    </div>
                                    <button className="btn btn-primary">View Details </button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img className='IMG' src={img4} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{name2}</h2>
                                <div>
                                    <p>Price: ${price2}</p>

                                </div>
                                <div className="card-actions justify-end">
                                    <div>
                                        <span>
                                            <p>{rating4}</p>
                                        </span>
                                    </div>
                                    <button className="btn btn-primary">View Details </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel style={{ marginLeft: "25%" }}>
                    <div className='flex'>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img className='IMG' src={img5} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{name1}</h2>
                                <div>
                                    <p>Price: ${price1}</p>

                                </div>
                                <div className="card-actions justify-end">
                                    <div>
                                        <span>
                                            <p>{rating5}</p>
                                        </span>
                                    </div>
                                    <button className="btn btn-primary">View Details </button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img className='IMG' src={img6} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{name2}</h2>
                                <div>
                                    <p>Price: ${price2}</p>

                                </div>
                                <div className="card-actions justify-end">
                                    <div>
                                        <span>
                                            <p>{rating3}</p>
                                        </span>
                                    </div>
                                    <button className="btn btn-primary">View Details </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TabCard;



