import clsx from "clsx";

const Content = props => {
  // 親コンポーネントからPropsを受け取る
  const { id, title, description, className } = props;
  return (
    <section id={id} className={clsx(className)}>
      {/* Propsのプロパティを参照*/}
      <h2>
        {title}
        <br />
        <span>{description}</span>
      </h2>
    </section>
  );
};

export default Content;
