function CounterList(props) {
    let color = 'black'
if ( props.children %2===0){
    color='red'
}
    return (
<li style={{color}}>{props.children}</li>
    )
}
export default CounterList;