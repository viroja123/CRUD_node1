const passport = require('../src/passport');
const authRoutes = require('../routes/auth_routes');
const postRoutes = require('../routes/Post_routes');

app.use(express.json());
app.use('/api', authRoutes);
app.use('/api', postRoutes);


app.use(passport.initialize());
app.use(passport.authenticate('jwt', { session: false }));
