// const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');
const jwt = require('express-jwt');
// Middleware function to validate JWT token
const authenticateToken = jwt.expressjwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://dev-147umiv5h85hvjw1.us.auth0.com/.well-known/jwks.json` // Replace with your Auth0 domain
  }),
  secret: '9lnYsGPhT9UC2-vNOvce63Lagw3uEf_jeMFEcyVFESjdfJyO4eJgH0UdzEHkB6K4', 
  algorithms: ['RS256']
});

// Middleware function to extract user ID from JWT token
const getUserIdFromToken = (req, res, next) => {
  if (!req.user) return res.sendStatus(401);
  req.userId = req.user.sub; // Assuming 'sub' contains the user ID
  next();
};

module.exports = { authenticateToken, getUserIdFromToken };
