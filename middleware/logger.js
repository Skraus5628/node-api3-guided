//  let's re-create the morgan middleware
// why return an HOF?
module.exports = (format) =>{
    return (req, res, next) =>{
        // we canuse someCustomParameters inhere



    // const ip = req.ip
    // const method = req.method 
    // const url = req.url 
    const { ip, method, url } = req
    const agent = req.get("User-Agent")

    // we canuse parameters defined by our HOF to change the functionality
    // of our middleware
    if (format === "short"){
        console.log(`${method} ${url}`)
    } else {
        console.log(`${ip} ${method} ${url} ${agent}`)
    }
    
    // this middleware is done, onto the next part
    next() 
    }
}