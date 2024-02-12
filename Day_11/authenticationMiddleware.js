const jwt = require('jsonwebtoken')

function authenticationMiddleware(req, res, next){
    const token = req.headers.authorization

    if (!token){
        return res.status(401).json({error: 'Unauthorized - Token not provided'});
    }

    try {
        const decoded = jwt.verify(token, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJc3N1ZXIgKGlzcykiOiJJc3N1ZXIiLCJJc3N1ZWQgQXQgKGlhdCkiOiIyMDI0LTAyLTEyVDA0OjU5OjM3Ljk3M1oiLCJFeHBpcmF0aW9uIFRpbWUgKGV4cCkiOiIyMDI0LTAyLTEyVDA1OjU5OjM3Ljk3M1oiLCJTdWJqZWN0IChzdWIpIjoiU3ViamVjdCIsIlVzZXJuYW1lIChhdWQpIjoiSmF2YUd1aWRlcyIsIlJvbGUiOiJBRE1JTiJ9.rKc8YFtYt9BHxxINCjOKkLVUH_VQmlwF4HOgRLy3Kd0')

        req.user = decoded;
        next();
    }
    catch (error) {
        return res.status(401).json({error: 'Unauthorized - invalid token'})
    }
}

module.exports = authenticationMiddleware;