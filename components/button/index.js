import ButtonStatefull from "../ButtonStatefull";
import ButtonStaless from "../ButtonStateless";

export default function Button(props) {
  const templates = {
    btnStateless: ButtonStaless,
    btnStatefull: ButtonStatefull,
  };

  const RenderButton = templates?.[props?.type] ?? null;
  if (RenderButton) return <RenderButton {...props} />;
}
