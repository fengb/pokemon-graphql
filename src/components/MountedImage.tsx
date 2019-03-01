import React from "react";

type Props = JSX.IntrinsicElements["img"];
export default function MountedImage({ src, ...props }: Props) {
  const [show, setShow] = React.useState(false);
  const ref = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    if (!show && ref.current) {
      setShow(true);
    }
  }, [ref.current]);

  return <img ref={ref} {...props} src={show ? src : undefined} />;
}
