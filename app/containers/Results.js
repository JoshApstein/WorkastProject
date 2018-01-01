import { connect } from 'react-redux';
import Results from '../components/Results';

const mapStateToProps = state => ({
  currentGifs: state.currentGifs,
});

export default connect(mapStateToProps)(Results);
