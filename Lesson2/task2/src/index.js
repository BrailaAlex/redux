import "./index.scss";
import store, { increment, decrement, reset } from "./store";

const resultElem = document.querySelector(".counter__result");
const decrementBtn = document.querySelector('[data-action = "decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const resettBtn = document.querySelector('[data-action="reset"]');

const onIncrement = () => {
  store.dispatch(increment());
};

const onDecrement = () => {
  store.dispatch(decrement());
};

const onReset = () => {
  store.dispatch(reset());
};

decrementBtn.addEventListener("click", onDecrement);
incrementBtn.addEventListener("click", onIncrement);
resettBtn.addEventListener("click", onReset);

store.subscribe(() => {
  const { history } = store.getState();
  const currentValue = history.reduce((acc, el) => acc + +el, 0);
  const historyString = history.join(" ");
  resultElem.innerHTML =
    history.length === 0 ? "" : `${historyString} = ${currentValue}`;
});
