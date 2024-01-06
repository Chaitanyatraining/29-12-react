const FuncComp = (props) => {
    const {courseName, duration} = props
    console.log(props)
    return(
        <div>
            <h2>this is Functional Component</h2>
            <h3>courseName: {courseName} and duration is {duration}</h3>
        </div>
    )
}

export default FuncComp