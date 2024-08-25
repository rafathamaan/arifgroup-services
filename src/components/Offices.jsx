import clsx from "clsx";

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        "text-sm not-italic hover:text-blue-500s ",
        invert ? "text-neutral-300" : "text-neutral-600"
      )}
    >
      <strong className={invert ? "text-white" : "text-neutral-950"}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  );
}

const Offices = ({ invert = false, ...props }) => {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Arif Fabrication Works" invert={invert}>
          Near Khammam X road
          <br />
          Nh-65, Suryapet, 508213
          <br />
          Telangana, India
        </Office>
      </li>
      <li>
        <Office name="Call" invert={invert}>
          +91 9394098658
          
        </Office>
      </li>
     
     
    </ul>
  );
};

export default Offices;
