import { connect } from 'react-redux';
import GifsOrNot from '../components/GifsOrNot';

export default connect(state => ({
  hasSearched: state.hasSearched,
  currentGifs: state.currentGifs,
}))(GifsOrNot);
