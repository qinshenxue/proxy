const express = require('express')

const app = express()


app.use('*',function (req,res) {
	// body...

	console.log(req.path)
	res.send({
		success:1
	})
})


app.listen(443, function() {
    console.log('proxy start')
})
