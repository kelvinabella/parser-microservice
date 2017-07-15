exports.index = function(req, res){

  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
  const language = req.headers["accept-language"].split(",")[0]
  const agent = require('useragent').parse(req.headers['user-agent'])
  console.log(agent)
  res.json({ipaddress:ip, language:language, software:agent.toString()})
}
