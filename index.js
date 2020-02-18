const express = require("express")
const morgan = require("morgan")
const helmet = require("helmet")
const logger = require("./middleware/logger");
const welcomeRouter = require("./welcome/welcome-router")
const hubsRouter = require("./hubs/hubs-router")

const server = express()
const port = 4000

// server.use(morgan('short'))
server.use(logger("short"))
server.use(helmet())
server.use(express.json())
// these are not sub-routers, that get attached to the main application.
// helps us keep our endpoints organized in many different files.
server.use("/", welcomeRouter)
server.use("/api/hubs", hubsRouter)


// Custom 404 middleware here
// if no route defined it's global middleware 
server.use((req, res) =>{
	res.status(404).json({
		message: "Route was not found",
	})
})

server.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)
})