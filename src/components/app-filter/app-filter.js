import './app-filter.css';


const AppFilter = ({filter, onFilterSearch}) => {
    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'byIncrease', label: 'На повышение'},
        {name: 'bySalary', label: 'З/П больше 1000$'},
    ]
    const buttons = buttonsData.map(({name, label}) => {
        return <button 
                    className={"btn " + (filter === name ? "btn-light" : "btn-outline-light")}
                    key={name}
                    type="button"
                    onClick={() => onFilterSearch(name)}>
                    {label}
                </button>
    })
    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;