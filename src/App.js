import './styles/App.css'
const style = {
  color: 'red',
  fontSize: '50px'
}
function App() {

  return (
    <div className="App">
      {/* inline style control */}
      <span style={style}> This is span</span>
      {/* using className to control */}
      <span className='foo'> This is class foo</span>
    </div>
  );
}
export default App;
