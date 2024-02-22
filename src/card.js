import "./card.css";

export default function Card(props) {
  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            {props.data.title}
          </h5>
          <h6 className="card-price text-center">
            {props.data.currency}
            {props.data.rate}
            <span className="period">/{props.data.period}</span>
          </h6>
          <hr />
          <ul className="fa-ul">
            {props.data.plans.map((plan) => {
              return (
                <li className={plan.isAvailable ? "" : "text-muted"}>
                  <span className="fa-li">
                    <i
                      className={
                        plan.isAvailable ? "fas fa-check" : "fas fa-times"
                      }
                    ></i>
                  </span>
                  {plan.name}
                </li>
              );
            })}

            {/* <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              5GB Storage
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              Unlimited Public Projects
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              Community Access
            </li>
            <li className="text-muted">
              <span className="fa-li">
                <i className="fas fa-times"></i>
              </span>
              Unlimited Private Projects
            </li>
            <li className="text-muted">
              <span className="fa-li">
                <i className="fas fa-times"></i>
              </span>
              Dedicated Phone Support
            </li>
            <li className="text-muted">
              <span className="fa-li">
                <i className="fas fa-times"></i>
              </span>
              Free Subdomain
            </li>
            <li className="text-muted">
              <span className="fa-li">
                <i className="fas fa-times"></i>
              </span>
              Monthly Status Reports
            </li> */}
          </ul>
          <div className="d-grid">
            <button
              className="btn btn-primary"
              type="submit"
              onClick={() => {
                props.handleButtonClick();
              }}
            >
              Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
