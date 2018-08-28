import dva from 'dva';
import './index.css';

// 1. Initialize
// const app = dva();
// import createLoading from "dva-loading";

// 1. Initialize
const app = dva({
  initialState: {
    job: [{ name: '1', content: 'fuck' }],
    user: { login: false },
  },
});

// app.use(createLoading());

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/job').default);
app.model(require('./models/user').default);
app.model(require('./models/topic').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
