function Message() {
    const name = 'Oscary';
    if(name)
        return <h1>Hello {name}!</h1>;
    return <h1>Hello People!</h1>
}

export default Message;