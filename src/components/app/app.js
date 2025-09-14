import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function fetchUserData() {
    // Stub
    const data = [
        {
            name: "John C.",
            salary: 800,
            increase: true,
            isLiked: true,
        },
        {
            name: "Alex M.",
            salary: 3000,
            increase: false,
            isLiked: false,
        },
        {
            name: "Carl W.",
            salary: 5000,
            increase: false,
            isLiked: false,
        },
    ];
    for (let item of data) {
        item.id = uuidv4();
    }
    return data;
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {employeesData: fetchUserData()}
    }

    deleteEmployee = id => {
        this.setState(({employeesData}) => {
            return {employeesData: employeesData.filter(item => item.id !== id)}
        })
    }

    addEmployee = (name, salary) => {
        this.setState(({employeesData}) => {
            const newUserData = {name, salary, increase: false, id: uuidv4()};
            return {employeesData: [...employeesData, newUserData]}
        })
    }

    onToggleProp = (id, propName) => {
        this.setState(({employeesData}) => ({
            employeesData: employeesData.map((item => {
                return (item.id === id) ? {...item, [propName]: !item[propName]} : item;
            }))
        }))
    }

    render() {
        const increaseNum = this.state.employeesData.filter(item => item.increase).length;
        return (
            <div className="app">
                <AppInfo 
                    totalNum={this.state.employeesData.length}
                    increaseNum={increaseNum}/>

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployeesList 
                    data={this.state.employeesData}
                    onDelete={this.deleteEmployee}
                    onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm 
                    onAdd={this.addEmployee}/>
            </div>
        )
    }
}

export default App;