import Button from "./Button"


const Header = ({title, changeStatus, currentStatus}) => {



  return (
    <header className="header">
        <h1>{title}</h1>
        <Button text={currentStatus? "close": "open"} color="green" onclick={()=> changeStatus()}/>
    </header>
  )
}

Header.defaultProps = {
    title: "Task Tracker",
}




export default Header