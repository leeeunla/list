import "./s1.css";

export function S1() {
  return (
    <>
      <BigBox1>Hello world</BigBox1>
      <BigBox2>
        <div className="b1">
          <img src="https://picsum.photos/id/35/300/200" />
        </div>
        <div className="b2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis
          iaculis felis. Nulla nec lectus id arcu tristique fermentum.
          Pellentesque pretium quam vitae nisl lobortis lacinia. Aliquam aliquam
          ligula et arcu ullamcorper imperdiet.
        </div>
      </BigBox2>
      <BigBox3>
        <div className="smallbox1">
          <div>
            <img src="https://picsum.photos/id/17/300/200" />
          </div>
          <p>
            Fusce vitae commodo est, vel faucibus sem. Nullam rutrum viverra
            justo, eget bibendum ligula tincidunt at.
          </p>
        </div>
        <div className="smallbox2">
          <div>
            <img src="https://picsum.photos/id/18/300/200" />
          </div>
          <p>
            Vivamus auctor eleifend venenatis. Aenean vulputate, nisi nec
            hendrerit pellentesque, ante magna fermentum sapien, a mattis tortor
            dui vel urna.
          </p>
        </div>
        <div className="smallbox3">
          <div>
            <img src="https://picsum.photos/id/25/300/200" />
          </div>
          <p>Ut nec neque nec ligula porttitor malesuada.</p>
        </div>
      </BigBox3>
    </>
  );
}
