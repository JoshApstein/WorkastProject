import { connect } from 'react-redux';
import Results from '../components/Results';

export default connect(state => ({
  currentGifs: state.currentGifs,
}))(Results);
