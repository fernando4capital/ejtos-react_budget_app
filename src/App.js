import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import 
import Budget from './components/Budget';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import Location from './components/Location';


import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>

            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>

                    <h1 className='mt-3'>Budget</h1>
                        <div className='row mt-3'> 
                            <div className='col-sm'>
                                <Budget />
                            </div>
                            <div className='col-sm'>
                                    <Budget />
                            </div>
                        </div>
                        
                        <h1 className='mt-3'>Remanining</h1>
                        <div className='row mt-3'> 
                            <div className='col-sm'>
                                <Remaining />
                            </div>
                        <div className='col-sm'>
                                <Remaining />
                        </div>

                        <h1 className='mt-3'>Expenses</h1>
                        <div className='row mt-3'> 
                            <div className='col-sm'>
                                <Expenses />
                            </div>
                            <div className='col-sm'>
                                    <Expenses />
                            </div>
                        </div>
                    

                        <h1 className='mt-3'>Location</h1>
                        <div className='row mt-3'> 
                            <div className='col-sm'>
                                <Location />
                            </div>
                            <div className='col-sm'>
                                    <Location />
                            </div>
                        </div>  
                       
                        <h1 className='mt-3'>ExpenseList</h1>
                        <div className='row mt-3'> 
                            <div className='col-sm'>
                                <ExpenseList />
                            </div>
                            <div className='col-sm'>
                                    <ExpenseList />
                            </div>
                        </div>


                        <h1 className='mt-3'>ExpenseItem</h1>
                        <div className='row mt-3'> 
                            <div className='col-sm'>
                                <ExpenseItem />
                            </div>
                            <div className='col-sm'>
                                    <ExpenseItem />
                            </div>
                        </div>       

                        <h1 className='mt-3'>ExpenseItem Selected</h1>
                        <div className='row mt-3'> 
                            <div className='col-sm'>
                                <AllocationForm />
                            </div>
                            <div className='col-sm'>
                                    <AllocationForm />
                            </div>
                        </div>  

                </div>
                 </div>
            
            </div>
        </AppProvider>
    );
};
export default App;
