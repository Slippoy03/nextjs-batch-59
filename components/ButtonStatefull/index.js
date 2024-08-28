export default function ButtonStatefull({ message }) {
  const onClickButton = () => {
    return message("hallo");
  };

  return <button onClick={onClickButton}>Click Here</button>;
}
