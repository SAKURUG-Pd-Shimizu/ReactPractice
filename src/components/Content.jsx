const Content = props => {
  // 親コンポーネントからPropsを受け取る
  return (
    <section id={props.id} className={props.className}>
      {/* Propsのプロパティを参照*/}
      <h2>
        {props.title}
        <br />
        <span>{props.description}</span>
      </h2>
    </section>
  );
};

export default Content;
