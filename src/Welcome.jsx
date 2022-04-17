const Welcome = ({setCheckIn}) => {
    return (
        <>
            <div>Welcome</div>
            <button onClick={()=>setCheckIn(false)}>Proceed</button>
        </>
    )
}

export default Welcome;