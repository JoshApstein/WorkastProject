import { connect } from 'react-redux';
import App from '../components/App';
import { fetchGifsRequest } from '../actions/action';

const mapDispatchToProps = dispatch => ({
  fetchGifsRequest: (searchTerm) => {
    dispatch(fetchGifsRequest(searchTerm));
  },
});


export default connect(null, mapDispatchToProps)(App);
