import "./styles.css";
const { createContext, useContext, useReducer } = React;

// グローバルステイトの初期値を引数として取り、state用のcontextを生成
const stateContext = createContext(initialState);

// dispatch関数を利用できるようにする
export const useDispatch = () => {
  return useContext(dispatchContext);
};

const globalAction = useDispatch();

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
