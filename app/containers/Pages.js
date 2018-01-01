import { connect } from 'react-redux';
import Pages from '../components/Pages';
import { changePage } from '../actions/action';

const mapStateToProps = store => ({
  page: store.page,
  gifLength: store.gifLength,
});

const mapDispatchToProps = dispatch => ({
  changePage: (currPage) => {
    dispatch(changePage(currPage));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(Pages);
