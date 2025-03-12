const asyncHandeler = (requestHandeler) => {
   return (req, res, next) => {
        Promise.resolve(requestHandeler(req, res, next)).catch((err) => next());
        
    }
}

export {asyncHandeler}

//There is a anather option on the bottom to make asyncHandeler
/*
const asyncHandeler = (func) => async (req, res, next) => {
    try {
        await func(req, res, next)
    } catch (error) {
        res.status(err.code || 500 ).json({
            success : false,
            massege : err.massege
        })
    }
} 
    */