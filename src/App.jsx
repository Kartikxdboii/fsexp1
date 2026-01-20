import { Provider } from 'react-redux';
import { store } from './store';
import { AuthProvider, useAuth } from './AuthContext';
import Login from './Login';
import ProductList from './ProductList';
import Cart from './Cart';
import './App.css';

function AppContent() {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Login />;
  }

  return (
    <div>
      <Login />
      <ProductList />
      <Cart />
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Provider>
  );
}

export default App;
