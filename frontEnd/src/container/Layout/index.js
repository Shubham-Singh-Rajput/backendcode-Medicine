import Navbar from './../../compnent/Navbar/index';
const Layout=(props)=>{
    return(
        <>
        <Navbar/>
        {props.children}
        </>
    )
}
export default Layout