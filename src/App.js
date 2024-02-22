import { useState } from "react";
import Card from "./card";

export default function App() {
  let priceData = [
    {
      title: "free",
      currency: "$",
      rate: "0",
      period: "month",
      plans: [
        {
          name: "Single User",
          isAvailable: true,
        },
        {
          name: "5GB Storage",
          isAvailable: true,
        },
        {
          name: "Unlimited Public Projects",
          isAvailable: true,
        },
        {
          name: "Community Access",
          isAvailable: true,
        },
        {
          name: "Unlimited Private Projects",
          isAvailable: false,
        },
        {
          name: "Dedicated Phone Support",
          isAvailable: false,
        },
        {
          name: "Free Subdomain",
          isAvailable: false,
        },
        {
          name: "Monthly Status Reports",
          isAvailable: false,
        },
      ],
    },
    {
      title: "PLUS",
      currency: "$",
      rate: "9",
      period: "month",
      plans: [
        {
          name: "5 Users",
          isAvailable: true,
        },
        {
          name: "50GB Storage",
          isAvailable: true,
        },
        {
          name: "Unlimited Public Projects",
          isAvailable: true,
        },
        {
          name: "Community Access",
          isAvailable: true,
        },
        {
          name: "Unlimited Private Projects",
          isAvailable: true,
        },
        {
          name: "Dedicated Phone Support",
          isAvailable: true,
        },
        {
          name: "Free Subdomain",
          isAvailable: true,
        },
        {
          name: "Monthly Status Reports",
          isAvailable: false,
        },
      ],
    },
    {
      title: "PRO",
      currency: "$",
      rate: "49",
      period: "month",
      plans: [
        {
          name: "Unlimited Users",
          isAvailable: true,
        },
        {
          name: "150GB Storage",
          isAvailable: true,
        },
        {
          name: "Unlimited Public Projects",
          isAvailable: true,
        },
        {
          name: "Community Access",
          isAvailable: true,
        },
        {
          name: "Unlimited Private Projects",
          isAvailable: true,
        },
        {
          name: "Dedicated Phone Support",
          isAvailable: true,
        },
        {
          name: "Unlimited Free Subdomains",
          isAvailable: true,
        },
        {
          name: "Monthly Status Reports",
          isAvailable: true,
        },
      ],
    },
  ];
  let buttonClicked = () => {
    setTime(time + 1);
  };

  //Hooks:
  let [time, setTime] = useState(0);

  return (
    <>
      <h3>Button clicked {time} times</h3>
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {priceData.map((obj) => {
              return <Card data={obj} handleButtonClick={buttonClicked}></Card>;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
