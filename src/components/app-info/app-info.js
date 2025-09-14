import './app-info.css';

function AppInfo({totalNum, increaseNum}) {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании</h1>
            <h2>Общее число сотрудников: {totalNum}</h2>
            <h2>Премию получат: {increaseNum}</h2>
        </div>
    )
}

export default AppInfo;