const Button = (props) => {
  //  Write your code here.
  const { buttonName, className } = props;
  return <button class={className}>{buttonName}</button>;
};

const element = (
  //  Write your code here.
  <div class="bg-container">
    <h1 class="heading">Social Buttons</h1>
    <div class="buttons-container">
      <Button buttonName="like" className="like-button" />
      <Button buttonName="Comment" className="comment-button" />
      <Button buttonName="Share" className="share-button" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
