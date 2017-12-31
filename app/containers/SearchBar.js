import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar';
import { fetchGifsRequest, changeSearchValue } from '../actions/action';

const mapStateToProps = store => ({
  searchTerm: store.searchTerm,
});

const mapDispatchToProps = dispatch => ({
  fetchGifsRequest: (searchTerm) => {
    dispatch(fetchGifsRequest(searchTerm));
  },
  changeSearchValue: (searchTerm) => {
    dispatch(changeSearchValue(searchTerm));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
