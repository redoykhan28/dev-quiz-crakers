import React from 'react';
import { useLoaderData } from 'react-router-dom';
import image from '../../images/chart.jpg'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Footer from '../Footer/Footer';



const Statistics = () => {
    const bars = useLoaderData().data;
    // console.log(bar)

    return (
        <div>
            <div className="row gx-3">
                <div className="col-lg-6 my-5">
                    <img className='img-fluid' src={image} alt="" />
                </div>
                <div className="col-lg-6 my-4">
                    <h3 className='text-center my-5'>Statistics</h3>
                    <div className='text-center'>
                        <ResponsiveContainer width="100%" height={400}>
                            <BarChart
                                width={500}
                                height={400}
                                data={bars}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="total" fill="#FE7A6E" />
                            </BarChart>
                        </ResponsiveContainer>
                        <small className='text-muted'>-BarCharts for total number of exam</small>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Statistics;