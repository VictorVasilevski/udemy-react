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
        this.state = {
            employeesData: fetchUserData(),
            term: '',
            filter: 'all'
        }
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

    searchEmployee = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter(item => item.name.indexOf(term) > -1)
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterEmployees(filter) {
        switch (filter) {
            case "all":
            default:
                return this.state.employeesData;
            case "byIncrease":
                return this.state.employeesData.filter(data => data.increase);
            case "bySalary":
                return this.state.employeesData.filter(data => data.salary >= 1000);
        }
    }
    onFilterSearch = (filter) => {
        this.setState({filter})
    }

    render() {
        const {employeesData, term, filter} = this.state;
        const increaseNum = this.state.employeesData.filter(item => item.increase).length;
        const filteredData = this.filterEmployees(filter);
        const visibleData = this.searchEmployee(filteredData, term);
        return (
            <div className="app">
                <AppInfo 
                    totalNum={employeesData.length}
                    increaseNum={increaseNum}/>

                <div className="search-panel">
                    <SearchPanel 
                        onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter
                        filter={filter}
                        onFilterSearch={this.onFilterSearch} />
                </div>

                <EmployeesList 
                    data={visibleData}
                    onDelete={this.deleteEmployee}
                    onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm 
                    onAdd={this.addEmployee}/>
            </div>
        )
    }
}

export default App;