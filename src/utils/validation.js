 const checkValidData = (email, password) =>{

    const isEmailValid = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if(!isEmailValid){
        return "Invalid email format";
    }
    if(!isPasswordValid){
        return "Invalid password format";
    }

    return null;
};

export default checkValidData;