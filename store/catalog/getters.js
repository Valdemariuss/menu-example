export default {
  getCategoryByUrl: state => url => {
    return state.categories.find( cat => cat.url === url );
  },
}
