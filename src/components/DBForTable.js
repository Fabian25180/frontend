const DBForTable = ({ DbForTable }) => {
    return (
        <div className='DB'>
            <h3>{DbForTable.text} {DbForTable.state}</h3>
        </div>
    )
}

export default DBForTable